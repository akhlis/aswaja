---
title: "Penjelasan Selector CSS"
description: "Penjelasan Selector CSS"
date: "2020-01-07T09:34:07+07:00"
slug: penjelasan-selector-css
weight: 30
authors:
- akhlis
---

Selector CSS digunakan untuk mencari atau memilih elemen HTML yang ingin diberi _style_.

Selector CSS ini dikelompokkan menjadi 5 kategori:
- _Simple selector_ yaitu memilih elemen berdasarkan nama `tag`, `id`, atau `class`.
- _Combinator selector_ yaitu memilih elemen berdasarkan hubungan spesifik antar tag HTML.
- _Pseudo-class selector_ yaitu memilih elemen berdasarkan kondisi tertentu

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