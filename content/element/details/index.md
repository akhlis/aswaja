---
title: details
description: details
date: "2019-11-18T10:34:07+07:00"
slug: details
authors:
- akhlis
name: details
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/details
caniuse: https://caniuse.com/#feat=details
---

Tag `<details>` mewakili detail tambahan yang dapat dilihat atau disembunyikan pengguna saat diminta.

Tag ini digunakan dengan tag `<summary>` untuk memberikan _toggle_ yang dapat diklik untuk memperluas atau menciutkan detail saat diperlukan.

Jika tidak ada `summary`, browser harus menampilkan ringkasan sendiri

## Syntax

Tag `<details>` ditulis seperti `<details></details>` dengan tag `<summary>` diselipkan diantara tag pembuka dan penutup.

```html
<details>
  <summary>Klik untuk membuka</summary>
  <p>Konten detail disini...</p>
</details>
```

{{< code lang="html" >}}
<details>
<summary>Click to Expand</summary>
<p>If your browser supports this element, it should allow you to expand and collapse these details.</p>
</details>
{{< /code >}}

<article id="details-open" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="open">
        open
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan apakah detail tambahan ditampilkan secara default atau tidak</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="details-open-true" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy open=&quot;true&quot;"
            data-clipboard-text="open=&quot;true&quot;">
            "true"
          </code>
        </h4>
        <div class="value__description">
          <p>Detail tambahan akan <strong> terlihat </strong> secara default.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <details open="true">
            <summary>Read more</summary>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
          </details>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="details" chrome="12.0" edge="tidak" firefox="49.0" safari="6.0" opera="15.0" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<details>` dengan pengaturan CSS:

```css
details {
  display: block;
}
```