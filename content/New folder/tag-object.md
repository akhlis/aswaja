# HTML `<object>` Tag

Menentukan container untuk sumber eksternal.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
    <object type="application/x-shockwave-flash" data="/assets/golf.swf" width="800" height="360">
  <param name="movie" value="/assets/golf.swf">
  <param name="wmode" value="transparent">
  <p>You need to enable Flash to view this content.</p>
</object>
	</div>
</div>

```html
<object type="application/x-shockwave-flash" data="/assets/golf.swf" width="800" height="360">
  <param name="movie" value="/assets/golf.swf">
  <param name="wmode" value="transparent">
  <p>You need to enable Flash to view this content.</p>
</object>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">data</code>
		</h4>
		<div class="attribute__desc">
			<p>Menunjukkan URL data object.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/assets/golf.swf"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Value harus menggunakan URL valid.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">type</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan tipe aplikasi.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"application/x-shockwave-flash"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Value harus menggunakan tipe konten yang valid.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">height</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan tinggi dari object.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"50"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Tinggi dalam satuan pixel.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">width</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan lebar dari object.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"150"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Lebar dalam satuan pixel.</p>
				</div>
			</header>
		</article>
	</div>
</article>