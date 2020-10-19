---
title: optgroup
description: optgroup
date: "2019-11-18T10:34:07+07:00"
slug: optgroup
authors:
- akhlis
name: optgroup
experimental: false
meta: false
selfclosing: false
inline: false
block: true
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/optgroup
---

Tag `<optgroup>` mewakili sekelompok elemen `<option>` dengan label umum.

Elemen `<optgroup>` membantu pengguna memahami opsi saat memilih dari daftar opsi.

## Syntax

Tag `<optgroup>` ditulis seperti `<optgroup label=""></optgroup>` dengan sejumlah elemen `<option>`.

Atribut label harus ditentukan. Atribut ini memberikan nama grup kepada pengguna. Tanpa ini, elemen `<optgroup>` tidak akan berarti.

Tag `<optgroup>` harus bersarang di dalam tag `<select>`.

{{< code lang="html" >}}
<select>
  <optgroup label="South America">
    <option>Uruguay</option>
    <option>Brazil</option>
    <option>Argentina</option>
  </optgroup>
  <optgroup label="Europe">
    <option>Italy</option>
    <option>Germany</option>
    <option>England</option>
    <option>France</option>
    <option>Spain</option>
  </optgroup>
</select>
{{< /code >}}

{{< code lang="html" >}}
<select>
  <optgroup label="Winter">
    <option>December</option>
    <option>January</option>
    <option>February</option>
    <option>March</option>
  </optgroup>
  <optgroup label="Not winter" disabled>
    <option>April</option>
    <option>May</option>
    <option>June</option>
    <option>July</option>
    <option>August</option>
    <option>September</option>
    <option>October</option>
    <option>November</option>
  </optgroup>
</select>
{{< /code >}}

<article id="optgroup-label" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="label">
        label
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan label untuk seluruh grup.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="optgroup-label-south-america" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy label=&quot;South America&quot;"
            data-clipboard-text="label=&quot;South America&quot;">
            "South America"
          </code>
        </h4>
        <div class="value__description">
          <p>Label tidak dapat dipilih.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output"><select>
            <optgroup label="South America">
              <option>Uruguay</option>
              <option>Brazil</option>
              <option>Argentina</option>
            </optgroup>
            <optgroup label="Europe">
              <option>Italy</option>
              <option>Germany</option>
              <option>England</option>
              <option>France</option>
              <option>Spain</option>
            </optgroup>
          </select></div>
      </aside>
    </article>
  </div>
</article>
<article id="optgroup-disabled" class="attribute attribute--novalue">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="disabled">
        disabled
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menonaktifkan semua opsi grup.</p>
      <strong class="attribute-is-novalue">No value required.</strong>
    </div>
  </header>
  <div class="attribute__values">
    <article id="optgroup-disabled-undefined" class="value">
      <header class="value__header">
        <div class="value__description">
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <optgroup disabled></optgroup>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="optgroup" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}