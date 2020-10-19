---
title: "Cara Mengatur Tampilan Tabel dengan CSS"
description: "Cara Mengatur Tampilan Tabel dengan CSS"
date: "2020-01-19T16:49:36+07:00"
slug: cara-mengatur-tampilan-tabel-dengan-css
weight: 170
authors:
- akhlis
---

Tabel sering digunakan pada website untuk menampilkan data yang terstruktur sehingga mudah dipahami oleh pembaca.

Misalnya untuk menampilkan daftar brand smartphone beserta tipe, harga, dan spesifikasinya.

Untuk membuat tabel, silahkan ikuti tutorial [cara membuat tabel di HTML](/html/cara-membuat-tabel-pada-elemen-html/).

Selanjutnya kamu bisa mengatur tampilan tabel dengan menggunakan CSS seperti pada panduan berikut.

{{< toc >}}

## Membuat Border pada Tabel dengan CSS

Border pada tabel HTML bisa dibuat dengan 2 cara, yaitu:
- Dengan menambahkan atribut `border` pada tag `<table>`.
- Dengan menggunakan property CSS `border`.

Untuk cara yang pertama sudah dijelaskan pada tutorial [cara membuat tabel di HTML](/html/cara-membuat-tabel-pada-elemen-html/).

Sedangkan untuk cara yang kedua, kamu bisa membuat border pada tabel dengan memberi properti CSS pada masing-masing tag `table`, `th`, dan `td`.

Pada properti `border` tersebut kamu bisa memberinya nilai `angka` dengan satuan _pixel_, _em_, _rem_, dll.

```css
table, th, td {
    border: 1px solid orange;
}
```

{{< tips >}}
Agar lebih jelas mengenai properti `border`, kamu bisa pelajari dulu materi tentang [cara membuat border dengan CSS](/css/cara-membuat-border-dengan-css/).
{{< /tips >}}

Contoh Tabel HTML sebelum diberi _style_:

```html
<!DOCTYPE html>
<html lang="">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contoh Border dengan CSS pada Tabel</title>
    <style>
        /* beri style tabel disini */
    </style>
</head>

<body>
    <table>
        <tr>
            <th>Judul Kolom 1</th>
            <th>Judul Kolom 2</th>
            <th>Judul Kolom 3</th>
        </tr>
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

Ini tampilannya di browser Chrome

![tabel tanpa border CSS](/images/css/table/tabel-css.png "tabel tanpa border css")

Pada contoh di atas, tabel tidak memiliki border karena belum diberi _style_.

Sekarang mari kita beri _style_ berikut:

```css
<style>
    /* beri style tabel disini */
    table, 
    th, 
    td {
        border: 1px solid orange;
    }
</style>
```

Dan ini hasil akhirnya di browser Chrome:

![Membuat border pada tabel dengan CSS](/images/css/table/border-pada-tabel-dengan-css.png "membuat border pada tabel dengan css")

Coba perhatikan tabel pada contoh di atas!

Tabel di atas memiliki __border ganda__ karena kedua elemen `table` dan `td` sama-sama memiliki border yang terpisah.

Lalu bagaimana cara menggabungkan border tersebut menjadi satu?

Ikuti panduan berikut:

## Menghilangkan Jarak Tabel atau Menggabungkan Border Tabel

Secara default, kolom tabel yang berdekatan akan memiliki batas yang berbeda. Sehingga tampilan border seolah-olah terlihat ganda (_double border_).

Untuk menghilangkan jarak antar kolom tabel ini, kamu bisa menggunakan properti CSS `border-collapse: collapse;`

Dengan properti CSS ini, border tabel akan terlihat menyatu.

Sekarang mari kita ubah _style_ pada contoh di atas dengan kode berikut:
```css
<style>
    /* beri style tabel disini */
    table {
        border-collapse: collapse;
    }

    table, 
    th, 
    td {
        border: 1px solid orange;
    }
</style>
```

Dan ini hasilnya di browser Chrome

![Menggabungkan border tabel dengan CSS](/images/css/table/border-collapse-tabel-css.png "menggabungkan border tabel dengan css")

Jika kamu ingin menampilkan border pada tabel luarnya saja, maka yang perlu diberi style border hanya pada tag `table`.

```css
<style>
    /* beri style tabel disini */
    table {
        border: 1px solid orange;
    }
</style>
```

Tampilan di browser Chrome

![Border hanya pada tabel luar](/images/css/table/border-hanya-pada-tabel-luar.png "border hanya pada tabel luar")

## Mengatur Lebar dan Tinggi Tabel

Lebar dan tinggi tabel HTML ditentukan menggunakan properti CSS [width](/cssref/width/) dan [height](/cssref/height/).

Sekarang kita akan mengubah lebar tabel pada contoh di atas menjadi 100%, dan tinggi elemen `<th>` 50px.

```css
table {
  width: 100%;
}

