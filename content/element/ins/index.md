---
title: ins
description: ins
date: "2019-11-18T10:34:07+07:00"
slug: ins
authors:
- akhlis
name: ins
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/ins
---

Tag `<ins>` mewakili teks yang disematkan (inserted text) dalam dokumen HTML.

Tag `<ins>` biasanya beriringan dengan elemen `<del>` yang digunakan untuk memperbarui (update) teks atau konten tertentu.

Elemen `del` menunjukkan konten yang dihapus (ditandai dengan teks yang dicoret), sedangkan elemen `ins` menunjukkan konten yang baru disematkan sebagai pembaruan dari konten lama yang dihapus.

Browser akan menampilkan teks dalam elemen `ins` dengan garis bawah, namun kamu bisa mengaturnya sendiri menggunakan CSS.

## Syntax

Tag `<ins>` ditulis seperti `<ins></ins>` dengan teks yang dimasukkan diantara tag pembuka dan penutup.

Kamu bisa menggunakan atribut `cite` untuk menautkan ke sumber kutipan, dan atribut `datetime` untuk menentukan tanggal atau waktu edit.

Seperti ini:

```html
<ins>Inserted text...</ins>
```

Atau dengan beberapa atribut

```html
<ins cite="editinfo.htm" datetime="2014-08-24 00:00Z">Inserted text...</ins>
```

{{< code lang="html" >}}
<p>Saya sering beli pulsa menggunakan aplikasi <del cite="https://www.grab.com/id/press/business/kudo-bertransformasi-menjadi-grabkios-majukan-warung-tradisional-guna-perkuat-pertumbuhan-ekonomi-indonesia/">Kudo</del> <ins>GrabKios</ins>.</p>
{{< /code >}}


#### Contoh untuk A "To Do" List

Tag `<ins>` dapat digunakan dalam daftar kegiatan untuk menandai kegiatan yang telah ditambahkan ke daftar.

Untuk menandai kegiatan yang telah selesai dikerjakan, maka bisa digunakan tag `<del>`.

{{< code lang="html" >}}
<ol>
  <li><del>Book flights</del></li>
  <li>Book accommodation</li>
  <li>Go to airport</li>
  <li><ins>Fly away!</ins></li>
  <li><ins>Relax!</ins></li>
</ol>
{{< /code >}}

#### Dengan Date & Time

{{< code lang="html" >}}
<ol>
  <li><del datetime="2014-08-11T10:25-05:00">Book flights</del></li>
  <li>Book accommodation</li>
  <li>Go to airport</li>
  <li><ins datetime="2014-08-11T11:25-05:00">Fly away!</ins></li>
  <li><ins datetime="2014-08-12T06:10-05:00">Relax!</ins></li>
</ol>
{{< /code >}}


<article id="ins-cite" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="cite">
        cite
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL yang menjadi alasan penghapusan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="ins-cite-httpsdevelopermozillaorgen-usdocswebhtmlelementacronym" class="value">
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
        <div class="value__output"><ins
            cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym">acronym</ins></div>
      </aside>
    </article>
  </div>
</article>
<article id="ins-datettime" class="attribute">
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
    <article id="ins-datettime-2017-10-14t120000001-0400" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy datettime=&quot;2017-10-14T12:00:00.001-04:00&quot;"
            data-clipboard-text="datettime=&quot;2017-10-14T12:00:00.001-04:00&quot;">
            "2017-10-14T12:00:00.001-04:00"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu perlu <a href="https://html.spec.whatwg.org/multipage/infrastructure.html#valid-global-date-and-time-string">datettime string yang valid</a>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><ins datettime="2017-10-14T12:00:00.001-04:00">acronym</ins></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="ins" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<ins>` dengan pengaturan CSS:

```css
ins {
  text-decoration: underline;
}
```