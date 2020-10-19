---
title: background-position
description: background-position
date: "2019-11-12T10:34:07+07:00"
slug: background-position
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-position
caniuse: http://caniuse.com/#feat=background-position
---

Jika gambar latar belakang telah ditentukan, properti ini menentukan posisi awal mereka (setelah pengubahan ukuran)
dalam area pemosisian latar belakang yang sesuai.

Properti `background-position` mengambil satu atau lebih nilai `position` yang dipisah koma.

Jika beberapa gambar latar belakang telah ditentukan, masing-masing `position` diterapkan ke gambar latar belakang yang
sesuai.

## CSS Syntax
```css
background-position: value;
```

#### Javascript Syntax
```js
object.style.backgroundPosition="center"
```

{{< property >}}
{{< property-value default="default" value="background-position: 0% 0%;" >}}
Gambar latar belakang akan diposisikan <strong> 0% </strong> pada sumbu horizontal dan <strong> 0% </strong> pada sumbu
vertikal, yang berarti sudut kiri atas elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-left-top bg-gray-100 bg-24 h-150px p-4" id="background-position-0-0"
    style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-position: bottom right;" >}}
Kamu dapat menggunakan kombinasi <strong> kata kunci posisi </strong>: <code> center </code>, <code> top </code>, <code>
    bottom </code>, <code> left </code> dan <code> right </code>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-right-bottom bg-gray-100 bg-24 h-150px p-4"
    id="background-position-bottom-right" style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-position: center center;" >}}
Gambar latar belakang akan diposisikan di tengah elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example bg-no-repeat bg-center bg-gray-100 bg-24 h-150px p-4"
    id="background-position-center-center" style="background-image:url('/images/cssref/koala.jpeg');">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}