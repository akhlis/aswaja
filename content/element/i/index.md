---
title: i
description: i
date: "2019-11-18T10:34:07+07:00"
slug: i
authors:
- akhlis
name: i
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/i
---

Tag `<i>` mewakili rentang teks yang berangkat dari teks normal karena suatu alasan. 

Beberapa contoh termasuk istilah teknis, frasa bahasa asing, atau pemikiran karakter fiksi. Biasanya ditampilkan dengan teks miring.

Sebelum HTML5, elemen `<i>` hanya digunakan untuk tujuan penyajian (mis. Untuk mendesain teks dalam huruf miring).

Namun, HTML5 memberikan tujuan semantik khusus untuk elemen tersebut. Meskipun browser biasanya masih menata elemen `<i>` dalam huruf miring, kamu tidak boleh menggunakan tag `<i>` khusus untuk tujuan ini. 

Untuk membuat teks dalam huruf miring, gunakan properti CSS `font-style` saja.

Dan elemen `<i>` tidak boleh digunakan untuk menyampaikan penekanan khusus. 

Untuk menambahkan teks dengan penekanan khusus, gunakan tag `<em>`.

## Syntax

Tag `<i>` ditulis seperti `<i> </i>` dengan teks yang disisipkan antara tag pembuka dan penutup.

```html
<i>Teks disini ...</i>
```

{{< code lang="html" >}}
Hello <i>World</i>
{{< /code >}}

{{< browser tag="i" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}


## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<html>` dengan pengaturan CSS:

```css
i {
  font-style: italic;
}
```