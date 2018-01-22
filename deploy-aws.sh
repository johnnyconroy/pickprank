npm run build
git commit -a $1
git push
pm2 deploy ecosystem.config.js production
