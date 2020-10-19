---
title: track
description: track
date: "2019-11-18T10:34:07+07:00"
slug: track
authors:
- akhlis
name: track
experimental: false
meta: false
selfclosing: true
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/track
---

Elemen HTML <track> digunakan sebagai anak dari elemen media <audio> dan <video>. Ini memungkinkan Anda menentukan trek teks berwaktu (atau data berbasis waktu), misalnya untuk secara otomatis menangani terjemahan. Trek diformat dalam format WebVTT (file .vtt) - Trek Teks Video Web atau Bahasa Markup Teks Berwaktu (TTML).

Tag `<track>` digunakan untuk menentukan trek teks berwaktu (data berbasis waktu) eksternal untuk elemen media.

HTML5 mendefinisikan dua elemen sebagai "elemen media": elemen `<video>` dan elemen `<audio>`.

Ada 5 jenis trek teks, yaitu subtitles, captions, descriptions, chapters, and metadata.

## Syntax

Tag `<track>` ditulis seperti `<track src="">` (tanpa tag penutup). Atribut `src` adalah atribut yang diperlukan untuk menyediakan URL trek teks.

Kamu dapat menggunakan atribut `type` (opsional) untuk menentukan jenis trek teks. Atribut `srclang` harus ada jika atribut `kind` dalam keadaan subtitle.

Tag `<track>` harus disarangkan di dalam elemen media (misal `<video>` atau `<audio>`).

Seperti ini:
```html
<video src="video.ogg" controls>
	<track src="text-track.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

{{< code lang="html" >}}
<video src="/videos/pass-countdown.ogg" width="300" height="150" controls>
    <track src="/videos/countdown_en.vtt" kind="subtitles" srclang="en" label="English">
    <p>Content for older browsers here...</p>
</video>
{{< /code >}}


<article id="track-default" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="default">
        default
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan bahwa trek akan diaktifkan jika preferensi pengguna tidak menunjukkan trek lain yang lebih sesuai.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
</article>
<article id="track-kind" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="kind">
        kind
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jenis trek teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="track-kind-captions" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy kind=&quot;captions&quot;"
            data-clipboard-text="kind=&quot;captions&quot;">
            "captions"
          </code>
        </h4>
        <div class="value__description">
          <p>Transkripsi atau terjemahan dialog, efek suara, isyarat musik yang relevan, dan informasi audio lainnya yang relevan.</p>
        </div>
      </header>
    </article>
    <article id="track-kind-chapters" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy kind=&quot;chapters&quot;"
            data-clipboard-text="kind=&quot;chapters&quot;">
            "chapters"
          </code>
        </h4>
        <div class="value__description">
          <p>Judul bab, digunakan untuk menavigasi sumber daya media</p>
        </div>
      </header>
    </article>
    <article id="track-kind-descriptions" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy kind=&quot;descriptions&quot;"
            data-clipboard-text="kind=&quot;descriptions&quot;">
            "descriptions"
          </code>
        </h4>
        <div class="value__description">
          <p>Deskripsi tekstual dari komponen video dari sumber daya media, dimaksudkan untuk sintesis audio ketika komponen visual dikaburkan, tidak tersedia, atau tidak dapat digunakan</p>
        </div>
      </header>
    </article>
    <article id="track-kind-metadata" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy kind=&quot;metadata&quot;"
            data-clipboard-text="kind=&quot;metadata&quot;">
            "metadata"
          </code>
        </h4>
        <div class="value__description">
          <p>Track yang dimaksudkan untuk digunakan dari skrip. Tidak ditampilkan oleh agen pengguna</p>
        </div>
      </header>
    </article>
    <article id="track-kind-subtitles" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy kind=&quot;subtitles&quot;"
            data-clipboard-text="kind=&quot;subtitles&quot;">
            "subtitles"
          </code>
        </h4>
        <div class="value__description">
          <p>Transkripsi atau terjemahan dialog. Berguna ketika suara dalam bahasa yang tidak bisa dimengerti pengguna.</p>
        </div>
      </header>
    </article>
  </div>
</article>
<article id="track-label" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="label">
        label
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan judul trek teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="track-label-text" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy label=&quot;text&quot;"
            data-clipboard-text="label=&quot;text&quot;">
            "text"
          </code>
        </h4>
      </header>
    </article>
  </div>
</article>
<article id="track-src" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL data trek teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="track-src" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;URL&quot;"
            data-clipboard-text="src=&quot;URL&quot;">
            "URL"
          </code>
        </h4>
      </header>
    </article>
  </div>
</article>
<article id="track-srclang" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="srclang">
        srclang
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL data trek teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="track-srclang" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy srclang=&quot;language_code&quot;"
            data-clipboard-text="srclang=&quot;language_code&quot;">
            "language_code"
          </code>
        </h4>
      </header>
    </article>
  </div>
</article>

{{< browser tag="track" chrome="18.0" edge="10.0" firefox="31.0" safari="6.0" opera="15.0" >}}

