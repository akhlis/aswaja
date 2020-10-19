# HTML `script` Tag

Menentukan container untuk script eksternal.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<script src="https://htmlreference.io/javascript/my-scripts.js"></script>
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<script type="text/javascript">
  console.log('Hello World');
</script>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">src</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan sumber script eksternal.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/javascript/my-scripts.js"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>URL bisa dengan URL relative dan absolute</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">type</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan tipe script eksternal.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"text/javascript"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>menunjukkan file javascript</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">async</code>
		</h4>
		<div class="attribute__desc">
			<p>Mengijinkan script eksternal untuk diload asynchronously.</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
</article>