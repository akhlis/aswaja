---
title: margin-left
description: margin-left
date: "2019-11-12T10:34:07+07:00"
slug: margin-left
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/margin-left
---

Properti CSS `margin-left` digunakan untuk menentukan lebar area kiri kotak margin elemen.

Jadi, properti ini menentukan area ruang yang diperlukan di bagian kiri elemen, di luar batas yang ditentukan.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

Properti `margin-left` tidak berpengaruh pada elemen inline yang tidak diganti. Periksa artikel tentang
[display](/cssref/display/) untuk detail tentang elemen inline dan lainnya.

## CSS Syntax
```css
margin-left: length | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.marginLeft="100px"
```
{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="margin-left: 0;" >}}
Menghapus semua margin di sebelah kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-left " id="margin-left-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-left: 50px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-left " id="margin-left-50px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-left: 7em;" >}}
Kamu dapat menggunakan nilai __(r)em__.

Nilai ini relatif terhadap ukuran font:

- __em__: relatif terhadap ukuran font elemen saat ini
- __rem__: relatif terhadap `<html>` ukuran font elemen root
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-left " id="margin-left-7em">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-left: 30%;" >}}
Kamu dapat menggunakan nilai persentase.

Persentase didasarkan pada lebar wadah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-left relative" id="margin-left-30">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong></div>
  <div class="box box--plum"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-left: auto;" >}}
Kata kunci `auto` akan memberikan bagian kiri ruang tersisa.

Ketika dikombinasikan dengan `margin-right: auto`, itu akan memusatkan elemen, jika lebar tetap didefinisikan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-left relative" id="margin-left-auto">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target</strong><br>width: 200px</div>
  <div class="box box--plum"></div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
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

  .margin-left {
    background: hsl(0, 0%, 80%);
    border: 1em solid hsl(0, 0%, 80%);
    padding: 0;
  }

  .margin-left .block {
    border-radius: 0;
  }

  .margin-left .block--alpha {
    position: relative;
  }

  .margin-left .box {
    bottom: 0;
    left: 0;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
  }

  #margin-left-0 .box {
    display: none;
  }

  #margin-left-50px .block--alpha {
    margin-left: 50px;
  }

  #margin-left-50px .box {
    width: 50px;
  }

  #margin-left-50px .box:before {
    content: "50px";
  }

  #margin-left-7em .block--alpha {
    margin-left: 7em;
  }

  #margin-left-7em .box {
    width: 7em;
  }

  #margin-left-7em .box:before {
    content: "7em";
  }

  #margin-left-30 .block--alpha {
    margin-left: 30%;
  }

  #margin-left-30 .box {
    height: 2.4em;
    left: 0;
    top: 3.2em;
    transform: none;
    width: 30%;
  }

  #margin-left-30 .box:before {
    content: "30%";
  }

  #margin-left-auto .block--alpha {
    margin-left: auto;
    width: 200px;
  }

  #margin-left-auto .box {
    height: 2.4em;
    left: 0;
    right: 200px;
    top: 3.2em;
    transform: none;
    width: auto;
  }

  #margin-left-auto .box:before {
    content: "auto";
  }
</style>