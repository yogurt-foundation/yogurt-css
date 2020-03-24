# yogurt (2.0.0-proto)

<p align="left">
  <img src="https://badgen.net/github/release/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/releases/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/assets-dl/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/branches/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/forks/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/stars/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/watchers/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/tag/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/commits/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/last-commit/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/contributors/loouislow81/yogurt-foundation">
  <img src="https://badgen.net/github/license/loouislow81/yogurt-foundation">
</p>

A colossal size CSS framework for me to manipulates `font-size`, `padding`, `margin`, `line-height`, `color`, etc. with analog and stepping alike utility control. I am more prefer atomized css selectors with added full-range of different settings for me to choose from, so that I can less or even not to messing with the CSS.

![](logo.png "yogurt")

### abstract

In this concept, the `margin`, `padding`, `font-size` and so on are considered as `utility` components. Using the `first initial letter prefixing` (e.g. `b` as `border`) combines with preset `value` (or `strength` value) makes perfect sense to mix among the utilties to form a complex styling with CSS. The `value` or `strength` value giving linear options changing the properties of an utility either in an analog-alike or steppin-alike, which gives you a `low-level` control over this framework. The `Sass` being used on this concept is acting like a compiler or `generator` for generating distributable asset (e.g. /dist/yogurt.min.css), the asset is not use as library import in your project, instead you generate new one if any changes to the core with `yogurt.scss` by using `Sass` preprocessor.

### _get

```bash
$ git clone https://github.com/loouislow81/yogurt-foundation.git
$ npm i
```

### _build

```bash
$ npm run build
$ npm run dist
```

### _usage

```html
<head>
  ...
    <link rel="stylesheet" href="dist/yogurt.css">
  ...
</head>
```

### _utility

`color`, `margin`, `padding`, `font size`, `font-weight`, `letter-spacing`, `line-height`, `border`, `shadow`, `rounded`, `visibility`, `width`, `z-index`

---

### _wiki

[Go to Wiki page](https://github.com/loouislow81/yogurt-foundation/wiki)

---

Other features added such as `gpu acceleration` for images, video and text enhancements.

The *_reset.scss* module I use respectively from [normalize.css](https://necolas.github.io/normalize.css/) to make the default styling reset-ted.

That's it!

Enjoy!

---

[MIT](https://github.com/loouislow81/yogurt-foundation/blob/master/LICENSE)
