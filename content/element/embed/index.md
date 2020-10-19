---
title: embed
description: embed
date: "2019-11-18T10:34:07+07:00"
slug: embed
authors:
- akhlis
name: embed
experimental: false
meta: false
selfclosing: true
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/embed
---

Elemen `<embed>` digunakan untuk menyematkan konten eksternal dalam dokumen HTML.

Konten ini disediakan oleh aplikasi eksternal atau sumber konten interaktif lainnya seperti plug-in browser.

## Syntax

Tag `<embed>` ditulis seperti `<embed type="" source="">` (tanpa tag penutup), dengan tipe objek disematkan diantara _double quotes_ pada atribut type, dan URL objek pada atribut _source_.

Seperti ini:

```html
<embed type="video/quicktime" src="my_movie.mov" width="800" height="500">
```

{{< code lang="html" >}}
<embed src="https://www.youtube.com/embed/kmk43_2dtn0" width="640" height="480">
{{< /code >}}
        
<article id="embed-src" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
    </div>
  </header>
  <div class="attribute__values">
    <article id="embed-src-httpswwwyoutubecomembedkmk43_2dtn0" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;https://www.youtube.com/embed/kmk43_2dtn0&quot;"
            data-clipboard-text="src=&quot;https://www.youtube.com/embed/kmk43_2dtn0&quot;">
            "https://www.youtube.com/embed/kmk43_2dtn0"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan video pihak ketiga.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><embed src="https://www.youtube.com/embed/kmk43_2dtn0"></embed></div>
      </aside>
    </article>
  </div>
</article>
<article id="embed-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Type MIME aplikasi.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="embed-type-mp4" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;mp4&quot;"
            data-clipboard-text="type=&quot;mp4&quot;">
            "mp4"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">tipe MIME</a>.
          </p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><embed src="https://www.youtube.com/embed/kmk43_2dtn0"></embed></div>
      </aside>
    </article>
  </div>
</article>
<article id="embed-height" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="height">
        height
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tinggi container.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="embed-height-50" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy height=&quot;50&quot;"
            data-clipboard-text="height=&quot;50&quot;">
            "50"
          </code>
        </h4>
        <div class="value__description">
          <p>Tinggi dalam pixel.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><embed src="https://www.youtube.com/embed/kmk43_2dtn0" height="50"></embed></div>
      </aside>
    </article>
  </div>
</article>
<article id="embed-width" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="width">
        width
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan lebar container.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="embed-width-150" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy width=&quot;150&quot;"
            data-clipboard-text="width=&quot;150&quot;">
            "150"
          </code>
        </h4>
        <div class="value__description">
          <p>Lebar dalam pixel.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><embed src="https://www.youtube.com/embed/kmk43_2dtn0" height="50"
            width="150"></embed></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="embed" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<embed>` dengan pengaturan CSS:

```css
embed:focus {
  outline: none;
}
```