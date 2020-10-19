---
title: script
description: script
date: "2019-11-18T10:34:07+07:00"
slug: script
authors:
- akhlis
name: script
experimental: false
meta: true
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/script
---

Tag `<script>` digunakan untuk mendeklarasikan script dalam dokumen HTML.

Banyak halaman web menggunakan skrip (biasanya Javascript) untuk menyediakan fungsionalitas tambahan yang tidak dapat diselesaikan dengan HTML saja.

Setiap kali script disematkan ke dalam dokumen HTML, script harus dilampirkan dalam tag `<script>`.

## Syntax

Tag `<script>` ditulis seperti `<script></script>` dengan skrip yang disisipkan di antara tag pemula dan penutup.

Seperti ini:
```html
<script>
	...script disini...
</script>
```

```html
<script src="{{site.url}}/javascript/my-scripts.js"></script>
```

```html
<script type="text/javascript">
  console.log('Hello World');
</script>
```

<article id="script-src" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan sumber skrip eksternal.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="script-src-javascriptmy-scriptsjs" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;/javascript/my-scripts.js&quot;"
            data-clipboard-text="src=&quot;/javascript/my-scripts.js&quot;">
            "/javascript/my-scripts.js"
          </code>
        </h4>
        <div class="value__description">
          <p>URL dapat bersifat relatif atau absolut.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <script src="/javascript/my-scripts.js"></script>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="script-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a> skrip eksternal.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="script-type-textjavascript" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;text/javascript&quot;"
            data-clipboard-text="type=&quot;text/javascript&quot;">
            "text/javascript"
          </code>
        </h4>
        <div class="value__description">
          <p>Ini untuk file <code> .js </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <script type="text/javascript"></script>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="script-async" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="async">
        async
      </code>
    </h3>
    <div class="attribute__description">
      <p>Mengizinkan skrip eksternal dimuat secara tidak sinkron.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="script-async-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <script async></script>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="script" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<script>` dengan pengaturan CSS:

```css
script {
  display: none;
}
```