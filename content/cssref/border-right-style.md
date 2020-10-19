---
title: border-right-style
description: border-right-style
date: "2019-11-12T10:34:07+07:00"
slug: border-right-style
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-right-style
---

Properti CSS `border-right-style` digunakan untuk menentukan gaya garis border kanan elemen (solid, double, dashed,
dll.), Kecuali jika ada set gambar perbatasan.

## CSS Syntax
```css
border-right-style: none | hidden |dotted | dashed | solid | double | groove | ridge | inset | outset | initial |
inherit;
```

#### Javascript Syntax
```js
object.style.borderRightStyle="dotted"
```
{{< property >}}
{{< property-value default="default" value="border-right-style: none;" >}}
Menghapus batas kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-none border-gray-600 py-2 px-4"
    id="border-right-style-none">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-style: dotted;" >}}
Mengubah border kanan menjadi urutan titik-titik.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-dotted border-gray-600 py-2 px-4"
    id="border-right-style-dotted">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-style: dashed;" >}}
Mengubah batas kanan menjadi urutan garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-dashed border-gray-600 py-2 px-4"
    id="border-right-style-dashed">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-style: solid;" >}}
Mengubah batas kanan menjadi garis padat.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-solid border-gray-600 py-2 px-4"
    id="border-right-style-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-style: double;" >}}
Membagi perbatasan kanan menjadi dua garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-double border-gray-600 py-2 px-4"
    id="border-right-style-double">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-right-style: groove;" >}}
Setel gaya inset ke batas kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-right-style border-r-4 border-groove border-gray-400 py-2 px-4"
    id="border-right-style-groove">Hello world</div>
{{< /property-preview >}}
{{< /property >}}