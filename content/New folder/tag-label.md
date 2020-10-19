# HTML `<label>` Tag

Menjelaskan label untuk _form control_.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<label for="first_name">First name</label>
<br>
<input type="text" name="first_name" id="first_name">
	</div>
</div>

```html
<label for="first_name">First name</label>
<br>
<input type="text" name="first_name" id="first_name">
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<label>
  <input type="checkbox" name="terms">
  I agree to the terms
</label>
	</div>
</div>

```html
<label>
  <input type="checkbox" name="terms">
  I agree to the terms
</label>
```

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
<p>Subscribe to the newsletter?</p>
<label>
  <input type="radio" name="newsletter" value="yes"> Yes
</label>
<label>
  <input type="radio" name="newsletter" value="no"> No
</label>
	</div>
</div>

```html
<p>Subscribe to the newsletter?</p>
<label>
  <input type="radio" name="newsletter" value="yes"> Yes
</label>
<label>
  <input type="radio" name="newsletter" value="no"> No
</label>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">for</code>
		</h4>
		<div class="attribute__desc">
			<p>Menjelaskan label kontrol yang terkait.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"last_name"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Klik label akan difokuskan ke input dengan id yang sama dengan last_name.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<label for="last_name">Last name</label>
<br>
<input type="text" name="last_name" id="last_name">
				</div>
			</aside>
		</article>
	</div>
</article>

```html
<label for="last_name">Last name</label>
<br>
<input type="text" name="last_name" id="last_name">
```