---
title: textarea
description: textarea
date: "2019-11-18T10:34:07+07:00"
slug: textarea
authors:
- akhlis
name: textarea
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/textarea
---

Tag `<textarea>` mewakili kontrol edit teks biasa multi-baris dalam dokumen HTML.

Tag ini memungkinkan pengguna untuk memasukkan teks di beberapa baris.

Oleh karena itu, mereka dapat mengirim blok teks yang lebih besar daripada yang bisa dicapai dengan elemen `<input>` sederhana.

Misalnya, untuk komentar pada ulasan atau formulir umpan balik.

## Syntax

Tag `<textarea>` ditulis seperti `<textarea></textarea>` dengan konten apa pun yang disisipkan di antara tag pembuka dan penutup.

Kamu dapat menggunakan atribut `rows` dan `cols` untuk menentukan berapa banyak baris dan kolom yang harus ditampilkan.

```html
<textarea rows="3" cols="20">
Ketik teks disini...
</textarea>
```

{{< code lang="html" >}}
<textarea rows="3" cols="20">
Ketik teks disini...
</textarea>
{{< /code >}}

<article id="textarea-name" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan pengidentifikasi unik untuk textarea itu dalam formulir. Ini memungkinkan server untuk mengakses masing-masing nilai textarea saat dikirim.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-name-message" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;message&quot;"
            data-clipboard-text="name=&quot;message&quot;">
            "message"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai name harus unik sesuai konteks container <code> &lt;form&gt;</code>.</p>
          <p>Itu hanya dapat berisi karakter alfanumerik <code> a-z </code> <code> A-Z </code> <code> 0-9 </code> dan beberapa karakter khusus seperti <code> - </code> <code> _ </code> ... tetapi bukan spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-autocomplete" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autocomplete">
        autocomplete
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan apakah peramban dapat secara otomatis melengkapi isi teks.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-autocomplete-off" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy autocomplete=&quot;off&quot;"
            data-clipboard-text="autocomplete=&quot;off&quot;">
            "off"
          </code>
        </h4>
        <div class="value__description">
          <p>Browser akan <strong> menonaktifkan </strong> fungsi pelengkapan otomatis.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="off"></textarea></div>
      </aside>
    </article>
    <article id="textarea-autocomplete-on" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy autocomplete=&quot;on&quot;"
            data-clipboard-text="autocomplete=&quot;on&quot;">
            "on"
          </code>
        </h4>
        <div class="value__description">
          <p>Browser akan <strong> mengaktifkan </strong> fungsi pelengkapan otomatis.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-minlength" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="minlength">
        minlength
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jumlah minimum karakter yang diperlukan oleh textarea</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-minlength-15" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy minlength=&quot;15&quot;"
            data-clipboard-text="minlength=&quot;15&quot;">
            "15"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> bilangan bulat </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-maxlength" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="maxlength">
        maxlength
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jumlah karakter maksimum yang diizinkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-maxlength-140" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy maxlength=&quot;140&quot;"
            data-clipboard-text="maxlength=&quot;140&quot;">
            "140"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> bilangan bulat </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-placeholder" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="placeholder">
        placeholder
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan teks placeholder yang tidak dapat dipilih yang hanya muncul ketika textarea kosong.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-placeholder-eg-hello-my-name-is-alex" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy placeholder=&quot;e.g. Hello my name is Alex&quot;"
            data-clipboard-text="placeholder=&quot;e.g. Hello my name is Alex&quot;">
            "e.g. Hello my name is Alex"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat memberi petunjuk pada format yang diharapkan untuk textarea.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-cols" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="cols">
        cols
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jumlah kolom.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-cols-40" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy cols=&quot;40&quot;" data-clipboard-text="cols=&quot;40&quot;">
            "40"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> bilangan bulat </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="10" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-rows" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="rows">
        rows
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan jumlah baris.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-rows-5" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rows=&quot;5&quot;" data-clipboard-text="rows=&quot;5&quot;">
            "5"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> bilangan bulat </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-wrap" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="wrap">
        wrap
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan bagaimana teks harus dibungkus.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-wrap-hard" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy wrap=&quot;hard&quot;"
            data-clipboard-text="wrap=&quot;hard&quot;">
            "hard"
          </code>
        </h4>
        <div class="value__description">
          <p>Teks akan selalu terbungkus tergantung pada nilai <code> cols </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="hard"></textarea></div>
      </aside>
    </article>
    <article id="textarea-wrap-soft" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy wrap=&quot;soft&quot;"
            data-clipboard-text="wrap=&quot;soft&quot;">
            "soft"
          </code>
        </h4>
        <div class="value__description">
          <p>Teks hanya akan pecah saat dibutuhkan.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft"></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-disabled" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Disables the textarea.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled></textarea>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-required" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="required">
        required
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memberitahu browser bahwa teks ini <strong> wajib </strong>. Membiarkannya kosong akan menampilkan peringatan.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-required-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled
            required></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-autofocus" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autofocus">
        autofocus
      </code>
    </h3>
    <div class="attribute__description">
      <p>Atur fokus pada teks saat halaman web dimuat.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-autofocus-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled
            required></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-readonly" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="readonly">
        readonly
      </code>
    </h3>
    <div class="attribute__description">
      <p>Mengubah textarea menjadi elemen read-only.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-readonly-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled required
            readonly></textarea></div>
      </aside>
    </article>
  </div>
</article>
<article id="textarea-spellcheck" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="spellcheck">
        spellcheck
      </code>
    </h3>
    <div class="attribute__description">
      <p>Mengaktifkan pemeriksa ejaan browser.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="textarea-spellcheck-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><textarea columns="40" rows="5" placeholder="e.g. Hello my name is Alex"
            name="message" autocomplete="on" minlength="15" maxlength="140" cols="40" wrap="soft" disabled required
            readonly spellcheck></textarea></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="textarea" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}