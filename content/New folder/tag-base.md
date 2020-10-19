# HTML `<base>` Tag

Mendefinisikan URL utama untuk semua link relative halaman website. Harus ditempatkan didalam tag `<head>`

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
		<base href="https://codingku.id">
        <a href="/html/tags">The HTML base element</a>
	</div>
</div>

```html
<base href="https://codingku.id">
<a href="/html/tags">The HTML base element</a>
<!-- Akan menjadi link absolute https://codingku.id/html/tags -->

```

<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">href</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan target utama dari semua link URL halaman website</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"https://codingku.id"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Kamu bisa menjadikan sebagai URL <strong>absolute</strong></p>
				</div>
			</header>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">target</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan tab atau window yang akan ditampilkan saat link di klik.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"_blank"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuka jendela browser atau tab baru</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"_self"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuka link pada tab browser yang sedang ditampilkan.</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"_parent"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuka link ke parent halaman yang terkait</p>
				</div>
			</header>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"_top"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuka link ke atas halaman yang terkait</p>
				</div>
			</header>
		</article>
	</div>
</article>