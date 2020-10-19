# HTML `<param>` Tag

Menunjukkan parameter elemen `<object>`.

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
			<code class="attribute__tag">name</code>
		</h4>
		<div class="attribute__desc">
			<p>Menunjukkan nama parameter.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"movie"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Object merupakan movie yang memerlukan URL file .swf.</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"wmode"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Mengatur background object</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"allowFullScreen"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Jika object diijinkan menjadi layar penuh.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">value</code>
		</h4>
		<div class="attribute__desc">
			<p>Value yang disematkan ke parameter.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/assets/golf.swf"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Jika parameternya movie, nilainya harus menggunakan URL yang mengarah ke file movie tersebut.</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"transparent"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Jika parameternya wmode, maka nilainya antara window, direct, transparent, opaque, or gpu.</p>
				</div>
			</header>
		</article>
	</div>
</article>