---
title: animation
description: animation
date: "2019-11-18T10:34:07+07:00"
slug: animation
css_collections:
- animasi
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/animation
caniuse: http://caniuse.com/#feat=css-animation
---

Properti animasi CSS adalah properti singkatan untuk mengatur beberapa properti animasi di satu tempat.

Untuk membuat animasi menggunakan CSS, gunakan properti animasi bersama dengan kata kunci `@keyframes` yang memungkinkan kamu untuk menentukan efek visual pada animasi kamu.

Properti CSS `animation` merupakan cara cepat untuk menuliskan kode animasi dengan CSS.

Dengan properti ini memungkinkan kamu untuk menetapkan nilai properti berikut:

- [animation-name](/cssref/animation-name)
- [animation-duration](/cssref/animation-duration)
- [animation-timing-function](cssref/animation-timing-function)
- [animation-timing-function](/cssref/animation-timing-function)
- [animation-iteration-count](/cssref/animation-iteration-count)
- [animation-direction](/cssref/animation-direction)
- [animation-fill-mode](/cssref/animation-fill-mode)
- [animation-play-state](/cssref/animation-play-state)

Namun hanya `animation-duration` dan `animation-name` yang diperlukan.

## Syntax

```css
animation: [animation-name] [animation-duration] [animation-timing-function] [animation-delay] [animation-iteration-count] [animation-direction] [animation-fill-mode] [animation-play-state];
```

#### Javascript Syntax
```js
object.style.animation="mymove 5s infinite"
```

Singkatan properti animasi dipisahkan dengan spasi, dan urutannya tidak masalah kecuali saat menggunakan kedua nilai `animation-duration` dan `animation-delay`, urutannya harus sesuai itu.

Jadi, jika kamu menentukan dua nilai `waktu` dalam definisi animasi, yang pertama akan dianggap sebagai durasi animasi, dan yang kedua akan dianggap sebagai penundaan animasi.

Nilai apa pun yang tidak kamu tetapkan secara eksplisit akan ditetapkan ke nilai standarnya.

Itulah sebabnya kamu harus menentukan nama animasi. Jika tidak, animasi tidak akan diterapkan.

Jika kamu tidak menerapkan durasi animasi, maka akan digunakan nilai default `0s`, dan efek animasi terjadi secara instan sehingga `keyframes` tidak berpengaruh.

### Live Demo

Pada contoh berikut saya menerapkan efek "jatuh ke bawah" pada teks menggunakan properti animasi.

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku" data-slug-hash="mdyeqZK" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Contoh LIve Demo Teks Jatuh">
  <span>See the Pen <a href="https://codepen.io/codingku/pen/mdyeqZK">
  Contoh LIve Demo Teks Jatuh</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>