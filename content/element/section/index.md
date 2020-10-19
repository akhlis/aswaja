---
title: section
description: section
date: "2019-11-18T10:34:07+07:00"
slug: section
authors:
- akhlis
name: section
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/section
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<section>` mewakili bagian umum dari suatu dokumen atau aplikasi yang tidak memiliki elemen semantik yang lebih spesifik untuk mewakilinya.

Halaman web atau artikel yang diberikan dapat memiliki banyak bagian. 

Misalnya, beranda dapat memiliki bagian untuk memperkenalkan perusahaan, bagian lain untuk item berita, dan bagian lain untuk informasi kontak.

## Syntax

Tag `<section>` ditulis seperti `<section></section>` dengan konten _section_ di antara tag pembuka dan penutup.

Seperti ini:

```html
<section>
	Konten disini...
</section>
```

#### Contoh Sederhana

```html
<!DOCTYPE html>
<title>Example</title>
<style>
  header,
  article,
  footer,
  section,
  nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
  }
  section {
    background: #FDF7D3;
  }
</style>
<body>
<header>Header...</header>
<nav>Nav...</nav>
<article>
  Article content...
</article>
<section>
  Company intro...
</section>
<section>
  News items...
</section>
<footer>Footer...
  <section>
    Contact info...
  </section>
</footer>
</body>
```

#### Contoh Elemen `article` didalam elemen `section`

{{< code lang="html" >}}
<section>
	<h1>Planets</h1>
	<p>Hope you enjoy these articles on some of the more 
		popular planets within the Homo sapien community.</p>
	<article>
		<h2>Earth</h2>
		<p>Planet Earth is on average, 93 million miles away from Sun. 
			It orbits Sun at an average 18.5 miles per second.</p>
	</article>
	<article>
		<h2>Mars</h2>
		<p>Mars is on average, 142 million miles away from Sun. 
			It orbits Sun at an average 14.5 miles per second.</p>
	</article>
</section>
{{< /code >}}

#### Contoh Komentar Blog

{{< code lang="html" >}}
<article>
	<h1>Mars</h1>
	<p>Mars is on average, 142 million miles away from Sun. 
		It orbits Sun at an average 14.5 miles per second.</p>
	<section>
	<h2>User Comments</h2>
	<article>
	<header>
		<h3>SolarFlare says:</h3>
		<p><time datetime="2014-06-05T22:43-08:00">3 hours ago</time></p>
	</header>
		<p>Wow, this info really brings me back down to Earth!</p>
	</article>
	<article>
	<header>
		<h3>Pluto says:</h3>
		<p><time datetime="2014-06-05T23:45-08:00">2 hours ago</time></p>
	</header>
		<p>142 million miles... pfft.. that's nothing!</p>
	</article>
	</section>
</article>
{{< /code >}}

#### Contoh Article section

{{< code lang="html" >}}
<article>
	<header>
	<h1>Article/book Title...</h1>
	<p>Text...</p>
	</header>
	<section>
		<h2>Introduction</h2>
		<p>Content....</p>
	</section>
	<section>
		<h2>Chapter 1</h2>
		<p>Content...</p>
	</section>
	<section>
		<h2>Chapter 2</h2>
		<p>Content...</p>
	</section>
	<section>
		<h2>Chapter 3</h2>
		<p>Content...</p>
	</section>
	<section>
		<h2>Appendix</h2>
		<p>Content...</p>
	</section>
</article>
{{< /code >}}


### `section` vs `article`

Kamu dapat membuat tag `<section>` di dalam tag `<article>`, dan juga bisa membuat tag `<article>` di dalam tag `<section>`.

Lalu mana yang harus dipilih?

Ada sedikit perbedaan antara elemen `<section>` dan elemen `<article>`.

Tujuan dari elemen `<section>` adalah untuk mewakili bagian umum dari suatu dokumen atau aplikasi.

Sedangkan elemen `<article>` merepresentasikan satu konten yang mandiri.

{{< browser tag="section" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.0" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<section>` dengan pengaturan CSS:

```css
section {
  display: block;
}
```
