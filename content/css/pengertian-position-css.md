---
title: "Pengertian Position pada CSS"
description: "Pengertian Position pada CSS"
date: "2020-01-22T07:49:36+07:00"
slug: pengertian-position-css
weight: 200
authors:
- akhlis
---

Properti CSS `position` digunakan untuk menentukan posisi elemen dalam halaman website.

Dengan properti ini, kamu bisa memilih apakah elemen diposisikan sesuai aliran normal halaman (default), atau digeser posisinya.

Kamu juga bisa memposisikannya relatif terhadap elemen lain pada halaman, atau memposisikannya relatif terhadap _viewport_.

Semua elemen secara default diposisikan "static" pada halaman.

Posisi statis menentukan posisi elemen dalam aliran normal halaman.

Elemen disebut sebagai _positioned element_ jika nilai `position` diubah dari `static` menjadi salah satu nilai: `relative`, `absolute`, `fixed`, `sticky`.

Selain 5 nilai di atas, 2 nilai `position` baru juga ditambahkan di CSS3: `page` dan `center`.

Setelah elemen diposisikan (diberi nilai selain `static`), posisinya pada halaman ditentukan menggunakan properti _offset_: `top`, `right`, `bottom`, dan `left`.

Properti _offset_ hanya berfungsi pada elemen yang diposisikan, jadi pada elemen "static" tidak akan memiliki efek.

{{< toc >}}

## Position: static

Posisi "static" merupakan nilai default elemen HTML.

Elemen dengan posisi _static_ tidak terpengaruh oleh properti _offset_ seperti `top`, `right`, `bottom`, dan `left`.

Elemen dengan `position: static` tidak diposisikan secara khusus dan hanya menurut aliran normal dalam halaman.

```css
div {
    position: static;
    width: 300px;
    height: 100px;
    left: 32px;
    top: 32px;
    background: #b9f6ca;
}
```

<div class="w-300px h-100px bg-green-A100 text-sm left-8 top-8 z-20 p-4">
<span>position: static</span><br>
<span>left: 32px (tidak memiliki efek)</span><br>
<span>top: 32px (tidak memiliki efek)</span>
</div>
<p class="text-sm pb-8 border-b border-solid border-gray-300">Adipisicing in occaecat sit amet tempor irure dolore ad. Ad labore nostrud officia consectetur non magna aliqua eiusmod consequat. Sunt Lorem quis id amet laboris incididunt. Ad aliquip excepteur ullamco cupidatat ipsum. Est cillum minim ut cupidatat id nisi cillum pariatur esse quis et voluptate. Reprehenderit fugiat sint laboris tempor excepteur adipisicing exercitation reprehenderit quis. Ullamco sit veniam do id sint in cupidatat laboris Lorem elit esse tempor.</p>

Pada contoh di atas, meskipun elemen "static" diberi properti `left: 32px` dan `top: 32px`, posisinya tetap tidak bergeser dari tempat aslinya.

## Position: relative

Elemen yang diposisikan dengan "relative" (`position: relative`) menentukan posisi elemen yang didalamnya dan juga menentukan posisinya sendiri.

Sehingga kamu bisa menggeser atau mendorong elemen dari posisi semula menggunakan properti _offset_ (`top`, `right`, `bottom`, `left`).

Elemen "relative" akan bereaksi terhadap sifat-sifat berikut:
- [top](/cssref/top/)
- [bottom](/cssref/bottom/)
- [left](/cssref/left/)
- [right](/cssref/right/)
- [z-index](/cssref/z-index/)

```css
div {
    position: relative;
    width: 300px;
    height: 100px;
    left: 32px;
    top: 32px;
    background: #b9f6ca;
}
```

<div class="w-300px h-100px border-2 border-dashed border-green-A100">
<div class="w-300px h-100px bg-green-A100 text-sm relative left-8 top-8 z-20 p-4">
<span>position: relative</span><br>
<span>left: 32px</span><br>
<span>top: 32px</span>
</div>
</div>
<p class="text-sm pb-8 border-b border-solid border-gray-300">Adipisicing in occaecat sit amet tempor irure dolore ad. Ad labore nostrud officia consectetur non magna aliqua eiusmod consequat. Sunt Lorem quis id amet laboris incididunt. Ad aliquip excepteur ullamco cupidatat ipsum. Est cillum minim ut cupidatat id nisi cillum pariatur esse quis et voluptate. Reprehenderit fugiat sint laboris tempor excepteur adipisicing exercitation reprehenderit quis. Ullamco sit veniam do id sint in cupidatat laboris Lorem elit esse tempor.</p>

Perhatikan elemen "div" di atas, setelah diposisikan sebagai _relative_ maka elemen tersebut akan bergeser ke kanan 32px dan ke bawah 16px.

Posisi relative pada elemen yang membuatnya bergeser dari posisi semula tidak berpengaruh pada konten lain pada halaman web.

