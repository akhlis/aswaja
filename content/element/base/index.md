---
title: base
description: base
date: "2019-11-18T10:34:07+07:00"
slug: base
authors:
- akhlis
name: base
experimental: false
meta: false
selfclosing: true
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/base
---

Tag `<base>` digunakan untuk membuat elemen `base` yang memungkinkan penulis web untuk membuat URL dasar.

Misalnya, kamu dapat mengatur URL dasar sekali di bagian atas halaman web, maka semua tautan relatif pada halaman akan menggunakan URL itu seolah-olah itu adalah halaman saat ini.

Menentukan URL dasar untuk semua link relative halaman website harus ditempatkan didalamn elemen `<head>`.

Dan maksimal hanya boleh ada satu elemen `<base> ` saja didalam dokumen HTML.

## Syntax

Tag `<base>` ditulis seperti `<base href=" target="">` (tanpa tag penutup) dan harus memiliki atribut href, target, atau keduanya.

```html
<!doctype html>
<html>
	<head>
		<title>Contoh tag 'base'</title>
		<base href="https://codingku.id/" target="_blank">
	</head>
	<body>
		<p>Belajar <a href="html/">HTML dasar</a>.</p>
	</body>
</html>
```

<article id="base-href" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="href">
        href
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan target utama dari semua link halaman web.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="base-href-siteurl" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;{{site.url}}&quot;"
            data-clipboard-text="href=&quot;{{site.url}}&quot;">
            "{{site.url}}"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan URL <strong>absolute</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <base href="{{site.url}}">
          </base>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="base-target" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="target">
        target
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan antara tab atau jendela yang akan ditampilkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="base-target-_blank" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_blank&quot;"
            data-clipboard-text="target=&quot;_blank&quot;">
            "_blank"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka di tab baru</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <base href="{{site.url}}" target="_blank">
          </base>
        </div>
      </aside>
    </article>
    <article id="base-target-_self" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_self&quot;"
            data-clipboard-text="target=&quot;_self&quot;">
            "_self"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka di tab yang sudah ada.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <base href="{{site.url}}" target="_self">
          </base>
        </div>
      </aside>
    </article>
    <article id="base-target-_parent" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_parent&quot;"
            data-clipboard-text="target=&quot;_parent&quot;">
            "_parent"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka di induk halaman web.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <base href="{{site.url}}" target="_parent">
          </base>
        </div>
      </aside>
    </article>
    <article id="base-target-_top" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_top&quot;"
            data-clipboard-text="target=&quot;_top&quot;">
            "_top"
          </code>
        </h4>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <base href="{{site.url}}" target="_top">
          </base>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="base" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}