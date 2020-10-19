---
title: ol
description: ol
date: "2019-11-18T10:34:07+07:00"
slug: ol
authors:
- akhlis
name: ol
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/ol
---

Tag `<ol>` digunakan untuk menentukan daftar yang berurutan (_Ordered List_).

Daftar yang berurutan ini biasanya diurutkan dengan angka (1, 2, 3, ...), huruf (A, B, C. ...), angka Romawi (i, ii, iii, ...), dll.

Dalam daftar berurutan, jika daftar urutan item diubah, maka akan mengubah arti daftar (dokumen).

Contohnya pada daftar instruksi, pada masing-masing item daftar mewakili langkah berbeda yang perlu dilakukan sesuai urutan tersebut.

Jika urutannya diubah, maka instruksinya juga akan berubah.

Elemen `<ol>` selalu digunakan bersamaan dengan elemen `<li>`. Tag `<ol>` menyatakan daftar yang diurutkan, dan tag `<li>` menyatakan item daftarnya.

## Syntax

Tag `<ol>` ditulis seperti `<ol></ol>` dengan sejumlag tag `<li>` yang diapit antara tag pembuka dan penutup.

{{< code lang="html" >}}
<ol>
  <li>Step one</li>
  <li>Step two</li>
  <li>????</li>
  <li>PROFIT!!!</li>
</ol>
{{< /code >}}


<article id="ol-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan bagaimana daftar diberi nomor.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="ol-type-1" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;1&quot;" data-clipboard-text="type=&quot;1&quot;">
            "1"
          </code>
        </h4>
        <div class="value__description">
          <strong class="value__is-default">Default.</strong>
          <p>Menggunakan angka.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol type="1">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
    <article id="ol-type-a" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;a&quot;" data-clipboard-text="type=&quot;a&quot;">
            "a"
          </code>
        </h4>
        <div class="value__description">
          <p>Menggunakan huruf kecil.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol type="a">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
    <article id="ol-type-a" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;A&quot;" data-clipboard-text="type=&quot;A&quot;">
            "A"
          </code>
        </h4>
        <div class="value__description">
          <p>Menggunakan huruf besar.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol type="A">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
    <article id="ol-type-i" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;i&quot;" data-clipboard-text="type=&quot;i&quot;">
            "i"
          </code>
        </h4>
        <div class="value__description">
          <p>Menggunakan angka Romawi huruf kecil.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol type="i">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
    <article id="ol-type-i" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;I&quot;" data-clipboard-text="type=&quot;I&quot;">
            "I"
          </code>
        </h4>
        <div class="value__description">
          <p>Menggunakan angka Romawi huruf besar.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol type="I">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="ol-start" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="start">
        start
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nomor untuk memulai daftar.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="ol-start-3" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy start=&quot;3&quot;" data-clipboard-text="start=&quot;3&quot;">
            "3"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> integer </strong> apa pun.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol start="3">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="ol-reversed" class="attribute attribute__-novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="reversed">
        reversed
      </code>
    </h3>
    <div class="attribute__description">
      <p>Membalik urutan daftar.</p>
      <strong class="attribute__is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="ol-reversed-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <ol reversed>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
            <li>Five</li>
          </ol>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="ol" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<ol>` dengan pengaturan CSS:

```css
ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
```