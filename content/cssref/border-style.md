---
title: border-style
description: border-style
date: "2019-11-12T10:34:07+07:00"
slug: border-style
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-style
---

Properti CSS `border-style` adalah properti singkatan yang digunakan untuk menentukan gaya garis border elemen (solid,
double, dashed, dll), kecuali ada set gambar border.

Atau singkatan dari properti: `border-top-style`, `border-right-style`, `border-bottom-style`, dan `border-left-style`.

Nilai properti `border-style` dapat ditentukan menggunakan satu, dua, tiga, atau empat komponen.

Ketika satu nilai digunakan, nilai menentukan border style atas, kanan, bawah, dan kiri.

Jika dua nilai digunakan, nilai pertama menentukan border style atas dan bawah dan nilai kedua menentukan border style
kanan dan kiri.

Jika tiga nilai digunakan, yang pertama menentukan border style atas, yang kedua menentukan border style kanan dan kiri,
dan yang ketiga menentukan border style bawah.

Jika empat nilai digunakan, nilai pertama, kedua, ketiga, dan keempat menentukan border style atas, kanan, bawah, dan
kiri.

## CSS Syntax
```css
border-style: none | hidden | dotted | dashed | solid | double | groove | ridge | inset | outset | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderStyle="dotted double"
```

{{< property >}}
{{< property-value default="default" value="border-style: none;" >}}
Menghapus border elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-none border-gray-600 py-2 px-4" id="border-style-none">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-style: dotted;" >}}
Mengubah border menjadi urutan titik-titik.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-dotted border-gray-600 py-2 px-4" id="border-style-dotted">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-style: dashed;" >}}
Mengubah border menjadi urutan garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-dashed border-gray-600 py-2 px-4" id="border-style-dashed">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-style: solid;" >}}
Mengubah border menjadi garis yang solid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-solid border-gray-600 py-2 px-4" id="border-style-solid">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-style: double;" >}}
Pisahkan border menjadi dua garis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-double border-gray-600 py-2 px-4" id="border-style-double">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-style: groove;" >}}
Setel gaya inset ke border.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-style border-4 border-groove border-gray-400 py-2 px-4" id="border-style-groove">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}