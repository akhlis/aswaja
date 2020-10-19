---
title: select
description: select
date: "2019-11-18T10:34:07+07:00"
slug: select
authors:
- akhlis
name: select
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/select
---

Tag `<select>` mewakili kontrol untuk memilih di antara sekumpulan opsi.

Tag `<select>` digunakan dengan tag `<option>` untuk menghasilkan daftar opsi yang dapat dipilih pengguna.

Elemen `<optgroup>` juga dapat digunakan untuk mengelompokkan item-item `<option>` tersebut.

## Syntax

Tag `<select>` ditulis seperti `<select></select>` dengan sejumlah tag `<option>` yang bersarang di antara tag pembuka dan penutup.

Atribut `name` sering disertakan sehingga setiap skrip yang memproses kontrol formulir dapat referensi nilai yang dipilih.

Seperti ini:
```html
<select name="myName">
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</select>
```

{{< code lang="html" >}}
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
{{< /code >}}

<article id="select-name" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan pengidentifikasi unik untuk pemilihan di dalam formulir.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-name-countries" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;countries&quot;"
            data-clipboard-text="name=&quot;countries&quot;">
            "countries"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai name harus unik sesuai konteks container <code>&lt;form&gt;</code>.</p>
          <p>Value hanya dapat berisi karakter alfanumerik <code> a-z </code> <code> A-Z </code> <code> 0-9 </code> dan beberapa karakter khusus seperti <code> - </code> <code> _ </code> ... tetapi bukan spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select name="countries">
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="select-size" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="size">
        size
      </code>
    </h3>
    <div class="attribute__description">
      <p>Ketika ada <code> beberapa </code> opsi, tentukan ketinggian daftar yang dipilih</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-size-12" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy size=&quot;12&quot;" data-clipboard-text="size=&quot;12&quot;">
            "12"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> integer </strong> apa pun.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select multiple size="12">
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="select-multiple" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="multiple">
        multiple
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memungkinkan untuk memilih beberapa opsi sekaligus.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-multiple-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select multiple>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="select-autofocus" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autofocus">
        autofocus
      </code>
    </h3>
    <div class="attribute__description">
      <p>Atur fokus pada opsi ketika halaman web dimuat.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-autofocus-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="select-disabled" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan tombol.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select disabled>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="select-required" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="required">
        required
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memberitahu browser bahwa opsi ini adalah <strong> wajib </strong>. Membiarkannya kosong akan menampilkan peringatan.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="select-required-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select required>
            <option value="Argentina">Argentina</option>
            <option value="Bolivia">Bolivia</option>
            <option value="Brazil">Brazil</option>
            <option value="Chile">Chile</option>
            <option value="Colombia">Colombia</option>
            <option value="Ecuador">Ecuador</option>
            <option value="Guyana">Guyana</option>
            <option value="Paraguay">Paraguay</option>
            <option value="Peru">Peru</option>
            <option value="Suriname">Suriname</option>
            <option value="Uruguay">Uruguay</option>
            <option value="Venezuela">Venezuela</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="select" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}