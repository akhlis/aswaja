---
title: span
description: span
date: "2019-11-18T10:34:07+07:00"
slug: span
authors:
- akhlis
name: span
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/span
---

Elemen `<span>` adalah wadah inline umum untuk frasa konten yang secara inheren tidak mewakili apapun.

Elemen ini dapat digunakan untuk mengelompokkan elemen untuk keperluan penataan (menggunakan atribut class atau id).

Sebaiknya elemen `span` hanya digunakan ketika tidak ada elemen semantik lain yang sesuai.

Elemen `<span>` sangat mirip dengan elemen `<div>`, tetapi `<div>` merupakan elemen level blok sedangkan `<span>` termasuk elemen inline.

## Syntax

Tag `<span>` ditulis seperti `<span> </span>` dengan konten diletakkan di antara tag pembuka dan penutup.

Tag `<span>` biasanya akan memiliki atribut, karena elemen ini sebenarnya tidak berarti apa-apa.

Atribut paling umum yang digunakan pada tag `<span>` yaitu atribut `class` yang memungkinkan kamu untuk mengaitkan elemen dengan penataan style pada style sheet.

Seperti ini:
```html
<span class="myClass">Konten disini...</span>
```

{{< code lang="html" >}}
<blockquote style="font-size:larger;">If someone tells you, <span style="color:green;">"You can't"</span> they really mean, <span style="color:red;">"I can't"</span>.</blockquote>
<cite>Sean Stephenson</cite>
{{< /code >}}

{{< browser tag="span" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}
