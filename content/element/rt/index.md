---
title: rt
description: rt
date: "2019-11-18T10:34:07+07:00"
slug: rt
authors:
- akhlis
name: rt
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/rt
---

Tag `<rt>` menandai komponen teks ruby ​​dari anotasi ruby.

Anotasi rubi sering digunakan dalam tipografi Asia Timur.

Karakter Ruby adalah gloses kecil, annotatif yang dapat ditempatkan di atas atau sebelah kanan karakter Cina saat menulis bahasa logografis seperti Cina atau Jepang untuk menunjukkan pelafalan.

Anotasi Ruby biasanya digunakan sebagai panduan pengucapan untuk karakter yangr relatif tidak jelas.

Elemen `<rt>` (Ruby Text) menentukan komponen teks ruby dari anotasi ruby, yang digunakan untuk menyediakan informasi pelafalan, terjemahan, atau transliterasi untuk tipografi Asia Timur.

Elemen `<rt>` harus selalu terkandung dalam elemen `<ruby>`.

## Syntax

Tag `<rt>` ditulis seperti `<rt></rt>` dengan teks ruby disisipkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<ruby>
	base 
	<rt>ruby text</rt>
</ruby>
```

{{< code lang="html" >}}
<ruby>
	base 
	<rt>ruby text</rt>
</ruby>
{{< /code >}}

{{< code lang="html" >}}
<ruby>
  漢 <rp>(</rp>
  <rt>Kan</rt>
  <rp>)</rp>
  字 <rp>(</rp>
  <rt>ji</rt>
  <rp>)</rp>
</ruby>
{{< /code >}}

{{< browser tag="rt" chrome="5.0" edge="5.5" firefox="38.0" safari="5.0" opera="15.0" >}}


## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<rt>` dengan pengaturan CSS:

```css
rt {
  line-height: normal;
}
```