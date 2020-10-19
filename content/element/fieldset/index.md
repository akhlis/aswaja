---
title: fieldset
description: fieldset
date: "2019-11-18T10:34:07+07:00"
slug: fieldset
authors:
- akhlis
name: fieldset
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset
---

Tag `<fieldset>` mewakili sekelompok elemen form dalam dokumen HTML.

Tag `<fieldset>` dapat digunakan dengan tag `<legend>` untuk membuat formulir lebih mudah dibaca atau dipahami.

## Syntax

Tag `<fieldset>` ditulis seperti `<fieldset></fieldset>` dengan sekelompok kontrol form diselipkan diantara tag pembuka dan penutup.

#### Contoh sederhana

{{< code lang="html" >}}
  <fieldset>
  <p>Nama Awal: <input type="text" style="width:120px;"> Panggilan: <input type="text" style="width:120px;"></p>
  <p>Nama pilihan: <input type="text" style="width:120px;"></p>
  </fieldset>
  <fieldset>
  <input type="radio" name="gender" value="male"> Laki-laki
  <input type="radio" name="gender" value="female"> Perempuan
  <input type="radio" name="gender" value="other"> Lainnya
</fieldset>
{{< /code >}}

{{< code lang="html" >}}
<fieldset>
  <legend>Detail Nama</legend>
  <p>Nama Awal: <input type="text" style="width:120px;"> Panggilan: <input type="text" style="width:120px;"></p>
  <p>Nama Pilihan: <input type="text" style="width:120px;"></p>
  </fieldset>
  <fieldset>
  <legend>Jenis Kelamin</legend>
  <input type="radio" name="gender" value="male"> Laki-laki
  <input type="radio" name="gender" value="female"> Perempuan
  <input type="radio" name="gender" value="other"> Lainnya
</fieldset>
{{< /code >}}


<article id="fieldset-disabled" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan kontrol yang terdapat pada fieldset.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="fieldset-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <fieldset disabled>
            <legend>Subscribe to the Newsletter</legend>
            <input type="email" name="email">
            <button>Ok</button>
          </fieldset>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="fieldset" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<fieldset>` dengan pengaturan CSS:

```css
fieldset {
  display: block;
  margin-left: 2px;
  margin-right: 2px;
  padding-top: 0.35em;
  padding-bottom: 0.625em;
  padding-left: 0.75em;
  padding-right: 0.75em;
  border: 2px groove (internal value);
}
```