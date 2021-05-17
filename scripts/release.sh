#!/bin/bash
# set -e

if [[ -z $1 ]]; then
  echo -e "\033[33mEnter new version: \033[0m"
  read -r VERSION
else
  VERSION=$1
fi

echo -e -n "\033[33mReleasing $VERSION - are you sure? (y/n) \033[0m"
read -n 1 -r answer
echo

if [[ $answer =~ ^[Yy]$ ]]; then
  echo -e "\033[33mReleasing $VERSION ...\033[0m"

  # lint prettier
  npm run lint:prettier
  if [[ $? != 0 ]]; then
    echo -e "\033[31mPrettier fail!\033[0m"
    exit 1
  fi
    echo -e "\033[32mPrettier success!\033[0m"

  # lint stylelint
  npm run lint:stylelint
  if [[ $? != 0 ]]; then
    echo -e "\033[31mStylelint fail!\033[0m"
    exit 1
  fi
    echo -e "\033[32mStylelint success!\033[0m"

  # lint eslint
  npm run lint:eslint
  if [[ $? != 0 ]]; then
    echo -e "\033[31mEslint fail!\033[0m"
    exit 1
  fi
    echo -e "\033[32mEslint success!\033[0m"

  # run test
  # npm run test

  VERSION=$VERSION 
  PREVIX="v"
  # echo "$PREVIX$VERSION"
  standard-version -r $VERSION --tag-prefix $PREVIX
  git add -A
  git commit -m "build: build $VERSION"
  git push --follow-tags origin $master
   echo -e "\033[32mRelease finished\033[0m"
fi
  exit 0