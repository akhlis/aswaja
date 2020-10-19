---
title: Pengenalan CSS
description: Pengenalan CSS
date: "2020-01-04T10:34:07+07:00"
slug: pengenalan-css
weight: 10
authors:
- akhlis
---

Semua orang pasti menginginkan tampilan desain web yang menarik dan nyaman saat berkunjung ke sebuah website.

Karena itulah para pemilik website harus memperhatikan kenyamanan pengunjung dan harus merawat penampilan websitenya agar tetap _user friendly_.

Tugas mempercantik tampilan website ini biasanya akan diserahkan kepada para web developer yang bersedia kerja sama dengan pemilik website tersebut.

Sebagai calon web developer, kamu perlu tahu langkah apa yang harus dilakukan untuk mempercantik tampilan website tersebut.

{{< toc >}}

Seperti yang sudah saya bahas sebelumnya, untuk membuat website diperlukan minimal 3 bahasa yang harus digunakan. Yaitu HTML, CSS, dan JavaScript.

HTML digunakan untuk membuat markup atau kerangka sebuah halaman website.

Sedangkan CSS digunakan untuk mempercantik tampilan websitenya.

Pada tutorial kali ini saya akan membahas tentang CSS secara lengkap dan terstruktur.

{{< tips >}}
Tutorial lengkap tentang HTML bisa kamu pelajari di [Tutorial HTML Lengkap](/html/)
{{< /tips >}}

## Apa itu CSS?

