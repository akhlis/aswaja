---
title: 'Cara Membuat Heading atau Judul dengan HTML'
description: 'Belajar HTML Lengkap: Cara Membuat Heading atau Judul dengan HTML'
date: "2019-11-18T10:34:07+07:00"
slug: cara-membuat-judul-pada-html
weight: 60
authors:
- akhlis
---

Heading atau judul merupakan salah satu element penting dalam sebuah halaman website. Karena heading inilah yang biasanya pertama kali akan dilihat oleh pengunjung website.

Heading bisa mewakili keseluruhan konten yang ada dalam halaman web, jadi kalau heading atau judul konten yang dipakai menarik, biasanya para pengunjung web akan betah berlama-lama membaca konten sampai selesai.

Mesin pencari Google (dan teman-temannya) juga menaruh perhatian lebih pada heading ini, karena digunakan untuk mengindex struktur konten halaman website.

## Cara Membuat Heading atau Judul dengan HTML

Judul konten atau artikel pada website bisa dibuat dengan menggunakan tag heading. 

Tag heading ini ada beberapa tingkatan ukuran mulai dari yang terbesar sampai terkecil yaitu tag `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>`.

Tag heading akan ditampilkan dengan huruf tebal (bold) secara default pada web browser.

Struktur halaman website yang baik menurut mesin pencari Google, harus menggunakan tag `<h1>` untuk membuat judul utama konten artikel.

Selanjutnya menggunakan tag `<h2>`, `<h3>`, `<h4>`, `<h5>`, dan `<h6>` untuk membuat sub judul artikel berdasarkan tingkatan-tingkatannya.

Perhatikan contoh berikut:

{{< code lang="html" >}}
<h1>Ini Judul 1 dengan h1</h1>
<h2>Ini Judul 2 dengan h2</h2>
<h3>Ini Judul 3 dengan h3</h3>
<h4>Ini Judul 4 dengan h4</h4>
<h5>Ini Judul 5 dengan h5</h5>
<h6>Ini Judul 6 dengan h6</h6>
{{< /code >}}

## Membuat Link Judul Artikel

Kalau kamu berkunjung ke website portal berita atau blog, biasanya pada homepage terdapat daftar judul artikel terbaru.

Judul artikel tersebut kalau diklik akan diarahkan ke halaman artikel yang lengkap.

Nah untuk membuat link judul artikel itu bisa memakai tag `<a>` didalam tag heading tersebut.

Begini contohnya:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Latihan HTML</title>
</head>
    <body>
        <h2><a href="https://www.kodekit.id/">ini adalah judul artikel pertama</a></h2>
        <h2><a href="https://www.kodekit.id/">ini adalah judul artikel kedua</a></h2>
        <h2><a href="https://www.kodekit.id/">ini adalah judul artikel ketiga</a></h2>
    </body>
</html>
```

{{< preview >}}
<h2><a href="https://www.kodekit.id/">ini adalah judul artikel pertama</a></h2>
<h2><a href="https://www.kodekit.id/">ini adalah judul artikel kedua</a></h2>
<h2><a href="https://www.kodekit.id/">ini adalah judul artikel ketiga</a></h2>
{{< /preview >}}

Gimana? sudah pahamkan mengenai penggunaan tag heading. Kalau memang masih ada yang perlu ditanyakan, silahkan ajukan pertanyaan lewat kolom komentar dibawah ini ya.

Untuk totorial selanjutnya, saya akan membahas tentang [cara membuat elemen paragraf](/html/cara-membuat-paragraf-pada-html/).

