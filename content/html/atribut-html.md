---
title: 'Mengenal Atribut HTML'
description: 'Belajar HTML Dasar: Mengenal Atribut HTML'
date: "2019-11-18T10:34:07+07:00"
slug: atribut-html
weight: 50
authors:
- akhlis
---

Atribut HTML adalah informasi tambahan yang diberikan pada sebuah element HTML yang diletakkan pada tag pembuka.

Setiap atribut selalu memiliki pasangan nama dan nilai yang ditulis dengan format `name="value"`. 

Penulisan value biasanya diapit dengan tanda kutip satu (') atau tanda kutip dua (").

`Name` atribut menunjukkan properti yang ingin kamu berikan pada element HTML, sedangkan `value` merupakan nilai dari properti tersebut.

Perhatikan contoh berikut:

```html
<!DOCTYPE html> 
<html>
 
   <head> 
      <title>Contoh Penggunaan Atribut Align</title> 
   </head>
	
   <body> 
      <p align="left">Ini adalah paragraf dengan rata bagian kiri</p> 
      <p align="center">Ini adalah paragraf dengan rata bagian tengah</p> 
      <p align="right">Ini adalah paragraf dengan rata bagian kanan</p> 
   </body>
	
</html>
```

Pada contoh diatas, `align="left"` adalah atribut element HTML. `align` merupakan nama atribut tersebut, sedangkan `left` menunjukkan nilai dari properti `align`.

{{< note >}}
Pada HTML5, jangan gunakan atribut `align` untuk meratakan teks paragraf. Gunakan saja properti CSS `text-align` untuk menggantikan atribut align.
{{< /note >}}

Semua element HTML bisa diberi atribut, namun ada beberapa atribut yang hanya cocok dipasangkan pada tag HTML tertentu. Misalnya atribut `href` hanya cocok dipasang pada tag `<a>` saja.

### Atribut HTML yang Biasa Digunakan

Berikut ini atribut HTML yang sering digunakan untuk membuat halaman website:

- id
- class
- style
- title
- href
- src
- alt
- disabled

## Penggunaan Atribut `href`

Atribut `href` digunakan oleh tag `<a>` untuk meletakkan link atau alamat sebuah halaman website.

Contoh:

```html
<a href="https://www.kodekit.id">Ini link website saya</a>
```

Untuk penjelasan lebih lengkap mengenai penggunaan tag `<a>` bisa kunjungi halaman referensi [tag a](/cssref/a/)

## Penggunaan Atribut `src`

Atribut `src` digunakan oleh tag `<img>` untuk menentukan sumber lokasi gambar.

Contoh:

```html
<img src="gambar_apel.jpg">
```

## Penggunaan Atribut `width` dan `height`

Selain atribut `src`, tag `<img>` juga memiliki atribut `width` untuk menentukan lebar gambar dan atribut `height` untuk menentukan tinggi gambar.

Contoh:

```html
<img src="gambar_apel.jpg" width="620" height="400">
```

Nilai dalam atribut `width` dan `height` ditentukan dengan _pixel_ secara _default_. Jadi width="620" artinya gambar memiliki lebar 620 pixel.

## Penggunaan Atribut `alt`

Atribut `alt` mendefinisikan alternatif teks yang akan ditampilkan pada halaman web jika gambar tidak dapat ditemukan.

Contoh:

```html
<img src="gambar_apel.jpg" alt="Gambar apel merah">
```

## Penggunaan Atribut `style`

Atribut `style` digunakan untuk menentukan style dari sebuah element, misalnya menentukan warna, ukuran, dan font pada teks.

Contoh:

```html
<p style="color:red">Ini sebuah paragraf</p>
```

## Penggunaan Atribut `lang`

Atribut `lang` digunakan untuk mendeklarasikan bahasa yang dipakai dalam dokumen HTML.

Atribut ini diletakkan pada awal tag `<html>`.

Menentukan bahasa dalam halaman HTML ini sangat penting untuk mesin pencari.

Contoh:

```html
<!DOCTYPE html>
<html lang="id">
<body>

...

</body>
</html>
```

## Penggunaan Atribut `title`

Pada contoh berikut, atribut `title` ditambahkan pada elemen `<p>`.

Nilai dari atribut `title` akan ditampilkan sebagai _tooltip_ saat mouse di arahkan ke elemen paragraf.

{{< code lang="html" >}}
<p title="halo, saya tooltip">
Ini contoh paragraf dengan atribut title. Coba arahkan cursor mouse ke elemen ini ya. 
</p>
{{< /code >}}


## Pakai Tanda Kutip Satu atau Tanda Kutip Dua?

Tanda kutip dua (_double quotes_) lebih sering dijumpai pada nilai atribut dalam dokumen HTML, tetapi sebenarnya tanda kutip satu (_single quotes_) juga valid untuk digunakan.

Lalu kapan harus menggunakan _single quotes_?

Pada situasi tertentu, kadang nilai atribut terdapat _double quotes_, sehingga kamu perlu menggunakan tanda kutip satu:

Contoh:

```html
<p title='Apel "Manalagi" Malang'></p>
```

Atau gunakan sebaliknya:

```html
<p title="Apel 'Manalagi' Malang"></p>
```

## Gunakan Huruf Kecil pada Atribut

Standar HTML5 tidak mengharuskan untuk memakai huruf kecil dalam penulisan atribut, misalnya atribut style bisa ditulis dengan `style` atau `STYLE`.

Namun W3C selalu menyarankan untuk menulisnya dengan huruf kecil. 

Dan di [kodekit.id](/) juga selalu menggunakan huruf kecil untuk menulis nama atribut.

Semoga dengan penjelasan diatas, kamu sudah menjadi paham tentang atribut HTML.

Selanjutnya kita akan membahas mengenai [cara membuat judul dengan HTML](/html/cara-membuat-judul-pada-html/).

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.