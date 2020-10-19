---
title: border-color
description: border-color
date: "2019-11-12T10:34:07+07:00"
slug: border-color
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-color
---

Properti CSS `border-color` digunakan untuk mengatur warna batas suatu elemen.

Properti ini merupakan singkatan untuk properti `border-top-color`, `border-right-color`, `border-bottom-color`, dan
`border-left-color`.

Nilai properti `border-color` dapat ditentukan menggunnakan satu, dua, tiga. atau empat komponen.

Ketika satu nilai digunakan, nilai tersebut menentukan warna border atas, kanan, bawah, dan kiri.

Jika dua nilai digunakan, nilai pertama menentukan warna border atas dan bawah dan nilai kedua menentukan warna border
kanan dan kiri.

Jika tiga nilai digunakan, yang pertama menentukan warna border atas, yang kedua menentukan warna border kanan dan kiri,
dan yang ketiga menentukan warna border bawah.

Jika empat nilai digunakan, nilai pertama, kedua, ketiga, dan keempat menentukan warna masing-masing border atas, kanan,
bawah, dan kiri.

## CSS Syntax
```css
border-color: color | transparent | initial | inherit;
```

```js
object.style.borderColor="#FF0000 blue"
```
{{< property >}}
{{< property-value default="default" value="border-color: transparent;" >}}
Menerapkan warna **transparan** ke border. Border masih akan mengambil nilai _space_yang
ditentukan oleh nilai `border-width`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-transparent">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: red;" >}}
Kamu bisa menggunakan **[140+ nama warna](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value)**.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: #05ffb0;" >}}
Kamu dapat menggunakan kode warna **heksadesimal**.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-05ffb0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: rgb(50, 115, 220);" >}}
Kamu dapat menggunakan **kode warna rgb()**:

- nilai pertama adalah untuk `red`
- nilai kedua adalah untuk `green`
- nilai ketiga adalah untuk `blue`

Masing-masing dari mereka dapat memiliki nilai antara **0** dan **255**.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-rgb50-115-220">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: rgba(50, 115, 220, 0.3);" >}}
Kamu dapat menggunakan **kode warna rgba()**:

- 3 nilai pertama adalah untuk `rgb`
- nilai ke-4 adalah untuk saluran `alpha` dan mendefinisikan opacity warna

Nilai alfa dapat berubah dari nol **0** (transparan) menjadi satu **1** (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-rgba50-115-220-03">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: hsl(14, 100%, 53%);" >}}
Kamu dapat menggunakan **kode warna hsl()**:

- nilai pertama adalah untuk `hue` dan dapat beralih dari **0** ke **359**
- nilai kedua adalah untuk `saturation` dan beralih dari **0%** ke **100%**
- nilai ketiga adalah untuk `luminosity` dan beralih dari **0%** ke **100%**
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-hsl14-100-53">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-color: hsla(14, 100%, 53%, 0.6);" >}}
Kamu dapat menggunakan **kode warna hsl()a**:

- 3 nilai pertama adalah untuk `hsl`
- nilai ke-4 adalah untuk saluran `alpha` dan mendefinisikan opacity warna
- Nilai alfa dapat berubah dari nol **0** (transparan) menjadi satu **1** (buram).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-color " id="border-color-hsla14-100-53-06">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-color {
        border-style: solid;
        border-width: 4px;
        padding: 0.5em 1em;
    }

    #border-color-transparent {
        border-color: transparent;
    }

    #border-color-red {
        border-color: red;
    }

    #border-color-05ffb0 {
        border-color: #05ffb0;
    }

    #border-color-rgb50-115-220 {
        border-color: rgb(50, 115, 220);
    }

    #border-color-rgba50-115-220-03 {
        border-color: rgba(50, 115, 220, 0.3);
    }

    #border-color-hsl14-100-53 {
        border-color: hsl(14, 100%, 53%);
    }

    #border-color-hsla14-100-53-06 {
        border-color: hsla(14, 100%, 53%, 0.6);
    }
</style>