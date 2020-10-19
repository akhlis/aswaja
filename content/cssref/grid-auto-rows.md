---
title: grid-auto-rows
description: grid-auto-rows
date: "2019-11-12T10:34:07+07:00"
slug: grid-auto-rows
css_collections:
- css-grid
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-rows
caniuse: http://caniuse.com/#feat=css-grid
---

Properti CSS `grid-auto-rows` menentukan nama-nama baris dan melacak fungsi-fungsi ukuran dari baris grid yang dibuat
secara implisit.

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
grid-template-columns: auto auto auto;
grid-template-rows: 200px;
grid-auto-rows: 80px;
grid-gap: 10px;
}
#grid > div {
background-color: #FFCC80;
color: white;
font-size: 1.9em;
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
</div>
{{< /editor-preview >}}
{{< /editor >}}

Properti `grid-auto-rows` hanya berurusan dengan rows yang dibuat secara implisit.

Ini adalah baris yang belum secara eksplisit berukuran dengan properti `grid-template-rows`.

Jika kamu memeriksa kode dari contoh di atas:
```css
grid-template-columns: auto auto auto;
grid-template-rows: 200px;
grid-auto-rows: 80px;
```
Kamu bisa melihat bahwa hanya baris pertama yang secara eksplisit berukuran sesuai properti `grid-template-rows`.

Dua baris lainnya dibuat secara implisit, dan oleh karena itu mereka diukur menurut properti `grid-auto-rows`.

{{< note >}}
CSS memiliki konsep "explicit grid" dan "implicit grid". "Explicit grid" mengacu pada grid yang kamu tentukan dengan
properti `grid-template-rows`, `grid-template-columns`, dan `grid-template-areas`.

_Implicit grid_ dibuat setiap kali kamu menambahkan item grid yang pas di luar _grid explicit_.

Misalnya, kamu mungkin hanya menentukan 2 baris dan 3 kolom tetapi ada lebih banyak item kotak daripada yang bisa masuk
ke dalamnya.

Dalam hal ini, untuk memenuhi item grid tambahan, wadah grid menghasilkan trek _implicit grid_ dengan menambahkan garis
_implicit grid_ ke grid.
{{< /note >}}

## Multiple Values
Properti `grid-auto-rows` menerima beberapa nilai.

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
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
#grid {
display: grid;
grid-auto-rows: 40px 60px 80px;
grid-gap: 1px;
}
#grid > div {
background-color: #CE93D8;
color: white;
padding: 10px;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div id="grid-1">
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

## CSS Syntax
```css
grid-auto-columns: auto | max-content | min-content | length;
```

#### JavaScript Syntax
```js
object.style.gridAutoRows="60px"
```

{{< cssref default="auto" inherited="tidak" animatable="ya" version="CSS Grid Layout Module Level 1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="default" value="grid-auto-rows: auto;" >}}
Baris yang dibuat dengan implikasi memiliki ukuran otomatis.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-rows " id="grid-auto-rows-auto">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4"><strong>1.</strong> One</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4"><strong>2.</strong> Two</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4"><strong>3.</strong> Three</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4"><strong>4.</strong> Four</p>
  <p class="block block--orange text-sm bg-orange-100 rounded-sm p-4"><strong>5.</strong> Five</p>
  <p class="block block--purple text-sm bg-purple-100 rounded-sm p-4"><strong>6.</strong> Six</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="grid-auto-rows: 100px;" >}}
Di sini kami menggabungkan `grid-template-areas: "header header header" "sidebar main main" "footer footer footer"` dengan `grid-template-rows: 50px 200px`.

Dalam situasi ini, `grid-template-areas` mendefinisikan __3 baris__, sedangkan `grid-auto-rows` hanya mendefinisikan __2 ketinggian baris__.

Akibatnya, tinggi baris ketiga (footer) mengambil nilainya dari properti `grid-auto-rows: 100px`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example grid-auto-rows " id="grid-auto-rows-100px">
  <p class="block block--alpha text-sm bg-green-100 rounded-sm p-4">Header</p>
  <p class="block block--beta text-sm bg-blue-100 rounded-sm p-4">Sidebar</p>
  <p class="block block--pink text-sm bg-pink-100 rounded-sm p-4">Main</p>
  <p class="block block--yellow text-sm bg-yellow-100 rounded-sm p-4">Footer: 100px high</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  #grid {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 200px;
    grid-auto-rows: 80px;
    grid-gap: 10px;
  }

  #grid>div {
    background-color: #FFCC80;
    color: white;
    font-size: 1.9em;
    padding: 10px;
  }

  #grid-1 {
    display: grid;
    grid-auto-rows: 40px 60px 80px;
    grid-gap: 1px;
  }

  #grid-1>div {
    background-color: #CE93D8;
    color: white;
    padding: 10px;
  }

  .grid-auto-rows {
    display: grid;
    padding: 0;
  }

  #grid-auto-rows-auto {
    grid-auto-rows: auto;
  }

  #grid-auto-rows-100px {
    grid-auto-rows: 100px;
  }

  #grid-auto-rows-100px {
    grid-template-areas: "header header header""sidebar main main""footer footer footer";
    grid-template-rows: 50px 200px;
  }

  #grid-auto-rows-100px .block--alpha {
    grid-area: header;
  }

  #grid-auto-rows-100px .block--beta {
    grid-area: sidebar;
  }

  #grid-auto-rows-100px .block--pink {
    grid-area: main;
  }

  #grid-auto-rows-100px .block--yellow {
    grid-area: footer;
  }
</style>