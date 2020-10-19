---
title: "Pengertian Padding dan Fungsinya dalam CSS"
description: "Pengertian padding dan fungsinya dalam CSS"
date: "2020-01-12T07:34:07+07:00"
slug: pengertian-padding-css
weight: 80
authors:
- akhlis
---

Halaman website disusun menggunakan elemen-elemen block yang berbentuk persegi panjang.

Dalam elemen _block_ tersebut, antara tepi elemen dengan konten yang ada didalamnya tidak ada jarak seperti berikut:

<header class="bg-orange-100 leading-none">header</header>
<div class="bg-blue-100 leading-none">konten</div>
<footer class="bg-green-100 mb-6 leading-none">footer</footer>

Pada tutorial tentang [pengertian margin dan fungsinya dalam CSS](/css/pengertian-margin-css/), saya sudah membahas mengenai karakteristik "box model" sebuah elemen HTML.

__Box-model__ menggambarkan area yang terdapat dalam setiap elemen, yaitu: _content area_, _padding area_, _border area_, dan _margin area_.

_Content area_ ada pada setiap elemen, sedangkan _padding area_, _border area_, dan _margin area_ merupakan opsional yang keberadaannya tergantung pada _layout_ desain halaman web yang dibuat oleh web developer.

{{< figure src="/images/cssref/box-areas.png" class="text-center" imgClass="mx-auto" alt="Area box model dalam CSS — termasuk area konten, padding, border, dan margin" title="Area box model dalam CSS — termasuk area konten, padding, border, dan margin." >}}

Dengan memahami __box model__ elemen _block_ HTML, kamu bisa lebih mudah mengatur desain halaman website sesuai yang diinginkan.

Pada tutorial kali ini, saya akan membahas mengenai _padding area_ dalam box model elemen.

## Pengertian Padding dan Fungsinya

_Padding_ merupakan area di dalam elemen HTML yang memisahkan batas luar elemen dengan _content area_.

Tanpa adanya _padding_, batas elemen terluar akan menempel dengan _content area_.

Dalam desain website, penggunaan padding sangat penting untuk mengatur jarak batas luar elemen dengan elemen lain yang ada di dalamnya.

Padding dibuat dengan menggunakan property CSS `padding`.

```css
header {
    padding: 0.5em 1em;
}
```

Sekarang saya akan memberi padding pada contoh di atas menjadi seperti berikut:

<header class="bg-orange-100 border border-dashed border-orange-500 py-4 px-8"><div class="border border-dashed border-orange-500 leading-none">header</div></header>
<div class="bg-blue-100 border-l border-r border-dashed border-blue-500 py-4 px-8"><div class="border border-dashed border-blue-500 leading-none">konten</div></div>
<footer class="bg-green-100 border border-dashed border-green-500 py-4 px-8 mb-6"><div class="border border-dashed border-green-500 leading-none">footer</div></footer>

Perhatikan contoh di atas! batas elemen terluar sudah tidak menempel lagi dengan konten di dalamnya.

## Mengatur Padding pada Sisi Elemen

CSS memiliki property yang bisa digunakan untuk menentukan _padding_ pada setiap sisi elemen:
- [padding-top](/cssref/padding-top/)
- [padding-right](/cssref/padding-right/)
- [padding-bottom](/cssref/padding-bottom/)
- [padding-left](/cssref/padding-left/)

Dan semua property padding tersebut bisa ditentukan dengan nilai berikut:
- _length_ - menentukan padding dalam satuan ukuran px, pt, cm, em, rem, dll.
- _%_ - menentukan padding dalam % dari lebar elemen.
- _inherit_ - menentukan padding berdasarkan lebar margin elemen induk

```css
p {
    padding-top: 0.5rem;
    padding-right: 1rem;
    padding-bottom: 1.5rem;
    padding-left: 2rem;
}
```

## Menggunakan Shorthand Property Padding

Seperti pada penjelasan sebelumnya, kamu bisa mengatur setiap sisi elemen dengan nilai padding yang berbeda.

Agar tidak terlalu panjang kode CSS-nya, kamu bisa menggunakan _shorthand_ property `padding` yang menentukan sisi atas, kanan, bawah, dan kiri.

Pada contoh kode di atas, kamu bisa menyingkatnya menjadi:
```css
p {
    padding: 0.5rem 1rem 1.5rem 2rem;
}
```

Jika properti `padding` memiliki 4 nilai:
- `padding: 1rem 0.5rem 2rem 1.5rem;`
  - padding __atas__ adalah 1rem
  - padding __kanan__ adalah 0.5rem
  - padding __bawah__ adalah 2rem
  - padding __kiri__ adalah 1.5rem

    <div class="bg-orange-100 border border-dashed border-orange-500 pt-4 pr-2 pb-6 pl-6 mb-8">
    <p class="bg-orange-100 border border-dashed border-orange-500 leading-none">Properti padding dengan 4 nilai</p>
    </div>

Jika properti `padding` memiliki 3 nilai;
- `padding: 1rem 2rem 1.5rem;`
  - padding __atas__ adalah 1rem
  - padding __kanan__ adalah 2rem
  - padding __bawah__ adalah 1.5rem
  - padding __kiri__ adalah 2rem

    <div class="bg-orange-100 border border-dashed border-orange-500 pt-4 px-8 pb-4 mb-8">
    <p class="bg-orange-100 border border-dashed border-orange-500 leading-none">Properti padding dengan 3 nilai</p>
    </div>

Jika properti `padding` memiliki 2 nilai;
- `padding: 1rem 2rem;`
  - padding __atas__ adalah 1rem
  - padding __kanan__ adalah 2rem
  - padding __bawah__ adalah 1rem
  - padding __kiri__ adalah 2rem

    <div class="bg-orange-100 border border-dashed border-orange-500 pt-4 pb-2 px-8 mb-8">
    <p class="bg-orange-100 border border-dashed border-orange-500 leading-none">Properti padding dengan 2 nilai</p>
    </div>

Jika properti `padding` memiliki 1 nilai;
- `padding: 1rem;`
  - padding __atas__ adalah 1rem
  - padding __kanan__ adalah 1rem
  - padding __bawah__ adalah 1rem
  - padding __kiri__ adalah 1rem

    <div class="bg-orange-100 border border-dashed border-orange-500 pt-4 pb-2 px-4 mb-8">
    <p class="bg-orange-100 border border-dashed border-orange-500 leading-none">Properti padding dengan 1 nilai</p>
    </div>