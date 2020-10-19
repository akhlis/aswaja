---
title: padding-right
description: padding-right
date: "2019-11-12T10:34:07+07:00"
slug: padding-right
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/padding-right
---

Properti CSS `padding-right` digunakan untuk menentukan lebar area kanan kotak padding elemen.

Artinya, properti ini menentukan area ruang yang diperlukan di sebelah kanan konten elemen, di dalam batas yang
ditentukan.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

## CSS Syntax
```css
padding-right: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.paddingRight="50px"
```

{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="padding-right: 0;" >}}
Hapus semua padding di sebelah kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-right " id="padding-right-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-right: 50px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-right " id="padding-right-50px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-right: 7em;" >}}
Kamu dapat menggunakan nilai __(r)em__.

Nilai ini relatif terhadap ukuran font:

- __em__: relatif terhadap ukuran font elemen saat ini
- __rem__: relatif terhadap ukuran font elemen root `<html>`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-right " id="padding-right-7em">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-right: 30%;" >}}
Kamu dapat menggunakan nilai persentase.

Persentase didasarkan pada lebar elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-right " id="padding-right-30">
  <div class="block block--pink text-sm leading-tight bg-pink-100 py-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 py-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 py-4">Third item</div>
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

  .padding-right {
    background: hsl(0, 0%, 80%);
    border: 1em solid hsl(0, 0%, 80%);
    padding: 0;
  }

  .padding-right .block {
    border-radius: 0;
    padding-right: 0;
    text-align: right;
  }

  .padding-right .block--alpha {
    position: relative;
  }

  .padding-right .box {
    bottom: 0;
    right: 0;
    position: absolute;
    top: 0;
  }

  #padding-right-0 .box {
    display: none;
  }

  #padding-right-50px .block--alpha {
    padding-right: 50px;
  }

  #padding-right-50px .box {
    width: 50px;
  }

  #padding-right-50px .box:before {
    content: "50px";
  }

  #padding-right-7em .block--alpha {
    padding-right: 7em;
  }

  #padding-right-7em .box {
    width: 7em;
  }

  #padding-right-7em .box:before {
    content: "7em";
  }

  #padding-right-30 .block--alpha {
    padding-right: 30%;
  }

  #padding-right-30 .box {
    width: 30%;
  }

  #padding-right-30 .box:before {
    content: "30%";
  }
</style>