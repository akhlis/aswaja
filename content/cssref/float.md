---
title: float
description: float
date: "2019-11-12T10:34:07+07:00"
slug: float
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/float
---

Properti `float` adalah properti penentuan posisi yang digunakan untuk mengubah posisi elemen dalam halaman web, dan
mendorongnya ke kiri atau ke kanan wadahnya.

Elemen tetap dalam aliran alami halaman, tetapi didorong ke salah satu arah di dalam wadahnya.

Konten yang tersisa dalam aliran alami halaman akan membungkus elemen melayang (_float_).

Elemen _float_ adalah elemen yang nilai properti apatnya disetel ke nilai selain `none`.

Konten yang mengikuti elemen _float_ akan membungkus di kedua sisi elemen, bukan di kedua sisi.

Elemen yang melayang ke kiri memiliki konten yang membungkus di sisi kanannya, dan elemen yang melayang di sebelah kanan
memiliki konten yang membungkus di sisi kiri.

Suatu elemen dapat diapungkan ke kanan atau ke kiri. Dan juga bisa mewarisi nilai _float_ dari wadah induknya.

Contoh penggunaan _float_ bisa dijumpai pada desain layout blog yang menempatkan gambar pada sebelah kiri, kemudian
diikuti teks di sisi kanannya seperti pada preview berikut:

{{< preview >}}
<div class="bg-gray-200 p-4">
  <img class="float-left mr-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh
    nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque
    ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque
    fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam
    consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec
    varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec
    sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula
    felis.</p>
</div>
{{< /preview >}}

Pada contoh diatas, elemen `img` saya beri properti CSS `float: left;`
```css
img {
float: left;
}
```

__Normalnya__, jika elemen `img` tidak ditentukan dengan properti `float`, akan menggunakan nilai default `float:none;`.

Jadi elemen `img` tidak akan melayang di sebelah kiri, dan elemen teks akan mengikuti di bagian bawah gambar.

Seperti preview berikut:

{{< preview >}}
<div class="bg-gray-200 p-4">
  <img class="float-none mb-4 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula. Etiam vel nibh
    nec nisi euismod mollis ultrices condimentum velit. Proin velit libero, interdum ac rhoncus sit amet, pellentesque
    ac turpis. Quisque ac luctus turpis, vel efficitur ante. Cras convallis risus vel vehicula dapibus. Donec eget neque
    fringilla, faucibus mi quis, porttitor magna. Cras pellentesque leo est, et luctus neque rutrum eu. Aliquam
    consequat velit sed sem posuere, vitae sollicitudin mi consequat. Mauris eget ipsum sed dui rutrum fringilla. Donec
    varius vehicula magna sit amet auctor. Ut congue vehicula lectus in blandit. Vivamus suscipit eleifend turpis, nec
    sodales sem vulputate a. Curabitur pulvinar libero viverra, efficitur odio eu, finibus justo. Etiam eu vehicula
    felis.</p>
</div>
{{< /preview >}}

## Yang harus Kamu pahami tentang Properti `float`.
Ada aturan tertentu yang mengatur perilaku _float_ di CSS. Berikut ini aturan yang ditentukan dalam spesifikasi untuk
elemen _float_:

- Tepi terluar elemen _float_ yaitu, tepi area margin (jika ada). Jika tidak ada, tepi batas elemen tidak dapat melebihi
tepi blok yang mengandungnya. Ini berlaku untuk elemen yang melayang ke kiri dan elemen yang melayang ke kanan.
- Elemen yang melayang ke kiri akan diletakkan sejauh mungkin ke kiri, elemen yang melayang ke kanan akan diletakkan
sejauh mungkin ke kanan.
- Elemen _float_ akan didorong ke kiri (atau kanan) sampai ujung terluarnya menyentuh tepi blok yang mengandung atau
tepi elemen _float_ lain pada halaman.
- Elemen _float_ harus ditempatkan setinggi mungkin dalam aliran halaman. Ketika teks dililitkan di sekitar gambar,
misalnya seperti pada contoh diatas, teks dimulai di tepi atas gambar dan terus kebawah sampai mengalir normal dibawah
gambar. Tepi paling atas dari elemen _float_ tidak dapat melebihi tepi atas dari blok yang mengandungnya.
- Tepi margin atas elemen _float_ mungkin tidak lebih tinggi dari margin atas elemen level-block atau elemen _float_
yang dihasilkan sebelumnya dalam dokumen sumber.
- Jika lebar elemen _float_ melebihi lebar ruang yang tersedia, itu akan digeser ke bawah ke baris baru.
- Ketika elemen inline seperti gambar melayang, itu menjadi elemen tingkat blok. Yaitu, nilai properti tampilan menjadi
blok, bahkan jika nilai tampilan elemen diatur sebaliknya.
- Margin elemen _float_ tidak runtuh dengan margin elemen sekitarnya. Untuk informasi lebih lanjut tentang menyusutkan
margin, silakan merujuk ke entri properti [margin](/cssref/margin)
- Isi konten float ditumpuk seolah-olah float menghasilkan konteks susun baru, kecuali bahwa setiap elemen yang
benar-benar membuat konteks susun baru ambil bagian dalam konteks susun induk orangtua float. Float dapat tumpang tindih
dengan kotak lain dalam aliran normal.

