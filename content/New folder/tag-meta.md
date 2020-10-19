# HTML `<meta>` Tag

Digunakan untuk melampirkan metadata kedalam halaman website.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#ffffff">
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<!-- Refresh the page every 5 seconds -->
<meta http-equiv="refresh" content="5">
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
	</div>
</div>

```html
<!-- Redirect instantly to https://cssreference.io -->
<meta http-equiv="refresh" content="0; url=https://cssreference.io">
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">charset</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan karakter encoding dalam halaman web.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"UTF-8"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Value harus menggunakan karakter set yang valid.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">http-equiv</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan aturan meta pada halaman web.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"Content-Security-Policy"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menentukan link ke kebijakan konten halaman web.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"refresh"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Memungkinkan untuk merefresh halaman web dalam setiap N detik, atau mengalihkan ke URL lain.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"X-UA-Compatible"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menentukan versi Internet Explorer yang akan digunakan untuk merender halaman web.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">name</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan informasi tambahan yang diselipkan dalam halaman web.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"viewport"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menentukan dimensi atau skala viewport.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"theme-color"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Menentukan warna tema yang digunakan oleh browser atau sistem operasi.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">content</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan konten dalam metadata menurut nilai name atau http-equiv.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"width=device-width, initial-scale=1"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>pada metadata viewport, kamu bisa mengatur lebar atau skala halaman web.</p>
				</div>
			</header>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"2; url=https://cssreference.io"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk metadata refresh, kamu bisa menentukan berapa detik waktu menunggu sebelum dialihkan ke URL lain.</p>
				</div>
			</header>
		</article>
	</div>
</article>