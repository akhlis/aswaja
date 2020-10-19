---
title: option
description: option
date: "2019-11-18T10:34:07+07:00"
slug: option
authors:
- akhlis
name: option
experimental: false
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/option
---

Tag `<option>` mewakili opsi dalam elemen `<select>` atau sebagai bagian dari daftar saran dalam elemen `<datalist>`.

Tag `<option>` dapat digunakan sebagai anak dari elemen `<select>`, `<datalist>`, dan `<optgroup>`.

## Syntax

Tag `<option>` ditulis seperti `<option></option>` dengan konten elemen dimasukkan diantara tag pembuka dan penutup.

Atribut value biasanya digunakan untuk memberikan nilai yang dapat dirujuk oleh script apapun yang memproses form.

Seperti ini:

```html
<select name="Kota">
	<option value="jakarta">Jakarta</option>
	<option value="surabaya">Surabaya</option>
	<option value="malang">Malang</option>
</select>
```

{{< code lang="html" >}}
<select name="country">
  <option value="Argentina">Argentina</option>
  <option value="Bolivia">Bolivia</option>
  <option value="Brazil">Brazil</option>
  <option value="Chile">Chile</option>
  <option value="Colombia">Colombia</option>
  <option value="Ecuador">Ecuador</option>
  <option value="Guyana">Guyana</option>
  <option value="Paraguay">Paraguay</option>
  <option value="Peru">Peru</option>
  <option value="Suriname">Suriname</option>
  <option value="Uruguay">Uruguay</option>
  <option value="Venezuela">Venezuela</option>
</select>
{{< /code >}}

<article id="option-value" class="attribute attribute--required">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="value">
        value
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan nilai <code> &lt;select&gt; </code> jika opsi ini dipilih.</p>
      <strong class="attribute-is-required">Required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="option-value__south-africa" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy value=&quot;south-africa&quot;"
            data-clipboard-text="value=&quot;south-africa&quot;">
            "south-africa"
          </code>
        </h4>
        <div class="value__description">
          <p>Nilai ini akan dikirim ke server ketika formulir dikirimkan.</p>
{{< highlight html >}}
<select>
  <option value="south-africa">South Africa</option>
</select>
{{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <option value="south-africa">South Africa</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="option-label" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="label">
        label
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan label untuk opsi.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="option-label-republic-of-south-africa" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy label=&quot;Republic of South Africa&quot;"
            data-clipboard-text="label=&quot;Republic of South Africa&quot;">
            "Republic of South Africa"
          </code>
        </h4>
        <div class="value__description">
          <p>Label akan menggantikan opsi teks bagian dalam.</p>
{{< highlight html >}}
<select>
  <option value="south-africa" label="Republic of South Africa">South Africa</option>
</select>
{{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <option value="south-africa" label="Republic of South Africa">South Africa</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="option-disabled" class="attribute attribute--novaluebut">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan opsi.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="option-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
          <p>Opsi tetap terlihat tetapi tidak dapat dipilih lagi.</p>
{{< highlight html >}}
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option disabled>Wednesday</option>
  <option disabled>Thursday</option>
  <option>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
{{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <option>Monday</option>
            <option>Tuesday</option>
            <option disabled>Wednesday</option>
            <option disabled>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="option-selected" class="attribute attribute--novaluebut">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="selected">
        selected
      </code>
    </h3>
    <div class="attribute__description">
      <p>Memilih opsi ketika halaman web dimuat.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="option-selected-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
{{< highlight html >}}
<select>
  <option>Monday</option>
  <option>Tuesday</option>
  <option>Wednesday</option>
  <option>Thursday</option>
  <option selected>Friday</option>
  <option>Saturday</option>
  <option>Sunday</option>
</select>
{{< /highlight >}}
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option selected>Friday</option>
            <option>Saturday</option>
            <option>Sunday</option>
          </select></div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="option" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}