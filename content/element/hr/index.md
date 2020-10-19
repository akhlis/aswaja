---
title: hr
description: hr
date: "2019-11-18T10:34:07+07:00"
slug: hr
authors:
- akhlis
name: hr
experimental: false
meta: false
selfclosing: true
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/hr
---

Tag `<hr>` mewakili jeda tematis level paragraf atau memisahkan konten pada halaman HTML.

Tag `<hr>` dapat digunakan dalam perubahan adegan pada sebuah cerita, atau pergeseran ke topik lain pada bagian buku referensi.

## Syntax

Tag `<hr>` ditulis sebagai `<hr>` (tanpa tag penutup) dengan topik baru mengikuti elemen `<hr>` (dan topik lama sebelumnya).

```html
<p>Topik 1...</p>
<hr>
<p>Topik 2...</p>
```

#### Contoh Perubahan Topik

{{< code lang="html" >}}
<section>
  <h1>Web Technologies for Creating Websites</h1>
  <p>There are many technologies that go into creating websites. Here are three of the main ones.</p>
  <hr>
  <p>HTML (HyperText Markup Language) is the main mark up language of the web. If you're interested in learning how to
    create a website, start with HTML.</p>
  <hr>
  <p>CSS (Cascading Style Sheets) are used to apply styles to the HTML pages you create. CSS allows you to create your
    HTML page without worrying about its aesthetics, because the CSS is created separately to the HTML page (and can be
    created later if required).</p>
  <hr>
  <p>JavaScript is a scripting language that allows you to extend the functionality of your HTML pages. HTML does have
    its
    limitations, and this is where JavaScript can really shine.</p>
</section>
{{< /code >}}


#### Contoh Perubahan Topik

{{< code lang="html" >}}
<p>Rupert couldn't help but be jealous of his friends. After all, they were all relaxing on a beach somewhere in the Bahamas, and here he was slaving away, working for a boss he disliked (and who disliked Rupert even more). </p>
<p>"There's <em>got</em> to be a better way" thought Rupert.</p>
<hr>
<p>Meanwhile, somewhere in the Bahamas, Rupert's friends were being held up at gunpoint. Oh what they would do to be in Rupert's shoes right now!</p>
{{< /code >}}

{{< browser tag="hr" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<hr>` dengan pengaturan CSS:

```css
hr {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
```