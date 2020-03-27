
<p align="center">
  <img src="assets/promo.jpg" height="auto" width="auto">
</p>

<p align="center">
  <img src="https://badgen.net/github/release/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/releases/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/assets-dl/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/branches/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/forks/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/stars/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/watchers/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/tag/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/commits/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/last-commit/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/contributors/yogurt-foundation/yogurt-css">
  <img src="https://badgen.net/github/license/yogurt-foundation/yogurt-css">
</p>

# yogurt-css (1.0.0-proto)

> A colossal low-level utility CSS framework for crafting beautiful and elegant user interface at an atomic level without writing a single line of CSS.

> Work in progress

This toolkit allows me to manipulates the `font-size`, `padding`, `margin`, `line-height`, `color`, and so on, with analog or stepping utility control. I am more prefer atomized CSS selectors with added full-range of different settings for me to choose from so that I can less or even not to mess with the CSS.

### _abstract

In this concept, the `margin`, `padding`, `font-size` and so on are considered as `utility` components. Using the `prefix` naming (e.g. `border` as `border-width` in CSS property) combines with preset `value` (or `strength` value) makes perfect sense to mix among the utilities to form a complex styling with CSS. The `value` or `strength` value giving linear options changing the properties of a utility either in an analog or stepping manipulation, which gives you a `low-level` control over this framework. The `Sass` being used on this concept is acting like a compiler generating distributable asset (e.g. /dist/yogur.css). You generate a new one if any changes to the main core by using this builder.

### _build

```bash
$ git clone https://github.com/yogurt-foundation/yogurt-css.git
$ cd yogurt-css
$ yarn install
$ yarn build
```

### _usage

```html
<head>
  ...
    <link rel="stylesheet" href="dist/yogurt.css">
  ...
</head>
```

> (!!) Documentation is in progress.

---

[MIT](https://github.com/yogurt-foundation/yogurt-css/blob/master/LICENSE)
