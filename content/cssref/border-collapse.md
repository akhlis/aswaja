---
title: border-collapse
description: border-collapse
date: "2019-11-12T10:34:07+07:00"
slug: border-collapse
css_collections:
- border
authors:
- akhlis
mdn: https://developer.mozilla.org/en/docs/Web/CSS/border-collapse
---

Property CSS `border-collapse` digunakan untuk menentukan model border tabel.

Properti ini menentukan apakah batas-batas tabel dan sel tabelnya harus "bergabung" atau dipisahkan.

Ketika border terpisah, tabel dan masing-masing sel tabelnya dapat memiliki batas yang berbeda, dan ada ruang di antara
mereka.

Kamu bisa mengontrol jumlah ruang antara sel tabel yang berdekatan menggunakan properti `border-spacing`.

Ketika border "diciutkan", sel-sel tabel yang berdekatan berbagi border, dan sel-sel di tepi berbagi perbatasan mereka
dengan batas-batas tabel itu sendiri.

## CSS Syntax
```css
border-collapse: separate | collapse | initial | inherit;
```

#### Javascript Script
```js
object.style.borderCollapse="collapse"
```

{{< property >}}
{{< property-value default="default" value="border-collapse: separate;" >}}
Setiap tabel <strong> sel </strong> akan menampilkan batasnya sendiri.

Dalam contoh ini, setiap sel memiliki <code> border-width </code> <strong> 4px </strong>. Akibatnya, batas antara sel
<em> dua </em> akan menjadi <strong> 8px </strong>.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-collapse " id="border-collapse-separate">
    <table>
        <tr>
            <td><strong>Name</strong></td>
            <td><strong>Instrument</strong></td>
        </tr>
        <tr>
            <td>John Lennon</td>
            <td>Rhythm Guitar</td>
        </tr>
        <tr>
            <td>Paul McCartney</td>
            <td>Bass</td>
        </tr>
        <tr>
            <td>George Harrison</td>
            <td>Lead Guitar</td>
        </tr>
        <tr>
            <td>Ringo Starr</td>
            <td>Drums</td>
        </tr>
    </table>
</div>
{{< /property-preview >}}
{{< /property >}}

{{< property >}}
{{< property-value value="border-collapse: collapse;" >}}
Sel tabel yang berdekatan akan <strong> menggabungkan </strong> perbatasannya menjadi satu.

Sel yang muncul <em> pertama </em> dalam kode akan &quot; menang &quot;: perbatasannya akan <em> menutupi </em> sel-sel
berikut.
{{< /property-value >}}
{{< property-preview >}}
<div class="property__example border-collapse " id="border-collapse-collapse">
    <table>
        <tr>
            <td><strong>Name</strong></td>
            <td><strong>Instrument</strong></td>
        </tr>
        <tr>
            <td>John Lennon</td>
            <td>Rhythm Guitar</td>
        </tr>
        <tr>
            <td>Paul McCartney</td>
            <td>Bass</td>
        </tr>
        <tr>
            <td>George Harrison</td>
            <td>Lead Guitar</td>
        </tr>
        <tr>
            <td>Ringo Starr</td>
            <td>Drums</td>
        </tr>
    </table>
</div>
{{< /property-preview >}}
{{< /property >}}

<style type="text/css">
    .border-collapse table {
        width: 100%;
    }

    .border-collapse td {
        border-bottom: 4px solid hsl(348, 100%, 61%);
        border-left: 4px solid #05ffb0;
        border-right: 4px solid hsl(48, 100%, 67%);
        border-top: 4px solid hsl(217, 71%, 53%);
        padding: 0.4em 0.5em;
    }

    #border-collapse-separate {
        border-collapse: separate;
    }

    #border-collapse-separate table {
        border-collapse: separate;
    }

    #border-collapse-collapse {
        border-collapse: collapse;
    }

    #border-collapse-collapse table {
        border-collapse: collapse;
    }
</style>