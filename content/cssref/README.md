# Belajar HTML Lengkap: Pengertian HTML

Pernah kebayang ingin menjadi web developer?

Pekerjaan menjadi programer atau web developer kini memang menjadi incaran bagi sebagian anak-anak milenial.

Hal ini disebabkan karena prospeknya kedepan semakin cerah seiring dengan banyaknya permintaan jasa di bidang web programing dari perusahaan-perusahaan besar maupun UMKM yang mulai go online.

Nah kalau kamu tertarik ingin menjadi web developer, tetapi masih bingung bagaimana caranya membuat website dari nol, kamu sangat beruntung bisa menemukan website [Kelas Coding](/docs) ini.

Melalui website [Kelas Coding](/docs) ini, kamu bisa belajar tutorial HTML lengkap beserta bahasa pemrograman web lainnya seperti CSS dan Javascript secara gratis.

Kenapa harus belajar HTML?

Karena HTML merupakan unsur dasar untuk membuat halaman website. 

Jadi kalau kamu ingin bisa membuat website dari nol, langkah pertama yang harus dilakukan yaitu mempelajari bahasa HTML.

## Apa itu HTML

HTML atau _Hypertext Markup Language_ adalah sebuah bahasa markup standar untuk membuat halaman website.

Setiap halaman web (dokumen HTML) bisa saling terhubung melalui teks link atau dikenal dengan _hypertext_. 

HTML disebut bahasa markup karena memakai tanda markah (`</>`) pada tag HTML untuk menandai bagian-bagian isi konten dalam dokumen HTML.

Selanjutnya tag HTML ini akan memberitahu web browser mengenai isi konten tersebut untuk ditampilkan sebagai  struktur halaman web yang valid.

Tag HTML memiliki fungsi yang berbeda-beda seperti `<head>`, `<body>`, `<header>`, `<main>`, `<aside>`, `<article>`, `<section>`, `<footer>`, `<div>`, `<ul>`, `<li>`, `<a>`, dan lainnya.

Misalnya tag "strong" berikut:

```html
<strong>tulisan tebal</strong>
```

Akan tampil menjadi <strong>tulisan tebal</strong> pada halaman web.

Mengenai fungsi dari masing-masing tag tersebut akan dibahas secara detail pada tutorial khusus berikutnya.

Untuk mengetahui tag HTML apa saja yang digunakan dalam sebuah halaman website di internet, kamu bisa klik kanan halaman tersebut pada web browser (chrome, firefox, safari, edge, dll), kemudian klik view page source.

Nanti otomatis tab halaman baru akan terbuka yang isinya berupa barisan kode HTML sebagai pembungkus kontennya.

Perlu diingat, HTML sebenarnya bukanlah bahasa pemrograman karena tidak memiliki fitur variabel, data type, function, obyek, struktur kontrol pengkondisian atau pengulangan seperti yang dimiliki oleh bahasa pemrograman pada umumnya.

HTML hanya merupakan bahasa dasar dalam pembuatan web saja. Karena itulah, untuk membuat website yang siap pakai seperti yang sudah ada di internet itu harus dikombinasikan lagi dengan bahasa CSS dan Javascript.

Dalam sebuah website, HTML berperan sebagai kerangka badan. Sehingga tampilannya masih berantakan kalau langsung dilihat lewat web browser.

Agar tampilannya menjadi menarik, harus dibantu CSS untuk membentuk layout, mengatur font, dan memberi warna.

Sedangkan untuk membuat website agar lebih interaktif, misalnya pada menu dropdown, perlu bantuan dari Javascript.

## Mengenal Fungsi Web Browser

Web browser merupakan sebuah software yang bisa menerima, menampilkan, dan menerjemahkan informasi dari world wide web (Wikipedia). Dan salah satu informasi itu dibuat dalam format HTML.

Web browser digunakan untuk membaca dokumen HTML dan menerjemahkannya agar bisa tampil sebagai halaman web seperti yang biasa kita lihat di internet.

