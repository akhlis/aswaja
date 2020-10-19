# HTML `<output>` Tag

Menunjukkan hasil penghitungan atau tindakan pengguna.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<form oninput="sum.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" name="a" value="4">
  +
  <input type="number" name="b" value="7">
  =
  <output name="sum">11</output>
</form>
	</div>
</div>

```html
<form oninput="sum.value = parseInt(a.value) + parseInt(b.value)">
  <input type="number" name="a" value="4">
  +
  <input type="number" name="b" value="7">
  =
  <output name="sum">11</output>
</form>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">name</code>
		</h4>
		<div class="attribute__desc">
			<p>Menunjukkan penanda unik pada input didalam form.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"sum"</code>
				</h4>
			</header>
		</article>
	</div>
</article>