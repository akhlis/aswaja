---
title: cite
description: cite
date: "2019-11-18T10:34:07+07:00"
slug: cite
authors:
- akhlis
name: cite
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/cite
---

Tag `<cite>` digunakan untuk menjelaskan kutipan referensi sebuah karya orang lain dan harus menyertakan judul karya tersebut.

Referensi dapat dalam bentuk singkat sesuai dengan konteks terkait metadata kutipan.

Misalnya untuk menyebutkan judul karya berupa buku, puisi, lagu, naskah, film, acara TV, permainan, lukisan, sandiwara, pameran, dll.

## Syntax

Elemen `cite` ditulis seperti `<cite></cite>` dengan kutipan karya diletakkan diantara tag pembuka dan penutup.

```html
<cite> Kutipan karya disini ... </cite>
```

#### Contoh Judul Pekerjaan

{{< code lang="html" >}}
<blockquote>
The smaller your reality, the more convinced you are that you know everything.
</blockquote>
<cite>My Big <abbr title="Theory Of Everything">TOE</abbr></cite>
{{< /code >}}

#### Contoh Nama Author

{{< code lang="html" >}}
<p><cite>Ajahn Chah</cite> once said <q>If it isn't good, let it die. If it doesn't die, make it good.</q></p>
{{< /code >}}

#### Contoh URL

{{< code lang="html" >}}
Jika kamu ingin belajar HTML dan CSS lengkap dengan bahasa Indonesia, kunjungi  <cite>Codingku.id</cite>!
{{< /code >}}

{{< browser tag="cite" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser akan menampilkan elemen `cite` dengan default CSS berikut:

```css
cite {
  font-style: italic;
}
```