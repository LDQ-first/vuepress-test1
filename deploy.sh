#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e 

# 生成静态文件
npm run build

# 显示生成的文件
ls -al ./docs/.vuepress/dist

# 进入生成的文件夹
cd ./docs/.vuepress/dist 

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME


# 添加git
git init
git add . 
git commit -m 'deploy'

# 如果发布到  https://username.github.io
# git push -f git@github.com:LDQ-first/LDQ-first.github.io.git  master


# 如果发布到 https://username.github.io/<REPO> 
git push -f git@github.com:LDQ-first/vuepress-test1.git master:gh-pages


