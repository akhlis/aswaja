---
title: picture
description: picture
date: "2019-11-18T10:34:07+07:00"
slug: picture
authors:
- akhlis
name: picture
experimental: true
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/picture
caniuse: https://caniuse.com/#feat=picture
layout: fullbox
---

Tag `<picture>` memberi web developer lebih banyak fleksibilitas dalam menentukan sumber file gambar.

Tag ini bisa berisi nol atau lebih elemen `<source>` dan satu elemen `<img>` untuk menyediakan versi gambar pada skenario tampilan/perangkat yang berbeda.

Jadi daripada hanya menyediakan satu file gambar yang diperbesar dan diperkecil berdasarkan lebar viewport, kamu bisa menggunakan elemen `<picture>` untuk desain web yang responsive.

Kamu bisa menyediakan beberapa ukuran gambar yang disesuaikan dengan tujuan perangkat yang digunakan untuk mengaksesnya.

Misalnya dengan menyediakan gambar-360.jpg untuk perangkat smartphone, gambar-720.jpg untuk perangkat tablet, dan gambar-1440.jpg untuk perangkat desktop.

Masing-masing file gambar tersebut diletakkan pada elemen `<source>` dengan atribut `srcset`.

Untuk memutuskan gambar mana yang akan dimuat, browser akan memeriksa setiap srcset, media, dan tipe atribut `<source>` untuk memilih gambar yang paling cocok dengan layout halaman saat ini dan karakter perangkat layar.

Jika tidak ada elemen `<source>` yang menyediakan gambar yang cocok atau browser belum mendukung elemen `picture`, maka gambar dalam elemen `<img>` akan ditampilkan pada perangkat.


{{< code lang="html" >}}
<picture>
  <source media="(min-width: 800px)" srcset="/images/html/sunset-360.jpg 360w,
          /images/html/sunset-720.jpg 720w,
          /images/html/sunset-1440.jpg 1440w" sizes="33.3vw">
  <source srcset="/images/html/sunset-720.jpg 2x,
          /images/html/sunset-360.jpg 1x">
  <img src="/images/html/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
{{< /code >}}

{{< browser tag="picture" chrome="38.0" edge="13.0" firefox="38.0" safari="9.1" opera="25.0" >}}