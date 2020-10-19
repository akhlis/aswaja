---
title: link
description: link
date: "2019-11-18T10:34:07+07:00"
slug: link
authors:
- akhlis
name: link
experimental: false
meta: true
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/link
---

Tag `<link>` mewakili tautan ke sumber file eksternal pada dokumen HTML yang bersangkutan.

Tag `link` ini paling sering digunakan untuk menautkan file stylesheet eksternal ke dokumen saat ini.

Tetapi juga dapat digunakan untuk menetapkan ikon situs (ikon "favicon" pada layar beranda dan aplikasi di perangkat selular).

Meskipun tag `<link>` dapat digunakan untuk membuat "hyperlink", tag ini tidak digunakan untuk membuat hyperlink "yang dapat diklik" oleh pengguna seperti pada tag `<a>`.

## Syntax

Tag `<link>` biasanya ditulis seperti `<link rel="" href="">` (tanpa tag penutup) dan diletakkan di dalam elemen `<head>...</head>`.

Atribut `rel` menentukan hubungan antara dokumen yang berisi hyperlink dan sumber file tujuan.

Sedangkan atribut `href` menentukan alamat hyperlink.

```html
<link rel="stylesheet" href="/style.css">
```

<article id="link-href" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="href">
        href
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL tautan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="link-href-siteurlcsswebsitecss" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;{{site.url}}/css/website.css&quot;"
            data-clipboard-text="href=&quot;{{site.url}}/css/website.css&quot;">
            "{{site.url}}/css/website.css"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat memakai URL <strong> absolut </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link href="{{site.url}}/css/website.css">
          </link>
        </div>
      </aside>
    </article>
    <article id="link-href-csswebsitecss" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;/css/website.css&quot;"
            data-clipboard-text="href=&quot;/css/website.css&quot;">
            "/css/website.css"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu juga dapat menggunakan URL <strong> relatif </strong> ke domain root.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link href="/css/website.css">
          </link>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="link-rel" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="rel">
        rel
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types">tipe link</a> yang menjelaskan tautan terkait dengan halaman web saat ini.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="link-rel-stylesheet" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;stylesheet&quot;"
            data-clipboard-text="rel=&quot;stylesheet&quot;">
            "stylesheet"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautannya adalah stylesheet.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link rel="stylesheet">
          </link>
        </div>
      </aside>
    </article>
    <article id="link-rel-icon" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;icon&quot;"
            data-clipboard-text="rel=&quot;icon&quot;">
            "icon"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautannya adalah favicon.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link rel="icon">
          </link>
        </div>
      </aside>
    </article>
    <article id="link-rel-author" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;author&quot;"
            data-clipboard-text="rel=&quot;author&quot;">
            "author"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautan ini adalah situs web penulis halaman web.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link rel="author">
          </link>
        </div>
      </aside>
    </article>
    <article id="link-rel-next" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;next&quot;"
            data-clipboard-text="rel=&quot;next&quot;">
            "next"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautannya merupakan halaman berikutnya.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link rel="next">
          </link>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="link-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jenis sumber file yang ditautkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="link-type-textcss" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;text/css&quot;"
            data-clipboard-text="type=&quot;text/css&quot;">
            "text/css"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautannya adalah file CSS.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link type="text/css">
          </link>
        </div>
      </aside>
    </article>
    <article id="link-type-texthtml" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;text/html&quot;"
            data-clipboard-text="type=&quot;text/html&quot;">
            "text/html"
          </code>
        </h4>
        <div class="value__description">
          <p>Tautan ini adalah dokumen HTML.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <link type="text/html">
          </link>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="link" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<link>` dengan pengaturan CSS:

```css
link {
  display: none;
}
```