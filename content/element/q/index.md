---
title: q
description: q
date: "2019-11-18T10:34:07+07:00"
slug: q
authors:
- akhlis
name: q
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/q
---

Tag `<q>` mewakili kutipan teks pendek tanpa jeda paragraf.

Browser biasanya menampilkan teks kutipan `<q>` dengan tanda kutip (").

Jika kutipan tersebut mencakup beberapa baris, kamu harus menggunakan tag `<blockquote>`.

## Syntax

Tag `<q>` ditulis seperti `<q></q>` dengan teks kutipan disisipkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<q>Teks kutipan pendek disini...</q>
```

{{< code lang="html" >}}
<p><cite>Tom Campbell</cite> said <q>It's not that you <em>have</em> consciousness, but that you <em>are</em> consciousness</q>.</p>
{{< /code >}}

<article id="q-cite" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="cite">
        cite
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL sumber kutipan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="q-cite-httpsenwikiquoteorgwikithe_terminator" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy cite=&quot;https://en.wikiquote.org/wiki/The_Terminator&quot;"
            data-clipboard-text="cite=&quot;https://en.wikiquote.org/wiki/The_Terminator&quot;">
            "https://en.wikiquote.org/wiki/The_Terminator"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu hanya dapat menggunakan URL yang valid.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><q cite="https://en.wikiquote.org/wiki/The_Terminator"></q></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="q" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<q>` dengan pengaturan CSS:

```css
q {
  display: inline;
}

q:before {
  content: open-quote;
}

q:after {
  content: close-quote;
}
```