---
title: map
description: map
date: "2019-11-18T10:34:07+07:00"
slug: map
authors:
- akhlis
name: map
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/map
---

Tag `<map>` digunakan untuk mendefinisikan gambar _map_ (peta).

Gambar _map_ adalah gambar yang memiliki area yang dapat diklik.

Setiap area yang dapat diklik ini dapat mengarah ke lokasi yang berbeda.

Oleh karena itu, gambar _map_ berpotensi memiliki banyak tautan yang mengarah ke berbagai URL.

Tag `<map>` digunakan bersama dengan tag `<area>` dan `<img>` untuk menentukan peta gambar.

## Syntax

Tag `<map>` ditulis seperti `<map name=""></map>` dengan tag `<area>` diletakkan diantara tag pembuka dan penutup.

{{< code lang="html" >}}
<img src="/images/world-continents.png" width="320" height="160" orgwidth="320" orgheight="160"
  usemap="#world-continents">
<map name="world-continents">
  <area title="North America" href="https://en.wikipedia.org/wiki/North_America" shape="poly"
    coords="48,89,67,69,77,49,140,0,68,0,6,10,4,31,16,69">
  <area title="South America" href="https://en.wikipedia.org/wiki/South_America" shape="poly"
    coords="48,88,61,74,119,99,95,160,66,159">
  <area title="Europe" href="https://en.wikipedia.org/wiki/Europe" shape="poly"
    coords="124,49,145,46,158,50,187,43,198,6,146,1,115,21">
  <area title="Africa" href="https://en.wikipedia.org/wiki/Africa" shape="poly"
    coords="121,53,140,47,169,51,186,77,196,80,188,137,156,136,138,97,118,86">
  <area title="Asia" href="https://en.wikipedia.org/wiki/Asia" shape="poly"
    coords="166,50,184,77,201,74,215,91,258,108,263,87,283,74,297,8,192,3,191,29,187,46,170,42">
  <area title="Australia" href="https://en.wikipedia.org/wiki/Australia_(continent)" shape="poly"
    coords="257,107,263,85,314,89,316,137,294,151,249,132,248,114">
</map>
{{< /code >}}


<article id="map-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nama map yang akan digunakan atribut <code> usemap </code> pada elemen img.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="map-name-world-continents" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;world-continents&quot;"
            data-clipboard-text="name=&quot;world-continents&quot;">
            "world-continents"
          </code>
        </h4>
        <div class="value__description">
          <p><code>&lt;img usemap=&quot;#world-continents&quot;&gt;</code> akan menggunakan map ini.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><map name="world-continents"></map></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="map" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<map>` dengan pengaturan CSS:

```css
map {
  display: inline;
}
```