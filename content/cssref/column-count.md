---
title: column-count
description: column-count
date: "2019-11-12T10:34:07+07:00"
slug: column-count
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/column-count
---

Properti CSS `column-count` memungkinkan kamu untuk meletakkan konten elemen dalam beberapa kolom dengan menentukan
sejumlah kolom.

Browser akan menentukan lebar kolom berdasarkan ruang yang tersedia, kecuali jika kamu menentukan lebar yang tepat
menggunakan properti `column-width`.

`column-count` dan `column-width` bisa diatur menjadi fleksibel dalam layout yang responsif.

## CSS Syntax
```css
column-count: number | auto | initial | inherit;
```

#### Javascript Syntax
```js
object.style.columnCount=3
```

{{< property >}}
{{< property-value default="default" value="column-count: auto;" >}}
Menghapus kolom apa pun dari elemen (kecuali properti kolom lainnya diatur).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-count text-sm text-white" id="column-count-auto">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="column-count: 3;" >}}
Saat menggunakan nilai __integer__, elemen akan mendistribusikan elemen turunannya di sejumlah kolom yang ditentukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-count text-sm text-white" id="column-count-3">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #column-count-auto {
    column-count: auto;
  }

  #column-count-3 {
    column-count: 3;
  }

  #column-count-3 {
    -moz-column-count: 3;
    -webkit-column-count: 3;
  }
</style>