Sehingga posisi baru elemen relative ini akan bertumpukan dengan elemen lain disekitarnya seperti contoh di atas.

Elemen "relative" juga akan dijadikan sebagai titik acuan elemen lain dengan posisi "absolute".

{{< preview >}}
<div class="pb-2" id="position-relative">
  <div class="w-300px h-200px border-2 border-dashed border-green-A100">
  <div class="w-300px h-200px relative text-sm leading-tight bg-green-A100 rounded-sm p-4 left-8 top-8 z-20">
  <span>position: relative</span><br>
  <span>left: 32px</span><br>
  <span>top: 32px</span>
    <div class="w-150px absolute text-sm leading-tight bg-amber-100 rounded-sm p-4 top-4 right-3">Elemen anak<br>position:
      absolute<br>right: 5px<br>top: 5px</div>
  </div>
  </div>
  <p class="text-sm">Adipisicing in occaecat sit amet tempor irure dolore ad. Ad labore nostrud officia consectetur non magna aliqua eiusmod consequat. Sunt Lorem quis id amet laboris incididunt. Ad aliquip excepteur ullamco cupidatat ipsum. Est cillum minim ut cupidatat id nisi cillum pariatur esse quis et voluptate. Reprehenderit fugiat sint laboris tempor excepteur adipisicing exercitation reprehenderit quis. Ullamco sit veniam do id sint in cupidatat laboris Lorem elit esse tempor.</p>
</div>
{{< /preview >}}

## Position: absolute

Elemen dengan `position: absolute` akan memposisikan dirinya terhadap elemen "relative" induk yang terdekat"

Elemen "absolute" akan bereaksi terhadap sifat-sifat berikut:
- [top](/cssref/top/)
- [bottom](/cssref/bottom/)
- [left](/cssref/left/)
- [right](/cssref/right/)
- [z-index](/cssref/z-index/)

Posisi kordinat asal elemen "absolute" yaitu kiri atas seperti contoh berikut:

Saya membuat elemen _container_ dengan warna hijau dan diposisikan sebagai elemen "relative".

Dan di dalam elemen tersebut saya membuat elemen baru dengan warna orange dan diposisikan sebagai elemen "absolute".

```html
<div class="box__green">
    <div class="box__amber">Elemen anak<br>position: absolute</div>
</div>
```

```css
.box__green {
    position: relative;
    width: 300px;
    height: 200px;
    background: #b9f6ca;
}
.box__amber {
    position: absolute;
    width: 150px;
    background: #ffecb3;
}
```

{{< preview >}}
<div class="w-300px h-200px relative text-sm leading-tight bg-green-A100 rounded-sm">
<div class="w-150px absolute text-sm leading-tight bg-amber-100 rounded-sm p-4">Elemen anak<br>position: absolute</div>
</div>
{{< /preview >}}

Sekarang saya akan memindahkan posisi elemen "absolute" dengan menambahkan _offset_  `bottom: 16px` dan `right: 32px`

```css
.box__amber {
    position: absolute;
    width: 150px;
    background: #ffecb3;
    bottom: 16px;
    right: 32px;
}
```

{{< preview >}}
<div class="w-300px h-200px relative text-sm leading-tight bg-green-A100 rounded-sm">
<div class="w-150px absolute text-sm leading-tight bg-amber-100 rounded-sm p-4 bottom-4 right-8">Elemen anak<br>position:
    absolute<br>bottom: 16px<br>right: 32px</div>
</div>
{{< /preview >}}

Dengan menentukan _offset_ pada elemen "absolute", maka elemen ini juga akan bertumpuk dengan konten lain yang ada di dalam elemen "relative" tanpa mempengaruhi posisi elemen tersebut.

```html
<div class="box__green">
    <p>Laboris do pariatur veniam aute esse occaecat. Laborum labore id non minim aliqua non consequat cupidatat quis sunt duis veniam veniam velit. Nisi eu duis voluptate enim ipsum anim fugiat Lorem pariatur officia. Enim in minim adipisicing commodo. Veniam ex cillum nostrud ea nostrud est ad consectetur velit et et cillum eu elit.</p>
    <div class="box__amber">Elemen anak<br>position: absolute</div>
</div>
```

{{< preview >}}
<div class="w-300px h-200px relative text-sm leading-tight bg-green-A100 rounded-sm p-4"><p>Laboris do pariatur veniam aute esse occaecat. Laborum labore id non minim aliqua non consequat cupidatat quis sunt duis veniam veniam velit. Nisi eu duis voluptate enim ipsum anim fugiat Lorem pariatur officia. Enim in minim adipisicing commodo. Veniam ex cillum nostrud ea nostrud est ad consectetur velit et et cillum eu elit.</p>
<div class="w-150px absolute text-sm leading-tight bg-amber-100 rounded-sm p-4 bottom-4 right-8">Elemen anak<br>position:
    absolute<br>bottom: 16px<br>right: 32px</div>
</div>
{{< /preview >}}

## Position: fixed

