---
title: Cara Memberi Style pada Elemen HTML
description: Cara Memberi Style pada Elemen HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-memberi-style-pada-elemen-html
weight: 80
authors:
- akhlis
---

Apa jadinya kalau membuat halaman website hanya menggunakan HTML saja?

Ya kamu benar sekali, tampilannya akan berantakan dan tidak menarik sama sekali.

Karena urusan mempercantik halaman website itu sudah menjadi tugasnya CSS.

Lalu bagaimana caranya memberi style pada elemen HTML dengan CSS?

## Gunakan Atribut Style pada Elemen HTML

Untuk memberi style pada elemen HTML kamu bisa menggunakan atribut `style` yang diletakkan pada tag pembuka elemen HTML.

Begini sintaks penulisannya:

```html
<tagname style="property:value;">
```

**Property** menunjukkan properti CSS, sedangkan **value** menunjukkan nilai CSS dari properti tersebut.

{{< note >}}
Kamu bisa mempelajari _style_ lebih lanjut di tutorial [CSS](/css/)
{{< /note >}}

## Cara Memberi Warna Teks pada Elemen HTML

Setelah tahu cara penggunaan atribut style, sekarang saatnya menerapkan properti dan value CSS untuk mengatur style elemen HTML.

Yuk kita mulai dengan memberi warna teks judul dan paragraf pada dokumen HTML.

Caranya dengan memakai properti `color` pada atribut style. Perhatikan contoh berikut:

```html
<h1 style="color:blue;">Ini Judul dengan Warna Biru</h1>
<p style="color:red;">Ini paragraf pertama dengan warna merah.</p>
<p style="color:green;">Ini paragraf kedua dengan warna hijau.</p>
```

{{< preview >}}
<h1 style="color:blue;">Ini Judul dengan Warna Biru</h1>
<p style="color:red;">Ini paragraf pertama dengan warna merah.</p>
<p style="color:green;">Ini paragraf kedua dengan warna hijau.</p>
{{< /preview >}}



## Cara Memberi Background pada Elemen HTML

Untuk memberi warna background pada elemen HTML, gunakanlah properti CSS `background-color` pada atribut style.

Pada contoh berikut saya memberi background berwarna biru langit pada elemen `div`:

```html
<div style="background-color:powderblue;">

<h1>Ini Judul Pertama Saya</h1>
<p>Ini paragraf pertama saya.</p>

</div>
```

{{< preview >}}
<div class="py-2 px-4" style="background-color:powderblue;">

<h1>Ini Judul Pertama Saya</h1>
<p>Ini paragraf pertama saya.</p>

</div>
{{< /preview >}}

## Cara Mengatur Ukuran Teks pada Elemen HTML

Untuk mengatur ukuran teks pada elemen HTML, maka gunakanlah properti CSS `font-size` pada atribut style.

Lihat contoh ini:

```html
<h1 style="font-size:42px;">Ini Judul Pertama Saya</h1>
<p style="font-size:20px;">Ini paragraf pertama saya.</p>
```

Begini tampilannya di web browser!

{{< preview >}}
<h1 style="font-size:42px;">Ini Judul Pertama Saya</h1>
<p style="font-size:20px;">Ini paragraf pertama saya.</p>
{{< /preview >}}

## Cara Mengatur Rata Teks pada Elemen HTML

Untuk mengatur rata teks pada elemen HTML, maka gunakanlah properti CSS `text-align` pada atribut style.

Contoh:

```html
<p style="text-align:left">Ini paragraf dengan rata kiri.</p>
<p style="text-align:center">Ini paragraf dengan rata tengah.</p>
<p style="text-align:right">Ini paragraf dengan rata kanan.</p>
```

Begini tampilannya di web browser!

{{< preview >}}
<p style="text-align:left">Ini paragraf dengan rata kiri.</p>
<p style="text-align:center">Ini paragraf dengan rata tengah.</p>
<p style="text-align:right">Ini paragraf dengan rata kanan.</p>
{{< /preview >}}

Semoga dengan penjelasan diatas, kamu sudah menjadi paham cara memberi style pada elemen HTML dengan benar.

Selanjutnya kita akan membahas mengenai [Cara Mengatur Format Penulisan Teks pada HTML](/html/cara-mengatur-format-penulisan-teks-pada-html/)

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.
