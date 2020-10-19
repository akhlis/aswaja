---
title: Cara Membuat Daftar List pada HTML
description: Cara Membuat Daftar Link pada HTML
date: "2019-11-18T10:34:07+07:00"
slug: cara-membuat-list-pada-html
weight: 170
authors:
- akhlis
---

Dalam menyampaikan informasi yang berbentuk tulisan, pasti diperlukan format penulisan yang tepat agar mudah dipahami oleh pembaca.

Salah satunya yaitu format penulisan list atau daftar.

Penulisan list atau daftar ini biasa dijumpai dalam bentuk list tata cara, list pekerjaan, list daftar nama, list menu masakan, dan lain sebagainya.

Pada halaman website, list juga sering digunakan untuk menampilkan menu navigasi dan daftar kategori.

Lalu bagaimana cara membuat list di halaman website?

Sebelum lanjut ke pembahasan cara membuatnya...

Ada 3 jenis list di HTML yang harus kamu ketahui.

1. **Ordered List** adalah list yang berurutan.
2. **Unordered List** adalah list yang tak berurutan.
3. **Descriptiona List** adalah list yang berisi definisi.

Mari kita bahas secara detail...

{{< toc >}}

1. ## Ordered List

   _Ordered list_ merupakan daftar item yang disusun secara berurutan. 

   List ini ditandai dengan __angka__ atau __huruf__ di depannya untuk menunjukkan urutannya.

   Untuk membuatnya, diperlukan tag HTML `<ol>` dan ikuti dengan tag `<li>` di dalamnya sebagai _item list_.

   Seperti ini:

   ```html
   <ol>
       <li>item list 1</li>
       <li>item list 2</li>
       <li>item list 3</li>
   </ol>
   ```

    Contoh:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cara Membuat Ordered List</title>
    </head>

    <body>
        <h2>Daftar Brand Smartphone</h2>

        <ol>
            <li>Huawai</li>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Xiaomi</li>
        </ol>
    </body>
    </html>
    ```

    {{< preview >}}
        <h2>Daftar Brand Smartphone</h2>

        <ol class="list-decimal pl-4">
            <li>Huawai</li>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Xiaomi</li>
        </ol>
    {{< /preview >}}

    Pada contoh di atas, _list_ menggunakan angka sebagai penanda _item list_.

    Lalu bagaimana cara mengubah penanda pada _item list_ menjadi urutan angka romawi seperti I, II, III atau huruf besar seperti A, B, C?

    Caranya sangat mudah…

    Untuk membuat tampilan list dengan urutan seperti itu, kamu bisa menambahkan atribut `type` pada tag pembuka `<ol>` menjadi seperti ini `<ol type="I">`.

    Pilihan nilai atribut `type` secara lengkap bisa kamu lihat pada tabel berikut ini:

   | Atribut   |	Fungsi                                                                 |
   | ----------|---------------------------------------------------------------------------|
   | type=”a”  |	Membuat list berurut dengan huruf kecil ( a, b, c, d, …. )             |
   | type=”A”  |	Membuat list berurut dengan huruf besar ( A, B, C, D, ….. )            |
   | type=”I”  |	Membuat list berurut dengan huruf romawi besar ( I, II, III, IV, …. )  |
   | type=”i”  |	Membuat list berurut dengan huruf romawi kecil ( i, ii, iii, iv, ……. ) |
   | type=”1″  |	Membuat list berurut dengan angka ( 1, 2, 3, 4, …… )                   |
   | compact   |	Menyatakan bahwa item dalam list pendek sehingga browser menampilkannya dalam bentuk yang lebih padat (atribut ini tidak didukung di banyak browser)                              |
   | start=”n” |	Menentukan nilai awal dari item dalam daftar dimana n = nilai awal     |

   Contoh:

   ```html
   <h3>List dengan type = decimal (nilai default)</h3>

    <ol type="1">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = lower-latin (Alfabet Kecil)</h3>

    <ol type="a">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = upper-latin (Alfabet Kapital)</h3>

    <ol type="A">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = lower-roman (Angka Romawi)</h3>

    <ol type="i">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = upper-roman (Angka Romawi Kapital)</h3>

    <ol type="I">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>
    ```

    {{< preview >}}
    <h3>List dengan type = decimal (nilai default)</h3>

    <ol class="list-decimal">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = lower-latin (Alfabet Kecil)</h3>

    <ol class="list-lower-latin">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = upper-latin (Alfabet Kapital)</h3>

    <ol class="list-upper-latin">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = lower-roman (Angka Romawi)</h3>

    <ol class="list-lower-roman">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>

    <h3>List dengan type = upper-roman (Angka Romawi Kapital)</h3>

    <ol class="list-upper-roman">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ol>
    {{< /preview >}}

2. ## Unordered List

   _Unordered list_ merupakan daftar item yang disusun secara tidak berurutan.

   Secara default, _list_ ini ditandai dengan _disc_ atau titik bulat di depan setiap _item list_-nya.

   Untuk membuatnya, diperlukan tag HTML `<ul>` dan ikuti dengan tag `<li>` di dalamnya sebagai _item list_.

   Seperti ini:

   ```html
   <ul>
       <li>item list 1</li>
       <li>item list 2</li>
       <li>item list 3</li>
   </ul>
   ```

    Contoh:

    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Cara Membuat Unordered List</title>
    </head>

    <body>
        <h2>Daftar Brand Smartphone</h2>

        <ul>
            <li>Huawai</li>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Xiaomi</li>
        </ul>
    </body>
    </html>
    ```

    {{< preview >}}
        <h2>Daftar Brand Smartphone</h2>

        <ul class="list-disc">
            <li>Huawai</li>
            <li>iPhone</li>
            <li>Samsung</li>
            <li>Oppo</li>
            <li>Vivo</li>
            <li>Xiaomi</li>
        </ul>
    {{< /preview >}}

    Secara umum, penggunaan _unordered list_ ditandai dengan bulatan hitam, lingkaran, dan kotak pada awal list item.

    Pada contoh di atas, _unordered list_ menggunakan _disc_ sebagai penanda _item list_.

    Untuk mengubahnya, kamu bisa menambahkan atribut `type` pada tag pembuka `<ul>` menjadi seperti ini `<ul type="circle">`.

    Kamu juga bisa mengganti nilai `type` sesuai keinginanmu dengan salah satu nilai pada tabel berikut:

   | Atribut      |	Fungsi                                                                 |
   | -------------|------------------------------------------------------------------------|
   | type=”disc”  |	Membuat tanda bulatan hitam untuk item (menjadi default jika atribut type tidak ditulis)             |
   | type=”circle”|	Membuat tanda lingkaran putih untuk item )                             |
   | type=”square”­­­­­|	Membuat tanda kotak untuk item )                                    |

   Contoh:

   ```html
   <h3>List dengan type = disc (nilai default)</h3>

    <ul type="disc">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>

    <h3>List dengan type = circle</h3>

    <ul type="circle">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>

    <h3>List dengan type = square</h3>

    <ul type="square">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>
    ```

    {{< preview >}}
   <h3>List dengan type = disc (nilai default)</h3>

    <ul type="disc">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>

    <h3>List dengan type = circle</h3>

    <ul class="list-circle">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>

    <h3>List dengan type = square</h3>

    <ul class="list-square">
        <li>Huawai</li>
        <li>iPhone</li>
        <li>Samsung</li>
        <li>Oppo</li>
        <li>Vivo</li>
        <li>Xiaomi</li>
    </ul>
    {{< /preview >}}


