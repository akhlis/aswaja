---
title: margin-bottom
description: margin-bottom
date: "2019-11-12T10:34:07+07:00"
slug: margin-bottom
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/margin-bottom
---

Properti CSS `margin-bottom` digunakan untuk menentukan lebar area bawah kotak margin elemen.

Jadi, properti ini menentukan area ruang yang diperlukan di bagian bawah elemen, di luar batas yang ditentukan.

Setiap elemen pada halaman web adalah persegi panjang.

Dan setiap elemen memiliki model kotak persegi panjang yang menggambarkan area yang di hasilkan untuk elemen, yaitu:
_content box_, _padding box_, _border-box_, dan _margin box_.

_Content box_ ada pada setiap elemen. Sedangkan _padding, border, dan margin box_ merupakan opsional yang keberadaannya
tergantung pada layout desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin" title="Model kotak elemen dalam CSS — termasuk area konten, padding, border, dan margin." >}}

Properti `margin-bottom` tidak berpengaruh pada elemen inline yang tidak diganti. Periksa artikel tentang
[display](/cssref/display/) untuk detail tentang elemen inline dan lainnya.

## CSS Syntax
```css
margin-bottom: length | auto | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.marginBottom="100px"
```

{{< cssref default="0" inherited="tidak" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="margin-bottom: 0;" >}}
Menghapus semua margin di bagian bawah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-bottom " id="margin-bottom-0">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-bottom: 30px;" >}}
Kamu dapat menggunakan nilai piksel.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-bottom " id="margin-bottom-30px">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-bottom: 2em;" >}}
Kamu dapat menggunakan __(r)em__.

Nilai ini relatif terhadap ukuran font:

- __em__: relatif terhadap ukuran font elemen saat ini
- __rem__: relatif terhadap <html> ukuran font elemen root
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-bottom " id="margin-bottom-2em">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
  <div class="block block--yellow text-sm leading-tight bg-yellow-100 p-4">Third item</div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="margin-bottom: 10%;" >}}
Kamu dapat menggunakan nilai persentase.

Persentase didasarkan pada lebar wadah.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example margin-bottom " id="margin-bottom-10">
  <div class="block block--pink text-sm leading-tight bg-pink-100 p-4">First item</div>
  <div class="block block--alpha text-sm leading-tight bg-green-100 p-4"><strong>Target </strong>
    <div class="box box--plum"></div>
  </div>
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

  .margin-bottom {
    background: hsl(0, 0%, 80%);
    padding: 1em;
  }

  .margin-bottom .block {
    border-radius: 0;
  }

  .margin-bottom .block--alpha {
    position: relative;
  }

  .margin-bottom .box {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    transform: translateY(100%);
  }

  #margin-bottom-0 .box {
    display: none;
  }

  #margin-bottom-30px .block--alpha {
    margin-bottom: 30px;
  }

  #margin-bottom-30px .box {
    height: 30px;
  }

  #margin-bottom-30px .box:before {
    content: "30px";
  }

  #margin-bottom-2em .block--alpha {
    margin-bottom: 2em;
  }

  #margin-bottom-2em .box {
    height: 2em;
  }

  #margin-bottom-2em .box:before {
    content: "2em";
  }

  #margin-bottom-10 .block--alpha {
    margin-bottom: 10%;
  }

  #margin-bottom-10 .box {
    bottom: auto;
    height: 100px;
    top: 100%;
    transform: rotate(-90deg) translateX(-100%);
    transform-origin: top left;
    width: 10%;
  }

  #margin-bottom-10 .box:before {
    content: "10%";
  }
</style>