---
title: Memahami Elemen HTML Dasar
description: "Belajar HTML Lengkap: Memahami Elemen HTML Dasar"
date: "2019-11-18T10:34:07+07:00"
slug: html-dasar
weight: 30
authors:
- akhlis
---

Sebelum mulai belajar HTML lebih lanjut, sebaiknya pahami dulu dasar-dasar yang harus diperhatikan dalam membuat dokumen HTML.

Agar dokumen HTML bisa valid sehingga dikenali oleh web browser, kamu harus menyertakan tag-tag HTML dengan benar ke dalam dokumen HTML.

Mengenai pembahasan lengkap tentang Tag atau Elemen HTML, bisa kamu pelajari di tutorial selanjutnya.

## Membuat Dokumen HTML

Untuk membuat dokumen HTML yang valid, kamu harus menyertakan tipe deklarasi `<!DOCTYPE html>` pada __permulaan__ semua dokumen HTML.

Kemudian dokumen HTML dimulai dengan tag `<html>` dan diakhiri dengan tag `</html>`.

Semua bagian dokumen HTML yang ditampilkan pada web browser, harus di letakkan diantara tag `<body>` dan `</body>`.

#### Contoh:

```html
<!DOCTYPE html>
<html>
<body>

<h1>Judul Website</h1>
<p>Paragraf pertama disini.</p>

</body>
</html>
```

## Membuat Judul dengan HTML

Judul dalam HTML didefinisikan dengan tag `<h1>` sampai `<h6>`.

Tag `<h1>` mendefinisikan judul yang paling penting, biasanya ditampilkan dengan ukuran teks terbesar.

Dan tag `<h6>` mendefinisikan judul yang paling tidak penting, biasanya ditampilkan dengan ukuran teks terkecil.

{{< code lang="html" >}}
<h1>Ini judul 1 dengan tag h1</h1>
<h2>Ini judul 2 dengan tag h2</h2>
<h3>Ini judul 3 dengan tag h3</h3>
<h4>Ini judul 4 dengan tag h4</h4>
{{< /code >}}

## Membuat Paragraf dengan HTML

Paragraf dalam HTML didefinisikan dengan tag `<p>`.

#### Contoh:

{{< code lang="html" >}}
<p>Ini paragraf pertama</p>
<p>Dan ini paragraf yang kedua</p>
{{< /code >}}

## Membuat Link dengan HTML

Link dalam HTML didefinisikan dengan tag `<a>`.

#### Contoh:

{{< code lang="html" >}}
<a href="https://www.kodekit.id">Tutorial HTML Lengkap.</a>
{{< /code >}}

Tujuan link ditentukan dalam atribut `href`.

## Membuat Button dengan HTML

_Button_ atau tombol dalam HTML didefinisikan dengan tag `<button>`.

#### Contoh:

{{< code lang="html" >}}
<button class="bg-gray-300 py-2px px-3 rounded-sm outline-none">Klik saya</button>
{{< /code >}}

## Membuat List atau Daftar Item dengan HTML

_List_ atau daftar item dalam HTML didefinisikan dengan tag `<ul>` atau `<ol>`. Kemudian diikuti oleh tag `<li>` untuk mendefinisikan masing-masing item.

#### Contoh:

```html
<ul>
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Semangka</li>
</ul>

<ol>
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Semangka</li>
</ol>
```

{{< preview >}}
<ul class="list-disc pl-4 mb-6">
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Semangka</li>
</ul>

<ol class="list-decimal pl-4">
  <li>Apel</li>
  <li>Jeruk</li>
  <li>Semangka</li>
</ol>
{{< /preview >}}

Semoga dengan penjelasan diatas, kamu sudah menjadi paham tentang HTML dasar.

Selanjutnya kita akan membahas mengenai [Tag dan Element HTML](/html/mengenal-tag-dan-elemen-html/).

Tapi sebelumnya jangan lupa untuk membagikan link tutorial ini kepada teman-temanmu agar mereka juga bisa mendapatkan manfaat yang sama.