---
title: datalist
description: datalist
date: "2019-11-18T10:34:07+07:00"
slug: datalist
authors:
- akhlis
name: datalist
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/datalist
---

Tag `<datalist>` menentukan daftar opsi yang telah ditentukan untuk elemen `<input>`.

Tag ini bisa digunakan untuk membuat fitur _"autocomplete"_ pada elemen form dengan cara memberi daftar opsi yang kemudian akan muncul saat pengguna memasukkan data.

Misalnya, jika pengguna mulai memasukkan teks ke kolom input, daftar opsi dengan value yang relevan akan ditampilkan sehingga pengguna bisa langsung memilihnya.

## Syntax

Tag `<datalist>` ditulis seperti `<datalist id=""></datalist>` dengan beberapa jumlah tag `<option>` diletakkan diantara tag pembuka dan penutup.

{{< code lang="html" >}}
<label>Negara Amerika Selatan</label><br>
<input list="negara" placeholder="Ketik Negara">
<datalist id="negara">
  <option value="Argentina">
  <option value="Bolivia">
  <option value="Brazil">
  <option value="Chile">
  <option value="Colombia">
  <option value="Ecuador">
  <option value="Guyana">
  <option value="Paraguay">
  <option value="Peru">
  <option value="Suriname">
  <option value="Uruguay">
  <option value="Venezuela">
</datalist>
{{< /code >}}

{{< browser tag="datalist" chrome="20.0" edge="10.0" firefox="4.0" safari="12.1" opera="9.0" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<datalist>` dengan pengaturan CSS:

```css
datalist {
  display: none;
}
```