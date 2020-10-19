---
title: border-left-style
description: border-left-style
date: "2019-11-12T10:34:07+07:00"
slug: border-left-style
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-left-style
---

Properti CSS `border-left-style` digunakan untuk menentukan gaya garis border kiri elemen (padat, ganda, putus-putus,
dll.), Kecuali jika ada set gambar perbatasan.

## CSS Syntax
```css
border-left-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset
```

#### Javascript Syntax
```js
object.style.borderLeftStyle="dotted"
```

{{< property >}}
{{< property-value default="default" value="border-left-style: none;" >}}
Menghapus batas kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-none py-2 px-4" id="border-left-style-none">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-style: dotted;" >}}
Mengubah batas kiri menjadi urutan titik-titik.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-dotted border-gray-700 py-2 px-4"
    id="border-left-style-dotted">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-style: dashed;" >}}
Mengubah batas kiri menjadi urutan garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-dashed border-gray-700 py-2 px-4"
    id="border-left-style-dashed">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-style: solid;" >}}
Mengubah batas kiri menjadi garis padat.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-solid border-gray-700 py-2 px-4"
    id="border-left-style-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-style: double;" >}}
Membagi perbatasan kiri menjadi dua garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-double border-gray-700 py-2 px-4"
    id="border-left-style-double">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-left-style: groove;" >}}
Setel gaya inset ke batas kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-left-style border-l-4 border-groove border-gray-400 py-2 px-4"
    id="border-left-style-groove">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    #border-left-style-groove {
        border-left-style: groove;
    }
</style>