Elemen dengan posisi tetap (`position: fixed`) adalah elemen yang diposisikan relatif terhadap _viewport_.

Elemen "fixed" ini memiliki perilaku mirip dengan elemen "absolute" yang tidak mengikuti aliran halaman dan tidak berpengaruh pada tata letak elemen lain.

Bedanya, jika elemen "absolute" diposisikan relatif terhadap elemen "relative" induk yang terdekat.

Maka elemen "fixed" ini diposisikan terhadap _viewport_ dan tidak terpengaruh oleh pengguliran.

Menggulirkan halaman ke bawah tidak akan membuat elemen ini menggulir ke atas.

Elemen "fixed" berada di area _viewport_ dan letaknya diatur menggunakan properti _offset_ (`top`, `right`, `bottom`, `left`).

Penentuan posisi "fixed" biasanya digunakan untuk menjaga elemen tertentu agar selalu terlihat, seperti navigasi menu.

Elemen "fixed" akan bereaksi terhadap sifat-sifat berikut:
- [top](/cssref/top/)
- [bottom](/cssref/bottom/)
- [left](/cssref/left/)
- [right](/cssref/right/)
- [z-index](/cssref/z-index/)

{{< preview >}}
<div class="button-fixed flex mt-4 mb-4">
  <a class="button example-fixed-toggle text-white text-sm font-openSans py-2 bg-green-A400 rounded-sm hover:no-underline px-6"
    data-slug="posisi-fixed"></a>
</div>
<div class="relative bg-gray-200 h-200px text-sm p-3" id="posisi-fixed">
  <p>Ancestor container</p>
  <div class="block--alpha w-300px absolute top-4 right-8 text-sm leading-tight bg-green-A100 rounded-sm p-4 mt-0"><strong>Elemen target<br>position:
      fixed<br>right: 32px<br>top: 16px</strong>
    <div class="block--pink absolute right-5px top-5px text-sm leading-tight bg-amber-100 rounded-sm p-4">Elemen anak<br>position:
      absolute<br>right: 5px<br>top: 5px</div>
  </div>
</div>
{{< /preview >}}

## Position: sticky

Elemen dengan posisi "sticky" (`position: sticky`) diposisikan sebagai peralihan dari elemen "relative" dan "fixed".

Elemen ini diperlakukan sebagai elemen yang relatif sampai pada titik gulir tertentu, setelah itu diperlakukan sebagai elemen "fixed".

Contoh:
```css
.element {
    position: sticky;
    top: 70px;
}
```

{{< preview >}}
<div class="relative h-500px overflow-y-auto">
<p class="mb-6">Try to <b>scroll</b> inside this frame to understand how sticky positioning works.</p>
<p class="mb-6">Note: IE/Edge 15 and earlier versions do not support sticky position.</p>
<div class="sticky text-sm leading-tight bg-amber-100 rounded-sm p-4 top-0">position: sticky<br>top: 0;</div>
<div class="sticky__text text-sm leading-tight bg-green-A100 rounded-sm p-4">
<p class="mb-6">In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
<p class="mb-6">Scroll back up to remove the stickyness</p>
<p class="mb-6">Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
<p class="mb-6">Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
</div>
</div>
{{< /preview >}}

Elemen di atas akan berperilaku seperti memiliki posisi relatif sampai viewport mencapai titik gulir yaitu 0px dari atas _viewport_.

Efek "sticky" ini biasanya dibuat menggunakan JavaScript. Namun setelah nilai "sticky" sudah didukung sebagai nilai properti CSS, kamu bisa membuatnya cukup menggunakan CSS saja.

Satu hal yang harus diingat! kamu perlu menentukan titik "ambang" untuk elemen sticky menggunakan salah satu properti _offset_ (`top`, `right`, `bottom`, `left`).

Jika titik ambang ini tidak ditentukan, maka efek sticky tidak akan berfungsi. Dan elemen akan berperilaku persis seolah-olah memiliki posisi relatif.




<style type="text/css">
  #posisi-fixed.is-fixed .block--alpha {
    position: fixed;
    z-index: 100;
  }

  .button-fixed .button:before {
    content: "▶ Aktifkan posisi Fixed"
  }

  .button-fixed .button:first-letter {
    margin-right: 1px;
  }

  .button-fixed .button.is-enabled {
    background: red;
  }

  .button-fixed .button.is-enabled:before {
    content: "￭ Nonaktifkan posisi fixed"
  }

  .sticky__text {
    padding-bottom: 3000px;
  }
</style>

<script>
  // Property: Enable fixed
  var $fixedButtons = document.querySelectorAll('.example-fixed-toggle');

  Array.prototype.forEach.call($fixedButtons, function ($fixedButton, index) {
    var slug = $fixedButton.dataset.slug;
    var $target = document.getElementById(slug);

    $fixedButton.addEventListener('click', function (event) {
      this.classList.toggle('is-enabled');
      $target.classList.toggle('is-fixed');
    });
  });
</script>
