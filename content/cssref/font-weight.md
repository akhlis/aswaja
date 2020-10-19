---
title: font-weight
description: font-weight
date: "2019-11-12T10:34:07+07:00"
slug: font-weight
css_collections:
- typography
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/font-weight
---

Properti CSS `font-weight` mengatur berat atau ketebalan font dan bergantung pada wajah font yang tersedia dalam _font
family_ atau `weight` yang ditentukan oleh browser.
```css
span {
font-weight: bold;
}
```
Properti `font-weight` menerima nilai kata kunci atau nilai numerik yang telah ditentukan. Kata kunci yang tersedia
adalah:
- `normal`
- `bold`
- `bolder`
- `lighter`

Nilai numerik yang tersedia adalah:
- `100`
- `200`
- `300`
- `400`
- `500`
- `600`
- `700`
- `800`
- `900`

Nilai kata kunci font `normal` yaitu nilai numerik `400` dan nilai `tebal` menjadi `700`.

Untuk melihat efek menggunakan nilai selain `400` atau `700`, font yang digunakan harus memiliki wajah bawaan yang cocok
dengan bobot yang ditentukan.

Jika font memiliki versi tebal ("700") atau normal ("400") sebagai bagian dari _font family_, browser akan
menggunakannya.

Jika itu tidak tersedia, browser akan meniru huruf tebal atau versi normal dari font.

{{< editor class="w-1/3" >}}
{{< editor-html >}}
```html
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300' rel='stylesheet' type='text/css'>

<p class="w100">This is 100 weight</p>

<p class="w200">This is 200 weight</p>

<p class="w300">This is 300 weight (available)</p>

<p class="w400">This is 400 weight (available)</p>

<p class="w500">This is 500 weight</p>

<p class="w600">This is 600 weight (available)</p>

<p class="w700">This is 700 weight (available)</p>

<p class="w800">This is 800 weight (available)</p>

<p class="w900">This is 900 weight</p>

```
{{< /editor-html >}}
{{< editor-css >}}
```css
body {
padding: 0 20px;
font-family: 'Open Sans';
}

.w100 {
font-weight: 100;
}

.w200 {
font-weight: 200;
}

.w300 {
font-weight: 300;
}

.w400 {
font-weight: 400;
}

.w500 {
font-weight: 500;
}

.w600 {
font-weight: 600;
}

.w700 {
font-weight: 700;
}

.w800 {
font-weight: 800;
}

.w900 {
font-weight: 900;
}

```
{{< /editor-css >}}
{{< editor-preview >}}
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300' rel='stylesheet' type='text/css'>

<p class="font-p w100">This is 100 weight</p>

<p class="font-p w200">This is 200 weight</p>

<p class="font-p w300">This is 300 weight (available)</p>

<p class="font-p w400">This is 400 weight (available)</p>

<p class="font-p w500">This is 500 weight</p>

<p class="font-p w600">This is 600 weight (available)</p>

<p class="font-p w700">This is 700 weight (available)</p>

<p class="font-p w800">This is 800 weight (available)</p>

<p class="font-p w900">This is 900 weight</p>

{{< /editor-preview >}}
{{< /editor >}}

Demo diatas menggunakan font Open Sans, disematkan menggunakan Google Web Fonts API.

Font dimuat dengan semua bobot font yang tersedia dan menggunakan properti `font-weight`, bobot yang berbeda ditampilkan
seperti yang dijelaskan oleh teks setiap paragraf.

Bobot yang tidak tersedia hanya menampilkan bobot terdekat yang logis.

## CSS Syntax
```css
font-weight: normal | bold | bolder | lighter | number | initial | inherit;
```

#### JavaScript Syntax
```js
object.style.fontWeight="bold"
```

{{< cssref default="normal" inherited="ya" animatable="ya" version="CSS1" >}}

## Attribute Value

{{< property >}}
{{< property-value default="none" value="font-weight: normal;" >}}
Teks dalam berat normal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-weight p-4" id="font-weight-normal">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-weight: bold;" >}}
Teks menjadi tebal.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-weight p-4" id="font-weight-bold">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-weight: 600;" >}}
Kamu dapat menggunakan nilai numerik. Mereka semua sesuai dengan berat nama tertentu:
- __100__ Thin
- __200__ Extra Light
- __300__ Light
- __400__ Normal
- __500__ Medium
- __600__ Semi Bold
- __700__ Bold
- __800__ Extra Bold
- __900__ Ultra Bold

Jika kelompok font tidak memberikan _weight_ yang diminta, itu akan menggunakan yang terdekat yang tersedia.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-weight p-4" id="font-weight-600">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="font-weight: lighter;" >}}
Kamu dapat menggunakan kata kunci relatif: `lighter` atau `bolder`. Browser akan menggunakan _weight_ berikutnya yang
tersedia.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example font-weight p-4" id="font-weight-lighter">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .font-p {
    padding: 0 20px;
    margin-bottom: 1em;
    font-family: 'Open Sans';
  }

  .w100 {
    font-weight: 100;
  }

  .w200 {
    font-weight: 200;
  }

  .w300 {
    font-weight: 300;
  }

  .w400 {
    font-weight: 400;
  }

  .w500 {
    font-weight: 500;
  }

  .w600 {
    font-weight: 600;
  }

  .w700 {
    font-weight: 700;
  }

  .w800 {
    font-weight: 800;
  }

  .w900 {
    font-weight: 900;
  }

  .font-weight {
    font-size: 1.2em;
  }

  #font-weight-normal {
    font-weight: normal;
  }

  #font-weight-bold {
    font-weight: bold;
  }

  #font-weight-600 {
    font-weight: 600;
  }

  #font-weight-lighter {
    font-weight: lighter;
  }
</style>