Ada banyak web browser yang sudah kita kenal seperti Chrome, Firefox, Safari, Opera, Internet Explorer, Edge, UC Browser, dan lainnya.

Namun menurut data dari [w3counter](https://w3counter), saat ini web browser yang paling banyak penggunanya di dunia adalah Google Chrome.

Untuk mempelajari HTML, web browser merupakan salah satu alat utama yang paling dibutuhkan selain teks editor.

Kamu bebas memilih web browser sesuai kesukaanmu, namun dalam tutorial belajar HTML ini saya akan menggunakan browser Google Chrome.

Browser Chrome versi terbaru bisa di download secara gratis lewat link ini [Chrome](https://www.google.com/intl/en/chrome/browser/index.html?system=true&standalone=1)

## Cara Membuat File HTML

File HTML bisa dibuat dengan mudah cukup menggunakan aplikasi teks editor sederhana bawaan sistem operasi seperti Notepad pada OS Windows.

Namun untuk membuat file dokumen HTML yang komplek, sebaiknya gunakan teks editor khusus seperti yang dipakai oleh para web developer profesional.

Ada beberapa teks editor popuper saat ini, yaitu Visual Code, Atom, Brackets, Sublime Text, Light Table, dan Notepad++.

Dengan menggunakan teks editor khusus, banyak sekali keuntungan yang bisa didapatkan. 

Diantaranya yaitu tersedia berbagai plugin yang sangat memudahkan para web developer dalam menulis kode-kode bahasa pemrograman.

Untuk mengetahui teks editor secara detail dan plugin apa saja yang harus diinstal, silakan baca tutorial [memilih teks editor](/teks-editor).

Perlu diingat, file HTML memiliki ektensi .html atau .htm.

Langkah-langkah membuat file HTML yaitu:

 1. Buka aplikasi teks editor kesayanganmu, pilih menu file pada toolbar kemudian pilih new atau tekan Ctrl + N (pada OS Windows).
 2. Dokumen baru akan terbuka, kemudian silakan simpan dokumen baru tersebut dengan cara pilih menu file pada toolbar. Lalu klik menu save atau tekan Ctrl + S (pada OS Windows).
 3. Simpan file dokumen baru tersebut dengan nama sesukamu, jangan lupa diberi ekstensi .html atau .htm sebagai ekstensi file HTML. Contohnya: latihan.html.

Sampai disini file HTML sudah berhasil dibuat, selanjutnya yaitu membuat dokumen HTML yang valid dengan cara memberi tag HTML seperti contoh berikut:

```html
<!DOCTYPE html>
<html>
<head>
<title>Judul Halaman</title>
</head>
<body>

<h1>Judul Artikel Pertama</h1>
<p>Paragraf artikel pertama.</p>

</body>
</html>
```

#### Keterangan Contoh:

- `<!DOCTYPE html>` berfungsi untuk mendefinisikan sebagai file dokumen HTML5
- Elemen `<html>` merupakan akar dari sebuah halaman HTML
- Elemen `<head>` terdiri dari informasi tentang dokumen HTML
- Elemen `<title>` berfungsi untuk menyatakan judul dari dokumen HTML
- Elemen `<body>` berfungsi sebagai papan konten halaman yang ditampilkan di website
- Elemen `<h1>` berfungsi untuk mendefinisikan judul yang besar (h1)
- Elemen `<p>` berfungsi untuk mendefinisikan sebuah paragraf



## Mengenal Tag HTML

Tag HTML merupakan nama elemen HTML yang diapit dengan tanda angle brackets (tanda kurung siku).

Tag HTML biasanya selalu berpasangan seperti `<p>` dan `</p>`. Tag pertama disebut dengan **tag pembuka**, sedangkan tag kedua disebut dengan **tag penutup**.

Untuk membedakan tag pembuka dengan tag penutup, pada tag penutup diberi tanda forward slash (tanda garis miring) sebelum nama tag seperti ini `</namatag>`.

Meski umumnya tag HTML selalu berpasangan, namun ada beberapa tag yang tidak memiliki pasangan. 

Diantaranya yaitu tag  `<meta>`, `<img>`, `<area>`, `<link>`, `<input>`, `<legend>`, `<embed>`, `<col>`, `<hr>`, dan `<br>`.



## Struktur Halaman HTML

Berikut ini contoh struktur halaman HTML

<div style="width:99%;border:1px solid grey;padding:3px;margin:0;background-color:#ddd">&lt;html&gt;
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px">&lt;head&gt;
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;title&gt;Judul Halaman&lt;/title&gt;
</div>
&lt;/head&gt;
</div>
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px;background-color:#ddd">&lt;body&gt;
<div style="width:90%;border:1px solid grey;padding:3px;margin:20px;background-color:#fff">
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;h1&gt;Ini Contoh Judul Artikel&lt;/h1&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;Ini contoh paragraf pertama saya.&lt;/p&gt;</div>
<div style="width:90%;border:1px solid grey;padding:5px;margin:20px">&lt;p&gt;Ini contoh paragraf saya yang lain.&lt;/p&gt;</div>
</div>
&lt;/body&gt;
</div>
&lt;/html&gt;
</div>


## Latihan Membuat Halaman Website

Setelah memahami dasar-dasar HTML diatas, yuk mulai praktik membuat halaman website sederhana dengan menuliskan script HTML berikut:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tuliskan Judul Website Kamu disini</title>
    <meta name="description" content="tulis deskripsi/penjelasan singkat mengenai websitemu disini">
    <style>
        html {
            background: #e6e9e9;
        }

        body {
            background: #fff;
            color: #545454;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            margin: 0 auto;
            max-width: 1040px;
            height: 100vh;
            padding: 0 2em;
        }

        h1 {
            color: #222;
            font-weight: 600;
            line-height: 1.3;
        }

        h4 {
            margin: 0.5em 0;
        }

        a {
            color: #0083e8;
        }

        body>div {
            display: grid;
            grid-template-areas:
                'header header header header'
                'main main main aside'
                'footer footer footer footer';
            grid-gap: 30px;
        }

        header {
            grid-area: header;
        }

        main {
            grid-area: main;
            min-height: 400px;
        }

        aside {
            grid-area: aside;
            background: #e6e9e9;
            min-width: 240px;
            padding: 1.5em;
        }

        footer {
            grid-area: footer;
            text-align: center;
            padding: 1em 1.5em;
            background: ghostwhite;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        li {
            margin: 0;
            padding: 0;
            background: gainsboro;
            height: 42px;
        }

        ul li a {
            display: inline-block;
            text-transform: capitalize;
            text-decoration: none;
            color: dimgrey;
            line-height: 42px;
            padding-left: 12px;
            padding-right: 12px;
        }

        ul li a:hover {
            background: ghostwhite;
        }
    </style>
</head>

<body>
    <div>
        <header>
            <div>
                <h2>Judul Website</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">home</a>
                        <a href="/artikel">artikel</a>
                        <a href="/blog">blog</a>
                        <a href="/kontak">kontak</a>
                        <a href="/tentang-kami">tentang kami</a>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
            <article>
                <h1>Belajar Membuat Website Sendiri dari Nol</h1>
                <div>
                    <p>Membuat website sebenarnya sangat mudah, yang diperlukan hanyalah teks editor untuk menulis baris kode HTML.</p>
                    <p>Selain kode editor, tentu saja diperlukan web browser untuk menjalankan file HTML yang sudah dibuat tadi.</p>
                    <p>Tulis paragraf selanjutnya disini</p>
                </div>
            </article>
        </main>
        <aside>
            <h4>Judul Sidebar</h4>
            <div>Tempat Widget disini</div>
        </aside>
        <footer>
            <span>Ditulis oleh <a href="codingku.id">codingku.id</a></span>
        </footer>
    </div>
</body>

</html>
```

[lihat demo](/demo-html/latihan-1)