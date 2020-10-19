---
title: Cara Membuat Tabel pada Elemen HTML
description: Cara Membuat Tabel pada Elemen HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-membuat-tabel-pada-elemen-html
weight: 160
authors:
- akhlis
---

Jika kamu berkunjung ke website yang mengulas tentang _review_ produk, biasanya kamu akan menjumpai tabel harga dan spesifikasi produk tersebut.

Penggunaan tabel ini sangat bermanfaat untuk menampilkan data yang terstruktur sehingga mudah dipahami oleh para pembaca.

Misalnya untuk menampilkan daftar tipe smartphone, harga, dan spesifikasinya.

Pada tutorial ini, saya akan membahas cara membuat tabel pada halaman website dengan tag `<table>`.

{{< toc >}}

## Cara Membuat Tabel HTML dengan tag `table`, `tr`, dan `td`

Untuk membuat tabel pada halaman website, minimal kita membutuhkan 3 tag HTML. Yaitu tag `<table>`, `<tr>`, dan `<td>`.

- Tag `<table>` digunakan untuk mendefinisikan tabel dua dimensi yang terdiri dari baris dan kolom sel yang berisi data.
- Tag `<tr>` merupakan singkatan dari _table row_ yang mewakili baris sel dalam tabel HTML.
- Tag `<td>` merupakan singkatan dari _table data_, digunakan untuk menginput data ke tabel.

{{< tips >}}
Penjelasan secara lengkap tentang tag tersebut bisa kamu pelajari di referensi tag [table](/element/table/), [tr](/element/tr/), dan [td](/element/td/). 
{{< /tips >}}

Agar lebih mudah memahaminya, yuk amati contoh tabel HTML berikut:

{{< code lang="html" >}}
<table border="11">
    <tr>
        <th>Judul Tabel 1</th>
        <th>Judul Tabel 2</th>
    </tr>
    <tr>
        <td>kolom 1</td>
        <td>kolom 2</td>
    </tr>
    <tr>
        <td>kolom 3</td>
        <td>kolom 4</td>
    </tr>
</table>
{{< /code >}}

Dan ini tampilannya di web browser Chrome

![contoh tabel](/images/html/tabel-1.png)

Perhatikan pada tag `<table>` di atas terdapat atribut `border="1"`.

Atribut border ini digunakan untuk memberikan nilai garis tepi dari tabel.

Secara default, nilai `border="1"` ini menggunakan ukuran _pixel_. Sehingga web browser akan merender garis tepi pada tabel sebesar 1 _pixel_.

Kalau atribut border ini tidak disertakan pada tag `<table>`, maka tabel tidak memiliki garis tepi (border).

## Membuat Garis Tepi dengan Atribut `border` pada Tabel

Pada contoh sebelumnya, saya menggunakan atribut `border` pada tag `<table>` untuk mengatur ketebalan garis tepi (border) dari tabel.

Jika atribut `border` ini dihilangkan, maka web browser akan menampilkan tabel tanpa garis tepi.

Nilai dari atribut ini berupa angka dengan satuan _pixel_.

Jadi, jika kamu memberi nilai `border="8"`, secara otomatis web browser akan menampilkan garis tepi sebesar _8 pxel_ pada semua sisi tabel.

Agar lebih jelas perbedaanya, yuk amati contoh berikut:
```html
<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Atribut Border pada Tabel</title>
    <link rel="stylesheet" href="">
</head>

<body>
    <table border="0">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
    </table>
    <br />

    <table border="1">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
    </table>
    <br />

    <table border="8">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
    </table>
    <script src=""></script>
</body>

</html>
```

![atribut border pada tabel](/images/html/atribut-border-tabel.png)

Pada contoh tersebut, tabel pertama saya beri nilai `0` pada atribut __border__, sehingga tabel seolah-olah tidak memiliki garis tepi.

### Membuat Garis Tepi dengan Property CSS `border` pada Tabel

Pada HTML5 memang tersedia atribut `border` yang bisa digunakan untuk membuat garis tepi pada tabel.

Namun untuk tujuan desain, sebaiknya gunakan CSS sebagai alternatif untuk memberi garis tepi pada tabel.

Untuk memberi garis tepi dengan CSS, masing-masing elemen `table`, `th`, dan `td` harus ditentukan nilai bordernya dengan property CSS `border`.

Contoh:
```css
<style>
    table, th, td {
        border: 1px solid orange;
    }
</style>
```

Dan ini contoh tabel dengan garis tepi yang menggunakan CSS.

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Border dengan CSS pada Tabel</title>
    <style>
        table,
        th,
        td {
            border: 1px solid orange;
        }

    </style>
</head>

<body>
    <table>
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
</body>

</html>
```

Dan ini tampilannya di browser Chrome:

![Garis tepi pada tabel dengan CSS](/images/html/border-css-pada-tabel.png/)

## Mengatur Jarak Kolom Tabel HTML dengan Atribut `cellspacing`

Atribut `cellspacing` digunakan untuk mengatur jarak antara garis tepi (border) bagian dalam dan luar tabel HTML.

Nilai dari atribut ini berupa angka dengan satuan _pixel_.

Jika kamu memberi nilai `cellspacing="1"`, maka web browser akan menampilkan jarak sebesar __1 pixel__ diantara garis border tabel.

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penggunaan atribut cellspacing dalam Tabel</title>
</head>

<body>
    <table border="1" cellspacing="0">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
    <br />

    <table border="1" cellspacing="5">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
</body>

</html>
```

