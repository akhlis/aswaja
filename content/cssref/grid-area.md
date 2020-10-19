---
title: grid-area
description: grid-area
date: "2019-11-12T10:34:07+07:00"
slug: grid-area
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-area
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid-area` adalah singkatan untuk penempatan item grid berbasis garis dalam grid.

Properti `grid-area` berfungsi seperti ini:
`grid-row-start` / `grid-column-start` / `grid-row-end` / `grid-column-end`

Jadi properti ini memungkinkan kamu untuk menentukan baris mana yang memulai item grid, dan berapa banyak trek yang
terbentang.

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
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 1px;
}

#grid>div {
background-color: #A5D6A7;
color: white;
font-size: 1.9em;
padding: 10px;
}

#grid>div:first-child {
grid-area: 2 / 2 / 4 / 4;
background: #FFE082;
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
</div>
{{< /editor-preview >}}
{{< /editor >}}

Yuk kita lihat kode yang relevan dari contoh di atas:
```css
#grid > div:first-child {
grid-area: 2 / 2 / 4 / 4;
background: orangered;
}
```

Kode tersebut menghasilkan item grid pertama yang ditempatkan mulai dari _row line 2_, _column line 2_, dan membentang
dua baris ke bawah dan dua kolom.

Dua nilai pertama menentukan posisi awal, dan dua nilai terakhir menentukan posisi akhirnya.

Garis miring (/) memisahkan nilai untuk masing-masing properti.

## Nama Grid Area

Kamu juga bisa merujuk ke nama _grid area_ apa pun yang kamu buat dengan properti `grid-template-areas`:
```css
/* Menentukan nama grid area */
grid-template-areas:
"a b c"
"d e f"
"g h i";

/* Sekarang merujuk ke nama grid area (bukan nomor indeks) */
#grid > div:first-child {
grid-area: e / e / i / i;
background: orangered;
}
```

## Baris Bernama Implisit

Kamu juga bisa merujuk ke setiap _baris bernama_ implisit (dan eksplisit) yang telah didefinisikan pada grid.

_Baris bernama_ implisit dibuat secara otomatis setiap kali kamu membuat _area grid bernama_.

Jadi, setiap kali kamu membuat area kotak bernama (seperti dalam contoh sebelumnya), seluruh rangkaian garis bernama
implisit dibuat di belakang layar.

Untuk setiap grid area bernama _foo_, empat garis bernama implisit dibuat. Dua nama `foo-start` menamai baris
_baris-awal_ dan _kolom-awal_ dari area grid bernama, dan dua bernama `foo-end` sebagai _baris-akhir_ dan _kolom-akhir_
dari area grid bernama.

Jadi kita bisa mengambil contoh di atas, dan menambahkan `-start` untuk kedua nilai `e` dan `-end` ke kedua `i`, dan
sekarang kita akan merujuk ke baris bernama implisit:
```css
/* Menentukan grid area bernama */
grid-template-areas:
"a b c"
"d e f"
"g h i";

/* Sekarang merujuk ke baris bernama implisit */
#grid > div:first-child {
grid-area: e-start / e-start / i-end / i-end;
background: orangered;
}
```
Jadi, saya sebenarnya tidak mendefinisikan `e-start` atau `e-end` dimana pun dalam kode.

Ini secara otomatis dihasilkan dari area grid bernama.

Misalnya, jika kamu memanggil area grid `teh` dan `manis`, maka garis bernama implisit kamu akan disebut `teh-start` dan
`manis-end`.

### Baris Bernama Eksplisit

CSS juga memungkinkan kamu menentukan nama sendiri pada baris grid. Ini disebut __baris bernama eksplisit__.

Kamu dapat membuat nama-nama ini ketika menentukan trek, lalu merujuknya seperti dengan __baris bernama implisit__:
```css
/* Menentukan nama grid area */
grid-template-areas:
"a b c"
"d e f"
"g h i";

