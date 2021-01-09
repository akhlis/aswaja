---
title: Cara Membuat Link pada HTML
description: Cara Membuat Link pada HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-membuat-link-pada-html
weight: 140
authors:
- akhlis
thumbnail: /uploads/blog-10-2-465x290.jpg
---

Hampir semua halaman website pasti terdapat link atau hyperlink.

Tujuan dari link ini adalah untuk menghubungkan antara halaman website yang satu dengan lainnya dengan mudah.

Cukup dengan mengklik link tersebut maka halaman baru akan terbuka.

Untuk membuat link, kamu bisa menggunakan tag `<a>`.

Begini syntaksnya:

```html
<a href="url">teks link</a>
```

Contoh

```html
<a href="https://www.kodekit.id/html/">Kunjungi Tutorial HTML kami</a>
```

Atribut `href` digunakan untuk menunjukkan alamat tujuan sebuah link yaitu [https://www.kodekit.id/html](https://www.kodekit.id/html)

{{< tips >}}
Penjelasan lengkap tentang tag `<a>` bisa kamu pelajari di referensi [tag a](/element/a/)
{{< /tips >}}


## Cara Membuat Link Lokal

Pada contoh diatas menggunakan URL _absolute_ atau alamat website yang lengkap.

Nah yang dimaksud dengan link lokal yaitu membuat link ke halaman lain yang masih dalam satu website yang sama.

Link lokal biasa disebut juga dengan URL _relative_ (tanpa menggunakan https://www...).

Berikut ini contoh cara membuat link ke halaman yang berada didalam folder `docs` dalam sebuah website.

```html
<a href="/docs/">Tutorial HTML</a>
```

Dan ini cara membuat link ke file `styles.css` yang ada didalam folder `css` dengan tag `link`.

```html
<link rel="stylesheet" href="/css/styles.css">
```

Seperti ini struktur foldernya:

{{< folder title="website" >}}
{{< folder-item label="website" id="1" link-1="index.html" >}}
{{< folder-item label="css" id="1-1" link-1="styles.css" >}}
{{< /folder-item >}}
{{< /folder-item >}}
{{< /folder >}}

Untuk membuat link ke halaman lain yang berada didalam folder yang sama maka `href=` langsung diarahkan ke nama file yang dituju.

Contoh:

```html
<a href="/belajar-coding.html">Tutorial HTML</a>
```

## Cara Mengganti Warna Link

Secara default web browser, teks link akan ditampilkan dengan warna biru disertai dengan garis bawah.

![warna link secara default](/images/html/link-color.png)

Untuk mengubah warna link, kamu bisa mengikuti contoh berikut:

```html
<!DOCTYPE html>
<html>
<head>
<style>
a:link {
  color: dodgerblue;
  text-decoration: none;
}
a:visited {
  color: pink;
}
a:hover {
  color: red;
  text-decoration: underline;
}
a:active {
  color: yellow;
}
</style>
</head>
<body>

<h2>Warna Link</h2>

<p>Kamu dapat mengubah warna link defaul</p>

<a href="/html-image/" target="_blank">HTML Images</a> 

</body>
</html>
```

![warna link secara default](/images/html/link-color-blue.png)

## Cara Membuat Link Button (Tombol Link)

Link button mudah sekali dijumpai pada website atau landing page yang menawarkan sebuah produk tertentu.

Biasanya link button ini kalau diklik maka akan diarahkan ke halaman detail produk tersebut.

Nah untuk membuat link button, caranya bisa menggunakan CSS seperti pada contoh berikut:

```html
<!DOCTYPE html>
<html>
<head>
<style>
a:link, a:visited {
  background-color: rgb(79, 206, 118);
  color: white;
  padding: 15px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 6px;
}

a:hover, a:active {
  background-color: dodgerblue;
}
</style>
</head>
<body>

<h2>Link Button</h2>
<p>Silakan tekan tombol link ini:</p>
<a href="/produk" target="_blank">Order Sekarang</a>

</body>
</html>
```

{{< preview >}}
<h2>Link Button</h2>
<p class="mb-4">Silakan tekan tombol link ini:</p>
<a class="text-white inline-block text-center bg-green-A400 rounded-lg py-1 px-6 hover:no-underline hover:bg-green-A200" href="/produk" target="_blank">Order Sekarang</a>
{{< /preview >}}

Dan seperti ini tampilannya di browser Chrome:

![cara membuat link button](/images/html/link-button.png)

Semoga dengan penjelasan diatas, kamu sudah menjadi paham cara membuat link pada HTML.

Selanjutnya kita akan membahas mengenai [Cara Menambahkan Gambar pada HTML](/html/cara-menambahkan-gambar-pada-html/)

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.
