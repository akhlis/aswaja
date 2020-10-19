---
title: article
description: article
date: "2019-11-18T10:34:07+07:00"
slug: article
authors:
- akhlis
name: article
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/article
---

Tag `<article>` digunakan untuk membuat elemen `article` yang mewakili konten yang independen dari konten lain didalam dokumen HTML.

Seperti yang disebutkan dalam spesifikasi HTML5 di [W3C Specification](https://html.spec.whatwg.org/multipage/sections.html#the-article-element) bahwa:

Elemen `article` mewakili komponen halaman yang terdiri dari komposisi mandiri dalam dokumen, halaman, aplikasi, atau situs dan yang bertujuan untuk digunakan kembali secara mandiri.

Misalnya: posting forum, artikel majalah atau koran, entri blog, komentar yang dikirim pengguna, widget, atau bagian konten lainnya.

## Syntax

Tag `<article>` ditulis seperti `<article></article>` dengan konten artikel yang disematkan diantara tag pembuka dan penutup.

```html
<article>
  Konten artikel disini ...
</article>
```

## Contoh

#### Article Tunggal

{{< code lang="html" >}}
<article>
  <h1>Belajar HTML lengkap di codingku.id</h1>
  <p>HTML merupakan salah satu bahasa pemrograman website yang harus dipelajari oleh calon web developer.</p>
</article>
{{< /code >}}

#### `article` didalam elemen `section`

{{< code lang="html" >}}
<section>
  <h1>Belajar Pemrograman Website di Codingku.id</h1>
  <p>Sebagai front end designer, ada 3 bahasa yang harus dikuasai.</p>
  <article>
    <h2>HTML</h2>
    <p>HTML adalah bahasa yang digunakan untuk merancang kerangka halaman website.</p>
  </article>
  <article>
    <h2>CSS</h2>
    <p>CSS digunakan untuk memberi style pada dokumen HTML agar tampilannya menarik.</p>
  </article>
  <article>
    <h2>Javascript</h2>
    <p>Javascript digunakan untuk memanipulasi elemen DOM HTML sehingga bisa lebih interaktif.</p>
  </article>
</section>
{{< /code >}}

#### Header dan Footer

{{< code lang="html" >}}
<article>
	<header>
		<h1>Belajar HTML Dasar</h1>
		<p>Published: <time datetime="2-11-2019">2 November 2018</time></p>
	</header>
	<p>Cara paling mudah belajar bahasa HTML yaitu dengan konsep learn by doing.</p>
	 <footer>
		<small>Kategori: html</small>
	</footer>
</article>
{{< /code >}}

{{< browser tag="article" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<article>` dengan pengaturan CSS:

```css
article {
  display: block;
}
```