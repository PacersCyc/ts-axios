#!usr/bin/env sh
set -e
echo "Enter release version: "
read VERSION
read -p "releasing $VERSION  - are you sure(Y/N)" -n 1 -r
echo # move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "releasing version..."

  # commit
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"
  git push origin master

  #publish
  npm publish
fi
