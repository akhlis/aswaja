---
title: grid-auto-flow
description: grid-auto-flow
date: "2019-11-12T10:34:07+07:00"
slug: grid-auto-flow
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-flow
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid-auto-flow` menentukan bagaimana item-item yang ditempatkan secara otomatis mengalir ke grid.

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-rows: 80px 80px;
grid-auto-flow: column;
grid-gap: 5px;
}

#grid>div {
background-color: #F48FB1;
color: white;
font-size: 1.8em;
padding: 10px;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Properti `grid-auto-flow` hanya berurusan dengan item grid yang ditempatkan ke trek yang dibuat secara implisit.

Item grid yang tidak ditempatkan secara eksplisit ditempatkan secara otomatis ke ruang kosong, dan grid _implisit_
dibuat hanya untuk tujuan itu.

Properti `grid-auto-flow` menentukan secara tepat bagaimana item-item ini ditempatkan.

Yuk kita lihat kode yang relevan dari contoh di atas:
```css
grid-template-rows: 80px 80px;
grid-auto-flow: column;
```

Saya mendefinisikan dua baris, tetapi saya tidak mendefinisikan kolom apa pun.

Oleh karena itu wadah kotak perlu menambahkan kolom secara implisit agar sesuai dengan setiap item kotak ke dalam kotak.

Biasanya ketika kamu melakukan ini, wadah kotak akan menambahkan lebih banyak baris untuk mengakomodasi item kotak,
bukan kolom.

Item grid hanya akan menumpuk di atas satu sama lain. Ini karena nilai awal properti `grid-auto-flow` adalah baris.

Tetapi pada contoh di atas, saya menggunakan `grid-auto-flow: column` untuk menentukan bahwa item kotak akan ditempatkan
secara otomatis ke dalam kolom, bukan baris.

{{< note >}}
CSS memiliki konsep "explicit grid" dan "implicit grid". "Explicit grid" mengacu pada grid yang kamu tentukan dengan
properti `grid-template-rows`, `grid-template-columns`, dan `grid-template-areas`.

_Implicit grid_ dibuat setiap kali kamu menambahkan item grid yang pas di luar _grid explicit_.

Misalnya, kamu mungkin hanya menentukan 2 baris dan 3 kolom tetapi ada lebih banyak item kotak daripada yang bisa masuk
ke dalamnya.

Dalam hal ini, untuk memenuhi item grid tambahan, wadah grid menghasilkan trek _implicit grid_ dengan menambahkan garis
_implicit grid_ ke grid.
{{< /note >}}

## Keyword `dense`

Kata kunci `dense` dapat berguna jika kamu memiliki item grid berukuran berbeda di dalam _implicit grid_, beberapa di
antaranya menjangkau beberapa trek.

Biasanya, _implicit grid_ hanya akan menata item dalam urutan sumber. Jika semua item grid memiliki ukuran yang sama,
dan pas dalam satu trek, ini biasanya akan menghasilkan grid dengan spasi yang sama dengan item grid terdekat.

Tetapi jika beberapa item grid menjangkau beberapa trek dan yang lainnya tidak, kamu bisa mengakhiri dengan grid di mana
item mengalir ke baris berikutnya jauh sebelum akhir wadah grid, menyebabkan grid terlihat sedikit "renggang" di satu
sisi.

### Tanpa Keyword `dense`
Di sini, item grid 2 dan 3 merentang dua kolom. Ini menyebabkan item 3 bergeser ke baris berikutnya, meninggalkan ruang
di ujung baris pertama.

{{< editor class="w-1/3" editor="1" >}}
{{< editor-html >}}
```html
<div id="grid">
  <div>1</div>
  <div class="wide">2</div>
  <div class="wide">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 2px;
}

#grid>div {
background-color: #FFCC80;
color: white;
font-size: 1.9em;
padding: 10px;
width: 150px;
}

