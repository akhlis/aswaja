---
title: blockquote
description: blockquote
date: "2019-11-18T10:34:07+07:00"
slug: blockquote
authors:
- akhlis
name: blockquote
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/blockquote
---

Tag `<blockquote>` digunakan untuk membuat elemen `blockquote` yang mewakili konten kutipan dari sumber lain.

Browser biasanya merender teks `blockquote` sebagai teks inden.

Jadi, paragraf atau beberapa paragraf yang ada didalam elemen `blockquote` akan ditampilkan menjorok kedalam.

Biasanya elemen `blockquote` dipakai untuk kutipan-kutipan yang panjang.

Sedangkan untuk membuat kutipan yang pendek digunakan elemen `q`.

## Syntax

Tag `<blockquote>` ditulis sebagai `<blockquote></blockquote>` dengan konten kutipan diselipkan diantara tag pembuka dan penutup.

{{< code lang="html" >}}
<blockquote>Teks kutipan disini...</blockquote>
{{< /code >}}

{{< code lang="html" >}}
<blockquote>
The most important moment of your life is now. The most important person in your life is the one you are with now, and the most important activity in your life is the one you are involved with now. - 
<cite>Ajahn Ekachai</cite>
</blockquote>
{{< /code >}}

{{< code lang="html" >}}
<p>Here's another great quote from <cite>My Big TOE</cite>:</p>
<blockquote cite="http://books.google.com.au/books?id=RYHtBPiZVgsC&pg=PA116&redir_esc=y#v=onepage&q&f=false">
Scientists might <em>believe</em> that what is unknown must be contained within the <abbr title="Physical Matter Reality">PMR</abbr> data-set and follow ordinary objective causality, but that <em>belief</em> or article of faith simply expresses a more accepted form of mysticism.
</blockquote>
{{< /code >}}

<article id="blockquote-cite" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="cite">
        cite
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan sumber URL kutipan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="blockquote-cite-httpsenwikiquoteorgwikimarie_curie" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy cite=&quot;https://en.wikiquote.org/wiki/Marie_Curie&quot;"
            data-clipboard-text="cite=&quot;https://en.wikiquote.org/wiki/Marie_Curie&quot;">
            "https://en.wikiquote.org/wiki/Marie_Curie"
          </code>
        </h4>
        <div class="value__description">
          <p>Hanya URL valid yang bisa digunakan.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <blockquote cite="https://en.wikiquote.org/wiki/Marie_Curie"></blockquote>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="blockquote" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `blockquote` dengan pengaturan CSS berikut:

```css
blockquote {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
```