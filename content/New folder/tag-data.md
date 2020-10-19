# HTML `<data>` Tag

Menetapkan konten yang terhubung dengan machine-readable.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
 <p>Computers</p>
<ul>
  <li>
    <data value="499">Mini PC</data>
  </li>
  <li>
    <data value="899">Small laptop</data>
  </li>
  <li>
    <data value="1399">Large laptop</data>
  </li>
  <li>
    <data value="2099">Desktop PC</data>
  </li>
</ul>
	</div>
</div>

```html
<p>Computers</p>
<ul>
  <li>
    <data value="499">Mini PC</data>
  </li>
  <li>
    <data value="899">Small laptop</data>
  </li>
  <li>
    <data value="1399">Large laptop</data>
  </li>
  <li>
    <data value="2099">Desktop PC</data>
  </li>
</ul>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">value</code>
		</h4>
		<div class="attribute__desc">
			<p>Value(nilai) yang dihasilkan oleh machine-readable.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"123"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menuliskan beberapa tipe value, seperti angka.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"Hello World"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu juga bisa menuliskan tipe value dengan teks.</p>
				</div>
			</header>
		</article>
	</div>
</article>