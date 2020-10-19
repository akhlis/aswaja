---
title: source
description: source
date: "2019-11-18T10:34:07+07:00"
slug: source
authors:
- akhlis
name: source
experimental: false
meta: false
selfclosing: true
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/source
---

Tag `<source>` digunakan untuk menentukan beberapa sumber file media pada elemen `<picture>`, `<audio>` atau `<video>`

Tag ini memungkinkan kamu untuk menawarkan konten media yang sama dalam berbagai format file untuk memberikan kompatibilitas pada browser yang mendukungnya.

## Syntax

Tag `<source>` ditulis seperti `<source src="" type=""> (tanpa tag penutup) dengan URL media yang tercantum diantara tanda kutip ganda dari atribut `src`.

Atribut `type` dapat digunakan untuk menentukan tipe sumber daya media yang membantu browser untuk menentukan apakah dapat memutar file tersebut sebelum mengunduhnya.

Seperti ini:
```html
<audio controls>
	<source src="tune.wma" type="audio/x-ms-wma">
	<source src="tune.mp3" type="audio/mpeg">
</audio>
```

{{< code lang="html" >}}
<picture>
  <source media="(min-width: 800px)" srcset="/images/html/sunset-360.jpg 360w,
    /images/html/sunset-720.jpg 720w,
    /images/html/sunset-1440.jpg 1440w" sizes="33.3vw">
  <source srcset="/images/html/sunset-720.jpg 2x,
    /images/html/sunset-360.jpg 1x">
  <img src="/images/html/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
</picture>
{{< /code >}}

<article id="source-src" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>URL tempat media di-hosting.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="source-src-imagestiramisujpg" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;/images/html/tiramisu.jpg&quot;"
            data-clipboard-text="src=&quot;/images/html/tiramisu.jpg&quot;">
            "/images/html/tiramisu.jpg"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan URL <strong> relatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source src="/images/html/tiramisu.jpg">
          </source>
        </div>
      </aside>
    </article>
    <article id="source-src-siteurlimagestrafficjpg" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;{{site.url}}/images/html/traffic.jpg&quot;"
            data-clipboard-text="src=&quot;{{site.url}}/images/html/traffic.jpg&quot;">
            "{{site.url}}/images/html/traffic.jpg"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan URL <strong> absolut </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source src="{{site.url}}/images/html/traffic.jpg">
          </source>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="source-srcset" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="srcset">
        srcset
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan daftar sumber file <em> berbeda </em> untuk media yang <em> sama </em>. Browser akan memilih yang terbaik untuk digunakan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="source-srcset-imagessunset-360jpg-360w-imagessunset-720jpg-720w-imagessunset-1440jpg-1440w"
      class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag"
            data-tooltip="Click to copy srcset=&quot;/images/html/sunset-360.jpg 360w, /images/html/sunset-720.jpg 720w, /images/html/sunset-1440.jpg 1440w&quot;"
            data-clipboard-text="srcset=&quot;/images/html/sunset-360.jpg 360w, /images/html/sunset-720.jpg 720w, /images/html/sunset-1440.jpg 1440w&quot;">
            "/images/html/sunset-360.jpg 360w,<br> /images/html/sunset-720.jpg 720w,<br> /images/html/sunset-1440.jpg 1440w"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> deskriptor lebar </strong> seperti <code> 360w </code>. Nilai ini dibagi oleh salah satu dari ukuran sumber (didefinisikan dalam atribut <code> size </code>) untuk mendapatkan <strong> kerapatan piksel </strong>.</p>
          <p>@html</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source srcset="/images/html/sunset-360.jpg 360w, /images/html/sunset-720.jpg 720w, /images/html/sunset-1440.jpg 1440w">
          </source>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="source-sizes" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="sizes">
        sizes
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan daftar berbagai sumber <strong> ukuran </strong>. Kamu dapat menggabungkan masing-masing dengan <strong> media query </strong>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="source-sizes-min-width-800px-1440px-720px" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy sizes=&quot;(min-width: 800px) 1440px, 720px&quot;"
            data-clipboard-text="sizes=&quot;(min-width: 800px) 1440px, 720px&quot;">
            "(min-width: 800px) 1440px, 720px"
          </code>
        </h4>
        <div class="value__description">
          <p>Browser akan menggunakan gambar <code> 1440px </code> (didefinisikan dalam <code> srcset </code>) jika viewport lebih besar dari 800px. <br> Jika sebaliknya akan menggunakan <code> 720px </code>.</p>
          <p>@html</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source sizes="(min-width: 800px) 1440px, 720px">
          </source>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="source-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan sumber file sesuai <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME type</a>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="source-type-imagejpg" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;image/jpg&quot;"
            data-clipboard-text="type=&quot;image/jpg&quot;">
            "image/jpg"
          </code>
        </h4>
        <div class="value__description">
          <p>Kmau hanya dapat menggunakan tipe MIME audio, video, atau picture.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source type="image/jpg">
          </source>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="source-media" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="media">
        media
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan media query untuk sumber file <code>&lt;picture&gt;</code>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="source-media-min-width-800px" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy media=&quot;(min-width: 800px)&quot;"
            data-clipboard-text="media=&quot;(min-width: 800px)&quot;">
            "(min-width: 800px)"
          </code>
        </h4>
        <div class="value__description">
          <p>Media hanya akan digunakan pada viewports yang lebih besar dari 800px.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <source media="(min-width: 800px)">
          </source>
        </div>
      </aside>
    </article>
  </div>
</article>


{{< browser tag="source" chrome="4.0" edge="9.0" firefox="3.5" safari="4.0" opera="10.5" >}}