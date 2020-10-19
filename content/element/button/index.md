---
title: button
description: button
date: "2019-11-18T10:34:07+07:00"
slug: button
authors:
- akhlis
name: button
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/button
---

Tag `<button>` digunakan untuk membuat tombol dalam dokumen HTML.

Elemen `button` memungkinkan pengguna untuk mengirim formulir dan berinteraksi dengan cara klik button.

Meskipun elemen button sering diletakkan didalam elemen `<form>`, namun elemen ini juga bisa disambungkan ke form dimanapun dalam dokumen dengan cara diberi atribut.

Elemen button juga bisa digunakan sendiri tanpa terhubung dengan elemen `form`.

Dalam elemen `button` kamu bisa meletakkan konten seperti teks atau gambar.

## Syntax

Tag `<button>` ditulis seperti `<button></button>` dengan konten diantara tag pembuka dan tag penutup.

```html
<button>Klik disini</button>
```
#### Contoh Biasa

{{< code lang="html" >}}
<button onclick="JavaScript:alert('Terima Kasih!')">klik saya!</button>
{{< /code >}}

#### Contoh button didalam Form

{{< code lang="html" >}}
<form action="/html_5/tags/html_form_tag_action.cfm" method="get" target="_blank">
Nama awal:
<input type="text" name="nama_awal" maxlength="100">
<br />
Nama akhir:
<input type="text" name="nama_akhir" maxlength="100">
<button type="submit">Kirim</button>
</form>
{{< /code >}}


<article id="button-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan penanda unik untuk button dalam form yang mengijinkan server untuk mengakses value masing-masing button saat disubmit.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="button-name-submit_button" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;submit_button&quot;"
            data-clipboard-text="name=&quot;submit_button&quot;">
            "submit_button"
          </code>
        </h4>
        <div class="value__description">
          <p>Nama value harus unik dalam konteks container <code>&lt;form&gt;</code>.</p>
          <p>Dan hanya boleh terdiri dari karakter alphanumeric <code>a-z</code> <code>A-Z</code> <code>0-9</code> dan beberapa karakter seperti <code>-</code> <code>_</code>… tetapi tidak spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button name="submit_button">Submit form</button></div>
      </aside>
    </article>
  </div>
</article>
<article id="button-value" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Value dikirim ke server saat disubmit ke form.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="button-value__primary" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;primary&quot;"
            data-clipboard-text="value=&quot;primary&quot;">
            "primary"
          </code>
        </h4>
        <div class="value__description">
          <p>Server akan menerima value <code>primary</code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button value="primary">Submit form</button></div>
      </aside>
    </article>
  </div>
</article>
<article id="button-type" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan tipe button.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="button-type-submit" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;submit&quot;"
            data-clipboard-text="type=&quot;submit&quot;">
            "submit"
          </code>
        </h4>
        <div class="value__description">
          <p>Button mengirim data form ke server.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button type="submit">Submit form</button></div>
      </aside>
    </article>
    <article id="button-type-reset" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;reset&quot;"
            data-clipboard-text="type=&quot;reset&quot;">
            "reset"
          </code>
        </h4>
        <div class="value__description">
          <p>Tombol reset form.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button type="reset">Reset</button></div>
      </aside>
    </article>
  </div>
</article>
<article id="button-disabled" class="attribute attribute__-novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan button.</p>
      <strong class="attribute__is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="button-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button disabled>Submit form</button></div>
      </aside>
    </article>
  </div>
</article>
<article id="button-autofocus" class="attribute attribute__-novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autofocus">
        autofocus
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan fokus ke elemen saat halaman dimuat.</p>
      <strong class="attribute__is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="button-autofocus-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><button>Submit form</button></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="button" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}