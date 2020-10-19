---
title: legend
description: legend
date: "2019-11-18T10:34:07+07:00"
slug: legend
authors:
- akhlis
name: legend
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/legend
---

Tag `<legend>` mewakili keterangan untuk elemen `<fieldset>`.

Elemen `<fieldset>` digunakan untuk mengelompokkan beberapa kontrol sebuah form dan diberi judul dengan `<legend>`.

Elemen `<legend>` ini bisa membuat form dan elemen lainnya lebih mudah dipahami oleh pengguna.

Misalnya, elemen `<legend>` bisa memberikan elemen `<fieldset>` dengan judul "Detail Nama" dan elemen lain diberi judul "Detail Alamat".

## Syntax

Tag `<legend>` ditulis seperti `<legend></legend>` dengan teks keterangan disisipkan diantara tag pembuka dan penutup.

Seperti ini:

```html
<fieldset>
	<legend>Keterangan disii ...</legend>
	
	...Konten fieldset...
	
</fieldset>
```

{{< code lang="html" >}}
<fieldset>
  <legend>Name Details</legend>
  <p>First Name: <input type="text" style="width:120px;"> Surname: <input type="text" style="width:120px;"></p>
  <p>Preferred Name: <input type="text" style="width:120px;"></p>
</fieldset>
<fieldset>
  <legend>Gender</legend>
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female
  <input type="radio" name="gender" value="other"> Other
</fieldset>
{{< /code >}}

{{< browser tag="legend" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<legend>` dengan pengaturan CSS:

```css
legend {
  display: block;
  padding-left: 2px;
  padding-right: 2px;
  border: none;
}
```