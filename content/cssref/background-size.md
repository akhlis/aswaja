---
title: background-size
description: background-size
date: "2019-11-12T10:34:07+07:00"
slug: background-size
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-size
caniuse: http://caniuse.com/#feat=background-size
---

Properti CSS `background-size` diperkenalkan di CSS3 untuk keperluan pengaturan dimensi gambar latar belakang.

Properti ini memungkinkan kamu menentukan dengan tepat ukuran gambar latar belakang.

Selanjutnya, kamu dapat menggunakan kata kunci `cover` dan `contain` untuk menskala gambar ke kotak.

Properti `background-size` digunakan bersama dengan properti `background-image` untuk menentukan gambar latar belakang
pada elemen HTML.

## CSS Syntax
```css
background-size: auto | length | cover | contain | initial | inherit;
```

#### Javascript Syntax
```js
object.style.backgroundSize="60px 120px"
```

{{< property >}}
{{< property-value default="default" value="background-size: auto auto;" >}}
Gambar latar belakang akan mempertahankan ukuran <strong> asli </strong>.

Misalnya, gambar latar belakang ini berukuran <strong> 960px x 640px </strong>. Rasio aspeknya adalah <strong> 3 per 2
</strong>. Itu lebih besar dari wadahnya (yang tingginya 150px) dan karenanya akan <strong> terpotong </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-auto bg-gray-100 h-150px p-4" id="background-size-auto-auto"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-size: 120px 80px;" >}}
Kamu dapat menentukan ukuran dalam <strong> piksel </strong>:

- nilai pertama adalah ukuran <strong> horizontal </strong>
- yang kedua adalah ukuran <strong> vertikal </strong>
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-120px-80px bg-gray-100 h-150px p-4" id="background-size-120px-80px"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-size: 100% 50%;" >}}
Kamu dapat menggunakan nilai <strong> persentase </strong> juga. Hati-hati karena ini dapat mengubah <strong> rasio
    aspek </strong> dari gambar latar belakang, dan mengarah ke hasil yang tidak terduga.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-100-50 bg-gray-100 h-150px p-4" id="background-size-100-50"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-size: contain;" >}}
Kata kunci <code> contain </code> akan mengubah ukuran gambar latar belakang untuk memastikannya tetap ada <strong>
    sepenuhnya terlihat </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-contain bg-gray-100 h-150px p-4" id="background-size-contain"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-size: cover;" >}}
Kata kunci <code> cover </code> akan mengubah ukuran gambar latar belakang untuk memastikan elemen tersebut <strong>
    tertutup sepenuhnya </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-cover bg-gray-100 h-150px p-4" id="background-size-cover"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}