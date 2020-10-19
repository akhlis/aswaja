---
title: "Cara Membuat Background dengan CSS"
description: "Cara membuat background dengan CSS"
date: "2020-01-07T09:34:07+07:00"
slug: cara-membuat-background-dengan-css
weight: 50
authors:
- akhlis
---

Agar tampilan website lebih menarik, bagian-bagian tertentu pada halaman web biasanya akan diberi `background` berupa warna maupun gambar.

Penggunaan _background_ yang tepat, bisa membuat pengunjung web betah berlama-lama menikmati konten yang disajikannya.

Lalu bagaimana cara menambahkan background pada elemen web tersebut?

Untuk menambahkan background pada elemen HTML, kamu bisa menggunakan property CSS `background`.

Property `background` ini _shorthand_ atau singkatan dari beberapa property yang ditulis dalam satu _declaration_.

Seperti ini:
```css
body {
  background:
     url(texture.jpg)    /* image */
     top center / 400px 200px /* position / size */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box              /* clip */
     red;                     /* color */
}
```

Property `background` terdiri dari 8 properti CSS lainnya, yaitu:

- [background-image](/cssref/background-image/)
- [background-position](/cssref/background-position/)
- [background-size](/cssref/background-size/)
- [background-repeat](/cssref/background-repeat/)
- [background-attachment](/cssref/background-attachment/)
- [background-origin](/cssref/background-origin/)
- [background-clip](/cssref/background-clip/)
- [background-color](/cssref/background-color/)

Kamu bisa menggunakan kombinasi dari properti di atas untuk mengatur background elemen.

Jika properti di atas tidak ditentukan pada property `background`, maka akan digunakan nilai default browser.

{{< toc >}}

## Cara Memberi Warna Background Elemen dengan Property CSS `background-color`

Property [background-color](/cssref/background-color/) digunakan untuk memberi warna elemen HTML.

Kamu bisa menggunakan properti ini untuk mengatur warna latar belakang seluruh halaman atau bagian tertentu dari halaman web.

Berikut ini contoh cara memberi background halaman web secara penuh.

```html {hl_lines=[11]}
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tutorial CSS: background-color</title>
    <style>
        body {
            padding: 1.5em 2em;
            background-color: #BBDEFB;
        }
    </style>
</head>

<body>
    <h2>Tutorial CSS Background: background-color</h2>
</body>

</html>
```

![background color](/images/css/css-background-color.png)

{{< tryit-button link="/tutorial-css-background-color" >}}

Sekarang kita beri warna background pada elemen judul.

Jadi begini kode CSSnya:
```css
body {
    padding: 1.5em 2em;
    background-color: #BBDEFB;
}

h2 {
    padding: 1em;
    background-color: cornflowerblue;
}
```
​
![background color](/images/css/css-background-color-2.png)

## Cara Memberi Background Gambar dengan Property CSS `background-image`

Kamu bisa menggunakan properti CSS [background-image](/cssref/background-image/) untuk menetapkan gambar sebagai latar belakang elemen.

Secara default, gambar diulang sehingga menutupi seluruh elemen.

Contoh:
```css
body {
    background-image: url("paralayang.jpg");
}
```

![background image](/images/css/background-image-2.png)

Kamu juga dapat menautkan gambar atau gift dari website lain dengan menggunakan tautannya.

Seperti ini:
```css
body {
  background-image: url("https://mdn.mozillademos.org/files/11983/starsolid.gif");
}
```

{{< tryit-button link="/tutorial-css-background-image" >}}

Saat menggunakan nilai `url()`, kamu memiliki 3 cara:
- Jalur __relative__ berdasarkan domain root dari file CSS, dimulai dengan garis miring (/) seperti `url(/path/to/image.png)`
- Jalur __relative__ berdasarkan direktori langsung dari file CSS, tanpa garis miring seperti `url(path/to/image.png)`
- URL __absolute__, jika kamu menautkan gambar dari website lain seperti `url(http://example.com/path/to/image.png)`

### Cara Menggunakan Property CSS `background-repeat`

Pengaturan default browser akan mengulang gambar backgrounnd secara vertikal (atas dan bawah) dan secara horizontal (melintasi halaman web).

Kamu bisa mengatur pengulangan gambar _background_ secara vertikal atau horizontal saja dengan property CSS [background-repeat](/cssref/background-repeat/).

