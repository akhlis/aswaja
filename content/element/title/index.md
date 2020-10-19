---
title: title
description: title
date: "2019-11-18T10:34:07+07:00"
slug: title
authors:
- akhlis
name: title
experimental: false
meta: true
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/title
---

Tag `<title>` mewakili judul atau nama dokumen HTML.

Judul biasanya ditampilkan di bagian atas bilah judul browser.

Dan juga dapat ditampilkan di luar konteks (misalnya, dalam hasil pencarian atau bookmark browser) sehingga harus diperhitungkan saat memberikan judul.

Tidak boleh ada lebih dari satu tag `<title>` dalam setiap dokumen HTML.

Sebagian besaar dokumen HTML harus memiliki elemen `<title>`. Namun elemen `<title>` juga dapat dihilangkan dalam kasus-kasus dimana protokol tingkat yang lebih tinggi memberikan informasi judul.

Misalnya, dalam email HTML di mana judul disediakan di baris subjek.

## Syntax

Tag `<title>` ditulis seperti `<title></title>` dengan judul halaman disisipkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<title>Judul website disini...</title>
```

```html
<!doctype html>
<html>
	<head>
		<title>How to Build a Dome House</title>
	</head>
	<body>
		Content...
	</body>
</html>
```

{{< browser tag="title" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<title>` dengan pengaturan CSS:

```css
title {
  display: none;
}
```