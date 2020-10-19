---
title: input
description: input
date: "2019-11-18T10:34:07+07:00"
slug: input
authors:
- akhlis
name: input
experimental: false
meta: false
selfclosing: true
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/input
layout: fullbox
---

Elemen `<input>` digunakan untuk membuat kontrol interaktif pada form berbasis web.

Kontrol input form ini memungkinkan pengguna untuk memasukkan data dan berinteraksi dengan situs web atau aplikasi.

Elemen `input` merupakan salah satu elemen yang paling powerful dan komplek karena banyaknya kombinasi tipe input dan atribut.

## Syntax

Tag `<input>` ditulis seperti `<input>` (tanpa tag penutup).

Tag ini biasanya diberi atribut `type` untuk menentukan tipe kontrol, dan atribut `name` sebagai referensi pada tag input tersebut.

Sedangkan atribut `value` digunakan untuk menentukan nilai default form input ini.

```html
<input type="text" name="warna" value="hijau">
```

{{< code lang="html" >}}
<form action="/element/input" target="_blank" method="get">
  <p><label>Nama awal: <input type="text" name="nama_awal" maxlength="100" style="width:120px;"></label></p>
  <p><label>Nama akhir: <input type="text" name="nama_akhir" maxlength="100" style="width:120px;"></label></p>
  <input type="submit" value="Submit">
</form>
{{< /code >}}

#### Atribut `form`

Atribut `form` digunakan untuk mengaitkan elemen `<input>` dengan elemen form.

Untuk menggunakannya, kamu harus menentukan id form yang ingin dikaitkan dengan elemen `form` ini.

Pada contoh berikut, saya menempatkan semua elemen terkait form diluar elemen `<input>`.

Tapi saya hanya mengaitkan dua elemen form (untuk menunjukkan efek atribut form).

Nama depan saya kaitkan dengan id form, tapi nama belakang tidak saya kaitkan.

Sehingga nama belakang tidak dikirimkan dengan form tersebut.

{{< code lang="html" >}}
<form action="/element/input" target="_blank" method="get" id="nama_pelanggan"></form>
<p><label>Nama awal: <input form="nama_pelanggan" type="text" name="nama_awal" maxlength="100"
      style="width:120px;"></label></p>
<p><label>Nama akhir: <input type="text" name="nama_akhir" maxlength="100" style="width:120px;"></label></p>
<input form="nama_pelanggan" type="submit" value="Kirim">
{{< /code >}}

<article id="input-type" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="type">
        type
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jenis input formulir.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="input-type-text" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;text&quot;"
            data-clipboard-text="type=&quot;text&quot;">
            "text"
          </code>
        </h4>
        <div class="value__description">
          <p>Input teks baris tunggal sederhana yang menerima semua jenis karakter</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="text"></input></div>
      </aside>
    </article>
    <article id="input-type-email" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;email&quot;"
            data-clipboard-text="type=&quot;email&quot;">
            "email"
          </code>
        </h4>
        <div class="value__description">
          <p>Seperti input teks, tetapi browser hanya mengizinkan input email yang valid.</p>
          <p>Pada perangkat seluler, keyboard email akan muncul.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="email"></input></div>
      </aside>
    </article>
    <article id="input-type-number" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;number&quot;"
            data-clipboard-text="type=&quot;number&quot;">
            "number"
          </code>
        </h4>
        <div class="value__description">
          <p>Seperti input teks, tetapi browser hanya membolehkan angka yang valid.</p>
          <p>Pada perangkat seluler, papan ketik angka akan muncul.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="number"></input></div>
      </aside>
    </article>
    <article id="input-type-checkbox" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;checkbox&quot;"
            data-clipboard-text="type=&quot;checkbox&quot;">
            "checkbox"
          </code>
        </h4>
        <div class="value__description">
          <p>Kotak centang toggle yang memiliki pilihan dicentang atau tidak dicentang. Nilai hanya dikirimkan oleh
            form jika kotak centang dicentang.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="checkbox"></input></div>
      </aside>
    </article>
    <article id="input-type-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
          <p>Kamu dapat membungkus kotak centang dalam label, untuk menambah area klik.</p>
{{< highlight html >}}
<label>
  <input type="checkbox">
  saya menerima syarat dan ketentuan yang berlaku
