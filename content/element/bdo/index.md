---
title: bdo
description: bdo
date: "2019-11-18T10:34:07+07:00"
slug: bdo
authors:
- akhlis
name: bdo
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/bdo
---

Tag `<bdo>` digunakan untuk membalik arah teks dalam dokumen HTML.

Ini dapat berguna saat menampilkan teks tertulis kanan-ke-kiri (seperti bahasa Ibrani, Arab, Persia, Thaana, Urdu, dan bahasa / skrip lain yang ditulis dari kanan ke kiri) dalam teks kiri-ke-kanan (seperti bahasa Inggris) atau sebaliknya.

## Syntax

Tag `<bdo>` ditulis seperti `<bdo dir=""></bdi>` dengan teks disematkan diantara tag pembuka dan penutup.

Nilai atribut dir harus rtl atau ltr.

{{< code lang="html" >}}
Kata <bdo dir="rtl">Halo</bdo> adalah "Halo" diucapkan dari belakang.
{{< /code >}}

<article id="bdo-dir" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="dir">
        dir
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan arah teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="bdo-dir-rtl" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy dir=&quot;rtl&quot;" data-clipboard-text="dir=&quot;rtl&quot;">
            "rtl"
          </code>
        </h4>
        <div class="value__description">
          <p>Teks berjalan dari kanan ke kiri.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">Kata <bdo dir="rtl">Helo</bdo> adalah "Helo" diucapkan dari arah berlawanan.</div>
      </aside>
    </article>
    <article id="bdo-dir-ltr" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy dir=&quot;ltr&quot;" data-clipboard-text="dir=&quot;ltr&quot;">
            "ltr"
          </code>
        </h4>
        <div class="value__description">
          <p>Teks berjalan dari kiri ke kanan.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">Kata <bdo dir="ltr">ainuD</bdo> adalah "Dunia" diucapkan dari arah berlawanan.</div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="bdo" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<bdo>` dengan pengaturan CSS:

```css
bdo {
  unicode-bidi: bidi-override;
}
```