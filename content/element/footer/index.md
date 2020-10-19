---
title: footer
description: footer
date: "2019-11-18T10:34:07+07:00"
slug: footer
authors:
- akhlis
name: footer
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/footer
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<footer>` mewakili footer dari dokumen HTML atau bagian dalam dokumen.

Footer biasanya berisi informasi seperti informasi penulis, informasi hak cipta, tautan ke ketentuan penggunaan, kebijakan privasi, dll.

## Syntax

Tag `<footer>` ditulis seperti `<footer></footer>` dengan konten footer diletakkan diantara tag pembuka dan penutup.

```html
<footer>
	Footer content...
</footer>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	<header>
		<h1>Heading</h1>
		<b><p>Header content...</p></b>
	</header>
	<nav>
		Nav content...
	</nav>
	<main>
		<article>
			<p>Article content...</p>
		</article>
	</main>
	<footer>
		Footer content...
	</footer>
</body>
</html>
{{< /code >}}

#### Contoh Footer diatas Konten Utama

{{< code lang="html" >}}
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	<footer>
		Footer content...
	</footer>
	<main>
		<article>
			<p>Article content...</p>
		</article>
	</main>
</body>
</html>
{{< /code >}}

#### Contoh Multiple Elemen Footer

{{< code lang="html" >}}
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	<footer>
		<a href="/">Home</a>
	</footer>
	<main>
		<article>
			<p>Article content...</p>
		</article>
	</main>
	<footer>
		<a href="/">Home</a>
	</footer>
</body>
</html>
{{< /code >}}

#### Contoh Section Footer

{{< code lang="html" >}}
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	<main>
		<article>
			<p>Article content...</p>
			<footer>
				Footer content...
			</footer>
		</article>
		<article>
			<p>Article content...</p>
			<footer>
				Footer content...
			</footer>
		</article>
	</main>
	<footer>
		Footer content...
	</footer>
</body>
</html>
{{< /code >}}

#### Contoh sebagai Alamat

{{< code lang="html" >}}
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	<main>
		<article>
			<p>Article content...</p>
		</article>
	</main>
	<footer>
		<address>
			Contact: <a href="mailto:homer@example.com">Homer Shakespeare</a>
		</address>
	</footer>
</body>
</html>
{{< /code >}}

{{< browser tag="footer" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<footer>` dengan pengaturan CSS:

```css
footer {
  display: block;
}
```