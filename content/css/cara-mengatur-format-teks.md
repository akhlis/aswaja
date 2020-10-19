---
title: "Cara Mengatur Format Teks dengan CSS"
description: "Cara Mengatur Format Teks dengan CSS"
date: "2020-01-13T07:34:07+07:00"
slug: cara-mengatur-format-teks
weight: 120
authors:
- akhlis
---


....
{{< toc >}}

## Cara Merubah Warna Teks dengan CSS

Teks pada halaman website bisa diubah warnanya dengan menggunakan properti CSS `color`.

Warna yang diterapkan pada teks menggunakan properti `color` juga diterapkan pada dekorasi teks yang menggunakan properti `text-decoration` seperti `underlines`, `upperlines`, `line-throughs`, dll.

Property `color` bisa menggunakan nilai berupa:
- _Keyword_ warna, seperti: __red__, __blue__, __yellow__, dll.
- Notasi angka _hexadesimal_, seperti #99FFAA.
- Nilai desimal __RGB__ seperti __rgb(0, 160, 255)__ atau __rgb(0%, 63%, 100%)__

Contoh:

```css
h2 {
    color: #a0aec0;
}

p {
    color: #2196f3;
}
```

{{< preview >}}
<h2><span class="text-gray-500">Judul dengan Teks Warna Biru</span></h2>
<p class="text-blue-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
   Nulla erat dolor, ullamcorper in ultricies eget,
   fermentum rhoncus leo. Curabitur eu mi vitae metus
   posuere laoreet.</p>
{{< /preview >}}

{{< tips >}}
Baca juga penjelasan lengkap tentang referensi properti [color](/cssref/color/).
{{< /tips >}}

## Cara Mengatur Rata Teks di HTML dengan CSS

Kamu bisa mengatur rata teks di HTML dengan menggunakan properti CSS `text-align`.

Properti [text-align](/cssref/text-align/) ini memiliki 4 nilai, yaitu: __left__, __right__, __center__, dan __justify__.

### Mengatur Rata Teks Kiri
Untuk mengatur rata teks kiri, kamu bisa menggunakan properti `text-align` dengan nilai `left`.

```css
p {
    text-align: left;
}
```

{{< preview class="lg:w-1/3" >}}
<p class="text-sm text-left"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
{{< /preview >}}

### Mengatur Rata Teks Kanan
Untuk mengatur rata teks kanan, kamu bisa menggunakan properti `text-align` dengan nilai `right`.

```css
p {
    text-align: right;
}
```

{{< preview class="lg:w-1/3" >}}
<p class="text-sm text-right"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
{{< /preview >}}

### Mengatur Rata Teks Tengah
Untuk mengatur rata teks tengah, kamu bisa menggunakan properti `text-align` dengan nilai `center`.

```css
p {
    text-align: center;
}
```

{{< preview class="lg:w-1/3" >}}
<p class="text-sm text-center"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
{{< /preview >}}

### Mengatur Teks Rata Kanan dan Kiri
Untuk mengatur teks rata kanan dan kiri, kamu bisa menggunakan properti `text-align` dengan nilai `justify`.

Namun efek justify ini akan membuat web browser menambah jarak (spasi) antar kata, terutama untuk kata yang panjang.

Hal ini bisa membuat tulisan susah dibaca, terutama jika diakses dari smartphone yang memiliki layar kecil.

Efek justify lebih cocok untuk digunakan pada media cetak seperti buku atau majalah.

```css
p {
    text-align: justify;
}
```

{{< preview class="lg:w-1/3" >}}
<p class="text-sm text-justify"><strong>Hello world</strong><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>
{{< /preview >}}

## Membuat Teks Underline, Overline, dan Line-through

Untuk membuat teks dengan efek garis bawah (_underline_), garis atas (_overline_), dan teks tercoret (_line-through_), kamu bisa menggunakan properti CSS `text-decoration`.

Dan untuk menghapus efek garis bawah, garis atas, atau teks tercoret, kamu bisa menggunakan nilai `none` pada properti `text-decoration`.

Contoh teks underline:
```css
p {
    text-decoration: underline;
}
```

{{< preview >}}
<p class="underline">Teks paragraf dengan efek garis bawah</p>
{{< /preview >}}

Contoh teks overline:
```css
p {
    text-decoration: overline;
}
```

{{< preview >}}
<p class="overline">Teks paragraf dengan efek garis atas</p>
<style>
    .overline {
        text-decoration: overline;
    }
</style>
{{< /preview >}}

Contoh teks tercoret:
```css
p {
    text-decoration: line-through;
}
```

{{< preview >}}
<p class="line-through">Teks paragraf dengan efek garis atas</p>
{{< /preview >}}

## Cara Mengubah Format Teks

