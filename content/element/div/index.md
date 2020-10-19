---
title: div
description: div
date: "2019-11-18T10:34:07+07:00"
slug: div
authors:
- akhlis
name: div
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/div
---

Tag `<div>` mewakili bagian umum dalam dokumen HTML.

Tag div ini memungkinkan kamu untuk mengelompokkan bagian-bagin elemen HTML agar lebih mudah diatur stylenya dengan CSS.

Elemen `<div>` mirip dengan elemen `<span>`, namun elemen `<span>` digunakan dengan elemen sebaris, sedangkan elemen `<div>` digunakan dengan elemen level blok.

Elemen `<div>` sebaiknya hanya digunakan jika tidak ada elemen HTML lain yang cocok untuk digunakan.

Karena HTML5 telah memperkenalkan sejumlah elemen baru yang dapat digunakan sebagai pengganti tag `<div>`.

Misalnya, `<article>`, `<section>`, `<aside>`, `<header>`, `<footer>`, dan lainnya.

## Syntax

Tag `<div>` ditulis seperti `<div></div>` dengan konten umum diletakkan diantara tag pembuka dan penutup.

Seperti ini:

```html
<div>
Konten umum disini ...
</div>
```

{{< code lang="html" >}}
<div style="width:200px;background:#F9EECF;border:1px dotted black;text-align:center">
<p>Konten umum ...</p>
</div>
{{< /code >}}

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
div.generic {width:200px;background:#D8FBD6;border:1px dotted black;padding:8px;}
div.generic div {width:50%;background:#75CE6F;color:white;border:1px dotted green;text-align:left;padding:3px;}
</style>
<div class="generic">
<p>Generic content...</p>
<div>
<p>Nested div content...</p>
</div>
</div>
{{< /code >}}

{{< browser tag="div" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<div>` dengan pengaturan CSS:

```css
div {
  display: block;
}
```
