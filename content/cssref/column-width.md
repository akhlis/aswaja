---
title: column-width
description: column-width
date: "2019-11-12T10:34:07+07:00"
slug: column-width
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/column-width
---

Properti CSS `column-width` memungkinkan kamu untuk meletakkan konten elemen dalam beberapa kolom dengan menentukan
nilai lebar kolom yang kemudian digunakan browser untuk membuat sejumlah kolom untuk meletakkan konten.

Jumlah kolom yang tepat tergantung pada ruang yang tersedia, atau pada jumlah tertentu yang dapat kamu tentukan
menggunakan properti `column-count`.

Lebar kolom dan jumlah kolom bisa diatur menjadi fleksibel agar browser dapat menghitung jumlah kolom berdasarkan ruang
yang tersedia.

Sehingga untuk membuat layout yang responsif lebih mudah.

Misalnya, jika kamu mengatur lebar kolom ke `12em`, secara praktis kolom akan memiliki lebar 12em.

Namun jika ternyata ruang yang tersedia kurang dari `12em`, hanya akan ada satu kolom yang lebarnya terbatas pada ruang
yang tersedia.

## CSS Syntax
```css
column-gap: length | normal | initial | inherit;
```

#### Javascript Syntax
```js
object.style.columnWidth="100px"
```

## Property Values

{{< property >}}
{{< property-value default="default" value="column-width: auto;" >}}
Elemen tidak akan mendistribusikan elemen turunannya ke dalam kolom, kecuali jika nilai `column-count` ditentukan. Dalam hal itu, lebar kolom akan disimpulkan dari jumlah kolom.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-width text-sm text-white bg-grey-100 py-4" id="column-width-auto">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="column-width: 10px;" >}}
Kamu dapat menggunakan nilai piksel untuk lebar kolom.

Jumlah kolom akan menjadi minimum yang dibutuhkan untuk mendistribusikan semua konten di seluruh elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-width text-sm text-white bg-grey-100 py-4" id="column-width-10px">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #column-width-auto {
    column-width: auto;
  }

  #column-width-10px {
    column-width: 10px;
  }

  #column-width-10px {
    -moz-column-width: 10px;
    -webkit-column-width: 10px;
  }
</style>