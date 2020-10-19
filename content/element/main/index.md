---
title: main
description: main
date: "2019-11-18T10:34:07+07:00"
slug: main
authors:
- akhlis
name: main
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/main
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<main>` mewakili area konten utama dalam dokumen HTML.

ELemen `<main>` berada di dalam elemen `<body>` dan hanya boleh ditulis satu kali dalam dokumen HTML.

Sehingga tidak boleh ditulis didalam tag `<article>`, `<aside>`, `<header>`, `<footer>`, atau `<nav>`.

Didalam elemen `<main>` juga tidak boleh diisi konten yang ditulis berulang kali dalam sebuah dokumen seperti sidebar, link navigasi, informasi hak cipta, logo website, dan form pencarian (kecuali fungsi utama halaman sebagai form pencarian).

{{< note >}}
Tidak boleh ada lebih dari satu elemen &lt;main&gt; dalam dokumen HTML. Dan elemen &lt;main&gt; TIDAK boleh turunan dari elemen &lt;article&gt;, &lt;aside&gt;, &lt;footer&gt;, &lt;header&gt;, atau &lt;nav&gt;.
{{< /note >}}

## Syntax

Tag `<main>` ditulis seperti `<main></main>` dengan konten utama diletakkan diantara tag pembuka dan penutup.

```html
<main>
	Konten utama disini...
</main>
```

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example1 header,
  .example1 article,
  .example1 footer,
  .example1 main,
  .example1 nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 50%;
  }

  .example1 main {
    background: #FDF7D3;
  }
</style>
<div class="example1">
  <header>Header...</header>
  <main>
    Main...
    <article>Article...</article>
    <article>Article...</article>
    <article>Article...</article>
  </main>
  <footer>Footer...
    <nav>Nav...</nav>
  </footer>
</div>
{{< /code >}}


{{< browser tag="main" chrome="6.0" edge="12.0" firefox="4.0" safari="5.0" opera="11.1" >}}
