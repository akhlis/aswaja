---
title: rp
description: rp
date: "2019-11-18T10:34:07+07:00"
slug: rp
authors:
- akhlis
name: rp
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/rp
---

Tag `<rp` digunakan untuk menyediakan teks mundur yang akan ditampilkan oleh browser yang tidak mendukung anotasi ruby.

Anotasi rubi sering digunakan dalam tipografi Asia Timur.

Karakter Ruby adalah gloses kecil, annotatif yang dapat ditempatkan di atas atau sebelah kanan karakter Cina saat menulis bahasa logografis seperti Cina atau Jepang untuk menunjukkan pelafalan.

Anotasi Ruby biasanya digunakan sebagai panduan pengucapan untuk karakter yangr relatif tidak jelas.

## Syntax

Tag `<rp>` ditulis seperti `<rp></rp>` dengan teks fallback disisipkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<ruby>
	base 
	<rp>fallback text...</rp>
	<rt>annotation</rt>
	<rp>fallback text...</rp>
</ruby>
```

{{< code lang="html" >}}
<p lang="ja">... 
<ruby>
 &#28450; <rp>(</rp><rt>&#12363;&#12435;</rt><rp>)</rp>
 &#23383; <rp>(</rp><rt>&#12376;</rt><rp>)</rp>
</ruby>
...</p>
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

{{< browser tag="rp" chrome="5.5" edge="5.5" firefox="38.0" safari="5.0" opera="15.0" >}}