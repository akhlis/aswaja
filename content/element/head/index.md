---
title: head
description: head
date: "2019-11-18T10:34:07+07:00"
slug: head
authors:
- akhlis
name: head
experimental: false
meta: true
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/head
---

Tag `<head>` mewakili bagian kepala dari dokumen HTML.

Elemen `head` dapat berisi tag HTML lain berupa metadata yang memberikan informasi tentang dokumen seperti judul, deskripsi, kata kunci, dll.

Dokumen HTML biasanya terdapat tag `<title>`, satu atau lebih tag `<meta>`, tag `<script>`, dan tag `<style>` yang semuanya terdapat didalam elemen `<head>`.

Sebagian besar metadata tidak ditampilkan di browser (meskipun judul biasanya muncul di bilah judul browser) tetapi dapat berguna untuk fungsionalitas halaman web.

## Syntax

Tag `<head>` ditulis seperti `<head></head>` dengan konten metadata terlampir di antara tag awal dan akhir. 

Tag `<head>` ditempatkan di antara tag `<html>` pembuka dan penutup.

Sebagian besar dokumen HTML harus memiliki tag `<title>` dalam tag `<head>`.

Seperti ini:

```html
<!doctype html>
<html>
<head>
	<title>Page title...</title>
</head>
<body>
	Page body...
</body>
</html>
```

{{< code lang="html" >}}
<!DOCTYPE html>
<html>
<head>
  <!-- Document metadata -->
</head>
<body>
  <!-- Document content -->
  	Page body...
</body>
</html>
{{< /code >}}

{{< browser tag="head" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<head>` dengan pengaturan CSS:

```css
head {
  display: none;
}
```