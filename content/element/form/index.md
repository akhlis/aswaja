---
title: form
description: form
date: "2019-11-18T10:34:07+07:00"
slug: form
authors:
- akhlis
name: form
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/form
---

Tag `<form>` mewakili formulir dalam dokumen HTML.

Tag ini digunakan bersama dengan elemen lain yang terkait dengan form.

Untuk membuat form, biasanya dengan membuat elemen yang terkait diletakkan didalam tag `<form>`.

Kamu juga bisa menggunakan atribut form untuk referensi ID form yang digunakan.

## Syntax

Tag `<form>` ditulis seperti `<form></form>` dengan beberapa elemen yang terkait diletakkan diantara tag pembuka dan penutup.

```html
<form action="process_form.cfm" method="get">
	<label>Nama Awal: <input name="nama_awal"></label>
	<label>Nama Akhir: <input name="nama_akhir"></label>
	<input type="submit" value="Submit">
</form>
```

{{< code lang="html" >}}
<form action="/signup" method="post">
  <p>
    <label>Judul</label><br>
    <label>
      <input type="radio" name="title" value="bp">
      Bpk
    </label>
    <label>
      <input type="radio" name="title" value="ibu">
      Ibu
    </label>
    <label>
      <input type="radio" name="title" value="sdr">
      Sdr
    </label>
  </p>
  <p>
    <label>Nama awal</label><br>
    <input type="text" name="nama_awal">
  </p>
  <p>
    <label>Nama akhir</label><br>
    <input type="text" name="nama_akhir">
  </p>
  <p>
    <label>Email</label><br>
    <input type="email" name="email" required>
  </p>
  <p>
    <label>Nomor HP</label><br>
    <input type="tel" name="phone">
  </p>
  <p>
    <label>Password</label><br>
    <input type="password" name="password">
  </p>
  <p>
    <label>Negara</label><br>
    <select>
      <option>Indonesia</option>
      <option>China</option>
      <option>India</option>
      <option>United States</option>
      <option>Brazil</option>
    </select>
  </p>
  <p>
    <label>
      <input type="checkbox" value="terms">
      I agree to the <a href="/terms">terms and conditions</a>
    </label>
  </p>
  <p>
    <button>Sign up</button>
    <button type="reset">Reset form</button>
  </p>
</form>
{{< /code >}}

