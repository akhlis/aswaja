---
title: time
description: time
date: "2019-11-18T10:34:07+07:00"
slug: time
authors:
- akhlis
name: time
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/time
---

Tag `<time>` digunakan untuk menyatakan tanggal atau waktu dalam dokumen HTML.

## Syntax

Tag `<time>` ditulis seperti `<time></time>` dengan waktu yang dimasukkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<time>07:00</time>
```

{{< code lang="html" >}}
The game starts at <time datetime="2017-04-29T19:00">19:00</time>.
{{< /code >}}

<article id="time-datetime" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="datetime">
        datetime
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan waktu dan tanggal.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="time-datetime-2017-04-29t1900" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy datetime=&quot;2017-04-29T19:00&quot;"
            data-clipboard-text="datetime=&quot;2017-04-29T19:00&quot;">
            "2017-04-29T19:00"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai harus valid sesuai <a
              href="https://www.w3.org/TR/html51/infrastructure.html#dates-and-times">format time</a>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><time datetime="2017-04-29T19:00"></time></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="time" chrome="6.0" edge="9.0" firefox="4.0" safari="5.0" opera="11.1" >}}