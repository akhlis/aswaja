---
title: background-image
description: background-image
date: "2019-11-12T10:34:07+07:00"
slug: background-image
css_collections:
- background
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/background-image
caniuse: http://caniuse.com/#feat=background-image
---

Properti `background-image` mengatur gambar latar belakang suatu elemen.

Properti ini menerima satu nilai gambar atau beberapa nilai yang dipisahkan koma.

Ketika lebih dari satu background diatur, masing-masing gambar berukuran, diposisikan, dan ditata sesuai dengan nilai
yang sesuai di properti background lainnya.

Gambar-gambar tersebut kemudian ditumpuk di atas satu sama lain dengan yang pertama berada di atas yang lain.

Saat mengatur gambar background, kamu juga harus menentukan warna background yang akan digunakan ketika gambar tidak
tersedia.

## CSS Syntax
```css
background-image: url | none | initial | inherit;
```

#### Javascript Syntax
```js
object.style.backgroundImage="url(img_tree.gif)"
```

{{< property >}}
{{< property-value default="default" value="background-image: none;" >}}
Menghapus gambar latar belakang apa pun.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-none">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: url(/images/jt.png);" >}}
Menggunakan gambar yang ditentukan dalam path <strong> url </strong>. Path ini dapat berupa <em> relatif </em> (ke file
css) atau <em> absolut </em> (seperti <code>https://codingku.id/images/jt.png</code>).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-urlimagesjtpng">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: linear-gradient(red, blue);" >}}
Kamu dapat menetapkan <strong> gradien linier </strong> sebagai gambar latar belakang.

Kamu harus menetapkan setidaknya <strong> dua warna </strong>. Yang pertama akan dimulai dari atas, yang kedua di bawah.

Sudut default adalah <code> ke bawah </code> (atau <code> 180deg </code>), yang berarti gradiennya adalah <strong>
    vertikal </strong>, mulai dari atas, berakhir di bagian bawah elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-linear-gradientred-blue">Hello
    world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: linear-gradient(45deg, red, blue);" >}}
Kamu dapat menentukan <strong> sudut </strong>, baik dalam <strong> derajat </strong>, atau dengan kata kunci.

Saat menggunakan degress, Kamu menentukan <em> arah </em> dari gradien, atau ketika itu berakhir. Jadi <code> 0deg
</code> berarti <strong> atas </strong> elemen, seperti 12:00 pada jam.

Dalam contoh ini, <code> 45deg </code> berarti 2:30, atau sudut kanan atas.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-linear-gradient45deg-red-blue">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: radial-gradient(green, purple);" >}}
Kamu dapat menetapkan <strong> gradien radial </strong> sebagai gambar latar belakang.

Kamu harus menetapkan setidaknya <strong> dua warna </strong>. Yang pertama ada di tengah, yang kedua di tepi.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-radial-gradientgreen-purple">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: radial-gradient(circle, green, purple);" >}}
Kamu dapat menentukan <strong> bentuk </strong> dari gradien radial: <strong> lingkaran </strong> atau <strong> ellipse
</strong> (default).
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image " id="background-image-radial-gradientcircle-green-purple">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: radial-gradient(circle, green 0%, purple 20%, orange 100%);" >}}
Kamu dapat menentukan <strong> penghentian warna </strong> menggunakan nilai persentase.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image "
    id="background-image-radial-gradientcircle-green-0-purple-20-orange-100">Hello world</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);" >}}
Kamu dapat menentukan <em> di mana </em> gradien seharusnya <strong> diakhiri </strong>:

- `closest-side`
- `closest-corner`
- `farthest-side`
- `farthest-corner`
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image "
    id="background-image-radial-gradientcircle-closest-side-green-0-purple-20-orange-100">Hello world
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="background-image: radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);" >}}
Seperti <a href="/cssref/background-position"><code>background-position</code></a>, Kamu dapat menentukan <strong>
    posisi </strong> dari gradien.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example background-image "
    id="background-image-radial-gradientcircle-closest-side-at-45px-45px-green-0-purple-20-orange-100">
    Hello world</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .background-image {
        background-repeat: no-repeat;
        height: 200px;
    }

    #background-image-none {
        background-image: none;
    }

    #background-image-urlimagesjtpng {
        background-image: url(/images/cssref/jt.png);
    }

    #background-image-urlimagesjtpng {
        background-size: 64px 64px;
    }

    #background-image-linear-gradientred-blue {
        background-image: linear-gradient(red, blue);
    }

    #background-image-linear-gradient45deg-red-blue {
        background-image: linear-gradient(45deg, red, blue);
    }

    #background-image-radial-gradientgreen-purple {
        background-image: radial-gradient(green, purple);
    }

    #background-image-radial-gradientcircle-green-purple {
        background-image: radial-gradient(circle, green, purple);
    }

    #background-image-radial-gradientcircle-green-0-purple-20-orange-100 {
        background-image: radial-gradient(circle, green 0%, purple 20%, orange 100%);
    }

    #background-image-radial-gradientcircle-closest-side-green-0-purple-20-orange-100 {
        background-image: radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);
    }

    #background-image-radial-gradientcircle-closest-side-at-45px-45px-green-0-purple-20-orange-100 {
        background-image: radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);
    }
</style>

<p class="codepen" data-height="300" data-theme-id="37132" data-default-tab="result" data-user="codingku"
    data-slug-hash="gObayjJ"
    style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
    data-pen-title="Contoh #1 background-images">
    <span>See the Pen <a href="https://codepen.io/codingku/pen/gObayjJ">
            Contoh #1 background-images</a> by Codingku (<a href="https://codepen.io/codingku">@codingku</a>)
        on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>