---
title: min-width
description: min-width
date: "2019-11-12T10:34:07+07:00"
slug: min-width
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/min-width
---

Properti CSS `min-width` digunakan untuk mengatur lebar minimum elemen yang ditentukan.

Properti ini berguna untuk membatasi lebar elemen dalam CSS ke rentang tertentu.

Dua properti tersedia untuk menetapkan lebar minimum dan minimum untuk suatu elemen, yaitu: properti `min-width` dan
`max-width`.

Properti `min-width` mengesampingkan properti `width` dan `max-width` dan mencegah nilai properti `width` menjadi lebih
kecil dari nilai yang ditentukan.

## CSS Syntax
```css
min-width: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.minWidth="400px"
```

{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="min-width: 0;" >}}
Elemen tidak memiliki lebar minimum.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-width " id="min-width-0">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="min-width: 300px;" >}}
Kamu dapat menggunakan __nilai numerik__ seperti __piksel, (r)em, persentase__ ...

Jika _lebar minimum_ __lebih besar__ dari lebar sebenarnya elemen, lebar minimum akan diterapkan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-width " id="min-width-300px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="min-width: 5px;" >}}
Jika lebar minimum lebih kecil dari lebar sebenarnya elemen, lebar minimum tidak berpengaruh.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example min-width " id="min-width-5px">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .min-width .block {
    display: inline-block;
    vertical-align: top;
  }

  #min-width-300px .block {
    min-width: 300px;
  }

  #min-width-5px .block {
    min-width: 5px;
  }
</style>