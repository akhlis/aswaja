---
title: audio
description: audio
date: "2019-11-18T10:34:07+07:00"
slug: audio
authors:
- akhlis
name: audio
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/audio
caniuse: https://caniuse.com/#feat=audio
---

Elemen `<audio>` digunakan untuk mengembed (menyisipkan) konten suara atau file musik dalam dokumen HTML.

Sumber audio bisa terdiri dari satu atau lebih yang diwakili dengan atribut `src` atau elemen `<source>`.

Tag `<audio>` dikenalkan dalam HTML5.

## Syntax

Tag `<audio>` ditulis seperti `<audio></audio>` dengan beberapa atribut yang diletakkan pada tag pembuka.

Atribut bisa dipakai untuk mengatur file audio seperti durasi waktu, memainkan musik otomatis, atau kontrol musik lainnya.

{{< code lang="html" >}}
<audio src="/assets/Hal.mp3" controls></audio>
{{< /code >}}

## Atribut Khusus Elemen Audio

<article id="audio-src" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan sumber file audio.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-src-assetshalmp3" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;/assets/Hal.mp3&quot;"
            data-clipboard-text="src=&quot;/assets/Hal.mp3&quot;">
            "/assets/Hal.mp3"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan URL <strong>relative</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-volume" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="volume">
        volume
      </code>
    </h3>
    <div class="attribute__description">
      <p>Mengatur volume suara antara <code>0.0</code> (diam) dan <code>1.0</code> (keras).</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-volume-00" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy volume=&quot;0.0&quot;"
            data-clipboard-text="volume=&quot;0.0&quot;">
            "0.0"
          </code>
        </h4>
        <div class="value__description">
          <p>Track audio <strong>diam</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="0.0"></audio></div>
      </aside>
    </article>
    <article id="audio-volume-10" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy volume=&quot;1.0&quot;"
            data-clipboard-text="volume=&quot;1.0&quot;">
            "1.0"
          </code>
        </h4>
        <div class="value__description">
          <p>Track audio diatur <strong>paling keras</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0"></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-autoplay" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autoplay">
        autoplay
      </code>
    </h3>
    <div class="attribute__description">
      <p>Track otomatis berputar saat halaman dimuat.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-autoplay-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0"></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-controls" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="controls">
        controls
      </code>
    </h3>
    <div class="attribute__description">
      <p>menampilkan kontrol audio bawaan browser.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-controls-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0"></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-loop" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="loop">
        loop
      </code>
    </h3>
    <div class="attribute__description">
      <p>Track akan berputar ulang saat mencapai batas akhir.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-loop-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0" loop></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-muted" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="muted">
        muted
      </code>
    </h3>
    <div class="attribute__description">
      <p>Track diatur menjadi bisu secara default.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-muted-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0" loop muted></audio></div>
      </aside>
    </article>
  </div>
</article>
<article id="audio-preload" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="preload">
        preload
      </code>
    </h3>
    <div class="attribute__description">
      <p>Track akan dimuat ulang saat halaman dimuat.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="audio-preload-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><audio src="/assets/Hal.mp3" controls volume="1.0" loop muted></audio></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="audio" chrome="4.0" edge="9.0" firefox="3.5" safari="4.0" opera="10.5" >}}