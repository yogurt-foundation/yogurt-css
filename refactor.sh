#!/usr/bin/env bash

replace_string() {
  # --- args
  target_path=$1
  file_extension=$2
  old_string=$3
  new_string=$4
  # --- worker
  find ${target_path} \
    -not \( \
        -path './.git/*' -o \
        -path './.github/*' -o \
        -path './.c9/*' -o \
        -path './.idea/*' \
      \) \
    -depth \
    -type f \
    -name "*.${file_extension}" \
    -print \
    -execdir \
    sed -i "s/${old_string}/${new_string}/g" {} \;
}

######## init ########

init() {
  # !! do not change the order !!
  replace_string "$target" "$extension" "xs:" "(xs)"
  replace_string "$target" "$extension" "sm:" "(sm)"
  replace_string "$target" "$extension" "md:" "(md)"
  replace_string "$target" "$extension" "lg:" "(lg)"
  replace_string "$target" "$extension" "xl:" "(xl)"
  replace_string "$target" "$extension" "2k:" "(2k)"
  replace_string "$target" "$extension" "4k:" "(4k)"
  replace_string "$target" "$extension" "group-hover:" "(group-hover)"
  replace_string "$target" "$extension" "group-focus:" "(group-focus)"
  replace_string "$target" "$extension" "group " "(group) "
  replace_string "$target" "$extension" "dark:" "(dark)"
  replace_string "$target" "$extension" "hover:" "(hover)"
  replace_string "$target" "$extension" "focus:" "(focus)"
  replace_string "$target" "$extension" "active:" "(active)"
  replace_string "$target" "$extension" "visited:" "(visited)"
  replace_string "$target" "$extension" "checked:" "(checked)"
  replace_string "$target" "$extension" "disabled:" "(disabled)"
}

echo -e "\n\nHelp: $ `basename "$0"` -p <path> -e <extension>\n\n"

while getopts p:e: flag; do
  case "${flag}" in
    p) target=${OPTARG};;
    e) extension=${OPTARG};;
  esac
  init
done

