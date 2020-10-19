---
title: content
description: content
date: "2019-11-12T10:34:07+07:00"
slug: content
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/content
---

Properti CSS `content` digunakan untuk membuat teks konten.

Properti ini memungkinkan kamu untuk menyediakan konten yang tidak termasuk dalam dokumen HTML.

Properti `content` dapat berguna untuk melakukan hal-hal seperti, menghasilkan judul bernomor, mengganti elemen dengan
gambar atau konten multimedia, atau memasukkan kata "Bab", "Contoh", "Gambar", dll di depan elemen yang berlaku.

Daripada menambahkan konten itu ke dokumen HTML, kamu dapat menggunakan CSS untuk membuatnya secara otomatis.

Properti `content` ini biasanya sering digunakan untuk membuat konten teks pada _pseudo-elements_ `:before` dan
`:after`.

## CSS Syntax
```css
content: normal | none | counter | attr | string | open-quote | close-quote | no-open-quote | no-close-quote | url |
initial | inherit;
```

## Attribute Value

{{< property >}}
{{< property-value default="default" value="content: normal;" >}}
Tidak ada konten yang ditambahkan ke elemen.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example content p-4" id="content-normal">
  <p data-something="cssreference">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="content: &quot;Foo bar&quot;;" >}}
Misalnya dengan membuat elemen HTML seperti ini:
```html
<p class="element">
  Hello world
</p>
```
Kemudian buatlah CSS seperti ini:
```css
.element:before {
  content: "Foo bar";
}
```

Konten teks "Foo bar" akan ditambahkan ke konten elemen.

Perhatikan bagaimana hasil akhirnya menggabungkan teks dari HTML dan teks dari CSS.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example content p-4" id="content-foo-bar">
  <p data-something="cssreference">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="content: url(/images/jt.png);" >}}
Kamu dapat menyisipkan gambar dengan menggunakan fungsi url ().
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example content p-4" id="content-urlimagesjtpng">
  <p data-something="cssreference">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="content: attr(data-something);" >}}
Buatlah elemen HTML seperti berikut:
```html
<p class="element" data-something="codekit.id">
  Hello world
</p>
```
Dan buatlah CSS seperti ini:
```css
.element:before {
  content: attr(data-something);
}
```

Elemen akan mengambil konten teks dari atribut HTML.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example content p-4" id="content-attrdata-something">
  <p data-something="codekit.id">Hello world</p>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
  .content p:before {
    content: normal;
  }

  #content-normal {
    content: normal;
  }

  #content-foo-bar {
    content: "Foo bar";
  }

  #content-foo-bar p:before {
    content: "Foo bar";
  }

  #content-urlimagesjtpng p:before {
    content: url(/images/cssref/jt.png);
  }

  #content-attrdata-something {
    content: attr(data-something);
  }

  #content-attrdata-something p:before {
    content: attr(data-something);
  }
</style>