---
title: data
description: data
date: "2019-11-18T10:34:07+07:00"
slug: data
authors:
- akhlis
name: data
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/data
---

Tag `<data>` merupakan versi konten yang dapat dibaca oleh mesin.

Biasanya digunakan sebagai format alternatif yang bisa dimengerti oleh mesin.

Misalnya, kamu memiliki script yang memerlukan data dalam format tertentu yang tidak _user-friendly_. Dengan tag `<data>`, kamu bisa menyediakan nilai (value) dengan dua format yang berbeda.

Yaitu format yang digunakan khusus untuk mesin, dan yang satunya berupa format yang _user-friendly_ (seperti 10 dengan sepuluh).

Kedua format tersebut harus mewakili sesuatu yang sama, seperti ID buku dengan judul buku yang menunjukkan buku yang sama.

Jika value berupa tanggal atau berkaitan dengan waktu, maka gunakanlah tag `<time>` saja.

## Syntax

Tag `<data>` ditulis seperti `<data value=""></data>` dengan konten _user-friendly_ diletakkan diantara tag pembuka dan penutup.

Sedangkan value pada atribut menunjukkan format untuk mesin.

Seperti ini:

```html
<data value="machine-readble-data">
    Konten yang User friendly ...
</data>
```

#### Contoh Produk ID

{{< code lang="html" >}}
<h4>Rekomendasi 7 HP Gaming Terbaik November 2019</h4>
<ul>
  <li>
    <data value="399">Asus ROG Phone 2</data>
  </li>
  <li>
    <data value="482">Razer Phone 2</data>
  </li>
  <li>
    <data value="1399">Nubia Red Magic 3S</data>
  </li>
  <li>
    <data value="2099">LG G8X ThinQ</data>
  </li>
  <li>
    <data value="1029">OnePlus 7T Pro</data>
  </li>
  <li>
    <data value="2034">Samsung Galaxy Note 10 Plus</data>
  </li>
  <li>
    <data value="2015">Xiaomi Mi 9T Pro</data>
  </li>
</ul>
{{< /code >}}

#### Contoh Angka

{{< code lang="html" >}}
<h4>Angka paling Populer</h4>
<ul>
  <li><data value="1">Satu</data></li>
  <li><data value="2">Dua</data></li>
  <li><data value="3">Tiga</data></li>
</ul>
{{< /code >}}


<article id="data-value" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Nilai (value) yang dikeluarkan untuk mesin.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="data-value__123" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;123&quot;"
            data-clipboard-text="value=&quot;123&quot;">
            "123"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menulis berbagai tipe value, seperti <strong>angka</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><data value="123"></data></div>
      </aside>
    </article>
    <article id="data-value__hello-world" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;Hello World&quot;"
            data-clipboard-text="value=&quot;Hello World&quot;">
            "Hello World"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu juga bisa memakai <strong>teks</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><data value="Hello World"></data></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="data" chrome="62.0" edge="ya" firefox="22.0" safari="tidak" opera="49.0" >}}