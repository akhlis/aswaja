---
title: mix-blend-mode
description: mix-blend-mode
date: "2019-11-12T10:34:07+07:00"
slug: mix-blend-mode
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/mix-blend-mode
---

Properti CSS `mix-blend-mode` digunakan untuk menentukan mode campuran untuk memadukan elemen dengan latar belakangnya
(_backdrop_).

_Backdrop_ adalah konten di balik elemen (dikenal sebagai elemen sumber) dan merupakan elemen yang dikomposisikan dengan
elemen tersebut.

Elemen _destination_ (tujuan) adalah elemen yang terletak di belakang elemen sumber, dan yang tumpang tindih dengan
sumber.

_Backdrop_ merupakan area di mana pencampuran warna dilakukan antara sumber dan tujuan.

{{< figure src="/images/cssref/backdrop.png" class="text-center" imgClass="mx-auto" alt="Backdrop adalah area di mana pencampuran warna dilakukan antara sumber dan tujuan." title="Backdrop adalah area di mana pencampuran warna dilakukan antara sumber dan tujuan." >}}

Properti `mix-blend-mode` dapat digunakan untuk menggabungkan elemen apa pun dengan latar belakangnya.

Misalnya, kamu dapat mencampur teks dengan apa saja yang tumpang tindih, gambar dengan gambar lain, header dengan konten
scroll halaman.

## CSS Syntax
```css
mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | difference |
exclusion | hue | saturation | color | luminosity;
```

#### JavaScript Syntax
```js
object.style.mixBlendMode = "darken"
```

{{< cssref default="normal" inherited="tidak" animatable="tidak" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="mix-blend-mode: normal;" >}}
Elemen tidak menggunakan mode campuran.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-normal">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: multiply;" >}}
Elemen menggunakan mode campuran __multiply__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-multiply">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: screen;" >}}
Elemen menggunakan mode campuran __screen__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-multiply">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: overlay;" >}}
Elemen menggunakan mode campuran __overlay__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-multiply">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: darken;" >}}
Elemen menggunakan mode campuran __darken__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-darken">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: lighten;" >}}
Elemen menggunakan mode campuran __lighten__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-lighten">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: color-dodge;" >}}
Elemen menggunakan mode campuran __color-dodge__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-color-dodge">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: color-burn;" >}}
Elemen menggunakan mode campuran __color-burn__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-color-burn">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: hard-light;" >}}
Elemen menggunakan mode campuran __hard-light__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-hard-light">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: soft-light;" >}}
Elemen menggunakan mode campuran __soft-light__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-soft-light">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: difference;" >}}
Elemen menggunakan mode campuran __difference__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-difference">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: exclusion;" >}}
Elemen menggunakan mode campuran __exclusion__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-exclusion">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: hue;" >}}
Elemen menggunakan mode campuran __hue__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-hue">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: saturation;" >}}
Elemen menggunakan mode campuran __saturation__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-saturation">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: color;" >}}
Elemen menggunakan mode campuran __color__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-color">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="mix-blend-mode: luminosity;" >}}
Elemen menggunakan mode campuran __luminosity__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example mix-blend-mode " id="mix-blend-mode-luminosity">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4">Hello world</p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .mix-blend-mode {
    background: #310736;
    display: flex;
    padding: 1em;
  }

  #mix-blend-mode-multiply .block {
    mix-blend-mode: multiply;
  }

  #mix-blend-mode-screen .block {
    mix-blend-mode: screen;
  }

  #mix-blend-mode-overlay .block {
    mix-blend-mode: overlay;
  }

  #mix-blend-mode-darken .block {
    mix-blend-mode: darken;
  }

  #mix-blend-mode-lighten .block {
    mix-blend-mode: lighten;
  }

  #mix-blend-mode-color-dodge .block {
    mix-blend-mode: color-dodge;
  }

  #mix-blend-mode-color-burn .block {
    mix-blend-mode: color-burn;
  }

  #mix-blend-mode-hard-light .block {
    mix-blend-mode: hard-light;
  }

  #mix-blend-mode-soft-light .block {
    mix-blend-mode: soft-light;
  }

  #mix-blend-mode-difference .block {
    mix-blend-mode: difference;
  }

  #mix-blend-mode-exclusion .block {
    mix-blend-mode: exclusion;
  }

  #mix-blend-mode-hue .block {
    mix-blend-mode: hue;
  }

  #mix-blend-mode-saturation .block {
    mix-blend-mode: saturation;
  }

  #mix-blend-mode-color .block {
    mix-blend-mode: color;
  }

  #mix-blend-mode-luminosity .block {
    mix-blend-mode: luminosity;
  }
</style>