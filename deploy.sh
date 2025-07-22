#!/bin/bash
bunx --bun vite build
cd ./dist/
tar czf index.tar.gz *
cd ..

scp ./dist/index.tar.gz root@185.128.106.104:/var/www/dota4fun

ssh root@185.128.106.104 "cd /var/www/dota4fun ; rm index.html ;  rm -r assets; tar xvf index.tar.gz ; rm index.tar.gz"