#grid>div.wide {
width: 300px;
grid-column-end: span 2;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-nodense">
  <div>1</div>
  <div class="wide">2</div>
  <div class="wide">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}


### Dengan Keyword `dense`
Dengan menggunakan kata kunci `dense` menyebabkan item 4 dipindahkan ke akhir baris pertama sehingga mengisi ruang yang
ditinggalkan oleh item 3.

{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<div id="grid">
  <div>1</div>
  <div class="wide">2</div>
  <div class="wide">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-auto-flow: dense;
grid-gap: 2px;
}

#grid>div {
background-color: #FFCC80;
color: white;
font-size: 1.9em;
padding: 10px;
width: 150px;
}

#grid>div.wide {
width: 300px;
grid-column-end: span 2;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-nodense" class="grid-dense">
  <div>1</div>
  <div class="wide">2</div>
  <div class="wide">3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

Kata kunci `dense` adalah kata kunci opsional yang memberi tahu browser untuk menggunakan algoritme pengemasan "dense".

Artinya, peramban akan berusaha mengisi lubang sebelumnya di kotak jika item yang lebih kecil muncul nantinya.

Penting untuk dicatat bahwa ini dapat menyebabkan item grid muncul di luar urutan sumber.

Kamu dapat melihat dari contoh di atas bahwa item kotak "4" muncul sebelum "3" setelah kata kunci dense sebelumnya.

## CSS Syntax
```css
grid-auto-flow: row | column | dense | row dense | column dense;
```

#### JavaScript Syntax
```js
object.style.gridAutoFlow="row dense"
```

{{< cssref default="row" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="grid-auto-flow: row;" >}}
Dalam pengaturan dua kolom ini, item grid kedua lebarnya dua kolom, item ketiga adalah empat baris.

Item grid lainnya ditempatkan pada baris tambahan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-flow " id="grid-auto-flow-row">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="two-wide block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two: <strong>2 columns
      wide</strong></p>
  <p class="four-tall block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>6.</strong> Six</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>7.</strong> Seven</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>8.</strong> Eight</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>9.</strong> Nine</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-auto-flow: column;" >}}
Item grid lainnya ditempatkan pada kolom tambahan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-flow " id="grid-auto-flow-column">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="two-wide block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two: <strong>2 columns
      wide</strong></p>
  <p class="four-tall block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>6.</strong> Six</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>7.</strong> Seven</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>8.</strong> Eight</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>9.</strong> Nine</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-auto-flow: dense;" >}}
Algoritma "dense" mencoba untuk menempatkan semua item grid lain untuk mengisi semua "lubang" di grid.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-flow " id="grid-auto-flow-dense">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="two-wide block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two: <strong>2 columns
      wide</strong></p>
  <p class="four-tall block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>6.</strong> Six</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>7.</strong> Seven</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>8.</strong> Eight</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>9.</strong> Nine</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #grid {
    display: grid;
    grid-template-rows: 80px 80px;
    grid-auto-flow: column;
    grid-gap: 5px;
  }

  #grid>div {
    background-color: #F48FB1;
    color: white;
    font-size: 1.8em;
    padding: 10px;
  }

  #grid-nodense {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2px;
  }

  #grid-nodense>div {
    background-color: #FFCC80;
    color: white;
    font-size: 1.9em;
    padding: 10px;
    width: 100%;
  }

  #grid-nodense>div.wide {
    width: 80%;
    grid-column-end: span 2;
  }

  .grid-dense {
    grid-auto-flow: dense;
  }

  .grid-auto-flow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0;
  }

  .grid-auto-flow .two-wide {
    grid-column: span 2;
  }

  .grid-auto-flow .four-tall {
    grid-row: span 4;
  }

  #grid-auto-flow-row {
    grid-auto-flow: row;
  }

  #grid-auto-flow-column {
    grid-auto-flow: column;
  }

  #grid-auto-flow-dense {
    grid-auto-flow: dense;
  }
</style>