---
title: nav
description: nav
date: "2019-11-18T10:34:07+07:00"
slug: nav
authors:
- akhlis
name: nav
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/nav
caniuse: https://caniuse.com/#feat=html5semantic
---

Elemen `<nav>` mewakili bagian halaman yang bertujuan untuk menyediakan tautan navigasi, baik di dalam dokumen saat ini atau ke dokumen lain.

Contoh umum bagian navigasi adalah menu, daftar isi, dan indeks.

## Syntax

Tag `<nav>` ditulis seperti `<nav></nav>` dengan konten navigasi disisipkan diantara tag pembuka dan penutup.

Seperti ini:

```html
<nav>
	Navigasi disini...
</nav>
```

### Contoh didalam Elemen `header`

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

  .example1 nav {
    background: #FDF7D3;
  }
</style>
<div class="example1">
  <header>Header...
    <nav>Nav...</nav>
  </header>
  <main>
    Main...
    <article>Article...</article>
    <article>Article...</article>
    <article>Article...</article>
  </main>
  <footer>Footer...
  </footer>
</div>
{{< /code >}}

#### Contoh di dalam Elemen `body`

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example2 header,
  .example2 article,
  .example2 footer,
  .example2 main,
  .example2 nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 50%;
  }

  .example2 nav {
    background: #FDF7D3;
  }
</style>
<div class="example2">
  <nav>Nav...</nav>
  <header>Header...
  </header>
  <main>
    Main...
    <article>Article...</article>
    <article>Article...</article>
    <article>Article...</article>
  </main>
  <footer>Footer...
  </footer>
</div>
{{< /code >}}

#### Contoh sebagai List

{{< code lang="html" >}}
<nav>
  <ul>
    <li><a href="/css/" target="_blank">CSS</a></li>
    <li><a href="/html/" target="_blank">HTML</a></li>
    <li><a href="/javascript/" target="_blank">JavaScript</a></li>
    <li><a href="/sql/tutorial/" target="_blank">SQL</a></li>
  </ul>
</nav>
{{< /code >}}

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example4 nav ul li {
    display: inline;
    list-style-type: none;
    padding: 5px;
    background: orange;
    margin-left: 1px;
  }

  .example4 nav ul li:hover {
    background-color: #fff4c8;
  }

  .example4 nav a {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  .example4 nav a:hover {
    color: orange;
  }
</style>
<div class="example4">
  <nav>
    <ul>
      <li><a href="/css/" target="_blank">CSS</a></li>
      <li><a href="/html/" target="_blank">HTML</a></li>
      <li><a href="/javascript/" target="_blank">JavaScript</a></li>
      <li><a href="/sql/tutorial/" target="_blank">SQL</a></li>
    </ul>
  </nav>
</div>
{{< /code >}}

{{< browser tag="mark" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<nav>` dengan pengaturan CSS:

```css
nav {
  display: block;
}
```