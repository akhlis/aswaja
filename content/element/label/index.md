---
title: label
description: label
date: "2019-11-18T10:34:07+07:00"
slug: label
authors:
- akhlis
name: label
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/label
---

Tag `<label>` mewakili keterangan judul atau penamaan tampilan control (biasanya untuk form control seperti `<input>`, `<select>`, dll.).

Elemen `<label>` memungkinkan kamu untuk melampirkan keterangan/label pada kontrol form, sehingga pengguna tahu untuk apa kontrol itu.

Misalnya, bidang input yang menerima nama depan pengguna bisa diberi nama label "Nama Depan".

## Syntax

Tag `<label>` ditulis seperti `<label></label>` dengan teks label disisipkan diantara tag pembuka dan penutup.

Tag `<label>` ini bisa digunakan dengan dua cara. Yaitu dengan menyertakan kontrol terkait didalam tag pembuka dan penutup  elemen label.

Seperti ini:

```html
<label>Nama Awal: <input type="text" id="fname"></label>
```

Dan yang kedua yaitu dengan cara mereferensikan elemen terkait dengan ID menggunakan atribut `for`. 

Cara ini dilakukan jika elemen kontrol terkait diletakkan diluara elemen `<label>`.

Seperti ini:

```html
<label for="fname">Nama Awal: </label>
<input type="text" id="fname">
```

{{< code lang="html" >}}
<label for="first_name">Nama awal</label>
<br>
<input type="text" name="first_name" id="nama_awal">
{{< /code >}}

{{< code lang="html" >}}
<label>
  <input type="checkbox" name="terms">
  I agree to the terms
</label>
{{< /code >}}

{{< code lang="html" >}}
<p>Subscribe to the newsletter?</p>
<label>
  <input type="radio" name="newsletter" value="yes"> Yes
</label>
<label>
  <input type="radio" name="newsletter" value="no"> No
</label>
{{< /code >}}


<article id="label-for" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="for">
        for
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan kontrol label yang akan dikaitkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="label-for-last_name" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy for=&quot;last_name&quot;"
            data-clipboard-text="for=&quot;last_name&quot;">
            "last_name"
          </code>
        </h4>
        <div class="value__description">
          <p>Mengklik label akan fokus pada input dengan <code> id </code> sama dengan <code> last_name </code>.</p>
{{< highlight html >}}
<label for="last_name">Last name</label>
<br>
<input type="text" name="last_name" id="last_name">
{{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><label for="last_name">Last name</label>
          <br>
          <input type="text" name="last_name" id="last_name"></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="label" chrome="Ya" edge="Ya" firefox="Ya" safari="Ya" opera="Ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<label>` dengan pengaturan CSS:

```css
label {
  cursor: default;
}
```