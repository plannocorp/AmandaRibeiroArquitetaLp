#!/usr/bin/env bash
# Falha se index.html ou os CSS apontarem para arquivos locais que não existem.
set -euo pipefail
status=0
refs=$( { grep -ohE '(src|href)="[^"#?]+"' index.html | sed -E 's/^(src|href)="//; s/"$//';
          grep -ohE "url\(['\"]?[^)'\"]+" css/*.css | sed -E "s/^url\(['\"]?//"; } | grep -vE '^(https?:|mailto:|tel:|data:|//|$)' | sort -u)
for r in $refs; do
  f="${r#/}"
  if [ ! -e "$f" ]; then echo "ARQUIVO AUSENTE: $r"; status=1; fi
done
# nenhuma imagem publicada pode passar de 1 MB
big=$(find images -type f \( -name '*.webp' -o -name '*.jpg' -o -name '*.jpeg' -o -name '*.png' \) ! -path 'images/Fotos/IMG_*' -size +1024k ! -name 'main-img.png' ! -path 'images/Projetos/*.png' ! -path 'images/Projetos/*.jpeg' || true)
if [ -n "$big" ]; then echo "Imagens acima de 1 MB:"; echo "$big"; status=1; fi
exit $status
