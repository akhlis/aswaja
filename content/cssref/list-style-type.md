---
title: list-style-type
description: list-style-type
date: "2019-11-12T10:34:07+07:00"
slug: list-style-type
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/list-style-type
---

Properti CSS `list-style-type` digunakan untuk menentukan jenis atau penampilan dari _bullet_ (penanda) yang ditambahkan
ke item daftar dalam daftar.

Properti ini juga mendefinisikan penampilan elemen yang ditampilkan sebagai item daftar menggunakan `display:
list-item`.

Properti `list-tyle-type` menetapkan tampilan penanda daftar jika nilai `list-style-image` yang dapat digunakan untuk
menetapkan gambar sebagai penanda tidak tersedia atau jika gambar yang ditunjuknya tidak dapat ditampilkan.

Penanda daftar dapat memiliki satu dari tiga jenis: __glyphs__ (circle, disk, square), sistem penomoran, dan sistem
alfabet.

## CSS Syntax
```css
list-style-type: value;
```

#### JavaScript Syntax
```js
object.style.listStyleType="square"
```

{{< cssref default="disk" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="list-style-type: disc;" >}}
Item daftar akan menggunakan __disk__ sebagai titik poin mereka.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-type p-4" id="list-style-type-disc">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-type: circle;" >}}
Item daftar akan menggunakan __lingkaran__ sebagai titik poin mereka.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-type p-4" id="list-style-type-circle">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-type: square;" >}}
Item daftar akan menggunakan __kotak__ sebagai titik poin mereka.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-type p-4" id="list-style-type-square">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-type: decimal;" >}}
Item daftar akan menggunakan __desimal__ sebagai poinnya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-type p-4" id="list-style-type-decimal">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="list-style-type: none;" >}}
Item daftar __tidak__ memiliki poin.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example list-style-type p-4" id="list-style-type-none">
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .list-style-type ul {
    margin-left: 1em;
  }

  #list-style-type-disc {
    list-style-type: disc;
  }

  #list-style-type-disc ul {
    list-style-type: disc;
  }

  #list-style-type-circle {
    list-style-type: circle;
  }

  #list-style-type-circle ul {
    list-style-type: circle;
  }

  #list-style-type-square {
    list-style-type: square;
  }

  #list-style-type-square ul {
    list-style-type: square;
  }

  #list-style-type-decimal {
    list-style-type: decimal;
  }

  #list-style-type-decimal ul {
    list-style-type: decimal;
  }

  #list-style-type-none {
    list-style-type: none;
  }

  #list-style-type-none ul {
    list-style-type: none;
  }
</style>