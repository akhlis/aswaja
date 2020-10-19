---
title: body
description: body
date: "2019-11-18T10:34:07+07:00"
slug: body
authors:
- akhlis
name: body
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/body
---

Tag `<body>` digunakan untuk membuat elemen `body` yang mewakili konten utama pada dokumen HTML.

Elemen `body` terdiri dari semua konten dokumen HTML seperti teks, hyperlink, gambar, tabel, daftar list, dan lainnya.

Dalam dokumen HTML tidak boleh ada lebih dari satu elemen `body`, karena elemen `body` dijadikan sebagai elemen induk dari elemen lainnya.

## Syntax

Tag `<body>` ditulis seperti `<body></body>` dengan konten dokumen diletakkan diantara tag pembuka dan penutup.

{{< code lang="html" >}}
<!doctype html>
<html>
	<head>
    <!-- Document metadata -->
		<title>Title...</title>
	</head>
	<body>
    <!-- Document content -->
		Semua konten website disini
	</body>
</html>
{{< /code >}}

{{< browser tag="body" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar web browser menampilkan elemen `body` dengan pengaturan CSS berikut:

```css
body {
  display: block;
  margin: 8px;
}

body:focus {
  outline: none;
}
```
