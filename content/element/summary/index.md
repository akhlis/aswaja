---
title: summary
description: summary
date: "2019-11-18T10:34:07+07:00"
slug: summary
authors:
- akhlis
name: summary
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/summary
---

Tag `<summary>` menentukan ringkasan yang dapat digunakan bersama dengan tag `<details>`.

Ringkasan ini dapat diklik untuk memperluas/menciutkan detail sebagaimana diperlukan.

Meskipun tag `<summary>` tidak wajib, namun berguna ketika bekerja dengan beberapa elemen `<details>`, karena setiap `<summary>` dapat memberikan ringkasan informatif yang membedakan setiap elemen `<details>` dari yang lain.

## Syntax

Tag `<summary>` ditulis seperti `<summary></summary>` dengan ringkasan dimasukkan diantara tag pembuka dan penutup.

Elemen `summary` harus menjadi anak pertama dari tag `<details>`. Konten yang dapat diperluas/dilipat secara langsung mengikuti tag `<summary>`.

{{< code lang="html" >}}
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>
{{< /code >}}


{{< browser tag="summary" chrome="12.0" edge="tidak" firefox="48.0" safari="6.0" opera="15.0" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<summary>` dengan pengaturan CSS:

```css
summary {
  display: block;
}
```