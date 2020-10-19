---
title: dfn
description: dfn
date: "2019-11-18T10:34:07+07:00"
slug: dfn
authors:
- akhlis
name: dfn
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/dfn
---

Tag `<dfn>` mewakili turunan dari istilah dalam HTML.

Pendefinisian istilah seringkali merupakan penggunaan pertama dari suatu istilah dalam suatu dokumen.

Induk terdekat dari tag `<dfn>` harus terdiri dari definisi atau penjelasan istilah didalam `<dfn>`.

Istilah didalam tag `<dfn>` bisa berupa:

1. Konten dari elemen `<dfn>` (tanpa atribut title):

   {{< code lang="html" >}}
   <p><dfn>HTML</dfn> is the standard markup language for creating web pages.</p>
   {{< /code >}}

2. Atribut title dari tag `<dfn>`:

   {{< code lang="html" >}}
   <p><dfn title="HyperText Markup Language">HTML</dfn> is the standard markup language for creating web pages.</p>
   {{< /code >}}

3. Atribut title tag `<abbr>` didalam elemen `<dfn>`:

   {{< code lang="html" >}}
   <p><dfn><abbr title="HyperText Markup Language">HTML</abbr></dfn> is the standard markup language for creating web pages.</p>
   {{< /code >}}

{{< browser tag="dfn" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<dfn>` dengan pengaturan CSS:

```css
dfn {
  font-style: italic;
}
```

