# HTML `<details>` Tag

Membuat konten yang toggable dengan `summary` dan deskripsi tambahan.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
        <details>
        <summary>Read more</summary>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
        </details>
	</div>
</div>

```html
<details>
  <summary>Read more</summary>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
</details>
```

<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">open</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan deskripsi tambahan tampil secara default atau tidak.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"true"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Deskripsi tambahan terlihat secara default.</p>
				</div>
			</header>
            <aside class="attribute__preview">
				<div class="attribute__preview-output">
                    <details open="true">
                    <summary>Read more</summary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
                    </details>
				</div>
			</aside>
		</article>
	</div>
</article>