/* Sekarang merujuk ke nama grid area */
#grid > div:first-child {
grid-area: e / e / i / i;
background: orangered;
}
```

### Kata Kunci `span`

Kata kunci `span` dapat digunakan untuk membuat item grid `span` beberapa trek.

{{< editor class="w-1/3" editor="1" >}}
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
  <div>11</div>
  <div>12</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr;
grid-gap: 1px;
}

#grid>div {
background-color: #9FA8DA;
color: white;
font-size: 1.9em;
padding: 10px;
}

#grid>div:first-child {
grid-area: 1 / 2 / span 2 / span 2;
background: #FFE082;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-span">
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
  <div>11</div>
  <div>12</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## CSS Syntax
```css
grid-area: <grid-line> [ / <grid-line> ]{0,3}
```

Dimana:
```css
<grid-line> =
  auto |
  <custom-ident> |
  [ <integer> && <custom-ident>? ] |
  [ span && [ <integer> || <custom-ident> ] ]
```
{{< editor class="w-1/3" editor="2" >}}
{{< editor-html >}}
```html
<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
  .item1 {
    grid-area: header;
  }

  .item2 {
    grid-area: menu;
  }

  .item3 {
    grid-area: main;
  }

  .item4 {
    grid-area: right;
  }

  .item5 {
    grid-area: footer;
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main right right'
      'menu footer footer footer footer footer';
    grid-gap: 10px;
    background-color: #009688;
    padding: 10px;
  }

  .grid-container>div {
    background-color: #B2DFDB;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="grid-container">
  <div class="item1">Header</div>
  <div class="item2">Menu</div>
  <div class="item3">Main</div>
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>
{{< /editor-preview >}}
{{< /editor >}}

## CSS Syntax
```css
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end | itemname;
```

# JavaScript Syntax
```js
object.style.gridArea="1 / 2 / span 2 / span 3"
```

{{< cssref default="auto / auto / auto / auto" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="grid-area: auto;" >}}
Kolom dan baris item grid dimulai dan diakhiri secara otomatis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-area" id="grid-area-auto">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Item</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Item</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Item</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Item</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-area: main;" >}}
Kamu dapat menggunakan nama area.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-area " id="grid-area-main">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Header</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Sidebar</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Footer</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>Target</strong></p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1px;
  }

  #grid>div {
    background-color: #A5D6A7;
    color: white;
    font-size: 1.9em;
    padding: 10px;
  }

  #grid>div:first-child {
    grid-area: 2 / 2 / 4 / 4;
    background: #FFE082;
  }

  #grid-span {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 1px;
  }

  #grid-span>div {
    background-color: #9FA8DA;
    color: white;
    font-size: 1.9em;
    padding: 10px;
  }

  #grid-span>div:first-child {
    grid-area: 1 / 2 / span 2 / span 2;
    background: #FFE082;
  }

  .item1 {
    grid-area: header;
  }

  .item2 {
    grid-area: menu;
  }

  .item3 {
    grid-area: main;
  }

  .item4 {
    grid-area: right;
  }

  .item5 {
    grid-area: footer;
  }

  .grid-container {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'menu main main main right right'
      'menu footer footer footer footer footer';
    grid-gap: 10px;
    background-color: #009688;
    padding: 10px;
  }

  .grid-container>div {
    background-color: #B2DFDB;
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }

  .grid-area {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 0;
  }

  #grid-area-auto {
    grid-area: auto;
  }

  #grid-area-main {
    grid-area: main;
  }

  #grid-area-main {
    grid-template-columns: 3fr 70fr;
    grid-template-rows: 50px 200px 50px;
    grid-template-areas: "header header header""sidebar main main""sidebar main main""sidebar footer footer";
  }

  #grid-area-main .block--alpha {
    grid-area: header;
  }

  #grid-area-main .block--beta {
    grid-area: sidebar;
  }

  #grid-area-main .block--purple {
    grid-area: footer;
  }

  #grid-area-main .block--pink {
    grid-row: main;
  }
</style>