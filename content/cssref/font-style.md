---
title: font-style
description: font-style
date: "2019-11-12T10:34:07+07:00"
slug: font-style
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font-style
---

Properti CSS `font-style` memungkinkan pemilihan gaya huruf miring atau oblique

SEbagian besar _font family_ dikemas dengan wajah font yang berbeda. Properti font CSS yang berbeda memungkinkan kita
untuk memilih wajah font dari daftar wajah yang tersedia dalam keluarga font.

Bentuk miring umumnya bersifat bawaan dari jenis font, sementara _oblique font_ biasanya versi miring dari wajah font
biasa.

Bergantung pada nilai properti font-style, browser akan mencari wajah yang sesuai dalam kelompok font yang diberikan dan
menggunakannya.

## CSS Syntax
```css
font-style: normal | italic | oblique | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.fontStyle="italic"
```

{{< cssref default="normal" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="font-style: normal;" >}}
Teks tidak miring.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-style not-italic p-4" id="font-style-normal">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-style: italic;" >}}
Menggunakan versi huruf _italic_: huruf-hurufnya agak miring.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-style italic p-4" id="font-style-italic">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-style: oblique;" >}}
Menggunakan versi _obligue_ dari font: huruf lebih miring daripada miring.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-style italic p-4" id="font-style-oblique">Hello world</div>
{{< /property-preview >}}
{{< /property >}}