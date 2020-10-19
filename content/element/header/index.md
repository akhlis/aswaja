---
title: header
description: header
date: "2019-11-18T10:34:07+07:00"
slug: header
authors:
- akhlis
name: header
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/header
caniuse: https://caniuse.com/#feat=html5semantic
---

Tag `<header>` mewakili konten pengantar dari _sectioning content_ atau elemen _sectioning root_.

_Sectioning Content_ adalah konten yang mendefinisikan ruang lingkup heading dan footer seperti `<article>`, `<aside>`, `<nav>`, `<section>`.

Header dapat berisi judul, subjudul, form pencarian, logo, navigasi, dll.

## Syntax

Tag `<header>` ditulis seperti `<header></header>` dengan konten header diletakkan diantara tag pembuka dan penutup.

Seperti

```html
<header>
	Konten Header ...
</header>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example header,
  .example article,
  .example footer,
  .example main,
  .example nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 50%;
  }

  .example header {
    background: #FDF7D3;
  }
</style>
<div class="example">
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

#### Document Heading

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example header,
  .example article,
  .example footer,
  .example main,
  .example nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 80%;
  }

  .example header {
    background: #FDF7D3;
  }
</style>
<div class="example">
  <header>
    <h1>Mindfulness Articles</h1>
  </header>
  <main>
    Main...
    <article>
      Mindfulness article 1...
    </article>
    <article>
      Mindfulness article 2...
    </article>
    <article>
      Mindfulness article 3...
    </article>
  </main>
  <footer>Footer...
    <nav>Nav...</nav>
  </footer>
</div>
{{< /code >}}

#### Article Heading

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example header,
  .example article,
  .example footer,
  .example main,
  .example nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 80%;
  }

  .example header {
    background: #FDF7D3;
  }

  .example header>p {
    font-weight: bold;
  }
</style>
<div class="example">
  <main>
    Main...
    <article>
      Article...
      <header>
        <h1>Become a Zen Master Today</h1>
        <p>Five experts share their knowledge for attaining enlightenment.</p>
      </header>
      <p>In our recent journey through South East Asia, we...</p>
    </article>
  </main>
  <footer>Footer...
    <nav>Nav...</nav>
  </footer>
</div>
{{< /code >}}

#### Logo

{{< code lang="html" >}}
<!DOCTYPE html>
<title>Example</title>
<style>
  .example header,
  .example article,
  .example footer,
  .example main,
  .example nav {
    border: 1px solid orange;
    padding: 3px;
    margin: 3px;
    width: 80%;
  }

  .example header {
    background: #FDF7D3;
  }
</style>
<div class="example">
  <header>
    <img src="/images/logo-hijacket-solid.png" alt="Logo">
    <input type="search" name="q"><input type="submit" value="Search">
  </header>
  <main>
    Main...
    <article>
      Article...
    </article>
  </main>
  <footer>Footer...
    <nav>Nav...</nav>
  </footer>
</div>
{{< /code >}}


{{< browser tag="header" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<header>` dengan pengaturan CSS:

```css
header {
  display: block;
}
```