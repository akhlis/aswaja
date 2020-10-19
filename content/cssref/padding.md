---
title: padding
description: padding
date: "2019-11-12T10:34:07+07:00"
slug: padding
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/padding
---

Properti `padding` adalah properti singkatan untuk mengatur empat properti padding: `padding-top`, `padding-right`,
`padding-bottom`, dan `padding-left` dalam satu deklarasi.

Properti ini digunakan untuk menentukan bagian terdalam dari _box model_ (model kotak), menciptakan ruang di sekitar
konten elemen, di dalam margin atau batas yang di tentukan.

Nilai padding ditetapkan menggunakan panjang atau persentase, dan tidak dapat menerima nilai negatif.

Nilai awal (default) untuk semua properti padding adalah __0__.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

## CSS Syntax
```css
padding: length | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.padding="100px 20px"
```
{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="padding: 0;" >}}
Hapus semua padding
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding text-sm" id="padding-0">
  <div class="square square--top"></div>
  <div class="padding-container">
    <div class="square square--left"></div>
    <div class="block block--alpha text-sm leading-tight bg-green-100"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding: 30px;" >}}
Saat menggunakan 1 nilai, padding diatur untuk semua/4 sisi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding text-sm" id="padding-30px">
  <div class="square square--top"></div>
  <div class="padding-container flex items-stretch">
    <div class="square square--left"></div>
    <div class="block block--alpha flex-grow flex-shrink text-sm leading-tight bg-green-100"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding: 30px 60px;" >}}
Saat menggunakan 2 nilai:

- nilai pertama untuk atas/bawah
- nilai kedua untuk kanan/kiri

Untuk mengingat urutan, pikirkan tentang nilai-nilai yang belum kamu tetapkan.

Jika kamu memasukkan 2 nilai (atas/kanan), kamu mengabaikan pengaturan bagian bawah dan kiri.

Karena bottom (bawah) adalah rekanan vertikal atas, maka akan menggunakan nilai top (atas).

Dan karena kiri adalah padanan horizontal kanan, itu akan menggunakan nilai kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding text-sm" id="padding-30px-60px">
  <div class="square square--top"></div>
  <div class="padding-container flex items-stretch">
    <div class="square square--left"></div>
    <div class="block block--alpha flex-grow flex-shrink text-sm leading-tight bg-green-100"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding: 30px 60px 45px;" >}}
Saat menggunakan 3 nilai:

- nilai pertama untuk atas
- nilai kedua untuk kanan/kiri
- nilai ketiga untuk bawah

Untuk mengingat urutan, pikirkan tentang nilai-nilai yang belum kamu tetapkan.

Jika kamu memasukkan 3 nilai (atas/kanan/bawah), kamu mengabaikan pengaturan kiri. Sebagai rekanan yang tepat, itu akan
menggunakan nilainya.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding text-sm" id="padding-30px-60px-45px">
  <div class="square square--top"></div>
  <div class="padding-container flex items-stretch">
    <div class="square square--left"></div>
    <div class="block block--alpha flex-grow flex-shrink text-sm leading-tight bg-green-100"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="padding: 30px 60px 45px 85px;" >}}
Saat menggunakan 4 nilai:

- nilai pertama untuk atas
- nilai kedua untuk kanan
- nilai ketiga untuk bawah
- nilai keempat untuk kiri

Untuk mengingat urutannya, mulailah dari atas dan lanjutkan searah jarum jam.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example padding text-sm" id="padding-30px-60px-45px-85px">
  <div class="square square--top"></div>
  <div class="padding-container flex items-stretch">
    <div class="square square--left"></div>
    <div class="block block--alpha flex-grow flex-shrink text-sm leading-tight bg-green-100"><strong>Target </strong></div>
    <div class="square square--right"></div>
  </div>
  <div class="square square--bottom"></div>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .padding {
    background: #05ffb0;
    padding: 0;
  }

  .padding .square {
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 0;
    display: flex;
    height: auto;
    justify-content: center;
    text-align: center;
    width: auto;
  }

  #padding-0 .box {
    display: none;
  }

  #padding-30px .square--top {
    height: 30px;
  }

  #padding-30px .square--top:before {
    content: "30px";
  }

  #padding-30px .square--bottom {
    height: 30px;
  }

  #padding-30px .square--bottom:before {
    content: "30px";
  }

  #padding-30px .square--left:before {
    content: "30px";
    width: 30px;
  }

  #padding-30px .square--right:before {
    content: "30px";
    width: 30px;
  }

  #padding-30px-60px .square--top {
    height: 30px;
  }

  #padding-30px-60px .square--top:before {
    content: "30px";
  }

  #padding-30px-60px .square--bottom {
    height: 30px;
  }

  #padding-30px-60px .square--bottom:before {
    content: "30px";
  }

  #padding-30px-60px .square--left:before {
    content: "60px";
    width: 60px;
  }

  #padding-30px-60px .square--right:before {
    content: "60px";
    width: 60px;
  }

  #padding-30px-60px-45px .square--top {
    height: 30px;
  }

  #padding-30px-60px-45px .square--top:before {
    content: "30px";
  }

  #padding-30px-60px-45px .square--bottom {
    height: 45px;
  }

  #padding-30px-60px-45px .square--bottom:before {
    content: "45px";
  }

  #padding-30px-60px-45px .square--left:before {
    content: "60px";
    width: 60px;
  }

  #padding-30px-60px-45px .square--right:before {
    content: "60px";
    width: 60px;
  }

  #padding-30px-60px-45px-85px .square--top {
    height: 30px;
  }

  #padding-30px-60px-45px-85px .square--top:before {
    content: "30px";
  }

  #padding-30px-60px-45px-85px .square--bottom {
    height: 45px;
  }

  #padding-30px-60px-45px-85px .square--bottom:before {
    content: "45px";
  }

  #padding-30px-60px-45px-85px .square--left:before {
    content: "85px";
    width: 85px;
  }

  #padding-30px-60px-45px-85px .square--right:before {
    content: "60px";
    width: 60px;
  }
</style>