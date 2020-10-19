---
title: overflow-x
description: overflow-x
date: "2019-11-12T10:34:07+07:00"
slug: overflow-x
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/overflow-x
---

Properti `overflow-x` digunakan untuk menentukan apakah konten elemen harus terlihat, terpotong (disembunyikan), atau
akan menambahkan _scroll bar_ horizontal atau tidak ketika konten meluap ke tepi kiri dan kanan elemen.

Konten meluap secara horizontal ketika elemen memiliki lebar yang ditentukan, dan berisi konten di dalamnya yang
memiliki lebar yang lebih besar dari lebar elemen itu sendiri.

Properti overflow-x dapat mengambil salah satu dari empat nilai: `visible` (nilai default), `hidden`, `scroll`, dan
`auto`.

## CSS Syntax
```css
overflow-x: visible | hidden | scroll | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.overflowX="scroll"
```
{{< cssref default="visible" inherited="tidak" animatable="tidak" version="CSS3" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="overflow-x: visible;" >}}
Konten yang meluap terlihat, sedangkan elemen itu sendiri tetap pada lebar yang ditentukan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-x " id="overflow-x-visible">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-x: hidden;" >}}
Konten yang meluap disembunyikan dan tidak dapat diakses.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-x " id="overflow-x-hidden">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-x: scroll;" >}}
Konten yang melimpah dapat diakses berkat bilah gulir horizontal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-x " id="overflow-x-scroll">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="overflow-x: auto;" >}}
Browser memutuskan apakah akan menampilkan scrollbar horizontal atau tidak.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example overflow-x " id="overflow-x-auto">
  <p class="block block--alpha text-sm leading-tight bg-green-100 p-4">Lorem ipsum dolor sit amet, consectetur
    adipiscing elit.</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .overflow-x .block {
    white-space: nowrap;
    width: 200px;
  }

  #overflow-x-visible .block {
    overflow-x: visible;
  }

  #overflow-x-hidden .block {
    overflow-x: hidden;
  }

  #overflow-x-scroll .block {
    overflow-x: scroll;
  }

  #overflow-x-auto .block {
    overflow-x: auto;
  }
</style>