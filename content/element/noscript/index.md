---
title: noscript
description: noscript
date: "2019-11-18T10:34:07+07:00"
slug: noscript
authors:
- akhlis
name: noscript
experimental: false
meta: true
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/noscript
---

Tag `<noscript>` mewakili konten alternatif untuk browser yang tidak mendukung javascript atau bahasa skrip lainnya.

Tag `<noscript>` digunakan bersama dengan tag `<script>` untuk menyediakan konten untuk agen pengguna yang tidak mendukung script.

## Syntax

Tag `<noscript>` ditulis seperti `<noscript></noscript>` dengan konten yang dimasukkan diantara tag pembuka dan penutup.

Tag `<noscript>` biasanya ditempatkan setelah tag penutup dari elemen `<script>`.

Seperti ini:

```html
<script>
	script disini...
</script>
<noscript>
	konten noscript disini...
</noscript>
```

{{< code lang="html" >}}
<script  language="javascript" type="text/javascript">
document.write('Nonaktifkan Javascript kemudian muat ulang halaman ini!');
</script>
<noscript>
Browser kamu tidak mendukung Javascript atau kamu telah menonaktifkan Javascript...
</noscript>
{{< /code >}}

{{< browser tag="noscript" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}