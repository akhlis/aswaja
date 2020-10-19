---
title: meta
description: meta
date: "2019-11-18T10:34:07+07:00"
slug: meta
authors:
- akhlis
name: meta
experimental: false
meta: true
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/meta
---

Tag `<meta>` mewakili metadata yang tidak dapat diwakili oleh elemen terkait meta HTML lainnya, seperti `<base>`, `<link>`, `<script>`, `<style>`, atau `<title>`.

Metadata dapat menyertakan deskripsi dokumen, kata kunci, penulis, dll.

Dapat juga digunakan untuk merefresh halaman web atau mengatur cookie.

## Syntax

Tag `<meta>` ditulis seperti `<meta>` (tanpa tag penutup) dengan atribut `name`, `http-equiv`, dan `charset`.

Jika salah satu `nama` atau `http-equiv` ditentukan, maka atribut `content` juga harus ditentukan. Kalau tidak, maka harus dihilangkan.

Seperti ini:

```html
<meta name="" content="">
```

atau

```html
<meta http-equiv="" content="">
```
#### Contoh Sederhana

```html
<html>
	<head>
		<title>Title...</title>
		<meta name="" content="">
	</head>
	<body>
		Content...
	</body>
</html>
```

#### Contoh Character Encoding

Kamu dapat menggunakan tag `<meta>` untuk mendeklarasikan karakter pengkodean dokumen. Dalam contoh ini, saya menentukan dokumen ini menggunakan UTF-8.

```html
<meta charset="utf-8">
```

#### Contoh Author

Kamu dapat menggunakan tag `<meta>` untuk menentukan pembuat dokumen.

```html
<meta name="author" content="Azam Nur">
```

#### Contoh Kata Kunci

```html
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
```

#### Contoh Deskripsi Halaman Web

```html
<meta name="description" content="Free Web tutorials on HTML and CSS">
```

#### Contoh Refresh Halaman Web setiap 5 detik

```html
<meta http-equiv="refresh" content="30">
```

#### Contoh Mengatur viewport untuk membuat situs web terlihat bagus di semua perangkat:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

<article id="meta-charset" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="charset">
        charset
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan pengkodean karakter untuk seluruh halaman web.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meta-charset-utf-8" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy charset=&quot;UTF-8&quot;"
            data-clipboard-text="charset=&quot;UTF-8&quot;">
            "UTF-8"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus <a
              href="https://www.iana.org/assignments/character-sets/character-sets.xhtml">character set</a> yang valid.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta charset="UTF-8">
          </meta>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="meta-http-equiv" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="http-equiv">
        http-equiv
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan aturan meta untuk halaman web.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meta-http-equiv-content-security-policy" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy http-equiv=&quot;Content-Security-Policy&quot;"
            data-clipboard-text="http-equiv=&quot;Content-Security-Policy&quot;">
            "Content-Security-Policy"
          </code>
        </h4>
        <div class="value__description">
          <p>Menentukan tautan ke halaman <a
              href="https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives">konten kebijakan</a> web.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta http-equiv="Content-Security-Policy">
          </meta>
        </div>
      </aside>
    </article>
    <article id="meta-http-equiv-refresh" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy http-equiv=&quot;refresh&quot;"
            data-clipboard-text="http-equiv=&quot;refresh&quot;">
            "refresh"
          </code>
        </h4>
        <div class="value__description">
          <p>Memungkinkan untuk me-refresh halaman web setiap N detik, atau bahkan mengarahkan ke URL lain.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta http-equiv="refresh">
          </meta>
        </div>
      </aside>
    </article>
    <article id="meta-http-equiv-x-ua-compatible" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy http-equiv=&quot;X-UA-Compatible&quot;"
            data-clipboard-text="http-equiv=&quot;X-UA-Compatible&quot;">
            "X-UA-Compatible"
          </code>
        </h4>
        <div class="value__description">
          <p>Menentukan versi Internet Explorer mana yang bisa merender halaman web.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta http-equiv="X-UA-Compatible">
          </meta>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="meta-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan informasi tambahan yang dilampirkan pada halaman web.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meta-name-viewport" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;viewport&quot;"
            data-clipboard-text="name=&quot;viewport&quot;">
            "viewport"
          </code>
        </h4>
        <div class="value__description">
          <p>Menentukan dimensi dan aturan penskalaan untuk viewport.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta name="viewport">
          </meta>
        </div>
      </aside>
    </article>
    <article id="meta-name-theme-color" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;theme-color&quot;"
            data-clipboard-text="name=&quot;theme-color&quot;">
            "theme-color"
          </code>
        </h4>
        <div class="value__description">
          <p>Menentukan warna tema yang dapat digunakan oleh browser atau sistem operasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta name="theme-color">
          </meta>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="meta-content" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="content">
        content
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan konten metadata yang bervariasi sesuai dengan value <code>name</code> atau <code>http-equiv</code>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meta-content-widthdevice-width-initial-scale1" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag"
            data-tooltip="Click to copy content=&quot;width&#x3D;device-width, initial-scale&#x3D;1&quot;"
            data-clipboard-text="content=&quot;width&#x3D;device-width, initial-scale&#x3D;1&quot;">
            "width&#x3D;device-width, initial-scale&#x3D;1"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk metadata <code> viewport </code>, kamu dapat menentukan lebar dan skala awal halaman web.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta content="width=device-width, initial-scale=1">
          </meta>
        </div>
      </aside>
    </article>
    <article id="meta-content-2-urlhttpcssreferenceio" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy content=&quot;2; url&#x3D;https://codingku.id&quot;"
            data-clipboard-text="content=&quot;2; url&#x3D;https://codingku.id&quot;">
            "2; url&#x3D;https://codingku.id"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk metadata <code> refresh </code>, kamu dapat menentukan berapa detik untuk menunggu sebelum dialihkan ke URL lain.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <meta content="2; url=https://codingku.id">
          </meta>
        </div>
      </aside>
    </article>
  </div>
</article>