---
title: img
description: img
date: "2019-11-18T10:34:07+07:00"
slug: img
authors:
- akhlis
name: img
experimental: false
meta: false
selfclosing: true
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/img
---

Tag `<img>` digunakan untuk menyematkan gambar ke dalam dokumen HTML.

## Syntax

Tag `<img>` ditulis seperti `<img src="" alt="">` (tanpa tag penutup) dengan URL gambar disisipkan di antara tanda kutip
ganda dari atribut src.

Atribut alt menyediakan teks alternatif untuk pengguna yang tidak dapat melihat gambar.

Beberapa alasan pengguna tidak dapat melihat gambar mungkin karena koneksi internet lambat, salah penulisan URL lokasi
gambar, dll.

```html
<img src="gambar.jpg" alt="Gambar saya">
```


{{< code lang="html" >}}
<img src="/images/html/sunset.jpg" alt="Picture of a Ha Long Bay sunset">
{{< /code >}}

{{< code lang="html" >}}
<!-- For responsive images, use srcset and sizes -->
<img src="/images/html/sunset-360.jpg" alt="Picture of a Ha Long Bay sunset" srcset="/images/html/sunset-360.jpg 360w,
    /images/html/sunset-720.jpg 720w,
    /images/html/sunset-1440.jpg 1440w>" sizes="(min-width: 800px) 720px, 360px">
{{< /code >}}

<article id="img-src" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="src">
        src
      </code>
    </h3>
    <div class="attribute__description">
      <p>URL tempat gambar dihosting.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-src-imagestiramisujpg" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;/images/tiramisu.jpg&quot;"
            data-clipboard-text="src=&quot;/images/tiramisu.jpg&quot;">
            "/images/html/tiramisu.jpg"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan URL <strong> relatif </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/tiramisu.jpg"></img></div>
      </aside>
    </article>
    <article id="img-src-siteurlimagestrafficjpg" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy src=&quot;{{site.url}}/images/traffic.jpg&quot;"
            data-clipboard-text="src=&quot;{{site.url}}/images/traffic.jpg&quot;">
            "{{site.url}}/images/traffic.jpg"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan URL <strong> absolut </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/traffic.jpg"></img></div>
      </aside>
    </article>
  </div>
</article>
<article id="img-alt" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="alt">
        alt
      </code>
    </h3>
    <div class="attribute__description">
      <p>Teks alternatif jika gambar tidak tersedia.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-alt-picture-of-a-man-standing-in-front-of-the-dragons-pearl-boat" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag"
            data-tooltip="Click to copy alt=&quot;Picture of a man standing in front of the Dragon&#x27;s Pearl boat&quot;"
            data-clipboard-text="alt=&quot;Picture of a man standing in front of the Dragon&#x27;s Pearl boat&quot;">
            "Picture of a man standing in front of the Dragon&#x27;s Pearl boat"
          </code>
        </h4>
        <div class="value__description">
          <p>Menjelaskan gambar seolah-olah itu tidak ada.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/boat.jpg"
            alt="Picture of a man standing in front of the Dragon's Pearl boat"></img></div>
      </aside>
    </article>
  </div>
