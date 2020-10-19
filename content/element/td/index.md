---
title: td
description: td
date: "2019-11-18T10:34:07+07:00"
slug: td
authors:
- akhlis
name: td
experimental: false
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/td
---

Tag `<td>` singkatan dari _table data_ yang mewakili sel data (data tabel) dalam tabel HTML.

Elemen `<td>` digunakan dengan elemen `<table>` (dan elemen `<tr>`) untuk memungkinkan data disajikan dalam tabel.

## Syntax

Tag `<td>` ditulis seperti `<td></td>` dengan data tabel dimasukkan diantara tag pembuka dan penutup.

Tag `td` ini harus merupakn anak dari tag `<tr>`.

Seperti ini:
```html {hl_lines=["3-4"]}
<table>
	<tr>
		<td>Cell 1</td>
		<td>Cell 2</td>
	</tr>
</table>
```

{{< code lang="html" >}}
<table>
  <thead>
    <tr>
      <th colspan="4">World Cup winners</th>
    </tr>
    <tr>
      <td colspan="2">Location</td>
      <td colspan="2">Score</td>
    </tr>
    <tr>
      <td>Continent</td>
      <td>Country</td>
      <td>First</td>
      <td>Total</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">South America</td>
      <td>Uruguay</td>
      <td>1930</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Brazil</td>
      <td>1958</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Argentina</td>
      <td>1978</td>
      <td>2</td>
    </tr>
    <tr>
      <td rowspan="5">Europe</td>
      <td>Italy</td>
      <td>1934</td>
      <td>4</td>
    </tr>
    <tr>
      <td>Germany</td>
      <td>1954</td>
      <td>4</td>
    </tr>
    <tr>
      <td>England</td>
      <td>1966</td>
      <td>1</td>
    </tr>
    <tr>
      <td>France</td>
      <td>1998</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Spain</td>
      <td>2010</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
{{< /code >}}

<article id="td-colspan" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="colspan">
        colspan
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan berapa banyak kolom yang harus dipentang sel.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="td-colspan-3" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy colspan=&quot;3&quot;"
            data-clipboard-text="colspan=&quot;3&quot;">
            "3"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> integer </strong> apa pun.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <td colspan="3"></td>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="td-rowspan" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="rowspan">
        rowspan
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan berapa banyak baris sel yang harus span.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="td-rowspan-2" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy rowspan=&quot;2&quot;"
            data-clipboard-text="rowspan=&quot;2&quot;">
            "2"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu dapat menggunakan <strong> integer </strong> apa pun.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <td rowspan="2"></td>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="td" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<td>` dengan pengaturan CSS:

```css
td {
  display: table-cell;
  vertical-align: inherit;
}
```