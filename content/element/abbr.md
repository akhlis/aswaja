---
title: abbr
description: abbr
date: "2019-11-18T10:34:07+07:00"
slug: abbr
authors:
- akhlis
name: abbr
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/abbr
---

Tag `<abbr>` digunakan untuk menentukan singkatan (abbreviation), dan biasanya menyertakan deskripsi secara lengkap.

## Syntax

Tag `<abbr>` ditulis seperti `<abbr></abbr>` dengan singkatan/akronim yang disematkan diantara tag pembuka dan penutup.

Kamu bisa menambahkan atribut `title` untuk menunjukkan kepanjangan dari singkatan tersebut.

```html
<abbr>HTML</abbr>

OR

<abbr title="HyperText Markup Language">HTML</abbr>
```

<article id="abbr-title" class="attribute">
    <header class="attribute__header">
        <h3 class="attribute__name">
            <code class="tag" data-tooltip="Click to copy" data-clipboard-text="title">
                title
            </code>
        </h3>
        <div class="attribute__description">
            <p>Menampilkan deskripsi lengkap saat mengarahkan kursor ke elemen.</p>
        </div>
    </header>
    <div class="attribute__values">
        <article id="abbr-title-hypertext-markup-language" class="value">
            <header class="value__header">
                <h4 class="value__name">
                    <code class="tag" data-tooltip="Click to copy title=&quot;HyperText Markup Language&quot;"
                        data-clipboard-text="title=&quot;HyperText Markup Language&quot;">
                        "HyperText Markup Language"
                    </code>
                </h4>
                <div class="value__description">
                </div>
            </header>
            <aside class="value__preview">
                <div class="value__output"><abbr title="HyperText Markup Language">HTML</abbr></div>
            </aside>
        </article>
    </div>
</article>

{{< browser tag="abbr" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<abbr>` dengan pengaturan CSS:

```css
abbr {
  display: inline;
}
```