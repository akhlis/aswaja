# HTML `<embed>` Tag

Digunakan sebagai container (pembungkus) aplikasi/konten interaktif eksternal.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
        <embed src="https://www.youtube.com/embed/kmk43_2dtn0" width="640" height="480">
	</div>
</div>

```html
<embed src="https://www.youtube.com/embed/kmk43_2dtn0" width="640" height="480">
```

<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">src</code>
		</h4>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"https://www.youtube.com/embed/kmk43_2dtn0"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Bisa ditambahkan video dari pihak ketiga.</p>
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
			<p>Tipe media yang disematkan.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"mp4"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Cek tipe media yang bisa disematkan disini <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">MIME types</a>.</p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">height</code>
		</h4>
        <div class="attribute__desc">
			<p>Mengatur tinggi container.</p>
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
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">width</code>
		</h4>
        <div class="attribute__desc">
			<p>Mengatur lebar container.</p>
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