Untuk mengubah tampilan teks HTML menjadi huruf besar, huruf kecil, dan huruf kapital, kamu bisa menggunakan properti CSS `text-transform`.

### Mengubah Tampilan Teks Menjadi Huruf Besar
Kamu bisa menggunakan properti `text-transform` dengan nilai `uppercase` untuk mengubah teks menjadi huruf besar.

```html
<p>Teks paragraf dengan huruf besar</p>
```

```css
p {
    text-transform: uppercase;
}
```
{{< preview >}}
<p class="uppercase">Teks paragraf dengan huruf besar</p>
{{< /preview >}}

### Mengubah Tampilan Teks Menjadi Huruf Kecil
Kamu bisa menggunakan properti `text-transform` dengan nilai `lowercase` untuk mengubah teks menjadi huruf kecil.

```html
<p>Teks paragraf dengan huruf kecil</p>
```

```css
p {
    text-transform: lowercase;
}
```
{{< preview >}}
<p class="lowercase">Teks paragraf dengan huruf kecil</p>
{{< /preview >}}

### Mengubah Tampilan Teks Menjadi Huruf Kapital
Kamu bisa menggunakan properti `text-transform` dengan nilai `capitalize` untuk mengubah teks menjadi huruf kapital.

```html
<p>Teks paragraf dengan huruf kapital</p>
```

```css
p {
    text-transform: capitalize;
}
```
{{< preview >}}
<p class="capitalize">Teks paragraf dengan huruf kapital</p>
{{< /preview >}}

## Cara Membuat Teks Indent

Teks _indent_ atau teks yang bagian awal paragraf lebih menjorok ke dalam biasa dijumpai pada media cetak seperti majalah atau koran.

Untuk menggunakan efek teks _indent_ pada halaman HTML, kamu bisa menggunakan properti CSS `text-indent`.

Contoh:

```html
<p>Teks paragraf dengan efek indent 50px. In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
```

```css
p {
    text-indent: 50px;
}
```
{{< preview >}}
<p class="teks__indent">Teks paragraf dengan efek indent 50px. In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>
<style>
    .teks__indent {
        text-indent: 50px;
    }
</style>
{{< /preview >}}

## Cara Mengatur Lebar atau Spasi antar Huruf dengan CSS

Untuk mengatur spasi atau jarak antar huruf, kamu bisa menggunakan properti CSS `letter-spacing`.

Nilai yang digunakan pada properti ini bisa berupa __pixel__, __persen__, __em__, atau satuan ukuran teks lainnya.

Jika kamu memberikan nilai _positif_ untuk `letter-spacing`, spasi antar karakter akan semakin menjauh.

Sebaliknya jika kamu memberikan nilai _negatif_ untuk `letter-spacing`, spasi antar karakter akan semakin berdekatan.

Contoh:

```html
<p>Teks dengan spasi karakter normal</p>
<p class="plus">Teks dengan spasi karakter positif</p>
<p class="minus">Teks dengan spasi karakter negatif</p>
```

```css
.plus {
    letter-spacing: 3px;
}

.minus {
    letter-spacing: -3px;
}
```

{{< preview >}}
<p>Teks dengan spasi karakter normal</p>
<p class="plus">Teks dengan spasi karakter positif</p>
<p class="minus">Teks dengan spasi karakter negatif</p>
<style>
.plus {
    letter-spacing: 3px;
}
.minus {
    letter-spacing: -3px;
}
</style>
{{< /preview >}}

Nilai `letter-spacing: normal` bisa digunakan untuk membuat spasi antar karakter kembali ke nilai awal (nilai default).

{{< tips >}}
Baca juga penjelasan lengkap tentang referensi properti [letter-spacing](/cssref/letter-spacing/).
{{< /tips >}}

## Cara Mengatur Lebar atau Spasi antar Kata dengan CSS

Untuk mengatur spasi atau jarak antar kata, kamu bisa menggunakan properti CSS `word-spacing`.

Nilai yang digunakan pada properti ini bisa berupa __pixel__, __persen__, __em__, atau satuan ukuran teks lainnya.

Jika kamu memberikan nilai _positif_ untuk `word-spacing`, spasi antar kata akan semakin menjauh.

Sebaliknya jika kamu memberikan nilai _negatif_ untuk `word-spacing`, spasi antar kata akan semakin berdekatan.

Contoh:

```html
<p>Teks dengan spasi kata normal</p>
<p class="word__plus">Teks dengan spasi kata positif</p>
<p class="word__minus">Teks dengan spasi kata negatif</p>
```

```css
.word__plus {
    word-spacing: 20px;
}

.word__minus {
    word-spacing: -30px;
}
```

