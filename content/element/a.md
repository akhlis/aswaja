---
title: a
description: a
date: "2019-11-18T10:34:07+07:00"
slug: a
authors:
- akhlis
name: a
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/a
---

Tag `<a>` digunakan untuk membuat link ke sebuah URL halaman website, bagian dalam halaman web, atau alamat email. 

Elemen `<a>` disebut juga element _anchor_ atau _hyperlink_ yang menghubungkan antara halaman website yang satu dengan lainnya.

Attribut terpenting yang dimiliki elemen `<a>` yaitu `href` yang menunjukkan tujuan link yang akan dituju.

Kamu bisa menggunakan tag `<a>` untuk membuat link dengan teks atau gambar.

## Syntax

Tag `<a>` ditulis seperti `<a href=""></a>` dengan URL link diantara kedua tanda `" "` pada atribut `href` dan teks _anchor_ diantara tag pembuka dan penutup.

{{< code lang="html" >}}
<a href="https://codingku.id">Belajar HTML di codingku.id</a>
{{< /code >}}

#### Membuka link pada jendela atau tab baru

Kamu bisa menggunakan `target="_blank"` untuk membuka link di tab baru.

{{< code lang="html" >}}
<a href="https://codingku.id" target="_blank">Belajar HTML di codingku.id</a>
{{< /code >}}

#### Link Gambar

Bungkus tag `<img>` dengan tag `<a>` untuk membuat link gambar.

{{< code lang="html" >}}
<a href="https://id.wikipedia.org/wiki/Bali" target="myTab">
  <img src="/images/html/kuta-bali.jpg" alt="Pulau Bali">
</a>
{{< /code >}}

## Atribut Khusus pada Elemen `<a>`

Berikut ini atribut khusus yang ada pada elemen `<a>`:

<article id="a-href" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="href">
        href
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan target link ke URL halaman website</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="a-href-httphtmlreferenceio" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;https://codingku.id&quot;"
            data-clipboard-text="href=&quot;https://codingku.id&quot;">
            "https://codingku.id"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk membuat link URL <strong>absolute</strong></p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="https://codingku.id">Belajar HTML Dasar</a></div>
      </aside>
    </article>
    <article id="a-href-elementdiv" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;/element/div&quot;"
            data-clipboard-text="href=&quot;/element/div&quot;">
            "/element/div"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk membuat link URL <strong>relative</strong> sub direktori ke domain root.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="/element/div">Mengenal elemen div</a></div>
      </aside>
    </article>
    <article id="a-href-footer" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;#header&quot;"
            data-clipboard-text="href=&quot;#footer&quot;">
            "#footer"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk menargetkan ke sebuah elemen HTML dalam satu halaman website. Disini kami menargetkan ke elemen <code>&lt;header id="header"&gt;</code></p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="#header">Header</a></div>
      </aside>
    </article>
    <article id="a-href-mailtoalexsmithcom" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;mailto:alex@smith.com&quot;"
            data-clipboard-text="href=&quot;mailto:alex@smith.com&quot;">
            "mailto:alex@smith.com"
          </code>
        </h4>
        <div class="value__description">
          <p>You can use the <code>mailto</code> protocol. Clicking the link will open the user&#39;s email client.
          </p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="mailto:alex@smith.com">Contact me</a></div>
      </aside>
    </article>
  </div>
</article>
<article id="a-target" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="target">
        target
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tab atau window yang akan ditampilkan saat link di klik.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="a-target-_blank" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_blank&quot;"
            data-clipboard-text="target=&quot;_blank&quot;">
            "_blank"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk membuka jendela browser atau tab baru.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="https://codingku.id" target="_blank">Belajar HTML Lengkap</a></div>
      </aside>
    </article>
    <article id="a-target-_self" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_self&quot;"
            data-clipboard-text="target=&quot;_self&quot;">
            "_self"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka link pada tab browser yang sama sebelumnya.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="https://codingku.id" target="_self">Belajar HTML Lengkap</a></div>
      </aside>
    </article>
    <article id="a-target-_parent" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_parent&quot;"
            data-clipboard-text="target=&quot;_parent&quot;">
            "_parent"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka link ke parent halaman yang terkait.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="https://codingku.id" target="_parent">Belajar HTML Lengkap</a></div>
      </aside>
    </article>
    <article id="a-target-_top" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_top&quot;"
            data-clipboard-text="target=&quot;_top&quot;">
            "_top"
          </code>
        </h4>
        <div class="value__description">
          <p>membuka link ke atas halaman yang terkait.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a href="https://codingku.id" target="_top">Belajar HTML Lengkap</a></div>
      </aside>
    </article>
  </div>