</label>
{{< /highlight >}}
          <p>Perhatikan bagaimana mengklik teks mengaktifkan kotak centang.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><label>
            <input type="checkbox">
            saya menerima syarat dan ketentuan yang berlaku
          </label></div>
      </aside>
    </article>
    <article id="input-type-radio" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;radio&quot;"
            data-clipboard-text="type=&quot;radio&quot;">
            "radio"
          </code>
        </h4>
        <div class="value__description">
          <p>Needs to be used used in combination with other radio buttons, so that they are mutually exclusive.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="radio"></input></div>
      </aside>
    </article>
    <article id="input-type-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
          <p>You link radio buttons through a similar <code>name</code> value:</p>
{{< highlight html >}}
<label>
  <input type="radio" name="newsletter" value="yes">
  Yes
</label>
<label>
  <input type="radio" name="newsletter" value="no">
  No
</label>
{{< /highlight >}}
          <p>Hanya bisa memilih salah satu pilihan saja.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><label>
            <input type="radio" name="newsletter" value="yes">
            Yes
          </label>
          <label>
            <input type="radio" name="newsletter" value="no">
            No
          </label></div>
      </aside>
    </article>
    <article id="input-type-submit" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy type=&quot;submit&quot;"
            data-clipboard-text="type=&quot;submit&quot;">
            "submit"
          </code>
        </h4>
        <div class="value__description">
          <p>Tombol Kirim yang dipicu saat diklik atau saat menekan Enter.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input type="submit"></input></div>
      </aside>
    </article>
  </div>
</article>
<article id="input-name" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan pengidentifikasi unik untuk input tersebut di dalam formulir. Ini memungkinkan server untuk mengakses setiap input nilai saat dikirimkan.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="input-name-first_name" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;first_name&quot;"
            data-clipboard-text="name=&quot;first_name&quot;">
            "first_name"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai nama harus unik sesuai konteks <code> &lt; form &gt; </code>.</p>
          <p>Hanya dapat berisi karakter alfanumerik <code> a-z </code> <code> A-Z </code> <code> 0-9 </code> dan beberapa karakter khusus seperti <code> - </code> <code> _ </code> ... tetapi bukan spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input name="first_name"></input></div>
      </aside>
    </article>
  </div>
</article>
<article id="input-placeholder" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="placeholder">
        placeholder
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan teks placeholder yang tidak dapat dipilih yang hanya muncul ketika input kosong.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="input-placeholder-eg-alexsmithcom" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy placeholder=&quot;e.g. alex@smith.com&quot;"
            data-clipboard-text="placeholder=&quot;e.g. alex@smith.com&quot;">
            "e.g. alex@smith.com"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat memberi petunjuk pada format yang diharapkan untuk input.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input placeholder="e.g. alex@smith.com"></input></div>
      </aside>
    </article>
    <article id="input-placeholder-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
          <p>Sebagai praktik terbaik, disarankan untuk memiliki label untuk menjelaskan input, dan menggunakan placeholder untuk menampilkan contoh:</p>
{{< highlight html >}}
<form>
  <label>Email</label><br>
  <input type="email" name="email" placeholder="e.g. alex@smith.com">
</form>
{{< /highlight >}}
          <p>Perhatikan bagaimana placeholder lenyap pada fokus, karenanya kebutuhan untuk mempertahankan label yang terpisah.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form>
            <label>Email</label><br>
            <input type="email" name="email" placeholder="e.g. alex@smith.com">
          </form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="input-required" class="attribute attribute--novaluebut">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="required">
        required
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memberitahu browser bahwa input ini <strong> wajib </strong>. Membiarkannya kosong akan menampilkan peringatan.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="input-required-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
          <p>Kamu hanya perlu menambahkan atribut <code> required </code> tanpa value:</p>
{{< highlight html >}}
<form>
  <input type="text" required>
</form>
{{< /highlight >}}
          <p>Browser akan menampilkan peringatan jika kamu mencoba mengirim form dengan input teks kosong.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form>
            <input type="text" required>
          </form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="input-disabled" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan input.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="input-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><input disabled></input></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="input" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}