---
title: meter
description: meter
date: "2019-11-18T10:34:07+07:00"
slug: meter
authors:
- akhlis
name: meter
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/meter
caniuse: https://caniuse.com/#feat=meter
---

Tag `<meter>` mewakili pengukuran skalar dalam rentang yang diketahui atau nilai fraksional.

## Syntax

Tag `<meter>` ditulis seperti `<meter> </meter>` dengan konten apa pun yang disisipkan di antara tag pembuka dan penutup.

Ada enam atribut yang dapat digunakan untuk menentukan semantik pengukur. Yaitu `min`, `max`, `low`, `high`, `optimum`, and `value`.

{{< code lang="html" >}}
<meter value="0.7">Progress</meter>
{{< /code >}}

{{< code lang="html" >}}
<meter min="0" low="16" value="71" high="92" max="100">Alex</meter><br>
<meter min="0" low="16" value="16" high="92" max="100">Brandon</meter><br>
<meter min="0" low="16" value="40" high="92" max="100">Charlotte</meter><br>
<meter min="0" low="16" value="92" high="92" max="100">Sam</meter>
{{< /code >}}

<article id="meter-value" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai meter, pada skala yang ditentukan oleh atribut <code> max </code>.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meter-value__07" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;0.7&quot;"
            data-clipboard-text="value=&quot;0.7&quot;">
            "0.7"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>. Dan harus antara nilai <code> min </code> dan <code> maks </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter value="0.7"></meter></div>
      </aside>
    </article>
    <article id="meter-value__42" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;-42&quot;"
            data-clipboard-text="value=&quot;-42&quot;">
            "-42"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika Kamu menggunakan nilai yang lebih rendah dari minimum, meteran akan kosong.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter value="-42"></meter></div>
      </aside>
    </article>
    <article id="meter-value__63" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;63&quot;"
            data-clipboard-text="value=&quot;63&quot;">
            "63"
          </code>
        </h4>
        <div class="value__description">
          <p>Jika kamu menggunakan nilai yang lebih tinggi dari maksimum, meteran akan penuh.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter value="63"></meter></div>
      </aside>
    </article>
  </div>
</article>
<article id="meter-max" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="max">
        max
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai maksimum yang dimungkinkan pada meter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meter-max-1" class="value">
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
        <div class="value__output"><meter value="0.7" max="1"></meter></div>
      </aside>
    </article>
    <article id="meter-max-100" class="value">
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
        <div class="value__output"><meter value="40" max="100"></meter></div>
      </aside>
    </article>
  </div>
</article>
<article id="meter-min" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="min">
        min
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai minimum yang dimungkinkan pada meter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meter-min-0" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy min=&quot;0&quot;" data-clipboard-text="min=&quot;0&quot;">
            "0"
          </code>
        </h4>
        <div class="value__description">
          <strong class="value__is-default">Default.</strong>
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter min="0"></meter></div>
      </aside>
    </article>
    <article id="meter-min-150" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy min=&quot;-150&quot;"
            data-clipboard-text="min=&quot;-150&quot;">
            "-150"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan angka <strong> desimal </strong> dan <strong> negatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter min="-150"></meter></div>
      </aside>
    </article>
  </div>
</article>
<article id="meter-low" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="low">
        low
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai terendah melintasi rentang yang ditentukan oleh meter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meter-low-016" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy low=&quot;0.16&quot;"
            data-clipboard-text="low=&quot;0.16&quot;">
            "0.16"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus lebih tinggi dari <code> min </code> dan lebih rendah dari <code> tinggi </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter low="0.16"></meter></div>
      </aside>
    </article>
  </div>
</article>
<article id="meter-high" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="high">
        high
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai tertinggi melintasi rentang yang ditentukan oleh meter.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="meter-high-092" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy high=&quot;0.92&quot;"
            data-clipboard-text="high=&quot;0.92&quot;">
            "0.92"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus lebih rendah dari <code> maks </code> dan lebih tinggi dari <code> rendah </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><meter high="0.92"></meter></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="meter" chrome="8.0" edge="13.0" firefox="6.0" safari="6.0" opera="11.1" >}}