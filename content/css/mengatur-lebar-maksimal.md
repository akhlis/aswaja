---
title: "Mengatur Lebar, Lebar Maksimal, dan Margin Otomatis"
description: "Mengatur Lebar, Lebar Maksimal, dan Margin Otomatis"
date: "2020-01-22T07:49:36+07:00"
slug: mengatur-lebar-maksimal-dan-margin-otomatis
weight: 190
authors:
- akhlis
---

Pada tutorial [pengertian display CSS](/css/pengertian-display-css/#daftar-nilai-display-secara-lengkap/) sudah dijelaskan bahwa elemen level _block_ akan menggunakan ruang penuh (lebar 100%) secara default.

Jika kamu menentukan __lebar__ pada elemen _level block_ kurang dari 100%, maka elemen tidak bisa meregang sampai ujung _container_.

Misalnya saya mengatur lebar menjadi 500px pada elemen `<div>` dengan _style_ berikut:
```css
div {
    width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
}
```
Tampilan di browser Chrome akan menjadi seperti ini:

![Lebar elemen 500px](/images/css/width/lebar-500px.png)

Perhatikan contoh di atas, elemen `div` akan menempati ruang bagian kiri, sedangkan ruang di sebelah kanan menjadi kosong.

Lalu bagaimana cara membuat elemen ini agar bisa berada di tengah _container_?

Untuk mengatur elemen _block_ agar bisa berada ditengah elemen _container_, kamu bisa menggunakan properti CSS `margin: auto`.

Sekarang saya akan menambahkan `margin: 0 auto` pada contoh di atas.

```css
div {
    width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
    margin: 0 auto;
}
```
Tampilan di browser Chrome akan menjadi seperti ini:

![Lebar elemen 500px](/images/css/width/lebar-500px-margin-auto.png)

Pada contoh di atas, posisi elemen div berada di tengah karena ruang yang tersisa digunakan sebagai nilai margin kiri dan kanan.

Kamu juga bisa mengatur margin kiri menjadi `auto` untuk menempatkan elemen div agar berada di sisi kanan elemen _container_.

Sekarang saya akan menambahkan `margin-left: auto` pada contoh di atas.

```css
div {
    width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
    margin-left: auto;
}
```

Tampilan di browser Chrome akan menjadi seperti ini:

![Lebar elemen 500px](/images/css/width/lebar-500px-margin-kiri-auto.png)

{{< note >}}
Permasalahan yang muncul pada contoh di atas yaitu, jika lebar jendela browser lebih kecil dari _500px_ (misalnya pada smartphone), maka browser akan menambahkan _scrollbar_ horizontal di bagian bawah elemen tersebut.
{{< /note >}}

Jadi seperti ini tampilan di browser Chrome:

![Lebar elemen 500px](/images/css/width/lebar-kurang-500px.png)

Solusinya, gunakan properti CSS `max-width` untuk membuat lebar elemen `div` menjadi responsive pada layar yang lebih kecil.

```css
div {
    max-width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
    margin: 0 auto;
}
```

Jadi seperti ini tampilan di browser Chrome:

![Lebar elemen 500px](/images/css/width/lebar-maksimal-500px.png)

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<div class="div-1">
  <p>Elemen &lt;div&gt; ini memiliki lebar 500px dan margin auto.</p>
</div>
<div class="div-2">
  <p>Elemen &lt;div&gt; ini memiliki lebar maksimal 500px dan margin auto.</p>
</div>
```
{{< /editor-html >}}
{{< editor-css >}}
```css
.div-1 {
    width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
    margin: 0 auto;
}
.div-2 {
    max-width: 500px;
    padding: 0.25em 1em;
    border: 2px solid green;
    margin: 0 auto;
}
```
{{< /editor-css >}}
{{< editor-preview >}}
<div class="w-full overflow-x-auto pb-6">
<div class="div-1">
  <p>Elemen &lt;div&gt; ini memiliki lebar 500px dan margin auto.</p>
</div>
<div class="div-2">
  <p>Elemen &lt;div&gt; ini memiliki lebar maksimal 500px dan margin auto.</p>
</div>
</div>
<style>
    .div-1 {
        width: 500px;
        padding: 0.25em 1em;
        border: 2px solid green;
        margin: 0 auto 2em;
    }
    .div-2 {
        max-width: 500px;
        padding: 0.25em 1em;
        border: 2px solid green;
        margin: 0 auto;
    }
</style>
{{< /editor-preview >}}
{{< /editor >}}