<article id="form-action" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="action">
        action
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan URL informasi form yang akan dikirim saat disubmit.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-action-contact" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy action=&quot;/contact&quot;"
            data-clipboard-text="action=&quot;/contact&quot;">
            "/contact"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan URL <strong>relative</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form action="/contact"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. admin@codingku.id"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-action-siteurlcontact" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy action=&quot;{{site.url}}/contact&quot;"
            data-clipboard-text="action=&quot;{{site.url}}/contact&quot;">
            "{{site.url}}/contact"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan URL <strong>absolute</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form action="{{site.url}}/contact"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. admin@codingku.id"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-method" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="method">
        method
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan HTTP method yang digunakan saat form disubmit</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-method-post" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy method=&quot;post&quot;"
            data-clipboard-text="method=&quot;post&quot;">
            "post"
          </code>
        </h4>
        <div class="value__description">
          <p>Informasi form dikirim ke server sebagai bagian dari <strong>request body</strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form method="post"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-method-get" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy method=&quot;get&quot;"
            data-clipboard-text="method=&quot;get&quot;">
            "get"
          </code>
        </h4>
        <div class="value__description">
          <p>Informasi form dikirim ke server sebagai <strong>Parameter URL</strong>:
            <code>/contact?first_name=Alex&amp;last_name=Smith</code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form method="get"><label>Email</label><br><input type="email" name="email" placeholder="e.g. alex@smith.com">
            <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Nama form saat dikirim ke server. Berguna saat ada banyak form dalam halaman web yang sama.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-name-sign_up_form" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;sign_up_form&quot;"
            data-clipboard-text="name=&quot;sign_up_form&quot;">
            "sign_up_form"
          </code>
        </h4>
        <div class="value__description">
          <p>Nama value harus unik sesuai konteks halaman web.</p>
          <p>Hanya boleh terdiri dari karakter alphanumeric <code>a-z</code> <code>A-Z</code> <code>0-9</code> dan beberapa karakter spesial seperti <code>-</code> <code>_</code>… tetapi bukan spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form name="sign_up_form"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-autocomplete" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="autocomplete">
        autocomplete
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan apakah browser dapat melengkapi semua kontrol form secara otomatis.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-autocomplete-off" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy autocomplete=&quot;off&quot;"
            data-clipboard-text="autocomplete=&quot;off&quot;">
            "off"
          </code>
        </h4>
        <div class="value__description">
          <p>Browser akan <strong> menonaktifkan </strong> fungsi pelengkapan otomatis. Namun ini bisa diganti untuk masing-masing kontrol secara individual.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form autocomplete="off"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-autocomplete-on" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy autocomplete=&quot;on&quot;"
            data-clipboard-text="autocomplete=&quot;on&quot;">
            "on"
          </code>
        </h4>
        <div class="value__description">
          <p>Browser akan <strong> mengaktifkan </strong> fungsi pelengkapan otomatis. Namun ini bisa diganti untuk masing-masing kontrol secara individual.</p>
          <p>Coba tekan & quot; bawah & quot; dalam input ini. Ini akan menampilkan formulir email yang dimasukkan sebelumnya.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form autocomplete="on"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-target" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="target">
        target
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan di tab atau jendela mana tautan yang diklik akan muncul.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-target-_blank" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_blank&quot;"
            data-clipboard-text="target=&quot;_blank&quot;">
            "_blank"
          </code>
        </h4>
        <div class="value__description">
          <p>Terbuka dalam konteks penelusuran baru, yang biasanya merupakan <strong> tab baru </strong>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form href="https://htmlreference.io" target="_blank"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-target-_self" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_self&quot;"
            data-clipboard-text="target=&quot;_self&quot;">
            "_self"
          </code>
        </h4>
        <div class="value__description">
          <p>Buka di tab saat ini.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form href="https://htmlreference.io" target="_self"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-target-_parent" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_parent&quot;"
            data-clipboard-text="target=&quot;_parent&quot;">
            "_parent"
          </code>
        </h4>
        <div class="value__description">
          <p>Dibuka dalam konteks penelusuran induk, atau <code> _self </code> jika tidak ada.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form href="https://htmlreference.io" target="_parent"><label>Email</label><br><input type="email"
              name="email" placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-target-_top" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy target=&quot;_top&quot;"
            data-clipboard-text="target=&quot;_top&quot;">
            "_top"
          </code>
        </h4>
        <div class="value__description">
          <p>Dibuka dalam konteks penelusuran teratas, atau <code> _self </code> tidak ada.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form href="https://htmlreference.io" target="_top"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-enctype" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="enctype">
        enctype
      </code>
    </h3>
    <div class="attribute__description">
      <p>Tentukan <a href="https://www.iana.org/assignments/media-types/media-types.xhtml"> jenis MIME </a> dari
        informasi yang dikirim ke server. Hanya berfungsi jika metodenya <code> post </code>.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-enctype-applicationx-www-form-urlencoded" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy enctype=&quot;application/x-www-form-urlencoded&quot;"
            data-clipboard-text="enctype=&quot;application/x-www-form-urlencoded&quot;">
            "application/x-www-form-urlencoded"
          </code>
        </h4>
        <div class="value__description">
          <strong class="value__is-default">Default.</strong>
          <p>The <strong>default</strong> value.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form enctype="application/x-www-form-urlencoded"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-enctype-textplain" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy enctype=&quot;text/plain&quot;"
            data-clipboard-text="enctype=&quot;text/plain&quot;">
            "text/plain"
          </code>
        </h4>
        <div class="value__description">
          <p>Untuk teks biasa HTML5.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form enctype="text/plain"><label>Email</label><br><input type="email" name="email"
              placeholder="e.g. alex@smith.com"> <button>Ok</button></form>
        </div>
      </aside>
    </article>
    <article id="form-enctype-multipartform-data" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy enctype=&quot;multipart/form-data&quot;"
            data-clipboard-text="enctype=&quot;multipart/form-data&quot;">
            "multipart/form-data"
          </code>
        </h4>
        <div class="value__description">
          <p>Diperlukan saat menggunakan elemen <code> & lt; input type = & quot; file & quot; & gt; </code>.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form enctype="multipart/form-data"><label>Upload</label><br><input type="file"></form>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="form-novalidate" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="novalidate">
        novalidate
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memberitahu browser untuk tidak memvalidasi formulir saat pengiriman.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="form-novalidate-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <form novalidate><label>Email</label><br><input type="email" name="email" placeholder="e.g. alex@smith.com">
            <button>Ok</button></form>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="form" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<form>` dengan pengaturan CSS:

```css
form {
  display: block;
  margin-top: 0em;
}
```