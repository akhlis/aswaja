---
title: area
description: area
date: "2019-11-18T10:34:07+07:00"
slug: area
authors:
- akhlis
name: area
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/area
---

Tag `<area>` menunjukkan area didalam _map_ gambar.

_map_ gambar merupakan gambar dengan satu atau lebih area dengan link _hypertext_ yang bisa diklik pengguna pada area berbeda didalam gambar yang mengarah ke URL berbeda.

Elemen `<area>` ini hanya digunakan didalam elemen `<map>`.

## Syntax

Tag `<area>` ditulis seperti ini `<area shape="" coords="" href="" alt="">`(tanpa tag penutup) dengan nilai atribut disematkan diantara tanda _double quotes_ pada atribut masing-masing.

```html
<area shape="" coords="" href="" alt="">
```

Kamu perlu menggunakan elemen `<area>` bersama dengan elemen lain seperti elemen `<map>` atau `<template>`, dan elemen `<img>` untuk menampilkan gambar yang akurat.


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

<article id="area-title" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="title">
        title
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan judul area.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="area-title-north-america" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy" title=&quot;Amerika Utara&quot;"
            data-clipboard-text="title=&quot;Amerika Utara&quot;">
            "Amerika Utara"
          </code>
        </h4>
        <div class="value__description">
          <p>Judul akan tampil saat kursor diarahkan pada elemen area.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area title="North America"></area></div>
      </aside>
    </article>
  </div>
</article>
<article id="area-shape" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="shape">
        shape
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan bentuk bidang (shape) area.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="area-shape-rect" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy shape=&quot;rect&quot;"
            data-clipboard-text="shape=&quot;rect&quot;">
            "rect"
          </code>
        </h4>
        <div class="value__description">
          <p>Bentuk bidang segiempat dan memerlukan 4 kordinat.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area shape="rect"></area></div>
      </aside>
    </article>
    <article id="area-shape-circle" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy shape=&quot;circle&quot;"
            data-clipboard-text="shape=&quot;circle&quot;">
            "circle"
          </code>
        </h4>
        <div class="value__description">
          <p>Bentuk bidang lingkaran dan memerlukan 2 kordinat dan 1 radius.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area shape="circle"></area></div>
      </aside>
    </article>
    <article id="area-shape-polygon" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy shape=&quot;polygon&quot;"
            data-clipboard-text="shape=&quot;polygon&quot;">
            "polygon"
          </code>
        </h4>
        <div class="value__description">
          <p>Bentuk bidang poligon dengan titik tak terbatas.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area shape="polygon"></area></div>
      </aside>
    </article>
  </div>
</article>
<article id="area-coords" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="coords">
        coords
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menjelaskan kordinat yang terkait dengan bentuk bidang.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="area-coords-116104234154" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy coords=&quot;116,104,234,154&quot;"
            data-clipboard-text="coords=&quot;116,104,234,154&quot;">
            "116,104,234,154"
          </code>
        </h4>
        <div class="value__description">
          <p>Bentuk bidang <code>persegi</code> memeerlukan dua pasangan <code>x1,y1,x2,y2</code>, yang pertama menjelaskan pojok <strong>atas kiri</strong>, dan yang kedua pojok <strong>bawah kanan</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area coords="116,104,234,154"></area></div>
      </aside>
    </article>
    <article id="area-coords-508020" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy coords=&quot;50,80,20&quot;"
            data-clipboard-text="coords=&quot;50,80,20&quot;">
            "50,80,20"
          </code>
        </h4>
        <div class="value__description">
          <p>Bentuk bidang <code>lingkaran</code> memerlukan radius requires <code>x,y,r</code>. Pasangan tersebut menjelaskan <strong>pusat</strong> lingkaran.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area coords="50,80,20"></area></div>
      </aside>
    </article>
    <article id="area-coords-198374243303428387361624296624" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy coords=&quot;198,374,243,303,428,387,361,624,296,624&quot;"
            data-clipboard-text="coords=&quot;198,374,243,303,428,387,361,624,296,624&quot;">
            "198,374,243,303,428,387,361,624,296,624"
          </code>
        </h4>
        <div class="value__description">
          <p>Bidang <code>poligon</code> memerlukan beberapa pasangan <code>x,y</code> pairs.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area coords="198,374,243,303,428,387,361,624,296,624"></area></div>
      </aside>
    </article>
  </div>
</article>
<article id="area-href" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="href">
        href
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan target area.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="area-href-httphtmlreferenceio" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;https://codingku.id&quot;"
            data-clipboard-text="href=&quot;https://codingku.id&quot;">
            "https://codingku.id"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan URL <strong>absolute</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="https://codingku.id"></area></div>
      </aside>
    </article>
    <article id="area-href-elementdiv" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;/element/div&quot;"
            data-clipboard-text="href=&quot;/element/div&quot;">
            "/element/div"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan URL <strong>relative</strong> ke domain akar.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="/element/div"></area></div>
      </aside>
    </article>
    <article id="area-href-footer" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;#footer&quot;"
            data-clipboard-text="href=&quot;#footer&quot;">
            "#footer"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menargetkan elemen didalam halaman yang <em>sama</em>. Disini kami menargetkan elemen <code>&lt;div
              id=&quot;footer&quot;&gt;</code></p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="#footer">Footer</area></div>
      </aside>
    </article>
    <article id="area-href-mailtoalexsmithcom" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy href=&quot;mailto:alex@smith.com&quot;"
            data-clipboard-text="href=&quot;mailto:alex@smith.com&quot;">
            "mailto:luthfi@codingku.id"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan protokol <code>mailto</code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="mailto:luthfi@codingku.id">Hubungi Saya</area></div>
      </aside>
    </article>
  </div>
</article>
<article id="area-target" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="target">
        target
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tab atau jendela mana yang akan ditampilkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="area-target-_blank" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_blank&quot;"
            data-clipboard-text="target=&quot;_blank&quot;">
            "_blank"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka <strong>tab baru</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="https://codingku.id" target="_blank"></area></div>
      </aside>
    </article>
    <article id="area-target-_self" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_self&quot;"
            data-clipboard-text="target=&quot;_self&quot;">
            "_self"
          </code>
        </h4>
        <div class="value__description">
          <p>Membuka ditab yang sudah terbuka saat ini.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="https://codingku.id" target="_self"></area></div>
      </aside>
    </article>
    <article id="area-target-_parent" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_parent&quot;"
            data-clipboard-text="target=&quot;_parent&quot;">
            "_parent"
          </code>
        </h4>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="https://codingku.id" target="_parent"></area></div>
      </aside>
    </article>
    <article id="area-target-_top" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_top&quot;"
            data-clipboard-text="target=&quot;_top&quot;">
            "_top"
          </code>
        </h4>
      </header>
      <aside class="value__preview">
        <div class="value__output"><area href="https://codingku.id" target="_top"></area></div>
      </aside>
    </article>
  </div>
</article>


{{< browser tag="area" chrome="yes" edge="yes" firefox="yes" safari="yes" opera="yes" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<area>` dengan pengaturan CSS:

```css
area {
  display: none;
}
```