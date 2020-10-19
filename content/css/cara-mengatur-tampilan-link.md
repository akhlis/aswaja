---
title: "Cara Mengatur Tampilan Link dengan CSS"
description: "Cara Mengatur Tampilan Link dengan CSS"
date: "2020-01-15T07:34:07+07:00"
slug: cara-mengatur-tampilan-link-dengan-css
weight: 150
authors:
- akhlis
---

Link atau _hyperlink_ merupakan salah satu elemen yang paling sering dijumpai pada halaman website.

Link dalam bahasa Indonesia disebut juga sebagai tautan.

Fungsi dari _link_ ini digunakan untuk menghubungkan antara halaman website yang satu dengan halaman lainnya dengan mudah.

Cukup dengan mengklik link tersebut maka halaman baru akan terbuka.

{{< tips >}}
Untuk membuat link kamu bisa mengikuti tutorial [cara membuat link](/html/cara-membuat-link-pada-html/).
{{< /tips >}}

{{< toc >}}

## Cara Memberi Style Link

Agar tampilan _link_ lebih menarik, kamu bisa menambahkan style dengan menggunakan properti CSS seperti: `color`, `font-family`, `background`, dll.

Selain itu, _link_ dapat diatur secara berbeda tergantung pada keadaannya.

Ada 4 keadaan yang bisa digunakan untuk mengatur tampilan link, yaitu:
- `a:link` - keadaan link normal
- `a:visited` - keadaan link yang sudah pernah dikunjungi oleh pengguna
- `a:hover` - keadaan link saat pengguna mengarahkan cursor mouse diatasnya
- `a:active` - keadaan link saat diklik oleh pengguna

## Cara Mengatur Warna pada Link

Untuk menentukan warna link, kamu bisa menggunakan property CSS `color`.

Warna yang diterapkan pada _link_ juga diterapkan pada dekorasi link yang menggunakan properti `text-decoration`, seperti `underlines`, `upperlines`, `line-throughs`, dll.

Warna link dapat ditentukan menggunakan nilai `color` apa pun, seperti semi-transparan atau bahkan sepenuhnya transparan.

Namun, warna tidak dapat berupa gradien karena gradient adalah nilai dari image, dan bukan nilai warna.

```css
a {
    color: green;
}
```

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<p><b><a href="/css/" target="_blank">Ini teks link</a></b></p>
<p><b>Catatan:</b> a:hover harus diletakkan setelah a:link dan a:visited dalam definisi CSS agar bisa efektif.</p>
<p><b>Catatan:</b> a:active harus diletakkan setelah a:hover dalam definisi CSS agar bisa efektif.</p>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
/* link saat belum dikunjungi */
a:link {
  color: red;
}

/* link saat dikunjungi */
a:visited {
  color: green;
}

/* saat cursor mouse di atas link */
a:hover {
  color: hotpink;
}

/* saat link diklik */
a:active {
  color: blue;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<p class="mb-8"><b><a class="a" href="/css/" target="_blank">Ini teks link</a></b></p>
<p><b>Catatan:</b> a:hover harus diletakkan setelah a:link dan a:visited dalam definisi CSS agar bisa efektif.</p>
<p><b>Catatan:</b> a:active harus diletakkan setelah a:hover dalam definisi CSS agar bisa efektif.</p>

<style type="text/css">
/* unvisited link */
.a:link {
  color: red;
}

/* visited link */
.a:visited {
  color: green;
}

/* mouse over link */
.a:hover {
  color: hotpink;
}

/* selected link */
.a:active {
  color: blue;
}
</style>
{{< /editor-preview >}}
{{< /editor >}}

{{< tips >}}
Baca juga penjelasan lebih detail tentang referensi properti [color](/cssref/color/)
{{< /tips >}}

## Mengatur Text Decoration Link

Secara default, teks link memiliki efek garis bawah seperti ini: <a class="underline" href="/css/" target="_blank">ini teks link</a>

Untuk menghilangkan efek garis bawah, kamu bisa menggunakan properti CSS `text-decoration: none`.

```css
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: underline;
}
```

{{< tips >}}
Baca juga penjelasan lebih detail tentang referensi properti [text decoration](/cssref/text-decoration/)
{{< /tips >}}

## Cara Memberi Background pada Link

Untuk memberi background pada link, kamu bisa menggunakan properti css `background-color`.

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<p><b><a href="/css/" target="_blank">Ini teks link</a></b></p>
<p><b>Catatan:</b> a:hover harus diletakkan setelah a:link dan a:visited dalam definisi CSS agar bisa efektif.</p>
<p><b>Catatan:</b> a:active harus diletakkan setelah a:hover dalam definisi CSS agar bisa efektif.</p>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
a:link {
  background-color: yellow;
}

a:visited {
  background-color: cyan;
}

a:hover {
  background-color: lightgreen;
}

a:active {
  background-color: hotpink;
} 
```
{{< /editor-css >}}
{{< editor-preview >}}
<p class="mb-8"><b><a class="a__bg" href="/css/" target="_blank">Ini teks link</a></b></p>
<p><b>Catatan:</b> a:hover harus diletakkan setelah a:link dan a:visited dalam definisi CSS agar bisa efektif.</p>
<p><b>Catatan:</b> a:active harus diletakkan setelah a:hover dalam definisi CSS agar bisa efektif.</p>

<style type="text/css">
.a__bg:link {
  background-color: yellow;
}

.a__bg:visited {
  background-color: cyan;
}

.a__bg:hover {
  background-color: lightgreen;
}

.a__bg:active {
  background-color: hotpink;
} 
</style>
{{< /editor-preview >}}
{{< /editor >}}

{{< tips >}}
Baca juga penjelasan lebih detail tentang referensi properti [background color](/cssref/background-color/)
{{< /tips >}}

## Cara Membuat Tombol atau Button Link

Link sering juga digunakan untuk membuat tombol pada halaman website.

Efek tombol ini dibuat dengan kombinasi beberapa properti CSS seperti berikut.

```css
.btn:link,
.btn:visited {
  background-color: #00a396;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}

.btn:hover,
.btn:active {
  background-color: #00ad9f;
} 
```

{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<h2>Tombol Link</h2>
<p>Contoh link dengan style button:</p>

<a class="btn" href="/css/" target="_blank">Daftar Sekarang</a>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.btn:link,
.btn:visited {
  background-color: #00a396;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}

.btn:hover,
.btn:active {
  background-color: #00ad9f;
} 
```
{{< /editor-css >}}
{{< editor-preview >}}
<h2>Tombol Link</h2>
<p class="mb-8">Contoh link dengan style button:</p>

<a class="a__btn" href="/css/" target="_blank">Daftar Sekarang</a>

<style type="text/css">
.a__btn:link,
.a__btn:visited {
  background-color: #00a396;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 8px;
}

.a__btn:hover,
.a__btn:active {
  background-color: #00ad9f;
} 
</style>
{{< /editor-preview >}}
{{< /editor >}}

