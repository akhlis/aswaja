---
title: object
description: object
date: "2019-11-18T10:34:07+07:00"
slug: object
authors:
- akhlis
name: object
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/object
---

Tag `<object>` mewakili objek yang disematkan dalam dokumen HTML.

Bergantung pada jenis sumber file, elemen `<object>` akan diperlakukan sebagai gambar, sebagai konteks penelusuran bersarang, atau sebagai sumber daya eksternal yang akan diproses oleh plugin.

Kamu dapat menggunakan tag `<param>` untuk meneruskan parameter ke plugin yang telah disematkan menggunakan tag `<object>`.

Kamu juga dapat menggunakan tag `<object>` untuk menyematkan halaman web lain ke dalam dokumen HTML.

## Syntax

Tag `<object>` ditulis seperti `<object> </object>` dengan konten apa pun yang terlampir di antara tag pembuka dan penutup.

Tag `<object>` biasanya memiliki satu atau lebih atribut, seperti atribut type, atau atribut data yang menentukan jenis konten yang disematkan dan data apa pun yang diperlukan.

Seperti ini:

```html
<object data="" width="" height=""></object>
```

{{< code lang="html" >}}
<object
  type="application/x-shockwave-flash" data="/assets/golf.swf" width="800" height="360">
  <param name="movie" value="/assets/golf.swf">
  <param name="wmode" value="transparent">
  <p>Kamu harus mengaktifkan Flash untuk melihat konten ini.</p>
</object>
{{< /code >}}


<article id="object-data" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="data">
        data
      </code>
    </h3>
    <div class="attribute__description">
      <p>URL data objek.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="object-data-assetsgolfswf" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy data=&quot;/assets/golf.swf&quot;"
            data-clipboard-text="data=&quot;/assets/golf.swf&quot;">
            "/assets/golf.swf"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus URL yang valid.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><object data="/assets/golf.swf" type="application/x-shockwave-flash"></object></div>
      </aside>
    </article>
  </div>
</article>
<article id="object-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jenis aplikasi.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="object-type-applicationx-shockwave-flash" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;application/x-shockwave-flash&quot;"
            data-clipboard-text="type=&quot;application/x-shockwave-flash&quot;">
            "application/x-shockwave-flash"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus <a href="https://developer.mozilla.org/en-US/docs/Glossary/MIME_type">tipe MIME</a> yang valid.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><object data="/assets/golf.swf" type="application/x-shockwave-flash"></object></div>
      </aside>
    </article>
  </div>
</article>
<article id="object-height" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="height">
        height
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan ketinggian objek.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="object-height-50" class="value">
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
        <div class="value__output"><object data="/assets/golf.swf" type="application/x-shockwave-flash"
            height="50"></object></div>
      </aside>
    </article>
  </div>
</article>
<article id="object-width" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="width">
        width
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan lebar objek.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="object-width-150" class="value">
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
        <div class="value__output"><object data="/assets/golf.swf" type="application/x-shockwave-flash" height="50"
            width="150"></object></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="object" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<object>` dengan pengaturan CSS:

```css
object:focus {
  outline: none;
}
```