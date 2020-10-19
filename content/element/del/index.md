---
title: del
description: del
date: "2019-11-18T10:34:07+07:00"
slug: del
authors:
- akhlis
name: del
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/del
---

Tag `<del>` mewakili teks yang dihapus dalam dokumen HTML.

Menandai teks yang dihapus sering digunakan untuk membedakan antara beberapa versi dokumen yang sama.

## Syntax

Tag `<del>` ditulis seperti `<del></del>` dengan teks yang dihapus diantara tag pembuka dan penutup.

Seperti ini:

```html
<del>Teks yang dihapus ...</del>
```

#### Contoh "To Do" List

{{< code lang="html" >}}
<ol>
  <li><del>Book flights</del></li>
  <li><del>Book accommodation</del></li>
  <li><del>Go to airport</del></li>
  <li>Fly away!</li>
</ol>
{{< /code >}}

#### Date & Time

{{< code lang="html" >}}
<ol>
  <li><del datetime="2014-08-11T10:25-05:00">Book flights</del></li>
  <li><del datetime="2014-08-11T11:25-05:00">Book accommodation</del></li>
  <li><del datetime="2014-08-12T06:10-05:00">Go to airport</del></li>
  <li>Fly away!</li>
</ol>
{{< /code >}}

#### Menyisipkan Teks Baru

{{< code lang="html" >}}
<p>On 21 December 2012 the whole world is going to <del datetime="2012-12-22T00:01-05:00" cite="/2012_correction.html">end!</del> <ins datetime="2012-12-22T00:01-05:00" cite="/2012_correction.html">carry on as usual</ins>.</p>
{{< /code >}}

<article id="del-cite" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="cite">
        cite
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL tempat alasan penghapusan dijelaskan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="del-cite-httpsdevelopermozillaorgen-usdocswebhtmlelementacronym" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag"
            data-tooltip="Click to copy cite=&quot;https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym&quot;"
            data-clipboard-text="cite=&quot;https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym&quot;">
            "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym"
          </code>
        </h4>
        <div class="value__description">
          <p>Hanya URL valid yang bisa digunakan.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><del
            cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym">acronym</del></div>
      </aside>
    </article>
  </div>
</article>
<article id="del-datettime" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="datettime">
        datettime
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan kapan penghapusan telah terjadi.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="del-datettime-2017-10-14t120000001-0400" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy datettime=&quot;2017-10-14T12:00:00.001-04:00&quot;"
            data-clipboard-text="datettime=&quot;2017-10-14T12:00:00.001-04:00&quot;">
            "2017-10-14T12:00:00.001-04:00"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu perlu <a
              href="https://html.spec.whatwg.org/multipage/infrastructure.html#valid-global-date-and-time-string">format waktu yang valid</a>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><del datettime="2017-10-14T12:00:00.001-04:00">acronym</del></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="del" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<del>` dengan pengaturan CSS:

```css
del {
  text-decoration: line-through;
}
```