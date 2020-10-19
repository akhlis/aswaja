---
title: col
description: col
date: "2019-11-18T10:34:07+07:00"
slug: col
authors:
- akhlis
name: col
experimental: false
meta: false
selfclosing: true
inline: true
block: false
mdn: https://developer.mozilla.org/en/docs/Web/HTML/Element/col
---

Tag `<col>` digunakan untuk menentukan properti kolom setiap kolom dalam elemen `<colgroup>`.

Tag `col` ini berguna jika kamu ingin menentukan tampilan satu atau beberapa kolom bersamaan, daripada mengatur tampilan pada level individu `<td>`, kamu bisa menerapkannya pada elemen `<col>`.

Maka semua elemen `<td>` dan `<th>` yang terkandung dalam `<col>` akan sesuai dengan pengaturan dalam `<col>`.

## Syntax

Tag `<col>` ditulis seperti `<col>` (tanpa tag penutup). Kamu bisa menggunakan atribut span untuk mengatur jumlah kolom.

```html
<table>
	<colgroup>
		<col class="col-1">
		<col span="2" class="normal">
	</colgroup>
	<tr>
		<td>Cell</td>
		<td>Cell</td>
		<td>Cell</td>
	</tr>
</table>
```

{{< code lang="html" >}}
<table border="1">
  <colgroup>
    <col style="background:#AEF642;">
    <col span="3" style="background:#F4FBEA;">
    <col style="background:orange;">
  </colgroup>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
    <th>Header 4</th>
    <th>Header 5</th>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
  <tr>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
    <td>Cell</td>
  </tr>
</table>
{{< /code >}}


<article id="col-span" class="attribute">
  <header class="attribute__header">
    <h3 class="attribute__name">
      <code class="tag" data-tooltip="Click to copy" data-clipboard-text="span">
        span
      </code>
    </h3>
    <div class="attribute__description">
      <p>Menentukan berapa banyak kolom yang harus span.</p>
    </div>
  </header>
  <div class="attribute__values">
    <article id="col-span-3" class="value">
      <header class="value__header">
        <h4 class="value__name">
          <code class="tag" data-tooltip="Click to copy span=&quot;3&quot;" data-clipboard-text="span=&quot;3&quot;">
            "3"
          </code>
        </h4>
        <div class="value__description">
          <p>Kamu bisa menggunakan angka.</p>
        </div>
      </header>
      <aside class="value__preview">
        <div class="value__output">
          <col span="3">
          </col>
        </div>
      </aside>
    </article>
  </div>
</article>

{{< browser tag="col" chrome="ya" edge="ya" firefox="ya" safari="ya" opera="ya" >}}

## Pengaturan Default CSS

Sebagian besar browser menampilkan elemen `<col>` dengan pengaturan CSS:

```css
col {
  display: table-column;
}
```