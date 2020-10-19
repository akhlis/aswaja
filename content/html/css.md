---
title: Cara Menambahkan CSS pada HTML
description: Cara Menambahkan CSS pada HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-menambahkan-css-pada-html
weight: 120
authors:
- akhlis
---

Dalam membuat website, HTML harus dibantu oleh CSS untuk mempercantik tampilan layoutnya.

Semua yang berurusan dengan warna, tata letak, ukuran font, membuat border, membuat tampilan responsive pada layar itu merupakan tugas dari CSS.

Karena tag HTML hanya berperan sebagai kerangka pembentuk halaman websitenya saja.

CSS sendiri kepanjangan dari _Cascading Style Sheets_.

CSS inilah yang mengontrol semua tampilan halaman website sehingga bisa memiliki desain yang unik.

Untuk menambahkan CSS pada HTML bisa dilakukan dengan 3 cara berikut:

- **Inline** - yaitu dengan cara memberi atribut `style` pada element HTML
- **Internal** - yaitu dengan menggunakan element `<style>` pada bagian `<head>`
- **External** - yaitu dengan menyisipkan file CSS dari luar atau terpisah dari file HTML

Dari ketiga cara tersebut, sebaiknya gunakan cara yang _external_ atau membuat file CSS terpisah jika ingin membuat website yang cukup komplek.

{{< tips >}}
Kamu bisa mempelajari CSS secara mendalam pada bab khusus tentang [Tutorial CSS](/css)
{{< /tips >}}

## Inline CSS

Inline CSS digunakan untuk memberi style yang berbeda pada satu _element_ HTML dengan cara memberi atribut `style`.

Contoh Inline CSS untuk memberi warna merah pada teks judul dengan elemen `<h1>`

```html
<h1 style="color:red;">Ini adalah teks judul berwarna merah</h1>
```

![membuat inline css pada elemen h1](/images/html/css-h1.png)

## Internal CSS

Internal CSS yaitu cara menyisipkan file CSS dengan menggunakan element `<style>` yang diletakkan diantara tag `<head>` dan `</head>`.

Internal CSS ini hanya digunakan untuk memberi style pada satu halaman HTML saja.

Berikut ini contohnya:

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            body {background-color: powderblue;}
            h1   {color: blue;}
            p    {color: red;}
        </style>
    </head>
    <body>

        <h1>Belajar CSS di Kodekit.id</h1>
        <p>Ini adalah contoh paragraf pertama saya</p>

    </body>
</html>
```

![membuat internal css](/images/html/css-internal.png)

## Eksternal CSS

Eksternal CSS yaitu menyisipkan file CSS yang dibuat terpisah dari file HTML.

Cara inilah yang paling sering dipakai dalam membuat website. 

Karena dengan membuat file CSS yang terpisah, maka file CSS ini bisa digunakan untuk memberi style pada banyak halaman HTML sekaligus.

Dan jika ingin mengubah tampilan semua halaman HTML tersebut, kamu cukup mengubahnya lewat satu file CSSnya saja.

Untuk menggunakan eksternal CSS bisa dengan cara menambahkan link diantara tag `<head>` dan `</head>` ke lokasi penyimpanan file CSS tersebut.

Agar lebih mudah memahaminya, buatlah file HTML dengan nama `index.html` seperti pada contoh berikut!

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>Ini adalah judul artikel</h1>
<p>Ini adalah paragraf pertama.</p>

</body>
</html>
```

Simpanlah file `index.html` tersebut di dalam folder `website` (buat folder website dulu jika belum ada) di local drive laptopmu.

Selanjutnya buatlah file baru, kemudian simpanlah file itu dengan nama `styles.css` dengan menggunakan ekstensi `.css`.

Nama file `styles.css` inilah yang nantinya dipanggil menggunakan link seperti pada contoh diatas.

```html
<link rel="stylesheet" href="styles.css">
```

Lalu tulislah kode CSS dibawah ini pada file `styles.css` tadi.

```css
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```

Dan seperti ini struktur foldernya:

{{< folder title="website" >}}
{{< folder-item label="website" id="1" link-1="index.html" link-2="styles.css" >}}
{{< /folder-item >}}
{{< /folder >}}

## Cara Memberi Style pada Teks

Untuk memberi style pada teks kamu bisa menggunakan properti CSS berikut:
- properti `color` digunakan untuk memberi warna pada font
- properti `font-family` digunakan untuk mendefinisikan jenis font yang digunakan
- properti `font-size` digunakan untuk mengatur ukuran teks
- properti `font-weight` digunakan untuk mengatur ketebalan teks

Contoh

```html
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p  {
  color: red;
  font-family: courier;
  font-size: 160%;
}
</style>
</head>
<body>

<h1>Belajar CSS di Kodekit.id</h1>
<p>Ini adalah paragraf pertama saya.</p>

</body>
</html>
```

![membuat style pada font](/images/html/css-font.png)

Semoga dengan penjelasan diatas, kamu sudah menjadi paham cara menambahkan CSS pada HTML.

Selanjutnya kita akan membahas mengenai [Cara Membuat Link pada HTML](/html/cara-membuat-link-pada-html/)

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.