---
title: grid
description: grid
date: "2019-11-12T10:34:07+07:00"
slug: grid
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid` adalah properti singkatan untuk berbagai properti grid.

Yaitu, `grid-template-rows grid-template-columns grid-template-areas grid-auto-rows grid-auto-columns` dan
`grid-auto-flow`.

Properti `grid` merupakan cara mudah untuk mengatur beberapa properti grid sekaligus dalam kode HTML.

Dengan cara ini, kamu tidak harus menulis setiap nama properti secara individual.

Properti grid menetapkan properti berikut:

#### Properti Grid Eksplisit
- [grid-template-rows](/cssref/grid-template-rows/)
- [grid-template-columns](/cssref/grid-template-columns/)
- [grid-template-areas](/cssref/grid-template-areas/)
#### Properti Grid Implisit
- [grid-auto-rows](/cssref/grid-auto-rows/)
- [grid-auto-columns](/cssref/grid-auto-columns/)
- [grid-auto-flow](/cssref/grid-auto-flow/)
#### Properti Gutter
- [grid-column-gap](/cssref/grid-column-gap/)
- [grid-row-gap](/cssref/grid-row-gap/)

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="grid__container">
  <header id="pageHeader" class="grid__header">Header</header>
  <article id="mainArticle" class="grid__article">Article</article>
  <nav id="mainNav" class="grid__nav">Nav</nav>
  <div id="siteAds" class="grid__ads">Ads</div>
  <footer id="pageFooter" class="grid__footer">Footer</footer>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.grid__container {
display: grid;
grid: "header header header"
"nav article ads"
"footer footer footer"
/ 20% 1fr 15%;
grid-gap: 10px;
}

.grid__header,
.grid__footer,
.grid__article,
.grid__nav,
.grid__ads {
padding: 20px;
background: #FFE082;
}

#pageHeader {
grid-area: header;
}

#pageFooter {
grid-area: footer;
}

#mainArticle {
grid-area: article;
}

#mainNav {
grid-area: nav;
}

#siteAds {
grid-area: ads;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="grid__container">
  <header id="pageHeader" class="grid__header">Header</header>
  <article id="mainArticle" class="grid__article">Article</article>
  <nav id="mainNav" class="grid__nav">Nav</nav>
  <div id="siteAds" class="grid__ads">Ads</div>
  <footer id="pageFooter" class="grid__footer">Footer</footer>
</div>
{{< /editor-preview >}}
{{< /editor >}}

{{< note >}}
Kamu hanya dapat mengatur properti eksplisit atau implisit dalam deklarasi __grid__ tunggal. Setiap subproperti yang
tidak kamu tentukan diatur ke nilai awalnya.
{{< /note >}}

## Contoh

Berikut ini contoh kode untuk menunjukkan cara kerja _shorthand_ properti `grid`.
```css
/* 3 columns, 'auto-flow' the rows */
grid: auto-flow 20vh / repeat(3, 30vw);

/* The above code is equivalent to this */
grid-template-rows: auto-flow 20vh;
grid-template-columns: repeat(3, 30vw);
grid-template-areas: none; /* Initial value */
grid-column-gap: 0; /* Initial value */
grid-row-gap: 0; /* Initial value */
```

### Menggunakan Fungsi `repeat()`

Kamu dapat menggunakan fungsi `repeat()` untuk mengulangi definisi baris atau kolom sebanyak yang diperlukan.

Parameter pertama menentukan berapa banyak kemunculan definisi yang harus ditampilkan, dan parameter kedua menentukan
daftar trek.

#### 3 Kolom

Dalam contoh ini, saya menggunakan fungsi `repeat()` untuk menyatakan berapa banyak kolom yang harus ditampilkan, dan
saya menerapkan `auto-flow` ke baris.

Menerapkan nilai `auto-flow` ke baris sama dengan menggunakan `grid-auto-flow: row`.
```css
grid: auto-flow 20vh / repeat(3, 30vw);
```
Hasilnya grid berisi 3 kolom, dan memiliki baris sebanyak yang dibutuhkan untuk memenuhi semua item grid.

{{< editor class="w-1/3" editor="2" >}}
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
grid: auto-flow 20% / repeat(3, 30%);
grid-gap: 10px;
}

#grid>div {
background-color: #80CBC4;
color: white;
font-size: 4vw;
padding: 10px;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-card">
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

#### 3 Baris

Contoh ini sama dengan contoh di atas, tetapi saya menentukan berapa banyak baris yang dimiliki grid, dan saya mengatur
aliran otomatis pada kolom.

```css
grid: repeat(3, 20vh) / auto-flow;
```

{{< editor class="w-1/3" editor="3" >}}
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
grid: repeat(3, 20vh) / auto-flow;
grid-gap: 10px;
}

#grid>div {
background-color: #80CBC4;
color: white;
font-size: 4vw;
padding: 10px;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-row">
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
grid: none | grid-template-rows / grid-template-columns | grid-template-areas | grid-template-rows / [grid-auto-flow]
grid-auto-columns | [grid-auto-flow] grid-auto-rows / grid-template-columns | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.grid="250px / auto auto auto"
```

{{< cssref default="none none none auto auto row" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value value="grid: &quot;header header header&quot; 50px &quot;sidebar main main&quot; 200px / 100px auto;" >}}
Kamu dapat menggunakannya sebagai `grid-template` dengan mengatur semua baris, kolom, dan area eksplisit.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid p-0" id="grid-header-header-header-50px-sidebar-main-main-200px--100px-auto">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Header</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Sidebar</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4">Main</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4">Other</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid: 200px 100px / auto-flow 30%;" >}}
Kamu dapat menggabungkan `grid-template-rows` dengan `grid-auto-columns`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid p-0" id="grid-200px-100px--auto-flow-30">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>6.</strong> Six</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid: auto-flow 50px / 200px 100px;" >}}
Kamu dapat menggabungkan `grid-auto-rows` dengan `grid-template-columns`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid p-0" id="grid-auto-flow-50px--200px-100px">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>6.</strong> Six</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .grid__container {
    display: grid;
    grid: "header header header"
      "nav article ads"
      "footer footer footer"
      / 20% 1fr 15%;
    grid-gap: 10px;
  }

  .grid__header,
  .grid__footer,
  .grid__article,
  .grid__nav,
  .grid__ads {
    padding: 20px;
    background: #FFE082;
  }

  #pageHeader {
    grid-area: header;
  }

  #pageFooter {
    grid-area: footer;
  }

  #mainArticle {
    grid-area: article;
  }

  #mainNav {
    grid-area: nav;
  }

  #siteAds {
    grid-area: ads;
  }

  #grid-card {
    display: grid;
    grid: auto-flow 20% / repeat(3, 30%);
    grid-gap: 10px;
  }

  #grid-card>div,
  #grid-row>div {
    background-color: #80CBC4;
    color: white;
    font-size: 2.2em;
    padding: 10px;
  }

  #grid-row {
    display: grid;
    grid: repeat(3, 20vh) / auto-flow;
    grid-gap: 10px;
  }


  #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto {
    grid: "header header header"50px "sidebar main main"200px / 100px auto;
  }

  #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--alpha {
    grid-area: header;
  }

  #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--beta {
    grid-area: sidebar;
  }

  #grid-header-header-header-50px-sidebar-main-main-200px--100px-auto .block--pink {
    grid-area: main;
  }

  #grid-200px-100px--auto-flow-30 {
    grid: 200px 100px / auto-flow 30%;
  }

  #grid-auto-flow-50px--200px-100px {
    grid: auto-flow 50px / 200px 100px;
  }
</style>