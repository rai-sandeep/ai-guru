#!/bin/bash

git status

# Get the current Git repository name
repo_name=$(basename -s .git `git config --get remote.origin.url`)

# Get the current Git branch name
branch=$(git rev-parse --abbrev-ref HEAD)

echo "Please enter commit message:"
read commit_message

git add .
git commit -m "$commit_message"
git push origin $branch

# Deploy to GitHub Pages
ng deploy --base-href=/$repo_name/