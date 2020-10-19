# HTML `<col>` Tag

Digunakan untuk membuat kolom didalam tabel.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
    <table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
	</div>
</div>

```html
<table>
  <colgroup>
    <col style="background-color: hotpink;">
    <col span="2" style="background-color: springgreen;">
  </colgroup>
  <tr>
    <td>John Lennon</td>
    <td>Rhythm Guitar</td>
    <td>1960–1969</td>
  </tr>
  <tr>
    <td>Paul McCartney</td>
    <td>Bass</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>George Harrison</td>
    <td>Lead Guitar</td>
    <td>1960–1970</td>
  </tr>
  <tr>
    <td>Ringo Starr</td>
    <td>Drums</td>
    <td>1960–1970</td>
  </tr>
</table>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">span</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan jumlah kolom elemen yang dijangkau</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"3"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Gunakan angka untuk menentukan jumlah span</p>
				</div>
			</header>
		</article>
	</div>
</article>