th {
  height: 50px;
}
```

Jadi seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        height: 50px;
    }

    th,
    td {
        border: 1px solid orange;
    }
</style>
```

Dan ini hasilnya di browser Chrome

![Mengatur lebar dan tinggi tabel](/images/css/table/lebar-dan-tinggi-tabel.png "mengatur lebar dan tinggi tabel")

## Mengatur Rata Teks Tabel secara Horizontal

Untuk mengatur rata teks tabel secara horizontal seperti rata teks kanan, kiri, dan tengah, kamu bisa menggunakan properti CSS `text-align` pada tag `<th>` atau `<td>`.

Secara default, konten elemen `<th>` memiliki rata teks tengah. Dan konten elemen `<td>` memiliki rata teks kiri.

Pada contoh berikut, saya mengatur rata teks judul menjadi rata kiri:

```css
th {
  text-align: left;
}
```

Jadi seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        height: 50px;
        text-align: left;
    }

    th,
    td {
        border: 1px solid orange;
    }
</style>
```

Dan ini hasilnya di browser Chrome

![Mengatur rata teks tabel](/images/css/table/rata-teks-tabel-judul.png "mengatur rata teks tabel")

## Mengatur Posisi Konten Tabel secara Vertikal

Untuk mengatur posisi konten tabel secara vertikal seperti posisi atas, bawah, atau tengah, kamu bisa menggunakan properti CSS `vertical-align` pada tag `<th>` atau `<td>`.

Secara default, posisi konten tabel berada di tengah untuk kedua elemen `<th>` atau `<td>`.

Pada contoh berikut, saya akan mengatur teks ke posisi bawah pada elemen `<td>`:
```css
td {
  height: 50px;
  vertical-align: bottom;
}
```
Jadi seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid orange;
    }

    td {
        height: 50px;
        vertical-align: bottom;
    }
</style>
```

Dan ini tampilannya di browser Chrome

![Mengatur posisi konten tabel secara vertikal](/images/css/table/posisi-konten-tabel-secara-vertikal.png "mengatur posisi konten tabel secara vertikal")

## Mengatur Padding Tabel dengan CSS

Padding tabel merupakan jarak dari border sisi dalam tabel dengan konten/teks tabel.

{{< tips >}}
Agar lebih paham mengenai padding, silakan pelajari dulu referensi properti CSS [padding](/cssref/padding/)
{{< /tips >}}

Untuk mengatur padding tabel, kamu bisa menggunakan properti CSS `padding`.

Misalnya, untuk mengatur padding kolom tabel menjadi __10 pixel__, tambahkan property CSS `padding: 10px;` pada style sheet.

```css
th,
td {
    padding: 10px;
}
```

Jadi seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border: 1px solid orange;
        padding: 10px;
    }
</style>
```

Dan ini tampilannya di browser Chrome

![Mengatur padding tabel dengan CSS](/images/css/table/padding-tabel.png "mengatur padding tabel")

## Mengatur Border Bawah Tabel

Untuk membuat border bawah pada tabel, kamu bisa menggunakan properti CSS `border-bottom` pada tag `<th>` dan `<td>`.

```css
th, td {
  border-bottom: 1px solid #ddd;
}
```

Jadi seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th,
    td {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }
</style>
```

Dan ini tampilannya di browser Chrome

![Mengatur border bawah tabel dengan CSS](/images/css/table/border-bottom-tabel.png "mengatur border bawah tabel")

## Membuat Efek Hover Tabel

Untuk membuat efek hover pada tabel, kamu bisa menggunakan _selector_ `:hover` pada tag `<tr>`.

```css
tr:hover {background-color: #f5f5f5;}
```

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<table>
    <tr>
        <th>Judul Kolom 1</th>
        <th>Judul Kolom 2</th>
        <th>Judul Kolom 3</th>
    </tr>
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
```
{{< /editor-html >}}
{{< editor-css >}}
```css
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