</article>
<article id="img-srcset" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="srcset">
        srcset
      </code>
    </h3>
    <div class="attribute__description">
      <p>Defines a list of <em>different</em> <strong>sources</strong> for the <em>same</em> image. The browser will
        choose the best one to use.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-srcset-imagessunset-2xjpg-2x" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy srcset=&quot;/images/sunset-@2x.jpg 2x&quot;"
            data-clipboard-text="srcset=&quot;/images/sunset-@2x.jpg 2x&quot;">
            "/images/sunset-@2x.jpg 2x"
          </code>
        </h4>
        <div class="value__description">
          <p>You can define a <strong>pixel density descriptor</strong> like <code>2x</code>. In this case,
            <code>sunset-@2x.jpg</code> is <em>720px</em> wide.</p>
          {{< highlight html >}}
          <img src="/images/sunset.jpg" srcset="/images/sunset-@2x.jpg 2x" alt="Picture of a Ha Long Bay sunset">
          {{< /highlight >}}
          <p>The browser will either use <code>sunset.jpg</code> or <code>sunset-@2x.jpg</code> depending on the space
            available, the pixel density, etc.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/sunset.jpg" srcset="/images/html/sunset.jpg 2x"
            alt="Picture of a Ha Long Bay sunset"></div>
      </aside>
    </article>
    <article id="img-srcset-imagessunset-360jpg-360w-imagessunset-720jpg-720w-imagessunset-1440jpg-1440w" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag"
            data-tooltip="Click to copy srcset=&quot;/images/sunset-360.jpg 360w, /images/sunset-720.jpg 720w, /images/sunset-1440.jpg 1440w&quot;"
            data-clipboard-text="srcset=&quot;/images/sunset-360.jpg 360w, /images/sunset-720.jpg 720w, /images/sunset-1440.jpg 1440w&quot;">
            "/images/sunset-360.jpg 360w,<br> /images/sunset-720.jpg 720w,<br> /images/sunset-1440.jpg 1440w"
          </code>
        </h4>
        <div class="value__description">
          <p>You can use a <strong>width descriptor</strong> like <code>360w</code>. This value is divided by one of the
            source sizes (defined in the <code>sizes</code> attribute) to obtain the <strong>pixel density</strong>.</p>
          {{< highlight html >}}
          <img src="/images/sunset-360.jpg" alt="Picture of a Ha Long Bay sunset" srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w>" sizes="(min-width: 800px) 720px, 360px">
          {{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/sunset.jpg" alt="Picture of a Ha Long Bay sunset" srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w>" sizes="(min-width: 800px) 720px, 360px"></div>
      </aside>
    </article>
  </div>
</article>
<article id="img-sizes" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="sizes">
        sizes
      </code>
    </h3>
    <div class="attribute__description">
      <p>Defines a list of different source <strong>sizes</strong>. You can combine each of them with a <strong>media
          query</strong>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-sizes-min-width-800px-1440px-720px" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy sizes=&quot;(min-width: 800px) 1440px, 720px&quot;"
            data-clipboard-text="sizes=&quot;(min-width: 800px) 1440px, 720px&quot;">
            "(min-width: 800px) 1440px, 720px"
          </code>
        </h4>
        <div class="value__description">
          <p>The browser will use the <code>1440px</code> image (defined in <code>srcset</code>) if the viewport is
            larger than 800px.<br>It will use the <code>720px</code> otherwise.</p>
          {{< highlight html >}}
          <img src="/images/sunset-360.jpg" alt="Picture of a Ha Long Bay sunset" srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w>" sizes="(min-width: 800px) 720px, 360px">
          {{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/sunset-360.jpg" alt="Picture of a Ha Long Bay sunset" srcset="/images/sunset-360.jpg 360w,
          /images/sunset-720.jpg 720w,
          /images/sunset-1440.jpg 1440w>" sizes="(min-width: 800px) 720px, 360px"></div>
      </aside>
    </article>
  </div>
</article>
<article id="img-height" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="height">
        height
      </code>
    </h3>
    <div class="attribute__description">
      <p>Defines the height of the image.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-height-240" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy height=&quot;240&quot;"
            data-clipboard-text="height=&quot;240&quot;">
            "240"
          </code>
        </h4>
        <div class="value__description">
          <p>The height in pixels.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/boat.jpg" height="240"></img></div>
      </aside>
    </article>
  </div>
</article>
<article id="img-width" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="width">
        width
      </code>
    </h3>
    <div class="attribute__description">
      <p>Defines the width of the image.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="img-width-120" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy width=&quot;120&quot;"
            data-clipboard-text="width=&quot;120&quot;">
            "120"
          </code>
        </h4>
        <div class="value__description">
          <p>The width in pixels.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><img src="/images/html/boat.jpg" width="120"></img></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="img" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<img>` dengan pengaturan CSS:

```css
img {
  display: inline-block;
}
```