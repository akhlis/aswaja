---
title: th
description: th
date: "2019-11-18T10:34:07+07:00"
slug: th
authors:
- akhlis
name: th
experimental: false
meta: false
selfclosing: false
inline: false
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/th
---

Tag `<th>` digunakan untuk menentukan sel header (header tabel) di dalam tabel.

Tag ini harus disarangkan didalam tag `<tr>`.

{{< code lang="html" >}}
<table border = "1">
<tr>
  <th>Header cell</th>
  <th>Header cell</th>
</tr>
<tr>
  <td>Cell 1</td>
  <td>Cell 2</td>
</tr>
</table>
{{< /code >}}

<article id="th-colspan" class="attribute">
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
    <article id="th-colspan-3" class="value">
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
          <th colspan="3"></th>
        </div>
      </aside>
    </article>
  </div>
</article>
<article id="th-rowspan" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="rowspan">
        rowspan
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan berapa banyak baris sel harus span.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="th-rowspan-2" class="value">
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
          <th rowspan="2"></th>
        </div>
      </aside>
    </article>
  </div>
</article>


{{< browser tag="th" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<th>` dengan pengaturan CSS:

```css
th {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
}
```