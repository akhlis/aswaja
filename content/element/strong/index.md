---
title: strong
description: strong
date: "2019-11-18T10:34:07+07:00"
slug: strong
authors:
- akhlis
name: strong
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/strong
---

Tag `<strong>` mewakili konten yang memiliki kepentingan, keseriusan, atau urgensi yang kuat.

Browser biasanya akan menampilkan konten strong dengan huruf tebal.

## Syntax

Tag `<strong>` ditulis seperti `<strong></strong>` dengan teks kuat disisipkan diantara tag pembuka dan penutup.

```html
<strong>Strong text...</strong>
```

#### Contoh teks Penting

{{< code lang="html" >}}
<p>The most important thing to remember is, <strong>stay positive</strong>. Apart from that you can do anything you like.</p>
{{< /code >}}

#### Contoh Urgency

{{< code lang="html" >}}
<h4>Things To Remember</h4>
<ul>
  <li><strong>Call Mum</strong></li>
  <li>Check mail</li>
  <li>Get groceries</li>
</ul>
{{< /code >}}

#### Contoh Keseriusan

{{< code lang="html" >}}
<p><strong>Warning</strong>: Investing in our company could seriously affect your wealth!</p>
{{< /code >}}

{{< browser tag="strong" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<strong>` dengan pengaturan CSS:

```css
strong {
  font-weight: bold;
}
```