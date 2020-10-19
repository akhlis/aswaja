---
title: border-bottom-style
description: border-bottom-style
date: "2019-11-12T10:34:07+07:00"
slug: border-bottom-style
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-bottom-style
---

Properti CSS `border-bottom-style` digunakan untuk menentukan gaya garis batas bawah elemen (solid, double, dashed,
dll), kecuali ada set border gambar.

## CSS Syntax
```css
border-bottom-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial |
inherit;
```

#### Javascript Syntax
```js
object.style.borderBottomStyle="dotted"
```

{{< property >}}
{{< property-value default="default" value="border-bottom-style: none;" >}}
Menghapus batas bawah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-none py-2 px-4" id="border-bottom-style-none">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-style: dotted;" >}}
Mengubah batas bawah menjadi urutan titik-titik.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-dotted border-gray-700 py-2 px-4"
    id="border-bottom-style-dotted">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-style: dashed;" >}}
Mengubah batas bawah menjadi urutan garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-dashed border-gray-700 py-2 px-4"
    id="border-bottom-style-dashed">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-style: solid;" >}}
Mengubah batas bawah menjadi garis padat.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-solid border-gray-700 py-2 px-4"
    id="border-bottom-style-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-style: double;" >}}
Pisahkan batas bawah menjadi dua garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-double border-gray-700 py-2 px-4"
    id="border-bottom-style-double">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-bottom-style: groove;" >}}
Setel gaya inset ke batas bawah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-bottom-style border-b-4 border-gray-700 py-2 px-4"
    id="border-bottom-style-groove">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    #border-bottom-style-groove {
        border-bottom-style: groove;
    }
</style>