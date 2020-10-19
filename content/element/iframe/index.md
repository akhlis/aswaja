---
title: iframe
description: iframe
date: "2019-11-18T10:34:07+07:00"
slug: iframe
authors:
- akhlis
name: iframe
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
---

Elemen Bingkai Inline HTML (`<iframe>`) mewakili konteks penelusuran bersarang, menyematkan halaman HTML lain ke halaman HTML saat ini

## Syntax

Tag `<iframe>` ditulis seperti `<iframe> </iframe>` dengan atribut yang valid diletakkan pada tag pembuka.

```html
<iframe src=""></iframe>
```

#### Dengan Atribut srcdoc

```html
<iframe srcdoc=""></iframe>
```

#### Dengan Atribut src, width, height, dan seamless

```html
<iframe src="" width="" height="" seamless></iframe>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<iframe src="/html/pengertian-html/"></iframe>
{{< /code >}}


#### Contoh dengan Atribut width dan height

{{< code lang="html" >}}
<iframe src="/html/pengertian-html/" width="300" height="300"></iframe>
{{< /code >}}

#### Contoh dengan Atribut seamless

{{< code lang="html" >}}
<iframe src="/html/pengertian-html/" width="300" height="300" seamless></iframe>
{{< /code >}}

<article id="iframe-src" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL halaman web bersarang.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="iframe-src-httpcssreferenceio" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;https://codingku.id&quot;"
            data-clipboard-text="src=&quot;https://codingku.id&quot;">
            "https://codingku.id"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat mengetikkan URL apa saja. Ketahuilah bahwa beberapa situs web tidak akan diizinkan untuk dibingkai.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><iframe src="https://codingku.id" height="200"></iframe></div>
      </aside>
    </article>
  </div>
</article>
<article id="iframe-allowfullscreen" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="allowfullscreen">
        allowfullscreen
      </code>
    </h3>
    <div class="attribute__description">
      <p>Mengizinkan browser menampilkan iframe dalam layar penuh dengan JavaScript.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="iframe-allowfullscreen-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><iframe src="https://codingku.id" height="200" allowfullscreen></iframe></div>
      </aside>
    </article>
  </div>
</article>
<article id="iframe-height" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="height">
        height
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan ketinggian iframe.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="iframe-height-50" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy height=&quot;50&quot;"
            data-clipboard-text="height=&quot;50&quot;">
            "50"
          </code>
        </h4>
        <div class="value__description">
          <p>Ketinggian piksel.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><iframe src="https://codingku.id" height="50" allowfullscreen></iframe></div>
      </aside>
    </article>
  </div>
</article>
<article id="iframe-width" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="width">
        width
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan lebar iframe.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="iframe-width-150" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy width=&quot;150&quot;"
            data-clipboard-text="width=&quot;150&quot;">
            "150"
          </code>
        </h4>
        <div class="value__description">
          <p>Lebar dalam piksel.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><iframe src="https://codingku.id" height="50" allowfullscreen
            width="150"></iframe></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="iframe" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<iframe>` dengan pengaturan CSS:

```css
iframe:focus {
  outline: none;
}

iframe[seamless] {
  display: block;
}
```