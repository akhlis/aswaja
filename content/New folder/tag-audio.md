# HTML `<audio>` Tag

Digunakan untuk menyisipkan klip audio kedalam halaman website.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
        <audio src="/audio/Hal.mp3" controls></audio>
	</div>
</div>

```html
<audio src="/audio/Hal.mp3" controls></audio>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--required">src</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan sumber file audio yang akan disisipkan</p>
			<strong class="attribute__desc--required">Diperlukan.</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/audio/Hal.mp3"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menggunakan path <strong>relative</strong></p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">volume</code>
		</h4>
		<div class="attribute__desc">
			<p>Mengatur volume suara antara 0.0 (diam) and 1.0 (keras)..</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"0.0"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Track audio tidak bersuara</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" volume="0.0"></audio>
				</div>
			</aside>
		</article>
        <article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"1.0"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Track audio diatur paling keras</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" volume="1.0"></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">autoplay</code>
		</h4>
		<div class="attribute__desc">
			<p>Track otomatis berputar saat halaman di load</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" autoplay controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">controls</code>
		</h4>
		<div class="attribute__desc">
			<p>Menampilkan kontrol audio bawaan browser</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" autoplay controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">loop</code>
		</h4>
		<div class="attribute__desc">
			<p>Track otomatis berputar ulang setelah track berakhir</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" loop controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">muted</code>
		</h4>
		<div class="attribute__desc">
			<p>Track diatur tidak bersuara secara default</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" muted controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">preload</code>
		</h4>
		<div class="attribute__desc">
			<p>Track akan diputar saat halaman web diload</p>
			<strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<audio src="/audio/Hal.mp3" preload controls></audio>
				</div>
			</aside>
		</article>
	</div>
</article>