# HTML `<link>` Tag

Menjelaskan link antara halaman web dengan link atau sumber eksternal.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<link rel="stylesheet" type="text/css" href="https://htmlreference.io/css/website.css">
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">href</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan URL sebuah link</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"https://htmlreference.io/css/website.css"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menggunakan URL <strong>absolute</strong></p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/css/website.css"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menggunakan URL <strong>relative</strong> ke root domain.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">rel</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan tipe link.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"stylesheet"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan stylesheet</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"icon"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan favicon</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"author"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan author halaman web.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"next"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan halaman berikutnya.</p>
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
			<p>Merupakan tipe sumber link</p>
		</div>
	</header>
	<div class="attribute__values">
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"text/css"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan file CSS.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"text/html"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Link merupakan file HTML.</p>
				</div>
			</header>
		</article>
	</div>
</article>