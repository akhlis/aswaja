---
title: box-sizing
description: box-sizing
date: "2019-11-12T10:34:07+07:00"
slug: box-sizing
css_collections:
- box-model
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/box-sizing
---

Properti CSS `box-sizing` menentukan bagaimana dimensi elemen dihitung. Properti ini mengubah model kotak CSS yang
digunakan untuk menghitung tinggi dan lebar elemen.

Default box model menggunakan `content-box`, yang berarti bahwa setiap dimensi yang kamu berikan digunakan untuk
menentukan ukuran kotak konten saja.

Padding dan border diterapkan di luar kotak konten.

Oleh karena itu, menerapkan lebar 200px dan padding 10px ke suatu elemen akan menghasilkan elemen menempati total lebar
220 piksel. Ini karena padding ditambahkan ke lebar kotak.

Kamu dapat menggunakan nilai `border-box` untuk mengubah ini, sehingga setiap padding dan border disertakan dalam
dimensi tinggi dan lebar.

Dalam hal ini, elemen akan memakan hanya 200 piksel, karena padding ditambahkan ke bagian dalam elemen.

## CSS Syntax
```css
box-sizing: content-box | border-box | initial | inherit;
```

#### Javascript Syntax
```js
object.style.boxSizing="border-box"
```
{{< property >}}
{{< property-value default="default" value="box-sizing: content-box;" >}}
__lebar__ dan __tinggi__ elemen hanya berlaku untuk __konten__ elemen.

Misalnya, elemen ini memiliki:
- `border-width: 12px`
- `padding: 30px`
- `width: 200px`

_lebar penuh_ adalah 24px + 60px + 200px = __284px__.

Konten memiliki lebar yang ditentukan. Kotak mengakomodasi dimensi tersebut.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-sizing content-box py-2 px-4" id="box-sizing-content-box">
  <div class="actual relative block w-200px content-box bg-green-500 p-8 border-8 border-solid border-teal-500"><span
      class="text-center block bg-yellow-700 py-2 px-0">Hello world</span>
    <div class="box box--red absolute text-xs text-white text-center border-2 border-solid border-red-500"></div>
  </div>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="box-sizing: border-box;" >}}
__lebar__ dan __tinggi__ elemen berlaku untuk semua bagian elemen: __konten__, __padding__ dan __border__.

Misalnya, elemen ini memiliki:
- `border-width: 12px`
- `padding: 30px`
- `width: 200px`

_lebar penuh_ adalah __200px__, apa pun yang terjadi.

Kotak memiliki lebar yang ditentukan. Konten mengakomodasi dimensi tersebut, dan akhirnya menjadi 200px - 60px - 24px = __116px__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example box-sizing border-box py-2 px-4" id="box-sizing-border-box">
  <div class="actual relative block w-200px border-box bg-green-500 p-8 border-8 border-solid border-teal-500"><span
      class="text-center block bg-yellow-700 py-2 px-0">Hello world</span>
    <div class="box box--red absolute text-xs text-white text-center border-2 border-solid border-red-500"></div>
  </div>
  {{< /property-preview >}}
  {{< /property >}}

  <style type="text/css">
    .content-box .box {
      width: 200px;
      height: 40px;
      top: 30px;
      left: 30px;
    }

    .content-box .box:before {
      content: "200px";
      background: red;
      padding: 3px 6px;
      position: absolute;
      left: 0;
    }

    .border-box .box {
      width: 200px;
      height: 42px;
      top: 30px;
      left: -8px;
    }

    .border-box .box:before {
      content: "200px";
      background: red;
      padding: 3px 6px;
      position: absolute;
      left: 0;
    }
  </style>