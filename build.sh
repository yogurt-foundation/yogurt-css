#!/bin/bash
#
# @@script: build.sh
# @@description: quick compiler for Yogurt
# @@version: 0.8.7
# @@author: Loouis Low
# @@copyright:
# @@license: MIT License
#

function compile_yogurt(){
  npm run build-clean 
  npm run build-sass 
  npm run build-autoprefix
}

function minify(){
  echo ""
  grunt --gruntfile grunt.task.css.minify.js
}

### init
compile_yogurt
minify