tr:hover {
    background-color: #f5f5f5;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<table class="striped__table">
    <tr class="tr">
        <th class="th">Judul Kolom 1</th>
        <th class="th">Judul Kolom 2</th>
        <th class="th">Judul Kolom 3</th>
    </tr>
    <tr class="tr">
        <td class="td">Baris 1, Kolom 1</td>
        <td class="td">Baris 1, Kolom 2</td>
        <td class="td">Baris 1, Kolom 3</td>
    </tr>
    <tr class="tr">
        <td class="td">Baris 2, Kolom 1</td>
        <td class="td">Baris 2, Kolom 2</td>
        <td class="td">Baris 2, Kolom 3</td>
    </tr>
    <tr class="tr">
        <td class="td">Baris 3, Kolom 1</td>
        <td class="td">Baris 3, Kolom 2</td>
        <td class="td">Baris 3, Kolom 3</td>
    </tr>
</table>
<style>
    .table {
        border-collapse: collapse;
        width: 100%;
    }
    .th,
    .td {
        border-bottom: 1px solid #ddd;
        padding: 10px;
        text-align: left;
    }
    .tr:hover {background-color: #f5f5f5;}
</style>
{{< /editor-preview >}}
{{< /editor >}}

## Membuat Efek _Striped_ atau Belang pada Tabel

Untuk membuat efek _striped_ atau belang seperti zebra pada tabel, kamu bisa menggunakan _selector_ `nth-child()` dan menambahkan `background-color` pada semua baris tabel.

```css
tr:nth-child(even) {background-color: #f2f2f2;}
```

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<table>
    <tr>
        <th>Judul Kolom 1</th>
        <th>Judul Kolom 2</th>
        <th>Judul Kolom 3</th>
    </tr>
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
    <tr>
        <td>Baris 4, Kolom 1</td>
        <td>Baris 4, Kolom 2</td>
        <td>Baris 4, Kolom 3</td>
    </tr>
    <tr>
        <td>Baris 5, Kolom 1</td>
        <td>Baris 5, Kolom 2</td>
        <td>Baris 5, Kolom 3</td>
    </tr>
</table>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<table class="table">
    <tr class="striped__tr">
        <th class="striped__th">Judul Kolom 1</th>
        <th class="striped__th">Judul Kolom 2</th>
        <th class="striped__th">Judul Kolom 3</th>
    </tr>
    <tr class="striped__tr">
        <td class="striped__td">Baris 1, Kolom 1</td>
        <td class="striped__td">Baris 1, Kolom 2</td>
        <td class="striped__td">Baris 1, Kolom 3</td>
    </tr>
    <tr class="striped__tr">
        <td class="striped__td">Baris 2, Kolom 1</td>
        <td class="striped__td">Baris 2, Kolom 2</td>
        <td class="striped__td">Baris 2, Kolom 3</td>
    </tr>
    <tr class="striped__tr">
        <td class="striped__td">Baris 3, Kolom 1</td>
        <td class="striped__td">Baris 3, Kolom 2</td>
        <td class="striped__td">Baris 3, Kolom 3</td>
    </tr>
    <tr class="striped__tr">
        <td class="striped__td">Baris 4, Kolom 1</td>
        <td class="striped__td">Baris 4, Kolom 2</td>
        <td class="striped__td">Baris 4, Kolom 3</td>
    </tr>
    <tr class="striped__tr">
        <td class="striped__td">Baris 5, Kolom 1</td>
        <td class="striped__td">Baris 5, Kolom 2</td>
        <td class="striped__td">Baris 5, Kolom 3</td>
    </tr>
</table>
<style>
    .striped__table {
        border-collapse: collapse;
        width: 100%;
    }
    .striped__th,
    .striped__td {
        padding: 10px;
        text-align: left;
    }
    .striped__tr:nth-child(even) {background-color: #f2f2f2;}
</style>
{{< /editor-preview >}}
{{< /editor >}}

## Membuat Background Warna pada Tabel

Untuk membuat background warna pada tabel, kamu bisa menggunakan properti `background-color`.

Pada contoh berikut, saya akan memberi background warna pada tabel judul.
```css
th {
  background-color: #4CAF50;
  color: white;
}
```

Seperti ini _style_ lengkapnya:
```css
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th {
        background-color: #4CAF50;
        color: white;
    }

    th, td {
        text-align: left;
        padding: 10px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
</style>
```

Dan ini tampilannya di browser Chrome

![Membuat background warna pada tabel dengan CSS](/images/css/table/background-tabel.png)

## Membuat Tabel Responsive

Untuk membuat tabel yang responsive, caranya tambahkan elemen container (seperti `<div>`) dengan properti CSS `overflow-x: auto` diluar elemen `<table>`.

Pada tabel responsive akan muncul _scroll bar_ secara horizontal jika _screen_ lebih kecil daripada konten tabel.

```html
<div style="overflow-x:auto;">

<table>
... table content ...
</table>

</div>
```

{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<div class="table__wrapper">
    <table>
        <tr>
            <th>Judul Kolom 1</th>
            <th>Judul Kolom 2</th>
            <th>Judul Kolom 3</th>
            <th>Judul Kolom 4</th>
            <th>Judul Kolom 5</th>
            <th>Judul Kolom 6</th>
        </tr>
        <tr>
            <td>Baris 1, Kolom 1</td>
            <td>Baris 1, Kolom 2</td>
            <td>Baris 1, Kolom 3</td>
            <td>Baris 1, Kolom 4</td>
            <td>Baris 1, Kolom 5</td>
            <td>Baris 1, Kolom 6</td>
        </tr>
        <tr>
            <td>Baris 2, Kolom 1</td>
            <td>Baris 2, Kolom 2</td>
            <td>Baris 2, Kolom 3</td>
            <td>Baris 2, Kolom 4</td>
            <td>Baris 2, Kolom 5</td>
            <td>Baris 2, Kolom 6</td>
        </tr>
        <tr>
            <td>Baris 3, Kolom 1</td>
            <td>Baris 3, Kolom 2</td>
            <td>Baris 3, Kolom 3</td>
            <td>Baris 3, Kolom 4</td>
            <td>Baris 3, Kolom 5</td>
            <td>Baris 3, Kolom 6</td>
        </tr>
        <tr>
            <td>Baris 4, Kolom 1</td>
            <td>Baris 4, Kolom 2</td>
            <td>Baris 4, Kolom 3</td>
            <td>Baris 4, Kolom 4</td>
            <td>Baris 4, Kolom 5</td>
            <td>Baris 4, Kolom 6</td>
        </tr>
        <tr>
            <td>Baris 5, Kolom 1</td>
            <td>Baris 5, Kolom 2</td>
            <td>Baris 5, Kolom 3</td>
            <td>Baris 5, Kolom 4</td>
            <td>Baris 5, Kolom 5</td>
            <td>Baris 5, Kolom 6</td>
        </tr>
    </table>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
div {
    overflow-x: auto;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th,
td {
    border-bottom: 1px solid #ddd;
    padding: 10px;
    text-align: left;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="table__wrapper">
<table class="flex__table">
    <tr class="flex__tr">
        <th class="flex__th">Judul Kolom 1</th>
        <th class="flex__th">Judul Kolom 2</th>
        <th class="flex__th">Judul Kolom 3</th>
        <th class="flex__th">Judul Kolom 4</th>
        <th class="flex__th">Judul Kolom 5</th>
        <th class="flex__th">Judul Kolom 6</th>
    </tr>
    <tr class="flex__tr">
        <td class="flex__td">Baris 1, Kolom 1</td>
        <td class="flex__td">Baris 1, Kolom 2</td>
        <td class="flex__td">Baris 1, Kolom 3</td>
        <td class="flex__td">Baris 1, Kolom 4</td>
        <td class="flex__td">Baris 1, Kolom 5</td>
        <td class="flex__td">Baris 1, Kolom 6</td>
    </tr>
    <tr class="flex__tr">
        <td class="flex__td">Baris 2, Kolom 1</td>
        <td class="flex__td">Baris 2, Kolom 2</td>
        <td class="flex__td">Baris 2, Kolom 3</td>
        <td class="flex__td">Baris 2, Kolom 4</td>
        <td class="flex__td">Baris 2, Kolom 5</td>
        <td class="flex__td">Baris 2, Kolom 6</td>
    </tr>
    <tr class="flex__tr">
        <td class="flex__td">Baris 3, Kolom 1</td>
        <td class="flex__td">Baris 3, Kolom 2</td>
        <td class="flex__td">Baris 3, Kolom 3</td>
        <td class="flex__td">Baris 3, Kolom 4</td>
        <td class="flex__td">Baris 3, Kolom 5</td>
        <td class="flex__td">Baris 3, Kolom 6</td>
    </tr>
    <tr class="flex__tr">
        <td class="flex__td">Baris 4, Kolom 1</td>
        <td class="flex__td">Baris 4, Kolom 2</td>
        <td class="flex__td">Baris 4, Kolom 3</td>
        <td class="flex__td">Baris 4, Kolom 4</td>
        <td class="flex__td">Baris 4, Kolom 5</td>
        <td class="flex__td">Baris 4, Kolom 6</td>
    </tr>
</table>
</div>
<style>
    .table__wrapper {
        overflow-x: auto;
    }
    .flex__table {
        border-collapse: collapse;
        width: 120%;
    }
    .flex__th,
    .flex__td {
        padding: 10px;
        text-align: left;
    }
    .flex__tr:nth-child(even) {background-color: #f2f2f2;}
</style>
{{< /editor-preview >}}
{{< /editor >}}