Dikutip dari [Wikipedia](https://en.wikipedia.org/wiki/Cascading_Style_Sheets), CSS adalah _"Kumpulan kode yang digunakan untuk mendefinisikan desain dari bahasa markup"_, dimana bahasa markup ini salah satunya yaitu HTML.

Pengertian umumnya, CSS atau _Cascading Style Sheets_ merupakan sekumpulan baris kode yang digunakan untuk mengatur tampilan desain halaman website yang ditulis dalam bahasa markup seperti HTML.

CSS dibuat dan dikembangkan oleh W3C [Word Wide Web Consortium](https://www.w3.org/) pada tahun 1996 untuk alasan yang sederhana.

Pada masa itu HTML belum memiliki tags yang berfungsi untuk memformat halaman web.

Yang diperlukan hanya menulis markupnya saja.

Pada perkembangannya, Tag `<font>` diperkenalkan di HTML versi 3.2 yang memiliki fitur untuk mengatur warna, ukuran atau style teks.

Misalnya untuk membuat paragraf berwarna merah, bisa langsung menuliskan elemen `<font color="red">` di dalam elemen `<p>`.

Contoh:

```html
<p>
    <font size="3" color="red">Ini teks dengan warna merah</font>
</p>

<p>
    <font size="2" color="blue">Ini teks lain dengan warna biru!</font>
</p>

<p>
    <font face="verdana" color="green">Ini teks berwarna hijau dengan font family Verdana!</font>
</p>
```

Dan ini tampilannya di browser Chrome:

![elemen font](/images/css/elemen-font.png)

Namun seiring dengan berkembangnya website yang semakin kompleks, banyak masalah baru yang muncul.

Misalnya untuk mengubah warna teks berwarna merah menjadi warna biru dalam website yang memiliki lebih dari 100 halaman, web developer merasa kesulitan karena harus menulis ulang (_rewrite_) kode HTML satu persatu.

Sehingga akan memerlukan proses yang sangat panjang dan butuh waktu yang lama.

Untuk mengatasi masalah tersebut, W3C mengembangkan CSS untuk menyelesaikan masalah ini.

Dengan menggunakan CSS, tidak perlu lagi menulis ulang semua kode markup HTML untuk mengganti warna teks.

Cukup mengubah nilai properti CSS yang ada di file _stylesheet_ website tersebut.

Yuk rekap kode diatas menjadi seperti dibawah ini:

```html
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh CSS pada Elemen Paragraf</title>
    <style>
        .p__pertama {
            color: red;
            font-size: 16px;
        }

        .p__kedua {
            color: blue;
            font-size: 12px;
        }

        .p__ketiga {
            color: green;
            font-family: "Verdana", sans-serif;
        }

    </style>
</head>

<body>
    <p class="p__pertama">Ini teks dengan warna merah</p>

    <p class="p__kedua">Ini teks lain dengan warna biru!</p>

    <p class="p__ketiga">Ini teks berwarna hijau dengan font family Verdana!</p>
</body>

</html>
```

Pada contoh tersebut, saya menghilangkan tag `<font>` dan menggantikannya dengan selector _class_ yang diletakkan pada tag `<p>`.

Untuk mengatur format teks tinggal memanggil nama selector _class_ pada _stylesheets_ kemudian diberi nilai properti yang diperlukan.

Lebih sederhana dan efisien bukan?

Dan ini tampilannya di browser Chrome:

![css paragraf](/images/css/apa-itu-css-paragraf-1.png)

HTML dan CSS saat ini tidak bisa dipisahkan satu sama lain.

Karena HTML merupakan bahasa markup untuk membuat kerangka halaman website.

Sedangkan CSS digunakan untuk mengatur tata letak elemen, warna, ukuran, dan semua yang terkait dengan tampilan desain halaman website.

## Cara Kerja CSS

HTML dirancang hanya sebagai bahasa markup untuk mendeskripsikan konten website.

Untuk mengatur semua urusan tampilan halaman web, harus dibantu oleh CSS yang memang dirancang untuk memberi _style_ elemen HTML.

_Syntax_ CSS ini ditulis menggunakan bahasa Inggris sederhana yang memudahkan untuk dipahami fungsi-fungsinya.

Lalu bagaimana cara menerapkannya?

Struktur _syntax_ CSS terdiri dari _selector_ dan _declaration block_ yang memiliki aturan cukup sederhana sehingga mudah diingat.

_Selector_ CSS ini mengarah pada elemen HTML yang akan diberi _style_.

Sedangkan _declaration block_ merupakan baris kode yang digunakan untuk mendeklarasikan _style_ elemen dengan _property_ CSS.

Setiap _declaration block_ bisa memuat satu atau lebih _declaration_ yang menyertakan nama dan nilai properti CSS.

Masing-masing _declaration_ biasanya diakhiri dengan tanda titik koma (`;`).

Dalam satu _declaration block_ dikelilingi oleh tanda kurung kurawa (`{...}`).

{{< figure src="/images/css/css-rule.png" imgClass="mx-auto" alt="css rule" >}}

Contoh:

```html
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cara kerja CSS Selector</title>
    <style>
        div {
            padding: 1em 1.5em;
            background: #f7fafc;
            width: 500px;
            margin: 2em auto;
        }

        p {
            color: gray;
            font-size: 16px;
        }

        .paragraf {
            font-size: 24px;
            text-align: center;
            color: blue;
        }

        .teks__span {
            font-size: 14px;
            color: red;
        }
    </style>
</head>

<body>
    <div>

        <p>Ini paragraf pertama</p>

        <p class="paragraf">Ini contoh teks dengan warna <span class="teks__span">merah</span>!</p>

        <p>Ini paragraf lainnya</p>

    </div>
</body>

</html>
```

![contoh css rule](/images/css/contoh-css-rule.png)

## Cara Menambahkan CSS dengan Metode Inline, Internal, dan External CSS

Ada 3 metode untuk menambahkan _style_ CSS pada halaman website.

Masing-masing metode ini memiliki kelebihan dan kekurangannya.

Jadi dengan memahami 3 karakteristik metode ini, kamu bisa mempertimbangkan kapan harus menggunakan salah satunya dengan tepat.


### Metode Inline CSS

Metode Inline CSS adalah cara memberi _style_ pada _element_ HTML langsung pada tag pembuka elemen tersebut menggunakan atribut `style`.

Contoh:

```html {hl_lines=[11]}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Inline CSS</title>
</head>

<body>
    <p style="color: red;font-size:16px">Ini contoh halaman HTML dengan inline CSS!</p>
</body>

</html>
```

Pada contoh di atas, saya memberi _style_ warna merah dan ukuran font 16px pada elemen paragraf.

Kelebihan metode ini yaitu kamu bisa dengan cepat memberi _style_ elemen tanpa harus pindah ke file _stylesheet_ untuk melihat _preview_ halaman HTML.

Namun metode ini tidak direkomendasikan pada website yang cukup kompleks, karena harus menulis _style_ pada setiap elemen HTML.

Dan jika suatu saat ingin mengubah tampilan desain website, kamu akan mengalami kesulitan .

### Metode Internal CSS

Metode __Internal CSS__ disebut juga _Embedded Style Sheets_ yaitu memisahkan kode CSS dari tag HTML namun tetap dalam satu halaman HTML.

Dalam metode ini baris kode CSS diletakkan di antara tag `<style>` dan `</style>`.

Tag `<style>` ini harus berada pada bagian `<head>` dari halaman HTML.

Contoh:

```html {hl_lines=["8-13"]}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Internal CSS</title>
    <style>
        p {
            color: red;
            font-size: 16px;
        }
    </style>
</head>

<body>
    <p>Ini contoh halaman HTML dengan internal CSS!</p>
</body>

</html>
```

Kelebihan metode _internal CSS_ ini yaitu memudahkan dalam berbagi template HTML dengan orang lain untuk melihat _preview_ halaman web.

Sedangkan kelemahannya yaitu _style CSS_ akan didownload setiap kali halaman dimuat (di-_refresh_) sehingga bisa mengurangi kecepatan akses halaman.

Dan _style CSS_ tidak bisa digunakan pada halaman lain sehingga harus ditulis ulang pada setiap halaman HTML.

### Metode Eksternal CSS

Metode __eksternal CSS__ ini digunakan untuk mengatasi kelemahan dari metode __internal CSS__, yaitu harus menulis ulang kode CSS yang sama pada beberapa halaman HTML meskipun memiliki tampilan desain yang sama.

Pada metode __eksternal CSS__, baris kode CSS yang ada didalam tag `<style>` dipindahkan ke file _stylesheet_ baru yang berekstensi `.css`.

Dengan membuat file CSS yang terpisah, maka file CSS ini bisa digunakan untuk memberi style pada banyak halaman HTML sekaligus.

Dan jika ingin mengubah tampilan semua halaman HTML tersebut, kamu cukup mengubahnya lewat satu file CSSnya saja.

Untuk menggunakan eksternal CSS bisa dengan cara menambahkan link diantara tag `<head>` dan `</head>` ke lokasi penyimpanan file CSS tersebut.

Agar lebih mudah memahaminya, buatlah file HTML baru dengan nama `index.html` seperti pada contoh berikut!

```html {hl_lines=[9]}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Eksternal CSS</title>
    <!-- tambahkan tag link yang mengarah ke file stylesheet -->
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <p>Ini contoh halaman HTML dengan eksternal CSS!</p>
</body>

</html>
```

Simpanlah file `index.html` tersebut di dalam folder `website` (buat folder website dulu jika belum ada) di local drive laptopmu.

Selanjutnya buatlah file baru, kemudian simpanlah file itu dengan nama `styles.css` dengan menggunakan ekstensi `.css`.

Nama file `styles.css` inilah yang harus dipanggil menggunakan link seperti pada contoh diatas.

```html
<link rel="stylesheet" href="styles.css">
```

Lalu tulislah kode CSS dibawah ini pada file `styles.css` tadi.

```css
body {
    background-color: powderblue;
}
p {
    color: red;
    font-size: 16px;
}
```

Dan seperti ini struktur foldernya:

{{< folder title="website" >}}
{{< folder-item label="website" id="1" link-1="index.html" link-2="styles.css" >}}
{{< /folder-item >}}
{{< /folder >}}