---
title: "Pengertian Margin dan Fungsinya dalam CSS"
description: "Pengertian margin dan fungsinya dalam CSS"
date: "2020-01-10T09:34:07+07:00"
slug: pengertian-margin-css
weight: 70
authors:
- akhlis
---

Halaman website disusun menggunakan elemen-elemen block yang berbentuk persegi panjang.

Secara default, masing-masing elemen _block_ ini saling berhimpit satu sama lain seperti berikut:

<div class="bg-gray-100 text-center mb-8">
    <header class="bg-orange-100 py-4 px-6">Elemen header</header>
    <div class="w-full flex">
    <div class="w-3/4 h-100px bg-blue-100 py-4 px-6">Elemen konten</div>
    <div class="w-1/4 bg-indigo-100 py-4 px-6">Elemen sidebar</div>
    </div>
    <footer class="bg-green-100 py-4 px-6">Elemen footer</footer>
</div>

Agar elemen _block_ bisa tersusun rapi sesuai dengan desain yang diinginkan, kamu harus memahami karakteristik "box-model" dari sebuah elemen HTML.

__Box-model__ menggambarkan area yang terdapat dalam setiap elemen, yaitu: _content area_, _padding area_, _border area_, dan _margin area_.

_Content area_ ada pada setiap elemen, sedangkan _padding area_, _border area_, dan _margin area_ merupakan opsional yang keberadaannya tergantung pada _layout_ desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Area box model dalam CSS — termasuk area konten, padding, border, dan margin" title="Area box model dalam CSS — termasuk area konten, padding, border, dan margin." >}}

## Pengertian Margin dan Fungsinya

_Margin_ merupakan area terluar dalam __box model__ elemen yang berupa spasi atau ruang kosong.

Margin berada di luar _content area_ yang membatasi sebuah elemen dengan elemen lain.

Tanpa adanya margin, setiap elemen HTML akan menempel satu sama lain seperti contoh di atas.

Dalam mendesain website, penggunaan margin sangat penting untuk mengatur jarak elemen satu dengan elemen yang lain agar terlihat rapi.

Margin dibuat dengan menggunakan property CSS `margin`.

```css
header {
    margin: 1em;
}
```

Sekarang saya akan menggunakan contoh pertama untuk diberi margin pada elemen header dan kontennya.

<div class="bg-white text-center mb-8">
    <header class="bg-orange-100 py-4 px-6">Elemen header</header>
    <div class="border border-dashed border-red-500 py-1"><span class="text-xs text-red-500">margin area</span></div>
    <div class="w-full flex">
    <div class="w-3/4 h-100px bg-blue-100 py-4 px-6">Elemen konten</div>
    <div class="w-1/4 bg-indigo-100 py-4 px-6">Elemen sidebar</div>
    </div>
    <div class="border border-dashed border-red-500 py-1"><span class="text-xs text-red-500">margin area</span></div>
    <footer class="bg-green-100 py-4 px-6">Elemen footer</footer>
</div>

Perhatikan contoh di atas! elemen header dan elemen konten sudah tidak menempel lagi dengan elemen dibawahnya.

## Mengatur Margin pada Sisi Elemen

CSS memiliki property yang bisa digunakan untuk menentukan _margin_ pada setiap sisi elemen:
- [margin-top](/cssref/margin-top/)
- [margin-right](/cssref/margin-right/)
- [margin-bottom](/cssref/margin-bottom/)
- [margin-left](/cssref/margin-left/)

Dan semua property margin tersebut bisa ditentukan dengan nilai berikut:
- _auto_ - browser mengatur margin secara otomatis
- _length_ - menentukan margin dalam satuan ukuran px, pt, cm, em, rem, dll.
- _%_ - menentukan margin dalam % dari lebar elemen.
- _inherit_ - menentukan margin berdasarkan lebar margin elemen induk

```css
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

## Menggunakan Shorthand Property margin

Seperti pada penjelasan sebelumnya, kamu bisa mengatur setiap sisi elemen dengan nilai margin yang berbeda.

Agar tidak terlalu panjang kode CSS-nya, kamu bisa menggunakan _shorthand_ property `margin` yang menentukan sisi atas, kanan, bawah, dan kiri.

Pada contoh kode di atas, kamu bisa menyingkatnya menjadi:
```css
p {
    margin: 100px 150px 100px 80px;
}
```

Jika properti `margin` memiliki 4 nilai:
- `margin: 1rem 0.5rem 2rem 1.5rem;`
  - margin __atas__ adalah 1rem
  - margin __kanan__ adalah 0.5rem
  - margin __bawah__ adalah 2rem
  - margin __kiri__ adalah 1.5rem

    <div class="border border-dashed border-red-500 pt-4 pr-2 pb-6 pl-6 mb-8">
    <p class="bg-gray-100 border border-dashed border-red-500 py-1 px-4">Properti margin dengan 4 nilai</p>
    </div>

Jika properti `margin` memiliki 3 nilai;
- `margin: 1rem 2rem 1.5rem;`
  - margin __atas__ adalah 1rem
  - margin __kanan__ adalah 2rem
  - margin __bawah__ adalah 1.5rem
  - margin __kiri__ adalah 2rem

    <div class="border border-dashed border-red-500 pt-4 px-8 pb-4 mb-8">
    <p class="bg-gray-100 border border-dashed border-red-500 py-1 px-4">Properti margin dengan 3 nilai</p>
    </div>

Jika properti `margin` memiliki 2 nilai;
- `margin: 1rem 2rem;`
  - margin __atas__ adalah 1rem
  - margin __kanan__ adalah 2rem
  - margin __bawah__ adalah 1rem
  - margin __kiri__ adalah 2rem

    <div class="border border-dashed border-red-500 pt-4 pb-2 px-8 mb-8">
    <p class="bg-gray-100 border border-dashed border-red-500 py-1 px-4">Properti margin dengan 2 nilai</p>
    </div>

Jika properti `margin` memiliki 1 nilai;
- `margin: 1rem;`
  - margin __atas__ adalah 1rem
  - margin __kanan__ adalah 1rem
  - margin __bawah__ adalah 1rem
  - margin __kiri__ adalah 1rem

    <div class="border border-dashed border-red-500 pt-4 pb-2 px-4 mb-8">
    <p class="bg-gray-100 border border-dashed border-red-500 py-1 px-4">Properti margin dengan 1 nilai</p>
    </div>


## Menggunakan Nilai Otomatis pada Margin

Kamu bisa menggunakan properti margin dengan nilai `auto` untuk memposisikan elemen dari _container_.

Contoh:
```html
<div class="box__container">
    <div class="box"></div>
</div>
```

```css
.box__container {
    width: 100%;
}

.box {
    width: 25%;
    height: 100px;
    background: lightblue;
    margin-left: auto;
    margin-right: auto;
}
```


{{< preview >}}
<div class="border border-dashed border-red-500">
<div class="w-1/4 h-100px bg-blue-100 mx-auto"></div>
</div>
{{< /preview >}}

Pada contoh di atas, elemen "box biru" memiliki lebar 25% dari lebar elemen "box container".

Elemen "box" diatur menggunakan `margin-left` dan `margin-right` dengan nilai `auto`. 

Sehingga ruang kosong dari elemen "box container" akan dibagi rata kanan dan kiri sebagai nilai margin dari elemen "box".

