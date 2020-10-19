---
title: color
description: color
date: "2019-11-12T10:34:07+07:00"
slug: color
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/color
caniuse: http://caniuse.com/#feat=css3-colors
---

Properti CSS `color` digunakan untuk mengatur warna teks elemen.

Warna yang diterapkan pada teks menggunakan properti `color` juga diterapkan pada dekorasi teks yang dapat diterapkan
padanya menggunakan properti `text-decoration`, seperti `underlines`, `upperlines`, `line-throughs`, dll.

Warna teks dapat ditentukan menggunakan nilai `color` apa pun, seperti semi-transparan atau bahkan sepenuhnya
transparan.

Namun, warna tidak dapat berupa gradien karena `gradient` adalah nilai dari `image`, dan bukan nilai warna.

## CSS Syntax
```css
color: color | initial | inherit;
```

#### Javascript Syntax
```js
object.style.color="#0000FF"
```

{{< property >}}
{{< property-value value="color: transparent;" >}}
Menerapkan warna transparan ke teks. Teks masih akan mengambil ruang yang seharusnya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color py-4 px-6" id="color-transparent">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: red;" >}}
Kamu dapat menggunakan [140+ nama warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color text-red-500 text-lg py-4 px-6" id="color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: #05ffb0;" >}}
Kamu bisa menggunakan kode warna __hexadecimal__
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color text-green-A400 text-lg py-4 px-6" id="color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: rgb(50, 115, 220);" >}}
Kamu bisa menggunakan kode warna __rgb():__
- nilai pertama untuk `red`
- nilai kedua untuk `green`
- nilai ketiga untuk `blue`

Masing-masing nilai antara __0__ dan __255__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color text-blue-A400 text-lg py-4 px-6" id="color-rgb50-115-220">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: rgba(0, 0, 0, 0.5);" >}}
Kamu bisa menggunakan kode warna __rgba():__
- 3 nilai pertama untuk `rgb`
- nilai ke-4 adalah untuk saluran `alpha` dan mendefinisikan opacity warna

Nilai alfa dapat berubah dari nol 0 (transparan) menjadi satu 1 (blur).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color bg-green-A400 text-lg py-4 px-6" id="color-rgba0-0-0-05">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: hsl(14, 100%, 53%);" >}}
Kamu bisa menggunakan kode warna __hsl():__
- nilai pertama untuk `hue` dan dimulai dari __0__ hingga __359__
- nilai kedua untuk `saturation` dan dimulai dari __0%__ hingga __100%__
- nilai ketiga untuk `luminosity` dan dimulai dari __0%__ hingga __100%__
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color text-red-500 text-lg py-4 px-6" id="color-hsl14-100-53">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="color: hsla(14, 100%, 53%, 0.6);" >}}
Kamu bisa menggunakan kode warna __hsl()a:__
- 3 nilai pertama untuk `hsl`
- nilai ke-4 adalah untuk saluran `alpha` dan mendefinisikan opacity warna

Nilai alfa dapat berubah dari nol 0 (transparan) menjadi satu 1 (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example color text-red-500 text-lg py-4 px-6" id="color-hsla14-100-53-06">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #color-transparent {
    color: transparent;
  }

  #color-red {
    color: red;
  }

  #color-05ffb0 {
    color: #05ffb0;
  }

  #color-rgb50-115-220 {
    color: rgb(50, 115, 220);
  }

  #color-rgba0-0-0-05 {
    color: rgba(0, 0, 0, 0.5);
  }

  #color-rgba0-0-0-05 {
    background: #05ffb0;
  }

  #color-hsl14-100-53 {
    color: hsl(14, 100%, 53%);
  }

  #color-hsla14-100-53-06 {
    color: hsla(14, 100%, 53%, 0.6);
  }
</style>