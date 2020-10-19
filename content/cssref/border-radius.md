---
title: border-radius
description: border-radius
date: "2019-11-12T10:34:07+07:00"
slug: border-radius
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-radius
---

Properti CSS `border-radius` digunakan untuk membulatkan sudut-sudut suatu elemen.

Properti ini merupakan singkatan dari properti: `border-top-left-radius`, `border-top-right-radius`,
`border-bottom-right-radius`, dan `border-bottom-left-radius`.

Properti `border-radius` dapat mengambil satu hingga empat nilai, atau delapan nilai yang dipisahkan oleh garis miring
`/`, dengan nilai satu hingga empat di setiap sisi garis miring.

## CSS Syntax
```css
border-radius: 1-4 length | % / 1-4 length | % | initial | inherit;
```

#### Javascript Syntax
```js
object.style.borderRadius="25px"
```

1. #### Jika tidak ada garis miring, maka: dapat mengambil satu, dua, tiga, atau empat nilai.

```css
border-radius: [radius value] [radius value]? [radius value]? [radius value]?; // '?' indicates value is optional
```
- Jika empat nilai diberikan, maka mereka menentukan radius masing-masing dari keempat sudut secara merata: yaitu, nilai
pertama akan menentukan radius x dan y dari sudut kiri atas, sehingga akan menjadi kurva lingkaran. Nilai kedua akan
menentukan radius untuk sudut kanan atas, nilai ketiga akan menentukan radius untuk sudut kanan bawah, dan nilai keempat
akan menentukan radius sudut kiri bawah.

- Jika tiga nilai diberikan, yang pertama menentukan radius sudut kiri atas, yang kedua menentukan radius sudut
kanan-atas dan kiri bawah, dan yang ketiga menentukan radius sudut kanan bawah.

- Jika dua nilai diberikan, maka yang pertama menentukan radius sudut kiri atas dan kanan bawah, dan nilai kedua
menentukan radius sudut kanan atas dan sudut kiri bawah.

- Jika satu nilai diberikan, maka ia menentukan radius keempat sudut secara merata.
Misalnya, berikut ini:
```css
border-radius: 1em 3em 2em;
```
Sama seperti:
```css
border-top-left-radius: 1em;
border-top-right-radius: 3em;
border-bottom-right-radius: 2em;
border-bottom-left-radius: 3em;
```

Pada contoh di atas, ketika tidak ada garis miring yang digunakan, keempat sudut elemen akan dibulatkan dan
kelengkungannya akan menjadi lingkaran yang sempurna.

2. #### Jika ada garis miring, maka: dapat membutuhkan hingga delapan nilai — satu hingga empat nilai di setiap sisi
garis miring.
```css
border-radius: [top-left horizontal radius] [top-right horizontal radius]? [bottom-right horizontal radius]?
[bottom-left horizontal radius]? / [top-left vertical radius] [top-right vertical radius]? [bottom-right vertical
radius]? [bottom-left vertical radius]?
```
Nilai yang ditentukan sebelum slash menetapkan radius horizontal sudut dalam urutan yang sama yang ditentukan
sebelumnya. Nilai yang ditentukan setelah slash menetapkan radius vertikal dari masing-masing sudut.

Seperti contoh berikut:
```css
border-radius: 2em 1em 4em / 0.5em 3em;
```
sama seperti
```css
border-top-left-radius: 2em 0.5em;
border-top-right-radius: 1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius: 1em 3em;
```

{{< property >}}
{{< property-value default="default" value="border-radius: 0;" >}}
Menghapus semua radius perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-radius " id="border-radius-0">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-radius: 20px;" >}}
Kamu dapat menggunakan nilai-nilai __piksel__.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-radius " id="border-radius-20px">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-radius: 50%;" >}}
Kamu dapat menggunakan nilai __persentase__. Dalam contoh ini, radius mulai setengah jalan melalui setiap perbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-radius " id="border-radius-50">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-radius: 20px 50%;" >}}
Jika Kamu menetapkan __dua nilai__, yang pertama adalah untuk border _atas_ dan _bawah_, yang kedua untuk border _kiri_
dan _kanan_ berbatasan.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-radius " id="border-radius-20px-50">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-radius {
        border: 4px solid #05ffb0;
        padding: 0.5em 1em;
    }

    #border-radius-0 {
        border-radius: 0;
    }

    #border-radius-20px {
        border-radius: 20px;
    }

    #border-radius-50 {
        border-radius: 50%;
    }

    #border-radius-20px-50 {
        border-radius: 20px 50%;
    }
</style>