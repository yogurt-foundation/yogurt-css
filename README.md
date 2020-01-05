# yogurt (0.0.1-proto), (56kb(min))

A pico size CSS framework that provides low-level `analog` and `stepping` alike utilties.

**(!!)** changing plan, I'll be replacing `analog-alike` controls over to `stepping-alike` control, so that I don't have to remember so many numbers to for each utilities.

A pico size CSS framework for me to manipulates `font-size`, `padding`, `margin`, `line-height`, `color`, etc. with analog-alike-value that make easy for me to pair with the **Bootstrap Framework** on-the-go. I am more prefer atomized css selectors with added full-range of different settings for me to choose from, so that I can less messing with the CSS or SCSS files.

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

MIT License

Copyright (c) 2018 Loouis Low

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


