---
title: flex-grow
description: flex-grow
date: "2019-11-12T10:34:07+07:00"
slug: flex-grow
css_collections:
- flexbox
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/flex-grow
caniuse: http://caniuse.com/#feat=flexbox
---
Properti CSS `flex-grow` merupakan sub-properti dari modul layout kotak [Flexbox](/css/flexbox).

Properti ini mendefinisikan kemampuan _item flex_ untuk mengembang jika diperlukan.

Properti `flex-grow` menerima value tanpa unit satuan (nilai tanpa px, rem, atau em) yang berfungsi sebagai pembentuk
proporsi lebar item flex.

Nilai ini menentukan jumlah ruang yang tersedia di dalam wadah fleksibel yang harus diambil item flex.

Misalnya, jika semua item memiliki `flex-grow` diatur ke 1, setiap elemen anak akan disetel ke ukuran yang sama di dalam
wadah.

Jika kamu memberi salah satu elemen anak tersebut dengan nilai 2, maka elemen anak itu akan memakan ruang dua kali lebih
banyak daripada yang lain.

## CSS Syntax
```css
flex-grow: number | initial | inherit;
```

#### Javascript Syntax
```js
object.style.flexGrow="5"
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="flex-grow: 0;" >}}
Elemen tidak akan mengembang meskipun ada ruang yang tersedia. Itu hanya akan menggunakan ruang yang dibutuhkan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex-grow-0 flex flex-row" id="flex-grow-0">
  <p class="bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Item 1</p>
  <p class="bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Item 2</p>
  <p class="bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Item 3</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-grow: 1;" >}}
Elemen akan tumbuh dengan faktor 1. Item ini akan mengisi ruang yang tersisa jika tidak ada item flexbox lain yang
memiliki nilai `flex-grow`.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex-grow flex flex-row" id="flex-grow-1">
  <p class="flex-grow bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Item 1</p>
  <p class="bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Item 2</p>
  <p class="bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Item 3</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="flex-grow: 2;" >}}
Karena nilai `flex-grow` relatif, perilakunya tergantung pada nilai saudara item flexbox.

Dalam contoh ini, sisa ruang dibagi menjadi 3:
- Sepertiga ke item ungu
- 2/3 ke item indigo
- Tidak ada yang masuk ke item biru, yang mempertahankan lebar awalnya
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example flex-grow-2 flex flex-row" id="flex-grow-1">
  <p class="flex-grow bg-purple-200 py-4 px-2 text-center text-sm rounded-sm">Item 1</p>
  <p class="flex-grow-2 bg-indigo-200 py-4 px-2 text-center text-sm rounded-sm">Item 2</p>
  <p class="bg-blue-200 py-4 px-2 text-center text-sm rounded-sm">Item 3</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="flex__wrap" id="container">
  <div class="flex__item" id="one">1</div>
  <div class="flex__item" id="two">2</div>
  <div class="flex__item" id="three">3</div>
  <div class="flex__item" id="four">4</div>
</div>
<div class="flex__controls">
  <table>
    <tr>
      <td>Item 1:</td>
      <td><input type="text" value="0"
          onkeyup="var item=document.getElementById('one'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
      </td>
    </tr>
    <tr>
      <td>Item 2:</td>
      <td><input type="text" value="0"
          onkeyup="var item=document.getElementById('two'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
      </td>
    </tr>
    <tr>
      <td>Item 3:</td>
      <td><input type="text" value="0"
          onkeyup="var item=document.getElementById('three'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
      </td>
    </tr>
    <tr>
      <td>Item 4:</td>
      <td><input type="text" value="0"
          onkeyup="var item=document.getElementById('four'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
      </td>
    </tr>
  </table>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.flex__wrap {
  margin: 150px auto;
  max-width: 800px;
  padding: 20px;
  display: flex;
  background-color: #594255;
  position: relative;
}

.flex__item {
  background-color: #fff;
  width: 100px;
  height: 100px;
  margin: 1%;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 5em;
  color: #594255;
}

.flex__controls {
  background-color: white;
  width: 150px;
  padding: 20px;
  line-height: 150%;
  position: absolute;
  top: -160px;
  right: 0;
  border: 1px solid #ddd;
}

.flex__controls input {
  width: 50px;
  padding-left: 10px;
  border: 1px solid #ddd;
}

.flex__controls input:focus {
  outline: none;
}
```
{{< /editor-css >}}
{{< editor-js >}}
```js
#tab1:checked~#content1,
#tab2:checked~#content2,
#tab3:checked~#content3,
#tab4:checked~#content4{
display: block;
padding: 20px;
background: #fff;
color: #999;
border-bottom: 2px solid #f0f0f0;
}
```
{{< /editor-js >}}
{{< editor-preview >}}
<div class="relative">
  <div class="flex__wrap" id="container">
    <div class="flex__item" id="one">1</div>
    <div class="flex__item" id="two">2</div>
    <div class="flex__item" id="three">3</div>
    <div class="flex__item" id="four">4</div>
  </div>
  <div class="flex__controls">
    <table>
      <tr>
        <td>Item 1:</td>
        <td><input type="text" value="0"
            onkeyup="var item=document.getElementById('one'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
        </td>
      </tr>
      <tr>
        <td>Item 2:</td>
        <td><input type="text" value="0"
            onkeyup="var item=document.getElementById('two'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
        </td>
      </tr>
      <tr>
        <td>Item 3:</td>
        <td><input type="text" value="0"
            onkeyup="var item=document.getElementById('three'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
        </td>
      </tr>
      <tr>
        <td>Item 4:</td>
        <td><input type="text" value="0"
            onkeyup="var item=document.getElementById('four'); item.style.WebkitFlexGrow = this.value; item.style.flexGrow = this.value;">
        </td>
      </tr>
    </table>
  </div>
</div>
{{< /editor-preview >}}
{{< /editor >}}



<style type="text/css">
  .flex__wrap {
    margin: 150px auto;
    max-width: 800px;
    padding: 20px;
    display: flex;
    background-color: #594255;
  }

  .flex__item {
    background-color: #fff;
    width: 100px;
    height: 100px;
    margin: 1%;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
    font-family: sans-serif;
    font-size: 5em;
    color: #594255;
  }

  .flex__controls {
    background-color: white;
    width: 150px;
    padding: 20px;
    line-height: 150%;
    position: absolute;
    top: -160px;
    right: 0;
    border: 1px solid #ddd;
  }

  .flex__controls input {
    width: 50px;
    padding-left: 10px;
    border: 1px solid #ddd;
  }

  .flex__controls input:focus {
    outline: none;
  }
</style>