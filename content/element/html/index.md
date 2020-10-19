---
title: html
description: html
date: "2019-11-18T10:34:07+07:00"
slug: html
authors:
- akhlis
name: html
experimental: false
meta: true
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/html
---

Elemen `<html>` mewakili root (elemen tingkat atas) dari sebuah dokumen HTML, sehingga juga disebut sebagai elemen root. 

Semua elemen lainnya harus merupakan keturunan dari elemen ini.

_Catatan:_ Tag `<html>` tidak mengandung `<! Doctype>`, karena secara teknis, `<! Doctype>` bukan elemen HTML.

## Syntax

Tag `<html>` ditulis sebagai `<html> </html>` dengan semua elemen HTML lainnya terlampir di antara tag pembuka dan penutup.

Elemen `<html>` merupakan elemen HTML pertama dalam dokumen HTML (namun, harus diawali dengan `<! Doctype>`).

Tag pertama di dalam tag `<html>` harus berupa tag `<head>`, diikuti oleh tag `<body>`.

```html
<!doctype html>
<html>
	<head>
		<title>Judul Dokumen disini ...</title>
	</head>
	<body>
		Konten dokumen disini ...
	</body>
</html>
```

{{< browser tag="html" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<html>` dengan pengaturan CSS:

```css
html {
  display: block;
}

html:focus {
  outline: none;
}
```