Selain perilaku di atas, satu hal penting yang perlu diketahui tentang CSS _float_ adalah bagaimana mereka mempengaruhi
wadah induknya.

Ketika sebuah elemen melayang, tinggi wadahnya _collapses_ agar sesuai dengan ketinggian konten yang tersisa di halaman
selain elemen yang melayang.

Ini berarti bahwa elemen melayang tidak berkontribusi pada ketinggian wadahnya lagi.

Jadi, jika sebuah wadah tidak berisi apa-apa selain elemen _float_, tingginya akan menjadi nol, seolah-olah tidak ada
konten yang tersedia di dalamnya.

{{< preview >}}
<div class="bg-gray-200 py-4 px-4">
  <img class="float-left mr-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>
<div class="bg-gray-200 py-4 px-4 mt-12">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>
{{< /preview >}}

Fenomena ini memiliki __efek samping__: konten apa pun yang muncul setelah wadah yang _collapse_ akan tumpang tindih
dengan elemen melayang (kotak gambar dalam contoh di atas).

Batas-batas wadah kedua dikaburkan oleh elemen melayang dari wadah yang datang sebelumnya.

Kamu mungkin juga memperhatikan bahwa elemen float dari wadah pertama memengaruhi aliran konten di wadah kedua juga.

## Teknik untuk Menghapus Float

Perhatikan lagi contoh diatas yang memiliki elemen _collapse_.

Kamu perlu membersihkan wadah elemen float agar mengembang sesuai dengan ketinggiannya dan mencegahnya tumpang tindih
dengan konten lain pada halaman.

Cara yang paling sering digunakan yaitu dengan metode _clearfix_ (menggunakan CSS pseudo selector `:after`) untuk
menghapus float.

```css
.clearfix:after {
content: "";
visibility: hidden;
display: block;
height: 0;
clear: both;
}
```

Cara ini akan menerapkan sedikit konten, disembunyikan dari tampilan, setelah elemen induk yang menghapus float.

#### Setelah diberi `clearfix`

{{< preview >}}
<div class="clearfix bg-gray-200 py-4 px-4">
  <img class="float-left mr-4 my-2 h-32"
    src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>
<div class="bg-gray-200 py-4 px-4 mt-4">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis et lorem sit amet vehicula.</p>
</div>
{{< /preview >}}

## CSS Syntax
```css
float: none | left | right | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.cssFloat="left"
```

{{< cssref default="none" inherited="tidak" animatable="tidak" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="float: none;" >}}
Menghapus nilai `float` yang didefinisikan sebelumnya. Elemen akan tetap berada di aliran alami halaman.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example float text-sm p-4" id="float-none">
  <p class="block bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit.</p>
  <p class="block float-none bg-green-200 rounded-sm p-4">Target element</p>
  <p class="block bg-grey-100 rounded-sm p-4"">Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="float: left;" >}}
Memindahkan elemen ke sisi kiri wadahnya. Elemen-elemen berikutnya akan membungkus dan mengisi ruang yang tersisa di sebelah kanan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example float text-sm p-4" id="float-left">
  <p class="block bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit.</p>
  <p class="block float-left bg-green-200 rounded-sm p-4">Target element</p>
  <p class="block bg-grey-100 rounded-sm p-4"">Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="float: right;" >}}
Memindahkan elemen ke sisi kanan wadahnya. Elemen-elemen berikut akan membungkusnya dan mengisi ruang yang tersisa di sebelah kiri.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example float text-sm p-4" id="float-right">
  <p class="block bg-grey-100 rounded-sm p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar,
    at pulvinar felis blandit.</p>
  <p class="block float-right bg-green-200 rounded-sm p-4">Target element</p>
  <p class="block bg-grey-100 rounded-sm p-4"">Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Pellentesque
    interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat.
  </p>
</div>
{{< /property-preview >}}
{{< /property >}}