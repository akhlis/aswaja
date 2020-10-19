---
title: outline
description: outline
date: "2019-11-12T10:34:07+07:00"
slug: outline
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/outline
---

Properti `outline` digunakan untuk menggambar outline di sekitar elemen.

__Outline__ adalah garis yang digambar di luar batas elemen untuk membuatnya menonjol di halaman web.

Biasanya digunakan untuk alasan aksesibilitas, dan dapat digunakan untuk tujuan dekorasi.

_Ouline_ mirip dengan border karena digambar di sekitar elemen dan dapat memiliki jenis gaya yang sama dengan yang
dimiliki border, tetapi mereka berbeda dalam hal-hal berikut:

- __*Outline* tidak mengambil ruang__. Outline bukan bagian dari elemen, sehingga tidak berkontribusi atau memengaruhi
dimensi atau kotak elemen.

- __*Outline* digambar di sekitar empat sisi elemen__. Kamu tidak dapat menentukan sisi tempat _outline_ yang ingin kamu
gambar.

- __Kamu tidak bisa menerapkan sudut bulat ke *outline*__.

- __*Outline* mungkin non-persegi panjang__.

Properti `outline` adalah properti singkatan untuk properti `outline-width`, `outline-style`, dan `outline-color`.

_Outline_ biasanya ditarik tepat di luar tepi perbatasan. Namun, kamu dapat menggambar garis lebih jauh dari perbatasan
menggunakan properti `outline-offset`.

Properti `outline-offset` tidak ditetapkan sebagai bagian dari singkatan outline. Sehingga kamu harus mengaturnya
sendiri.

## CSS Syntax
```css
outline: outline-width outline-style outline-color | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.outline="#0000FF dotted 5px"
```
{{< cssref default="medium invert color" inherited="tidak" animatable="ya" version="CSS2" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="outline: 4px dotted red;" >}}
Perhatikan urutannya:
- width
- style
- color
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline p-4" id="outline-4px-dotted-red">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="outline: 2px solid;" >}}
Hanya `color` yang opsional. Jika kamu menghilangkannya, warna yang diterapkan akan menjadi warna teks.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example outline p-4" id="outline-2px-solid">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #outline-4px-dotted-red {
    outline: 4px dotted red;
  }

  #outline-2px-solid {
    outline: 2px solid;
  }
</style>