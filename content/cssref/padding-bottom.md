---
title: padding-bottom
description: padding-bottom
date: "2019-11-12T10:34:07+07:00"
slug: padding-bottom
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/padding-bottom
---

Properti CSS `padding-bottom` digunakan untuk menentukan lebar area bawah kotak padding elemen.

Artinya, properti ini menentukan area ruang yang diperlukan di bagian bawah konten elemen, di dalam batas yang
ditentukan.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

## CSS Syntax
```css
padding-bottom: length|initial|inherit;
```

#### JavaScript Syntax
```js
object.style.paddingBottom="50px"
```
{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="padding-bottom: 0;" >}}
Menghapus semua padding di bagian bawah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-bottom " id="padding-bottom-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-bottom: 50px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-bottom " id="padding-bottom-50px">
  <div class="block block--pink text-sm leading-tight bg-pink-100">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-bottom: 7em;" >}}
Kamu dapat menggunakan nilai __(r)em__.

Nilai ini __relatif__ terhadap ukuran font:

- __em__: relatif terhadap ukuran font elemen saat ini
- __rem__: relatif terhadap ukuran font elemen root `<html>`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-bottom " id="padding-bottom-7em">
  <div class="block block--pink text-sm leading-tight bg-pink-100">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding-bottom: 30%;" >}}
Kamu dapat menggunakan nilai persentase.

Persentase didasarkan pada lebar elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding-bottom relative" id="padding-bottom-30">
  <div class="block block--pink text-sm leading-tight bg-pink-100">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100"><strong>Target </strong></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100">Third item</div>
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

  .padding-bottom {
    background: hsl(0, 0%, 80%);
    border: 1em solid hsl(0, 0%, 80%);
    padding: 0;
  }

  .padding-bottom .block {
    border-radius: 0;
    padding: 0;
  }

  .padding-bottom .block--alpha {
    position: relative;
  }

  .padding-bottom .box {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
  }

  #padding-bottom-0 .box {
    display: none;
  }

  #padding-bottom-50px .block--alpha {
    padding-bottom: 50px;
  }

  #padding-bottom-50px .box {
    height: 50px;
  }

  #padding-bottom-50px .box:before {
    content: "50px";
  }

  #padding-bottom-7em .block--alpha {
    padding-bottom: 7em;
  }

  #padding-bottom-7em .box {
    height: 7em;
  }

  #padding-bottom-7em .box:before {
    content: "7em";
  }

  #padding-bottom-30 .block--alpha {
    padding-bottom: 30%;
  }

  #padding-bottom-30 .box {
    bottom: 1.2em;
    height: 60px;
    transform: rotate(-90deg) translateY(60px);
    transform-origin: bottom left;
    width: 30%;
  }

  #padding-bottom-30 .box:before {
    content: "30%";
  }
</style>