3. ## Cara Membuat Description List di HTML

   _Description list_ merupakan _list_ yang terdiri dari daftar istilah beserta deskripsi atau penjelasannya. Contohnya seperti kamus.

   Untuk membuatnya, diperlukan tag `<dl>` (data list), dan diikuti dengan tag `<dt>` (data term) dan `(dd)` (data description) yang diletakkan didalamnya.

   Seperti ini:
   ```html
    <dl>
        <dt>Term...</dt>
        <dd>Description...</dd>
        <dt>Term...</dt>
        <dd>Description...</dd>
    </dl>
    ```

    Contoh:
    ```html
    <h4>Glossary</h4>
    <dl>
        <dt>Metal</dt>
        <dd>A solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity.</dd>
        <dd>A genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.</dd>
        <dt>Rock</dt>
        <dd>The solid mineral material forming part of the surface of the earth and other similar planets, exposed on the surface or underlying the soil or oceans.</dd>
        <dd>A genre of popular music that originated as "rock and roll" in the United States in the 1950s, and developed into a range of different styles in the 1960s and later, particularly in the United Kingdom and the United States.</dd>
    </dl>
    ```

    {{< preview >}}
    <h4 class="mb-4">Glossary</h4>
    <dl>
        <dt class="italic font-medium text-gray-700">Metal</dt>
        <dd class="text-sm pl-6 mb-4">A solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity.</dd>
        <dd class="text-sm pl-6 mb-4">A genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.</dd>
        <dt class="italic font-medium text-gray-700">Rock</dt>
        <dd class="text-sm pl-6 mb-4">The solid mineral material forming part of the surface of the earth and other similar planets, exposed on the surface or underlying the soil or oceans.</dd>
        <dd class="text-sm pl-6 mb-4">A genre of popular music that originated as "rock and roll" in the United States in the 1950s, and developed into a range of different styles in the 1960s and later, particularly in the United Kingdom and the United States.</dd>
    </dl>
    {{< /preview >}}