</article>
<article id="a-rel" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="rel">
        rel
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan cara menargetkan link yang terkait ke halaman website yang sedang terbuka.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="a-rel-nofollow" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;nofollow&quot;"
            data-clipboard-text="rel=&quot;nofollow&quot;">
            "nofollow"
          </code>
        </h4>
        <div class="value__description">
          <p>Target link tidak terkait. Biasanya hanya digunakan pada link yang mengarah ke website lain.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><a rel="nofollow">Belajar HTML Lengkap</a></div>
      </aside>
    </article>
    <article id="a-rel-alternate" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;alternate&quot;"
            data-clipboard-text="rel=&quot;alternate&quot;">
            "alternate"
          </code>
        </h4>
        <div class="value__description">
          <p>Memberikan representasi alternatif dari dokumen saat ini.</p>
        </div>
      </header>
    </article>
    <article id="a-rel-author" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;author&quot;"
            data-clipboard-text="rel=&quot;author&quot;">
            "author"
          </code>
        </h4>
        <div class="value__description">
          <p>Memberikan tautan ke penulis dokumen saat ini.</p>
        </div>
      </header>
    </article>
    <article id="a-rel-bookmark" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;bookmark&quot;"
            data-clipboard-text="rel=&quot;bookmark&quot;">
            "bookmark"
          </code>
        </h4>
        <div class="value__description">
          <p>Menyediakan permalink untuk bagian elemen ancestor terdekat.</p>
        </div>
      </header>
    </article>
    <article id="a-rel-help" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;help&quot;"
            data-clipboard-text="rel=&quot;help&quot;">
            "help"
          </code>
        </h4>
        <div class="value__description">
          <p>Memberikan tautan bantuan konteks sensitif.</p>
        </div>
      </header>
    </article>
    <article id="a-rel-license" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;license&quot;"
            data-clipboard-text="rel=&quot;license&quot;">
            "license"
          </code>
        </h4>
        <div class="value__description">
          <p>Menunjukkan bahwa konten utama dokumen saat ini dicakup lisensi hak cipta yang dijelaskan oleh dokumen yang direferensikan</p>
        </div>
      </header>
    </article>
    <article id="a-rel-next" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;next&quot;"
            data-clipboard-text="rel=&quot;next&quot;">
            "next"
          </code>
        </h4>
        <div class="value__description">
          <p>Menunjukkan kalau dokumen saat ini merupakan bagian dari seri, dan dokumen berikutnya dalam seri adalah dokumen yang direferensikan</p>
        </div>
      </header>
    </article>
    <article id="a-rel-noreferrer" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;noreferrer&quot;"
            data-clipboard-text="rel=&quot;noreferrer&quot;">
            "noreferrer"
          </code>
        </h4>
      </header>
    </article>
    <article id="a-rel-prefetch" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;prefetch&quot;"
            data-clipboard-text="rel=&quot;prefetch&quot;">
            "prefetch"
          </code>
        </h4>
      </header>
    </article>
    <article id="a-rel-prev" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;prev&quot;"
            data-clipboard-text="rel=&quot;prev&quot;">
            "prev"
          </code>
        </h4>
        <div class="value__description">
          <p>Menunjukkan kalau dokumen saat ini merupakan bagian dari seri, dan dokumen sebelumnya dalam seri adalah dokumen yang direferensikan</p>
        </div>
      </header>
    </article>
    <article id="a-rel-search" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;search&quot;"
            data-clipboard-text="rel=&quot;search&quot;">
            "search"
          </code>
        </h4>
      </header>
    </article>
    <article id="a-rel-tag" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rel=&quot;tag&quot;"
            data-clipboard-text="rel=&quot;tag&quot;">
            "tag"
          </code>
        </h4>
      </header>
    </article>
  </div>
</article>
<article id="a-target" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
  </header>
  <div class="attribute__values">
    <article id="a-target-media_type" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;media_type&quot;"
            data-clipboard-text="target=&quot;media_type&quot;">
            "media_type"
          </code>
        </h4>
        <div class="value__description">
          <p>Menentukan jenis media dari dokumen yang ditautkan.</p>
        </div>
      </header>
    </article>
  </div>
</article>


{{< browser tag="a" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<a>` dengan pengaturan CSS:

```css
a:link, a:visited {
  color: (internal value);
  text-decoration: underline;
  cursor: auto;
}

a:link:active, a:visited:active {
  color: (internal value);
}
```