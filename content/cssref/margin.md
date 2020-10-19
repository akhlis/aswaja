---
title: margin
description: margin
date: "2019-11-12T10:34:07+07:00"
slug: margin
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/margin
---

Properti CSS `margin` adalah properti singkatan untuk mengatur empat properti margin: `margin-top`, `margin-right`,
`margin-bottom`, dan `margin-left` dalam satu deklarasi.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

Properti `margin` tidak berpengaruh pada elemen inline yang tidak diganti. Periksa artikel tentang
[display](/cssref/display/) untuk detail tentang elemen inline dan lainnya.

## CSS Syntax
```css
margin: length | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.margin="100px 50px"
```

{{< cssref default="disk" inherited="ya" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="margin: 0;" >}}
Menghapus semua margin.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin text-sm p-4" id="margin-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="square square--top"></div>
  <div class="container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin: 30px;" >}}
Saat menggunakan 1 nilai, margin ditetapkan untuk semua 4 sisi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin text-sm p-4" id="margin-30px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="square square--top"></div>
  <div class="container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin: 30px 60px;" >}}
Saat menggunakan 2 nilai:

- nilai __pertama__ untuk __top/bottom__ (atas/bawah)
- nilai __kedua__ untuk __right/left__ (kanan/kiri)

Untuk mengingat __urutan__, pikirkan tentang nilai-nilai yang belum kamu tetapkan.

Jika kamu memasukkan 2 nilai (top/right), kamu mengabaikan pengaturan bagian __bottom__ dan __left__ (bawah dan kiri). 

Karena __bottom__ adalah rekanan vertikal _top_ (atas), maka akan menggunakan nilai _top_. Dan karena __left__ adalah padanan horizontal _right_ (kanan), itu akan menggunakan nilai _right_.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin text-sm p-4" id="margin-30px-60px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="square square--top"></div>
  <div class="container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin: 30px 60px 45px;" >}}
Saat menggunakan 3 nilai:

- nilai pertama untuk __top__ (atas)
- nilai kedua untuk __right/left__ (kanan/kiri)
- nilai ketiga untuk __bottom__ (bawah)

Untuk mengingat __urutan__, pikirkan tentang nilai-nilai yang belum kamu tetapkan.

Jika kamu memasukkan 3 nilai (atas / kanan / bawah), kamu mengabaikan pengaturan kiri. Sebagai rekanan yang tepat, itu akan menggunakan nilainya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin text-sm p-4" id="margin-30px-60px-45px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="square square--top"></div>
  <div class="container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin: 30px 60px 45px 85px;" >}}
Saat menggunakan 4 nilai:

- nilai pertama untuk atas
- nilai kedua untuk kanan
- nilai ketiga untuk bawah
- nilai keempat untuk kiri

Untuk mengingat urutannya, mulailah dari atas dan lanjutkan searah jarum jam.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin text-sm p-4" id="margin-30px-60px-45px-85px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="square square--top"></div>
  <div class="container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .margin {
    background: hsl(0, 0%, 80%);
    border: 1em solid hsl(0, 0%, 80%);
    padding: 0;
  }

  .margin .block {
    border-radius: 0;
  }

  .margin .square {
    align-items: center;
    border-radius: 0;
    display: flex;
    height: auto;
    justify-content: center;
    width: auto;
  }

  .margin .container {
    align-items: stretch;
    display: flex;
  }

  .margin .block--alpha {
    flex-grow: 1;
    flex-shrink: 1;
  }

  #margin-0 .box {
    display: none;
  }

  #margin-30px .square--top {
    height: 30px;
  }

  #margin-30px .square--top:before {
    content: "30px";
  }

  #margin-30px .square--bottom {
    height: 30px;
  }

  #margin-30px .square--bottom:before {
    content: "30px";
  }

  #margin-30px .square--left:before {
    content: "30px";
    width: 30px;
  }

  #margin-30px .square--right:before {
    content: "30px";
    width: 30px;
  }

  #margin-30px-60px .square--top {
    height: 30px;
  }

  #margin-30px-60px .square--top:before {
    content: "30px";
  }

  #margin-30px-60px .square--bottom {
    height: 30px;
  }

  #margin-30px-60px .square--bottom:before {
    content: "30px";
  }

  #margin-30px-60px .square--left:before {
    content: "60px";
    width: 60px;
  }

  #margin-30px-60px .square--right:before {
    content: "60px";
    width: 60px;
  }

  #margin-30px-60px-45px .square--top {
    height: 30px;
  }

  #margin-30px-60px-45px .square--top:before {
    content: "30px";
  }

  #margin-30px-60px-45px .square--bottom {
    height: 45px;
  }

  #margin-30px-60px-45px .square--bottom:before {
    content: "45px";
  }

  #margin-30px-60px-45px .square--left:before {
    content: "60px";
    width: 60px;
  }

  #margin-30px-60px-45px .square--right:before {
    content: "60px";
    width: 60px;
  }

  #margin-30px-60px-45px-85px .square--top {
    height: 30px;
  }

  #margin-30px-60px-45px-85px .square--top:before {
    content: "30px";
  }

  #margin-30px-60px-45px-85px .square--bottom {
    height: 45px;
  }

  #margin-30px-60px-45px-85px .square--bottom:before {
    content: "45px";
  }

  #margin-30px-60px-45px-85px .square--left:before {
    content: "85px";
    width: 85px;
  }

  #margin-30px-60px-45px-85px .square--right:before {
    content: "60px";
    width: 60px;
  }
</style>