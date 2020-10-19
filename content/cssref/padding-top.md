---
title: padding-top
description: padding-top
date: "2019-11-12T10:34:07+07:00"
slug: padding-top
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/padding-top
---

Properti CSS `padding-top` digunakan untuk menentukan lebar area atas kotak padding elemen.

Artinya, properti ini menentukan area ruang yang diperlukan di bagian atas konten elemen, di dalam batas yang
ditentukan.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

## CSS Syntax
```css
padding-top: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.paddingTop="50px"
```
{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="padding-top: 0;" >}}
Hapus semua padding di bagian atas.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-top " id="padding-top-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-top: 50px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-top " id="padding-top-50px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-top: 7em;" >}}
Kamu dapat menggunakan nilai __(r)em__.

Nilai ini relatif terhadap ukuran font:

- __em__: relatif terhadap ukuran font elemen saat ini
- __rem__: relatif terhadap ukuran font elemen root `<html>`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-top " id="padding-top-7em">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-top: 30%;" >}}
Kamu dapat menggunakan nilai persentase.

Persentase didasarkan pada lebar elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-top relative" id="padding-top-30">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
  <div class="box box--plum"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .box {
    border: 2px solid #f44336;
    border-radius: 3px;
  }

  .box:before {
    background: #f44336;
    border-radius: 1px 0 2px 0;
    color: #fff;
    content: "";
    display: inline-block;
    font-size: 0.8em;
    padding: 0 6px 2px 4px;
    vertical-align: top;
  }

  .padding-top {
    background: hsl(0, 0%, 80%);
    border: 1em solid hsl(0, 0%, 80%);
    padding: 0;
  }

  .padding-top .block {
    border-radius: 0;
    padding: 0;
  }

  .padding-top .block--alpha {
    position: relative;
  }

  .padding-top .box {
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  #padding-top-0 .box {
    display: none;
  }

  #padding-top-50px .block--alpha {
    padding-top: 50px;
  }

  #padding-top-50px .box {
    height: 50px;
  }

  #padding-top-50px .box:before {
    content: "50px";
  }

  #padding-top-7em .block--alpha {
    padding-top: 7em;
  }

  #padding-top-7em .box {
    height: 7em;
  }

  #padding-top-7em .box:before {
    content: "7em";
  }

  #padding-top-30 .block--alpha {
    padding-top: 30%;
  }

  #padding-top-30 .box {
    height: 60px;
    top: 1.2em;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
    width: 30%;
  }

  #padding-top-30 .box:before {
    content: "30%";
  }
</style>