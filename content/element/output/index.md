---
title: output
description: output
date: "2019-11-18T10:34:07+07:00"
slug: output
authors:
- akhlis
name: output
experimental: false
meta: false
selfclosing: false
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/output
---

Tag `<output>` mewakili hasil perhitungan atau tindakan pengguna.

Termasuk menampilkan hasil perhitungan yang dilakukan oleh script, atau bisa menampilkan output dari interaksi pengguna dengan elemen form.

## Syntax

Tag `<output>` ditulis seperti `<output> </output>` dengan konten yang disisipkan di antara tag pembuka dan penutup.

Atribut `for` dapat digunakan untuk menentukan hubungan eksplisit yang akan dibuat antara hasil perhitungan dan elemen-elemen yang mewakili nilai-nilai yang masuk ke dalam perhitungan atau yang sebaliknya mempengaruhi perhitungan.

Atribut form dapat ditentukan untuk mengaitkan elemen `<output>` dengan pemilik formnya.

Atribut `name` juga dapat digunakan untuk memberikan nama untuk elemen.

Seperti ini:

```html
<output for="" form="" name=""></output>
```

{{< code lang="html" >}}
<form
  oninput="sum.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" name="a" value="4">
  +
  <input type="number" name="b" value="7">
  =
  <output name="sum">11</output>
</form>
{{< /code >}}

{{< code lang="html" >}}
<form onsubmit="return false" oninput="amount.value = (principal.valueAsNumber * rate.valueAsNumber) / 100">
  <fieldset>
    <legend style="font-weight:bold;">Interest Calculator</legend>
    <label for="principal">Amount to invest: $</label>
    <input type="number" min="0" id="principal" name="principal" value="1000">
    <p><label for="rate">Interest Rate: </label>
      <input type="range" min="0" max="20" id="rate" name="rate" value="0" oninput="thisRate.value = rate.value">
      <output name="thisRate" for="range">0</output><span>%</span></p>
    <p>Interest Received: <strong>$<output name="amount" for="principal rate">0</output></strong></p>
  </fieldset>
</form>
{{< /code >}}


<article id="output-name" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="name">
        name
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan pengidentifikasi unik untuk input tersebut di dalam formulir. Ini memungkinkan server untuk mengakses setiap input nilai saat dikirimkan.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="output-name-sum" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy name=&quot;sum&quot;"
            data-clipboard-text="name=&quot;sum&quot;">
            "sum"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai name harus unik dalam konteks <code> &lt;form&gt; </code> container.</p>
          <p>Itu hanya dapat berisi karakter alfanumerik <code> a-z </code> <code> A-Z </code> <code> 0-9 </code> dan beberapa karakter khusus seperti <code> - </code> <code> _ </code> ... tetapi bukan spasi.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><output name="sum"></output></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="output" chrome="10.0" edge="13.0" firefox="4.0" safari="5.1" opera="11.0" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<ooutput>` dengan pengaturan CSS:

```css
output {
  display: inline;
}
```