{{< preview >}}
<p>Teks dengan spasi kata normal</p>
<p class="word__plus">Teks dengan spasi kata positif</p>
<p class="word__minus">Teks dengan spasi kata negatif</p>
<style>
.word__plus {
    word-spacing: 20px;
}
.word__minus {
    word-spacing: -30px;
}
</style>
{{< /preview >}}

Nilai `word-spacing: normal` bisa digunakan untuk membuat spasi antar kata kembali ke nilai awal (nilai default).

{{< tips >}}
Baca juga penjelasan lengkap tentang referensi properti [word-spacing](/cssref/word-spacing/).
{{< /tips >}}

## Cara Mengatur Tinggi Baris dalam Paragraf HTML (line-height)

Apa yang dimaksud tinggi baris dalam paragraf ini?

Tinggi baris atau __line-height__ adalah besar jarak antara satu baris teks dengan baris dibawahnya.

Pengaturan _line-height_ yang tepat pada halaman website bisa membuat tulisan lebih nyaman untuk dibaca.

Biasanya para pengunjung website lebih suka membaca artikel yang jarak antar barisnya agak longgar karena bisa membuat mata tidak mudah lelah.

Untuk mengatur _line-height_, kamu bisa menggunakan properti CSS `line-height`.

Properti ini bisa diberi nilai _em_, _rem_, _px_, _persen_ atau _angka_ (tanpa satuan).

Warna pada elemen berikut menunjukkan tinggi baris teks paragraf.

<div class="bg-orange-100 leading-none mb-0">Ini teks paragraf dengan nilai line-height 1</div>
<div class="bg-green-100 leading-normal">Ini teks paragraf dengan nilai line-height 1.5</div>
<div class="bg-teal-100 leading-loose mb-8">Ini teks paragraf dengan nilai line-height 2</div>

Contoh:

```css
p {
    line-height: 16px;
}
```

### Cara Menghitung Jarak Antar Baris

Untuk mengetahui jarak antar baris bisa dilakukan dengan cara menghitung selisih [ukuran font](/cssref/font-size/) dengan nilai [line-height](/cssref/line-height/).

Misalnya, jika paragraf memiliki ukuran font (__font-size__) sebesar 14px, dan __line-height__ sebesar 18px, maka jarak antar baris bisa dihitung berdasarkan rumus berikut: __18px-14px__.

Sehingga jarak antar barisnya yaitu __4px__.

Jarak antar baris ini disebut juga dengan istilah __leading__.

Selain satuan __pixel__, __persen__, __em__, dan __rem__, _line-height_ juga memiliki satuan khusus yang digunakan untuk menentukan nilainya. yaitu dengan __angka__ (tanpa satuan).

Contoh:
```css
p {
    line-height: 1.5;
}
```

Cara perhitungan hasil leading dari penulisan __line-height__ ini mirip seperti menggunakan nilai __persen__.

Jadi __line-height: 1.5__ akan menghasilkan nilai yang sama dengan __line-height: 150%__.

Misalnya, nilai _line-height: 1.5_ pada teks yang berukuran __14px__, maka nilai _line-height_ akan menjadi __150%*14px=21px__.

Sehingga jarak antar baris pada kasus ini adalah __21px-14px=7px__.

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<h2>Belajar Tinggi Baris CSS: line-height</h2>

<h3>Font-size: 16px, tanpa line-height (nilai line-height: 1.2)</h3>
<p class="teks__1">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 20px</h3>
<p class="teks__2">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 1.5em</h3>
<p class="teks__3">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 2</h3>
<p class="teks__4">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.teks__1 { font-size:16px;}
.teks__2 { font-size:16px; line-height: 20px;}
.teks__3 { font-size:16px; line-height: 1.5em;}
.teks__4 { font-size:16px; line-height: 2;}
```
{{< /editor-css >}}
{{< editor-preview >}}
<h2>Belajar Tinggi Baris CSS: line-height</h2>

<h3>Font-size: 16px, tanpa line-height (nilai line-height: 1.2)</h3>
<p class="contoh1 mb-8">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 20px</h3>
<p class="contoh2 mb-8">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 1.5em</h3>
<p class="contoh3 mb-8">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<h3>Font-size: 16px, line-height: 2</h3>
<p class="contoh4 mb-8">Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Nulla erat dolor, ullamcorper in ultricies
eget,fermentum rhoncus leo. Curabitur eu mi vitae metus
posuere laoreet. Eam facilis omittantur at, usu efficiantur
neglegentur delicatissimi et, in per vero splendide
persequeris.<p>

<style type="text/css">
.contoh1 { font-size:16px; line-height: 1.2;}
.contoh2 { font-size:16px; line-height: 20px;}
.contoh3 { font-size:16px; line-height: 1.5em;}
.contoh4 { font-size:16px; line-height: 2;}
</style>
{{< /editor-preview >}}
{{< /editor >}}