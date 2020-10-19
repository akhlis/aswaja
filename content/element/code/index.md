---
title: code
description: code
date: "2019-11-18T10:34:07+07:00"
slug: code
authors:
- akhlis
name: code
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/code
---

Tag HTML `<code>` mewakili fragmen kode komputer.

Fragmen kode bisa dalam bentuk nama elemen XML, program komputer, atau kode string lain yang di rekomendasikan komputer.

Biasanya browser menampilkan konten `code` dengan font monospace seperti Courier.

## Syntax

Tag `<code>` ditulis seperti `<code></code>` dengan fragmen kode diletakkan diantara tag pembuka dan penutup.

_Catatan:_ Untuk menampilkan baris kode yang banyak, bungkus elemen `<code>` didalam elemen `<pre>`. Elemen kode sendiri sebenarnya hanya menampilkan satu frase kode atau satu baris kode saja.

```html
<code>Kode komputer disini ...</code>
```

#### Contoh Sederhana

{{< code lang="html" >}}
<p>Tulis <code>npm install</code> pada terminal untuk menginstal proyek dependency npm.</p>
{{< /code >}}

#### Contoh Menampilkan kode HTML

Tujuan penggunaan `<code>` adalah untuk menampilkan kode dalam halaman web.

Untuk memastikan kode HTML ditampilkan dengan benar dalam browser, kamu perlu menggunakan karakter [HTML entities](/html/entity/) agar kode HTML tidak dirender.

Gunakan karakter `&lt;` untuk menggantikan simbol (<) dan `&gt;` untuk simbol (>).

{{< code lang="html" >}}
<p>Untuk menampilkan kutipan panjang, gunakan elemen <code>&lt;blockquote&gt;</code>.</p>
{{< /code >}}

#### Contoh Multiple Line tanpa tag `pre`

{{< code lang="html" >}}
<p>Ini kode sederhana untuk membuat tabel dalam HTML:</p>
<code>
&lt;table&gt;
&lt;tr&gt;
&lt;td&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</code>
{{< /code >}}

#### Contoh Multiple Line dengan tag `pre`

{{< code lang="html" >}}
<p>Ini kode sederhana untuk membuat tabel dalam HTML:</p>
<pre>
<code>
&lt;table&gt;
&lt;tr&gt;
&lt;td&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
</code>
</pre>
{{< /code >}}

{{< browser tag="cite" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<code>` dengan pengaturan CSS:

```css
code {
  font-family: monospace;
}
```