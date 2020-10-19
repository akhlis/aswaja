---
title: pre
description: pre
date: "2019-11-18T10:34:07+07:00"
slug: pre
authors:
- akhlis
name: pre
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/pre
---

Tag `<pre>` mewakili teks yang sudah diformat yang harus disajikan persis seperti yang ditulis dalam dokumen HTML.

Teks biasanya diterjemahkan menggunakan font non-proporsional ("monospace").

## Syntax

Tag `<pre>` ditulis seperti `<pre></pre>` dengan teks yang sudah diformat disisipkan diantara tag pembuka dan penutup.

Seperti ini:
```html
<pre>
	Teks 
	   disini...
</pre>
```

{{< code lang="html" >}}
<pre>This text has
been formatted using
   the HTML pre tag. The browser should
      display all white space
as it was entered.
</pre>
{{< /code >}}

{{< code lang="html" >}}
<pre>
 ____ ____ ____      
||p |||r |||e ||     
||__|||__|||__||     
|/__\|/__\|/__\|                         
</pre>
{{< /code >}}

{{< browser tag="pre" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<pre>` dengan pengaturan CSS:

```css
pre {
  display: block;
  font-family: monospace;
  white-space: pre;
  margin: 1em 0;
}
```