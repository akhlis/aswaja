---
title: outline-color
description: outline-color
date: "2019-11-12T10:34:07+07:00"
slug: outline-color
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/outline-color
---

Properti `outline-color` digunakan untuk mengatur warna outline elemen.

_Outline_ adalah garis yang digambar di luar batas elemen untuk membuatnya menonjol di halaman web.

Biasanya digunakan untuk alasan aksesibilitas, dan dapat digunakan untuk tujuan dekorasi.

## CSS Syntax
```css
outline-color: invert | color | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.outlineColor="#FF0000"
```

{{< cssref default="invert" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="outline-color: transparent;" >}}
Menerapkan warna transparan ke garis besar. Outline masih akan mengambil ruang yang ditentukan oleh nilai `outline-width`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-transparent">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: red;" >}}
Kamu dapat menggunakan salah satu dari [140+ nama warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna __heksadesimal__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: rgb(50, 115, 220);" >}}
Kamu dapat menggunakan kode warna __rgb()__:

- nilai pertama untuk `red`
- nilai kedua untuk `green`
- nilai ketiga untuk `blue`

Masing-masing dari mereka dapat memiliki nilai antara __0__ dan __255__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-rgb50-115-220">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: rgba(50, 115, 220, 0.3);" >}}
Kamu dapat menggunakan kode warna __rgba()__:

- 3 nilai pertama untuk __rgb__
- nilai ke-4 untuk saluran `alpha` dan mendefinisikan opacity warna

Nilai `alpha` dapat berubah dari nol __0__ (transparan) menjadi satu __1__ (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-rgba50-115-220-03">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: hsl(14, 100%, 53%);" >}}
Kamu dapat menggunakan kode warna __hsl()__:

- nilai pertama untuk `hue` dan bisa dari __0__ hingga __359__
- nilai kedua untuk `saturation` dan berubah dari __0%__ menjadi __100%__
- nilai ketiga untuk `luminosity` dan berubah dari __0%__ menjadi __100%__
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-hsl14-100-53">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline-color: hsla(14, 100%, 53%, 0.6);" >}}
Kamu dapat menggunakan kode warna __hsl()a__:

- 3 nilai pertama untuk __hsl__
- nilai ke-4 untuk saluran `alpha` dan mendefinisikan opacity warna

Nilai `alpha` dapat berubah dari nol __0__ (transparan) menjadi satu __1__ (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline-color p-4" id="outline-color-hsla14-100-53-06">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .outline-color {
    outline-style: solid;
    outline-width: 4px;
  }

  #outline-color-transparent {
    outline-color: transparent;
  }

  #outline-color-red {
    outline-color: red;
  }

  #outline-color-05ffb0 {
    outline-color: #05ffb0;
  }

  #outline-color-rgb50-115-220 {
    outline-color: rgb(50, 115, 220);
  }

  #outline-color-rgba50-115-220-03 {
    outline-color: rgba(50, 115, 220, 0.3);
  }

  #outline-color-hsl14-100-53 {
    outline-color: hsl(14, 100%, 53%);
  }

  #outline-color-hsla14-100-53-06 {
    outline-color: hsla(14, 100%, 53%, 0.6);
  }
</style>