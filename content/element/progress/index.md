---
title: progress
description: progress
date: "2019-11-18T10:34:07+07:00"
slug: progress
authors:
- akhlis
name: progress
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/progress
---

Tag `<progress>` mewakili progres tugas dalam dokumen HTML.

Elemen `<progress>` dapat digunakan bersama dengan Javascript untuk menampilkan indikator yang menunjukkan progres penyelesaian suatu tugas atau proses yang saat ini sedang berlangsung.

Biasanya ditampilkan sebagai bilah progres.

## Syntax

Tag `<progress>` biasanya ditulis seperti `<progress value="" max=""></progress>` dengan konten apapun didalam tag pembuka dan penutup.

Konten ini bisa menjadi nilai saat ini atau nilai maksimum yang dapat ditampilkan ke browser lama.

{{< code lang="html" >}}
Downloading now. Progress...
<progress value="250" max="1000">
<span>25</span>%
</progress>
{{< /code >}}

{{< code lang="html" >}}
<progress value="71" max="100">Alex</progress><br>
<progress value="16" max="100">Brandon</progress><br>
<progress value="40" max="100">Charlotte</progress><br>
<progress value="92" max="100">Sam</progress>
{{< /code >}}

<article id="progress-value" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai bilah progres, pada skala yang ditentukan oleh atribut <code> max </code>.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="progress-value__07" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;0.7&quot;"
            data-clipboard-text="value=&quot;0.7&quot;">
            "0.7"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>. Angka itu harus antara nilai <code> min </code> dan <code> maks </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><progress value="0.7"></progress></div>
      </aside>
    </article>
    <article id="progress-value__42" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;-42&quot;"
            data-clipboard-text="value=&quot;-42&quot;">
            "-42"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika kamu menggunakan nilai yang lebih rendah dari minimum, bilah progres akan kosong.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><progress value="-42"></progress></div>
      </aside>
    </article>
    <article id="progress-value__63" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;63&quot;"
            data-clipboard-text="value=&quot;63&quot;">
            "63"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika kamu menggunakan nilai yang lebih tinggi dari maksimum, bilah progres akan penuh.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><progress value="63"></progress></div>
      </aside>
    </article>
  </div>
</article>
<article id="progress-max" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="max">
        max
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai maksimum yang dimungkinkan pada bilah progres.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="progress-max-1" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy max=&quot;1&quot;" data-clipboard-text="max=&quot;1&quot;">
            "1"
          </code>
        </h4>
        <div class="value__description">
          <strong class="value__is-default">Default.</strong>
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><progress value="0.7" max="1"></progress></div>
      </aside>
    </article>
    <article id="progress-max-100" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy max=&quot;100&quot;" data-clipboard-text="max=&quot;100&quot;">
            "100"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><progress value="40" max="100"></progress></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="progress" chrome="8.0" edge="10.0" firefox="16.0" safari="6.0" opera="11.0" >}}