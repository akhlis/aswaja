---
title: column-gap
description: column-gap
date: "2019-11-12T10:34:07+07:00"
slug: column-gap
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/column-gap
---

Properti CSS `column-gap` digunakan untuk menentukan jumlah ruang antara kolom-kolom yang berdekatan dalam layout
`multi-column`.

Properti ini menentukan ruang atau celah antara kolom yang dimiliki elemen multi-kolom yang sama.

## CSS Syntax
```css
column-gap: length | normal | initial | inherit;
```

#### Javascript Syntax
```js
object.style.columnGap="50px"
```

{{< property >}}
{{< property-value default="default" value="column-gap: normal;" >}}
Kesenjangan antara kolom diatur ke nilai default browser, yang biasanya 1em.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-gap text-sm text-white bg-grey-100 py-4" id="column-gap-normal">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="column-gap: 2px;" >}}
Kamu dapat menggunakan nilai __piksel__ untuk menentukan celah tersebut.

Perhatikan bahwa celah hanya muncul di antara kolom, dan bukan di sisi luar kolom tepi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example column-gap text-sm text-white bg-grey-100 py-4" id="column-gap-2px">
  <p class="bg-purple-200 py-3 px-4 rounded-sm">HTML</p>
  <p class="bg-indigo-200 py-3 px-4 rounded-sm">CSS</p>
  <p class="bg-teal-200 py-3 px-4 rounded-sm">JavaScript</p>
</div>
{{< /property-preview >}}
{{< /property >}}



<style type="text/css">
  .column-gap {
    column-count: 3;
    -moz-column-count: 3;
    -webkit-column-count: 3;
  }

  #column-gap-normal {
    column-gap: normal;
  }

  #column-gap-2px {
    column-gap: 2px;
  }

  #column-gap-2px {
    -moz-column-gap: 2px;
    -webkit-column-gap: 2px;
  }
</style>