Dan ini tampilannya di browser Chrome:

![Penggunaan atribut cellspacing dalam Tabel](/images/html/atribut-cellspacing-tabel.png/)

### Mengatur Jarak Kolom Tabel HTML dengan Property CSS `border-collapse`

Secara default, kolom tabel yang berdekatan akan memiliki batas yang berbeda. Sehingga tampilan garis tepi seolah-olah terlihat ganda (double border).

Untuk mengatur jarak antar kolom tabel ini, selain menggunakan atribut `cellspacing` seperti yang saya sebutkan di atas, kamu juga bisa menggunakan properti CSS `border-collapse: collapse;`

Dengan properti CSS ini, garis tepi atau border tabel akan terlihat menyatu.

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Border Collapse dengan CSS pada Tabel</title>
    <style>
        table {
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid orange;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
</body>

</html>
```
Dan ini tampilannya di browser Chrome:

![Garis tepi pada tabel dengan CSS border collapse](/images/html/tabel-border-collapse.png/)

## Cara Mengatur Padding Tabel dengan Atribut `cellpadding`

Atribut `cellpadding` digunakan untuk mengatur jarak dari border sisi dalam tabel dengan isi teks tabel itu sendiri.

Nilai dari atribut ini berupa angka dengan satuan pixel.

Jika kamu memberi nilai cellpadding="4", maka web browser akan menampilkan jarak sebesar 4 pixel dari border sisi dalam tabel dengan isi teks tabel.

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penggunaan atribut cellpadding dalam Tabel</title>
</head>

<body>
    <table border="1" cellpadding="1">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
    <br />

    <table border="1" cellpadding="10">
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
</body>

</html>
```

Dan ini tampilannya di browser Chrome:

![Penggunaan atribut cellpadding dalam Tabel](/images/html/atribut-cellpadding-tabel.png/)

### Cara Mengatur Padding Tabel dengan Property CSS `padding`

Selain menggunakan atribut `cellpadding`, kamu juga bisa menggunakan property CSS `padding` sebagai alternatif untuk mengatur _padding_ kolom tabel HTML.

Misalnya, untuk mengatur padding kolom tabel menjadi __10 pixel__, tambahkan property CSS `padding: 10px;` pada _style sheet_.

```css
padding: 10px;
```

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penggunaan padding CSS dalam Tabel</title>
    <style>
        table {
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid orange;
            padding: 10px;
        }

    </style>
</head>

<body>
    <table>
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
        </tr>
    </table>
</body>

</html>
```

Dan ini tampilannya di browser Chrome:

![Penggunaan properti padding dalam Tabel](/images/html/padding-css-tabel.png/)

## Cara Menggabungkan Sel Tabel dengan Atribut `rowspan` dan `colspan`

Pada tampilan tabel yang komplek, biasanya dijumpai beberapa jumlah kolom atau baris sel tabel yang digabung menjadi satu.

Kalau kamu menggunakan aplikasi _MS Exel_ atau _Spreadsheets_, bisa menggunakan menu `merge cells` untuk menggabungkan beberapa kolom tabel.

Nah untuk menggabungkan sel tabel pada HTML, kamu bisa menggunakan atribut `rowspan` dan `colspan`.

### Fungsi Atribut `rowspan` dan `colspan`

Atribut `rowspan` digunakan untuk menentukan berapa banyak baris sel yang harus direntangkan.

Atribut `colspan` digunakan untuk menentukan berapa banyak kolom sel yang harus direntangkan.

Kedua atribut ini diletakkan pada tag `td` dalam sebuah tabel.

Agar lebih mudah memahaminya, yuk tulis ulang kode berikut ini dengan teks editor di laptopmu.

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Penggunaan Atribut rowspan dan colspan dalam Tabel</title>
    <style>
        table {
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid orange;
            padding: 10px;
        }

    </style>
</head>

<body>
    <table>
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td colspan="3">Baris 1, Kolom 2, 3, & 4</td>
        </tr>
        <tr>
            <td rowspan="2">Baris 2 & 3, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
            <td>Baris 2, Kolom 4</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
            <td>Baris 3, Kolom 4</td>
        </tr>
    </table>
</body>

</html>
```
![Penggunaan atribut rowspan dan colspan dalam Tabel](/images/html/atribut-colspan-rowspan-tabel.png/)

Pada contoh di atas, tag `td` yang memiliki atribut `colspan` akan menyatukan kolom tabel yang ada disebelahnya. 

Sedangkan tag `td` yang memiliki atribut `rowspan` akan menyatukan sel tabel dengan baris sel tabel lain yang ada di bawahnya.

Kedua atribut ini membutuhkan nilai (value) untuk menentukan banyaknya sel tabel yang akan digabungkan.

Misalnya tag `td` dengan atribut `colspan="3"` akan menggabungkan 3 kolom yang sejajar menjadi 1 sel tabel.

Dan tag `td` dengan atribut `rowspan="2"` akan menggabungkan 2 baris sel tabel menjadi 1 sel tabel.