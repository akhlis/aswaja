---
title: em
description: em
date: "2019-11-18T10:34:07+07:00"
slug: em
authors:
- akhlis
name: em
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/em
---

Elemen `<em>` menandai teks yang memiliki penekanan pada isi konten.

Tag ini digunakan ketika kamu harus menekankan kata atau frase tertentu dalam sebuah kalimat.

## Syntax

Tag `<em>` ditulis seperti `<em></em>` dengan konten emphasized ditempatkan diantara tag pembuka dan penutup.

Seperti ini:

```html
<em>Emphasized content...</em>
```

{{< code lang="html" >}}
<p>"What is your occupation?" asked Jane.</p>
<p>"I am a comedian" replied Rupert.</p>
<p>"Did you say that you are a <em>chameleon</em>".</p>
<p>"No" said Rupert, "I am a <em>comedian</em>".</p>
{{< /code >}}

{{< code lang="html" >}}
<p>"You've <em>got</em> to be joking... I don't believe you!" replied Jane, rolling over with laughter.</p>
<p>Rupert couldn't take this anymore, he didn't know what to say, so he shouted into the microphone "<em>I <em>am</em> a comedian!</em>"</p>
<p>Finally, the crowd erupted with laughter.</p>
{{< /code >}}

{{< browser tag="em" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<em>` dengan pengaturan CSS:

```css
em {
  font-style: italic;
}
```