---
title: ruby
description: ruby
date: "2019-11-18T10:34:07+07:00"
slug: ruby
authors:
- akhlis
name: ruby
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/ruby
---

Tag `<ruby>` digunakan untuk menentukan penjelasan Ruby.

Anotasi rubi sering digunakan dalam tipografi Asia Timur.

Karakter Ruby adalah gloses kecil, annotatif yang dapat ditempatkan di atas atau sebelah kanan karakter Cina saat menulis bahasa logografis seperti Cina atau Jepang untuk menunjukkan pelafalan.

Anotasi Ruby biasanya digunakan sebagai panduan pengucapan untuk karakter yangr relatif tidak jelas.

## Syntax

Tag `<ruby>` ditulis seperti `<ruby> </ruby>` dengan anotasi ruby ​​disisipkan di antara tag pembuka dan penutup.

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

{{< browser tag="ruby" chrome="5.0" edge="5.5" firefox="38.0" safari="5.0" opera="15.0" >}}