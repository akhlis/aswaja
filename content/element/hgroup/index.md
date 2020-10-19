---
title: hgroup
description: hgroup
date: "2019-11-18T10:34:07+07:00"
slug: hgroup
authors:
- akhlis
name: hgroup
experimental: true
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/hgroup
---

Tag `<hgroup>` mewakili sekelompok elemen `<h1> - <h6>` ketika judul memiliki beberapa tingkatan, seperti sub judul, judul alternatif, atau tagline.

## Syntax

Tag `<hgroup>` ditulis seperti `<hgroup> </hgroup>` dengan judul yang dikelompokkan terlampir di antara tag pembuka dan penutup.

```html
<hgroup>
	<h1>Judul 1</h1>
	<h2>Judul 2</h2>
</hgroup>
```

{{< code lang="html" >}}
<hgroup>
  <h1>{{site.title}}</h1>
  <h2>{{site.description}}</h2>
</hgroup>
{{< /code >}}