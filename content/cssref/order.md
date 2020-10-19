---
title: order
description: order
date: "2019-11-12T10:34:07+07:00"
slug: order
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/order
caniuse: http://caniuse.com/#feat=flexbox
---

Properti `order` adalah sub-properti dari modul Layout [flexbox](/css/flexbox/).

Properti CSS `order` menetapkan urutan untuk meletakkan item dalam wadah fleksibel atau kotak.

Item dalam wadah diurutkan berdasarkan nilai urutan naik dan kemudian menurut urutan kode sumbernya.

## CSS Syntax
```css
order: number | initial | inherit;
```

#### JavaScript
```js
object.style.order="2"
```

{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="order: 0;" >}}
Urutan item flexbox adalah yang ditentukan dalam kode HTML.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example order " id="order-0">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">One<br><em>order: 0</em></p>
  <p class="block block--beta text-sm leading-tight bg-blue-100 p-4">Two<br><em>order: 0</em></p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4"><strong>Target<br><em>order: 0</strong></em></p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Four<br><em>order: 0</em></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="order: 1;" >}}
Urutan ini relatif terhadap saudara kandung item yang fleksibel itu. Urutan akhir ditentukan ketika semua nilai order item kotak fleksibel individual dipertimbangkan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example order " id="order-1">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">One<br><em>order: 0</em></p>
  <p class="block block--beta text-sm leading-tight bg-blue-100 p-4">Two<br><em>order: 0</em></p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4"><strong>Target<br><em>order: 1</em></strong></p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Four<br><em>order: 0</em></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="order: -1;" >}}
Kamu dapat menggunakan nilai negatif.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example order " id="order--1">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">One<br><em>order: 0</em></p>
  <p class="block block--beta text-sm leading-tight bg-blue-100 p-4">Two<br><em>order: 0</em></p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4"><strong>Target<br><em>order: -1</em></strong></p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Four<br><em>order: 0</em></p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="order: 9;" >}}
Kamu dapat menetapkan nilai yang berbeda untuk setiap item flexbox.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example order " id="order-9">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">One<br><em>order: 13</em></p>
  <p class="block block--beta text-sm leading-tight bg-blue-100 p-4">Two<br><em>order: -7</em></p>
  <p class="block block--pink text-sm leading-tight bg-pink-100 p-4"><strong>Target<br><em>order: 9</em></strong></p>
  <p class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Four<br><em>order: 5</em></p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .order {
    display: flex;
  }

  .order .block {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .order em {
    font-style: normal;
  }

  #order-1 .block--pink {
    order: 1;
  }

  #order--1 .block--pink {
    order: -1;
  }

  #order-9 .block--alpha {
    order: 13;
  }

  #order-9 .block--beta {
    order: -7;
  }

  #order-9 .block--pink {
    order: 9;
  }

  #order-9 .block--yellow {
    order: 5;
  }
</style>