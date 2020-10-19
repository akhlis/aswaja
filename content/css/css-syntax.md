---
title: "Syntax CSS: Penjelasan Selector, Property dan Value CSS"
description: "Syntax CSS: Penjelasan Selector, Property dan Value CSS"
date: "2020-01-07T09:34:07+07:00"
slug: penjelasan-selector-property-dan-value-css
weight: 20
authors:
- akhlis
---

CSS memiliki aturan syntax atau disebut _CSS rule_ yang sederhana dan mudah dipahami.

__CSS Rule__ terdiri dari _selector_ dan _declaration block_.

{{< figure src="/images/css/css-rule.png" imgClass="mx-auto" alt="css rule" >}}

__Selector__ digunakan untuk mengaitkan atau menghubungkan kode CSS dengan tag HTML yang ingin diberi _style_ (diubah tampilannya).

Fungsi _selector_ ini yaitu mencari elemen web yang ingin diberi style atau diubah tampilannya dengan cara memanggil nama tag, nama class, nama id, atau nama atribut.

Misalnya dengan mencari seluruh tag `<p>` atau mencari seluruh tag HTML yang memiliki atribut `class="primary"`.

Sedangkan __declaration block__ merupakan baris kode yang digunakan untuk mendeklarasikan style elemen dengan property CSS.

Setiap declaration block bisa memuat satu atau lebih _declaration_ yang menyertakan `nama` dan `nilai` properti CSS yang dipisah dengan tanda titik dua/_colon_ `(:)`.

Dan masing-masing _declaration_ biasanya diakhiri dengan tanda titik koma/_semicolon_ `(;)`.

Dalam satu declaration block dikelilingi oleh tanda kurung kurawa/_curly braces_.  `({...})`.

## Property CSS

Property CSS adalah nama jenis _style_ yang digunakan untuk menentukan tampilan elemen HTML.

CSS memiliki puluhan _property_ yang bisa kamu pelajari di [Referensi Property CSS](/cssref/).

Misalnya, untuk menentukan warna teks paragraf bisa menggunakan property CSS `color`.

Contoh:

```css
p {
    color: red;
}
```

Keterangan:
- `p` disebut sebagai `selector`
- `color` disebut sebagai `property`
- `red` disebut sebagai `value`

## Value CSS

Value CSS adalah nilai dari _property_ CSS.

Misalnya, untuk menentukan warna teks paragraf menjadi merah, kamu bisa menggunakan property CSS `color` kemudian diberi value `red`.

Contoh:

```css
p {
    color: red;
}
```

Keterangan:
- `p` disebut sebagai `selector`
- `color` disebut sebagai `property`
- `red` disebut sebagai `value`

Jika ingin mengganti warna teks paragrafnya menjadi biru, kamu tinggal mengganti nilai property CSSnya menjadi `color: blue;`

## Kesimpulan

_Selector_, _property_, dan _value_ ini merupakan komponen inti dari CSS yang harus benar-benar kamu pahami.

Karena hampir semua tutorial CSS berikutnya akan membahas tentang ketiga aspek penting ini.

Agar mudah diingat, Jika _selector_ berfungsi untuk mencari elemen apa yang akan diberi _style_, misalnya tag `p` atau `class="success"`.

Maka _property_ berfungsi untuk memberi efek apa yang harus diterapkan pada elemen tersebut.

Seperti: warna apa?, ukuran berapa?, atau jenis font apa?

Sedangkan _value_ berfungsi untuk menentukan nilai dari _property_. Misalnya warna merah, biru, atau hijau.

