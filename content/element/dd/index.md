---
title: dd
description: dd
date: "2019-11-18T10:34:07+07:00"
slug: dd
authors:
- akhlis
name: dd
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/dd
---

Tag `<dd>` digunakan untuk memberi deskripsi atau definisi dalam daftar deskripsi.

Dalam daftar deskripsi, setiap item daftar berisi dua entri atau lebih istilah (dt) dan deskripsi (dt).

_Catatan:_ Istilah definisi dapat ditautkan ke lebih dari satu deskripsi. Mungkin juga ada beberapa istilah untuk satu deskripsi.

Dalam hal ini, setiap istilah harus dilampirkan dalam set tag dtnya sendiri.

## Syntax

Tag `<dd>` ditulis seperti `<dd></dd>` dengan definisi deskripsi diletakkan diantara tag pembuka dan penutup.

Tag ini harus berada didalam elemen `<dl>`, dan harus mengikuti antara elemen `<dt>` atau elemen `<dd>`.

Seperti ini:

```html
<dl>
	<dt>Term...</dt>
	<dd>Description...</dd>
	<dt>Term...</dt>
	<dd>Description...</dd>
</dl>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<dl>
  <dt>Vocals</dt>
  <dd>Big Mama Lee</dd>
  <dt>Guitar</dt>
  <dd>Scarcat Fraser</dd>
  <dt>Drums</dt>
  <dd>Bulldog Jones</dd>
</dl>
{{< /code >}}

#### Contoh dengan Elemen dfn

{{< code lang="html" >}}
<h4>Zen Terms</h4>
<dl>
<dt><dfn>Arahat</dfn></dt>
<dd>The "Perfected One", who has overcome The Three Poisons of Desire, Hatred and Ignorance. </dd>
<dt><dfn>Bodhi</dfn></dt>
<dd>Awakened wisdom.</dd>
<dt><dfn>Zen</dfn></dt>
<dd>Meditative absorption in which all dualistic distinctions are eliminated.</dd>
</dl>
{{< /code >}}

#### Multiple Term

{{< code lang="html" >}}
<dl>
  <dt>Vocals</dt>
  <dt>Rhythm Guitar</dt>
  <dd>Big Mama Lee</dd>
  <dt>Drums</dt>
  <dd>Bulldog Jones</dd>
  <dt>Lead Guitar</dt>
  <dt>Keyboards</dt>
  <dd>Scarcat Fraser</dd>
</dl>
{{< /code >}}

#### Banyak Elemen dd

{{< code lang="html" >}}
<h4>Glossary</h4>
<dl>
<dt>Metal</dt>
<dd>A solid material that is typically hard, shiny, malleable, fusible, and ductile, with good electrical and thermal conductivity.</dd>
<dd>A genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States.</dd>
<dt>Rock</dt>
<dd>The solid mineral material forming part of the surface of the earth and other similar planets, exposed on the surface or underlying the soil or oceans.</dd>
<dd>A genre of popular music that originated as "rock and roll" in the United States in the 1950s, and developed into a range of different styles in the 1960s and later, particularly in the United Kingdom and the United States.</dd>
</dl>
{{< /code >}}

#### Nested List

{{< code lang="html" >}}
<h4>Zen Terms</h4>
<dl>
  <dt><dfn>Four Noble Truths</dfn></dt>
  <dd>
    <ol>
      <li>Life is suffering</li>
      <li>Suffering is caused by desire</li>
      <li>There is a path from desire and suffering</li>
      <li>This path is the Eightfold Noble Path.</li>
    </ol>
  </dd>
  <dt><dfn>Skandha</dfn></dt>
  <p>The five aggregates, constituting what is generally known as the personality:</p>
  <dd>
    <ul>
      <li>form</li>
      <li>sensation</li>
      <li>perception</li>
      <li>mental formations</li>
      <li>conciousness</li>
    </ul>
  </dd>
  <dt><dfn>Zazen</dfn></dt>
  <dd>Sitting meditation, taught in Zen as the most direct way to awakening.</dd>
</dl>
{{< /code >}}

{{< browser tag="dd" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<dd>` dengan pengaturan CSS:

```css
dd {
  display: block;
  margin-left: 40px;
}
```