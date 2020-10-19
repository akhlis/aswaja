---
title: style
description: style
date: "2019-11-18T10:34:07+07:00"
slug: style
authors:
- akhlis
name: style
experimental: false
meta: true
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/style
---

Tag `<style>` digunakan untuk mendeklarasikan style sheet dalam dokumen HTML.

Elemen `<style>` tidak mewakili konten aktual untuk pengguna. Melainkan digunakan untuk menata tata letak konten dengan CSS.

## Syntax

Tag `<style>` ditulis seperti `<style></style>` dengan style sheet disisipkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<style>
	Styles here...
</style>
```


<article id="style-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tipe style sesuai <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="style-type-textcss" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;text/css&quot;"
            data-clipboard-text="type=&quot;text/css&quot;">
            "text/css"
          </code>
        </h4>
        <div class="value__description">
          <p>Ini untuk konten CSS.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <style type="text/css"></style>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="style" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<style>` dengan pengaturan CSS:

```css
style {
  display: none;
}
```