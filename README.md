# yogurt-foundation (prototype)

> An elegant and beautiful pure CSS toolkit to craft UI component faster!

I always want to have a minimalist CSS framework, less typing possible, best without the JavaScript. So I built one myself. This took months to craft from ground up completely, I glad the project has come to an end finally.

> check out another [prototype 2.x.x](https://github.com/loouislow81/yogurt-foundation/tree/2.x.x)

### _features

- written in SASS
- built-in preprocessor
- modular
- less code

### _upcoming

- FX modules
- Widget: Tooltip
- Widget modules
- Typo modules

### _todo

- concatenate (DONE)
- minify (DONE)

### _prerequisites

you need to install **NodeJS**,

```bash
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
$ sudo apt install -y nodejs
$ sudo npm i -g n
$ sudo n stable
```

### _get

```bash
$ git clone https://github.com/loouislow81/yogurt.ui.framework.git
$ cd yogurt-foundation
$ npm i
```

### _build

build version is located in `/dist/` folder, after you ran,

```bash
$ npm run build
```

### _concept

```html
<link rel="stylesheet" href="yogurt.css">
```

examples,

```html
<y class="vessel">
  <y class="chain">
    <y class="grid">One</y>
    <y class="grid">Two</y>
    <y class="grid">Three</y>
    <y class="grid">Four</y>
    <y class="grid">Five</y>
  </y>
</y>
```

```html
<vessel>
  <chain>
    <grid>One</grid>
    <grid>Two</grid>
    <grid>Three</grid>
    <grid>Four</grid>
    <grid>Five</grid>
  </chain>
</vessel>
```

```html
<y vessel="auto">
  <y chain="is-centered">
  <y grid="auto">One</y>
  <y grid="auto">Two</y>
  <y grid="auto">Three</y>
  <y grid="auto">Four</y>
  <y grid="auto">Five</y>
</y>
```

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