Contoh untuk mengulang gambar secara vertikal dengan `background-repeat: repeat-y;`

```css
body {
  background-image: url("paralayang.jpg");
  background-repeat: repeat-y;
}
```

![background repeat](/images/css/background-repeat-y.png)

{{< tryit-button link="/tutorial-css-background-repeat-y" >}}

Contoh untuk mengulang gambar secara horizontal dengan `background-repeat: repeat-x;`

```css
body {
  background-image: url("paralayang.jpg");
  background-repeat: repeat-x;
}
```

![background repeat](/images/css/background-repeat-x.png)

{{< tryit-button link="/tutorial-css-background-repeat-x" >}}

Kamu juga bisa mengatur gambar agar tidak terulang dengan menggunakan `background-repeat: no-repeat;`

```css
body {
  background-image: url("paralayang.jpg");
  background-repeat: no-repeat;
}
```

![background repeat](/images/css/background-repeat-no-repeat.png)

{{< tryit-button link="/tutorial-css-background-no-repeat" >}}

{{< tips >}}
Properti `background-repeat` bisa kamu pelajari secara lebih detail di referensi property CSS [background-repeat](/cssref/background-repeat/).
{{< /tips >}}

### Cara Mengatur Lokasi Gambar pada Background dengan Property `background-position`

Kamu bisa mengatur posisi gambar pada background halaman web dengan properti `background-position`

```css
body {
  background-image: url("paralayang.jpg");
  background-repeat: no-repeat;
  background-position: right top;
}
```

![background position](/images/css/background-position.png)

{{< tryit-button link="/tutorial-css-background-position" >}}

{{< tips >}}
Properti `background-position` bisa kamu pelajari secara lebih detail di referensi property CSS [background-position](/cssref/background-position/).
{{< /tips >}}

## Cara Membuat Background Image Menjadi Responsive

Memiliki background dengan gambar yang besar menjadi populer digunakan pada website-website perusahaan saat ini.

Namun untuk menerapkan background dengan gambar yang besar tidak mudah dilakukan oleh para pemula karena butuh trik CSS khusus.

Tanpa trik CSS ini, gambar background akan menjadi berantakan jika halaman website dimuat pada perangkat mobile.

Trik CSS ini digunakan untuk membuat background menjadi responsive pada semua layar  sesuai aspek rasio.

Bagaimana cara membuatnya?

Yang pertama kamu lakukan yaitu harus membuat elemen _container_ background menggunakan tag `div` dengan _position_ __relative__. Misalnya: `div class="img__wrapper"></div>`

Lalu berilah style CSS pada elemen _container_ tersebut dengan kode berikut:

```css
.img__wrapper {
    position: relative;
    width: 100%;
    padding-top: 75%;
}
```

Selanjutnya buat lagi elemen baru menggunakan tag `div` dengan _position_ __absolute__ didalam elemen sebelumnya. Misalnya: `<div class="img__bg"></div>`.

Kemudian berilah kode CSS berikut ini:

```css
.img__bg {
    /* Menentukan lokasi gambar */
    background-image: url("background-photo.jpg");
    /* Posisi gambar tepat ditengah secara vertikal maupun horizontal */
    background-position: center center;
    /* Agar gambar background tidak berulang */
    background-repeat: no-repeat;
    /* Agar gambar berubah ukuran sesuai ukuran container */
    background-size: cover;
    background-color: bisque;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```

Alternatif menggunakan _shorthand_ properti `background`:

```css {hl_lines=[2]}
.img__bg {
    background: url(background-photo.jpg) center center cover no-repeat;
    background-color: bisque;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="img__wrapper">
    <div class="img__bg">
    </div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.img__wrapper {
    position: relative;
    width: 100%;
    padding-top: 75%;
}

.img__bg {
    background-image: url("/images/css/paragliding.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: bisque;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="img__wrapper">
    <div class="img__bg">
    </div>
</div>
<style>
.img__wrapper {
    position: relative;
    width: 100%;
    padding-top: 75%;
}
.img__bg {
    background-image: url("/images/css/paragliding.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: bisque;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>
{{< /editor-preview >}}
{{< /editor >}}

{{< tryit-button link="/tutorial-css-background-responsive" >}}