{{< tips >}}
Baca juga penjelasan lengkap tentang referensi tag [dl](/element/dl/), [dt](/element/dt/), dan [dd](/element/dd/).
{{< /tips >}}

## Membuat List di dalam List (_Nested List_)

List juga bisa dibuat di dalam list lain, misalnya untuk menggabungkan _ordered list_ dengan _unordered list_.

_Nested List_ ini juga sering digunakan untuk membuat menu _dropdown_ pada halaman website, seperti yang bisa kamu lihat di halaman website ini.

Cara membuatnya juga mudah...

Cukup memasukkan tag `<ul>` atau `<ol>` di dalam tag `<li>` pada elemen induk.

Tapi harus teliti agar tidak salah menempatkan diantara tag pembuka dan tag penutup `<li>`.

Seperti ini:
```html
<ol>
    <li>item list ol</li>
    <li>
        <ul>
            <li>item list ul 1</li>
            <li>item list ul 2</li>
        </ul>
    </li>
</ol>
```

Contoh:
```html
<!DOCTYPE html>
<html>
<head>
    <title>Cara Membuat Nested List</title>
</head>

<body>
    <h2>Daftar Brand Smartphone</h2>

    <ol>
        <li>Huawai
            <ul>
                <li>Huawai P Smart Pro</li>
                <li>Huawai Nova 6 5G</li>
                <li>Huawai Mate 30 5G</li>
                <li>Huawai Enjoy 10</li>
            </ul>
        </li>
        <li>iPhone
            <ul>
                <li>iPhone 8</li>
                <li>iPhone X</li>
                <li>iPhone 11</li>
                <li>iPhone 11 Pro</li>
            </ul>
        </li>
        <li>Samsung
            <ul>
                <li>Galaxy Fold</li>
                <li>Galaxy Note</li>
                <li>Galaxy S</li>
                <li>Galaxy A</li>
            </ul>
        </li>
    </ol>
</body>
</html>
```

{{< preview >}}
<h2>Daftar Brand Smartphone</h2>

<ol>
    <li>Huawai
        <ul>
            <li>Huawai P Smart Pro</li>
            <li>Huawai Nova 6 5G</li>
            <li>Huawai Mate 30 5G</li>
            <li>Huawai Enjoy 10</li>
        </ul>
    </li>
    <li>iPhone
        <ul>
            <li>iPhone 8</li>
            <li>iPhone X</li>
            <li>iPhone 11</li>
            <li>iPhone 11 Pro</li>
        </ul>
    </li>
    <li>Samsung
        <ul>
            <li>Galaxy Fold</li>
            <li>Galaxy Note</li>
            <li>Galaxy S</li>
            <li>Galaxy A</li>
        </ul>
    </li>
</ol>
{{< /preview >}}


