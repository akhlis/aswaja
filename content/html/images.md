---
title: Cara Menambahkan Gambar pada HTML
description: Cara Menambahkan Gambar pada HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-menambahkan-gambar-pada-html
weight: 150
authors:
- akhlis
thumbnail: /uploads/blog-10-2-465x290.jpg
---

Salah satu elemen penting yang bisa meningkatkan ketertarikan pengunjung pada website yaitu dengan menggunakan gambar.

Pemilihan gambar yang tepat juga akan membuat tampilan desain website menjadi semakin menarik.

Nah untuk menambahkan gambar pada HTML kamu bisa menggunakan tag `<img>`

Yang perlu diingat, tag `<img>` ini merupakan tag kosong dan hanya memiliki atribut saja tanpa memiliki tag penutup.

Begini sintaksnya:

```html
<img src="url">
```
{{< tips >}}
Penjelasan lengkap tentang tag `<img>` bisa kamu pelajari di referensi [tag img](/element/img/)
{{< /tips >}}

## Atribut `src` pada tag `<img>`

Atribut `src` digunakan untuk menentukan _URL_ atau lokasi gambar berada.

Lokasi gambar bisa diambil dari folder lokal dalam website tersebut atau bisa juga diambil dari alamat website yang lain.

Untuk menambahkan gambar dari folder lokal caranya sama seperti yang sudah dibahas pada tutorial [cara membuat link pada HTML](/html/cara-membuat-link-pada-html/)

Misalnya jika file `nama_gambar.jpg` berada dalam folder yang sama dengan file `index.html`, maka pada atribut `src` langsung diisi dengan nama file gambar tersebut.

```bash
.
├── index.html
└── nama_gambar.jpg
```

{{< folder title="website" >}}
{{< folder-item label="website" id="1" link-1="index.html" link-2="nama_gambar.jpg" >}}
{{< /folder-item >}}
{{< /folder >}}

```html
<img src="nama_gambar.jpg">
```

Contoh:

```html
<!DOCTYPE html>
<html>
<head>
<title>Codingku.id</title>
</head>
<body>

<p>Cara menambahkan gambar pada HTML</p>
<img src="jaket_muslimah.jpg" alt="Jaket muslimah" width="200" height="200">

</body>
</html>
```

![menambahkan gambar dari folder yang sama](/images/html/image-src-lokal.png)

Sedangkan jika file `nama_gambar.jpg` berada dalam folder yang terpisah dengan file `index.html`, maka pada atribut `src` harus diisi dengan nama foldernya dulu baru diikuti dengan nama file gambar tersebut.

```bash
.
├── index.html
└── img/
    └── nama_gambar.jpg
```


Seperti ini struktur foldernya:

{{< folder title="website" >}}
{{< folder-item label="website" id="1" link-1="index.html" >}}
{{< folder-item label="img" id="1-1" link-1="nama_gambar.jpg" >}}
{{< /folder-item >}}
{{< /folder-item >}}
{{< /folder >}}

```html
<img src="img/nama_gambar.jpg">
```

Ingat! jangan lupa untuk memberi ekstensi gambar dengan benar pada atribut `src` agar web browser bisa mengenalinya.

Ada banyak format gambar yang didukung oleh HTML seperti GIF, PNG, JPG, JPEG, WMF, PCX, BMP, TIFF, WEBP dan lain sebagainya.

Namun format gambar yang paling sering dipakai pada website yaitu PNG dan JPG/JPEG karena dikenali oleh mayoritas web browser saat ini.


### Menambahkan Gambar dari Website Lain

Selain diambil dari folder lokal, kamu juga bisa menambahkan gambar pada HTML dari website lain.

Caranya dengan menuliskan lokasi direktori gambar tersebut secara lengkap pada atribut `src`.

Tapi syaratnya harus tersambung dengan koneksi internet agar gambarnya bisa ditampilkan.

Pada contoh ini saya mengambil gambar dari website [Pixabay](https://pixabay.com/photos/flowers-butterflies-beautiful-19830/)

Untuk mengetahui lokasi direktori gambarnya, silakan klik kanan pada gambar lalu pilih `copy image address`.

![menambahkan gambar dari website lain](/images/html/image-src-eksternal.png)

Kemudian taruh lokasi direktori gambar tersebut pada atribut `src`.

```html
<!DOCTYPE html>
<html>
<head>
<title>Codingku.id</title>
</head>
<body>

<p>Cara menambahkan gambar dari website lain pada HTML</p>
<img src="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg" alt="Kupu-kupu dan bunga" width="300">

</body>
</html>
```

Dan ini tampilannya jika sudah dijalankan pada web browser.

![menambahkan gambar dari website lain](/images/html/image-src-eksternal-2.png)


## Atribut `alt` pada tag `<img>`

Atribut `alt` pada tag `<img>` digunakan untuk memberi keterangan pada gambar.

Teks keterangan ini akan ditampilkan pada web browser sebagai pengganti gambar jika gambar tidak bisa ditemukan.

Penyebabnya yaitu lokasi direktori gambar salah, format gambar tidak didukung atau gangguan koneksi internet.

Contoh:

```html
<img src="bunga.jpg" alt="Kupu-kupu dan bunga">
```

Dan ini yang ditampilkan pada web browser jika fila gambar tidak ditemukan.

![gambar tidak ditemukan](/images/html/image-alt.png)

Teks keterangan pada atribut `alt` ini juga digunakan sebagai kata kunci oleh mesin pencari Google untuk mengenali sebuah gambar.

Jadi usahakan untuk selalu memberi teks keterangan yang relevan dengan gambar karena sangat berpengaruh terhadap SEO.

{{< note >}}
Atribut `alt` pada tag `<img>` ini tidak boleh ditinggalkan
{{< /note >}}

## Tentukan Ukuran Gambar dengan Atribut `width`, `height` atau `style`

Jangan lupa untuk menentukan lebar dan tinggi gambar pada halaman HTML dengan menggunakan atribut `width`, `height` atau `style`.

Contoh:

```html
<img src="img_mawar.jpg" alt="Bunga mawar" width="400" height="250">
```

Atribut `width` dan `height` selalu mendefinisikan ukuran gambar dalam ukuran `pixel`.

Contoh dengan atribut `style`:

```html
<img src="img_mawar.jpg" alt="Bunga mawar" style="width:128px;height:128px;">
```

Atribut `width`, `height` atau `style` semuanya valid digunakan pada HTML5, namun sebaiknya gunakan atribut `style` untuk mencegah perubahan ukuran gambar oleh css.

Semoga dengan penjelasan diatas, kamu sudah menjadi paham cara menambahkan gambar pada HTML

Selanjutnya kita akan membahas mengenai [Cara Membuat Tabel pada Elemen HTML](/html/cara-membuat-tabel-pada-elemen-html/)

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.