# HTML `<fieldset>` Tag

Digunakan untuk mengelompokkan elemen dalam form.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Ok</button>
  </fieldset>
</form>
	</div>
</div>

```html
<form action="/subscribe" method="post">
  <fieldset>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Ok</button>
  </fieldset>
</form>
```

<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--novalue">disabled</code>
		</h4>
		<div class="attribute__desc">
			<p>Menonaktifkan form dalam elemen fieldset.</p>
            <strong class="attribute__desc--novalue">Value tidak diperlukan</strong>
		</div>
	</header>
	<div class="attribute__values">
        <article class="attribute__value">
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
<form action="/subscribe" method="post">
  <fieldset disabled>
    <legend>Subscribe to the Newsletter</legend>
    <input type="email" name="email">
    <button>Ok</button>
  </fieldset>
</form>
				</div>
			</aside>
		</article>
	</div>
</article>