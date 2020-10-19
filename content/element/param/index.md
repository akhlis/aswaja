---
title: param
description: param
date: "2019-11-18T10:34:07+07:00"
slug: param
authors:
- akhlis
name: param
experimental: false
meta: false
selfclosing: true
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/param
---

Tag `<param>` digunakan untuk meneruskan parameter ke objek yang disematkan.

Tag `<param>` tidak mewakili apa pun dengan sendirinya. Tag ini digunakan dengan tag `<object>` untuk menyediakan parameter.

## Syntax

Tag `<param>` ditulis seperti `<param name="" value="">` (tanpa tag penutup).

Atribut `name` dan `value` menyediakan pasangan nama/nilai yang dapat digunakan elemen `<object>`.

Seperti ini:
```html
<object data="/music/lostmojo.wav">
	<param name="controller" value="true">
	<param name="autoplay" value="false">
</object>
```

#### Contoh

Kamu dapat menggunakan elemen `<param>` untuk meneruskan parameter ke objek yang disematkan.

Di sini, kami menggunakan tag `<param>` untuk menyematkan file musik, dan elemen `<param>` untuk meneruskan parameter ke elemen `<param>`. 

Kami memberi tahu untuk tidak menampilkan kontrol audio (name="controller" value="true") dan untuk mulai bermain secara otomatis (mis. Name="autoplay" value="false).

{{< code lang="html" >}}
<object data="/music/lostmojo.wav">
  <param name="controller" value="true">
  <param name="autoplay" value="false">
</object>
{{< /code >}}

<article id="param-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Nama parameter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="param-name-movie" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;movie&quot;"
            data-clipboard-text="name=&quot;movie&quot;">
            "movie"
          </code>
        </h4>
        <div class="value__description">
          <p>Objeknya adalah film yang memerlukan URL file <code> .swf </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <param name="movie">
          </param>
        </div>
      </aside>
    </article>
    <article id="param-name-wmode" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;wmode&quot;"
            data-clipboard-text="name=&quot;wmode&quot;">
            "wmode"
          </code>
        </h4>
        <div class="value__description">
          <p>Bagaimana latar belakang objek ditangani.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <param name="wmode">
          </param>
        </div>
      </aside>
    </article>
    <article id="param-name-allowfullscreen" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;allowFullScreen&quot;"
            data-clipboard-text="name=&quot;allowFullScreen&quot;">
            "allowFullScreen"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika objek diizinkan untuk masuk layar penuh.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <param name="allowFullScreen">
          </param>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="param-value" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Nilai terlampir pada parameter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="param-value__assetsgolfswf" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;/assets/golf.swf&quot;"
            data-clipboard-text="value=&quot;/assets/golf.swf&quot;">
            "/assets/golf.swf"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika parameternya adalah <code> movie </code>, nilainya adalah URL yang akan diarsipkan.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <param value="/assets/golf.swf">
          </param>
        </div>
      </aside>
    </article>
    <article id="param-value__transparent" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;transparent&quot;"
            data-clipboard-text="value=&quot;transparent&quot;">
            "transparent"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika parameternya adalah <code> wmode </code>, nilainya adalah <code> window </code>, <code> direct </code>,
            <code> transparant </code>, <code> opaque </code>, atau <code> gpu </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <param value="transparent">
          </param>
        </div>
      </aside>
    </article>
  </div>
</article>


{{< browser tag="param" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<param>` dengan pengaturan CSS:

```css
param {
  display: none;
}
```