#!/bin/sh

cp -a ../trip-template/{.github,.vscode,.gitignore,.prettierignore,*config*,LICENSE,update.sh} .
cp -a ../trip-template/src/{components,layouts,pages,env.d.ts} src
rm .prettierrc.json
