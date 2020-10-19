---
title: p
description: p
date: "2019-11-18T10:34:07+07:00"
slug: p
authors:
- akhlis
name: p
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/p
---

Tag `<p>` mewakili paragraf dalam dokumen HTML.

Paragraf merupakan elemen blok yang akan dipisahkan dengan baris baru pada setiap paragraf.

Elemen `<p>` hanya boleh digunakan ketika tidak ada tag lain yang lebih tepat untuk digunakan.

Sebagai contoh, tag `<address>` lebih cocok untuk memberikan detail kontak artikel, dan tag `<footer>` lebih baik untuk sebagian besar konten footer.

## Syntax

Tag `<p>` ditulis seperti `<p> ​​</p>` dengan teks paragraf disisipkan di antara tag pembuka dan penutup.

Seperti ini:
```html
<p>Teks paragraf disini...</p>
```

{{< code lang="html" >}}
<p>This is a paragraph...</p>
<p>This is a new paragraph...</p>
{{< /code >}}

{{< code lang="html" >}}
<blockquote>
  <p>This is a difficult pill for many, especially scientists, to swallow. The concept that there may be a natural
    practical limit to the extent of our knowledge - a limit beyond which our perception cannot penetrate - is based
    upon the notion that we are only a very small part of a much greater reality.</p>
  <p>This humbling thought runs counter to the significance and self-importance we humans place upon ourselves.</p>
  <footer>-
    <cite>My Big <abbr title="Theory Of Everything">TOE</abbr></cite>
  </footer>
</blockquote>
{{< /code >}}

{{< browser tag="p" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<p>` dengan pengaturan CSS:

```css
p {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
```