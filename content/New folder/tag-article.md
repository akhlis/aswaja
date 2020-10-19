# HTML `<article>` Tag

Digunakan untuk membuat elemen artikel yang merepresentasikan konten yang independen dari konten lain dalam halaman website.

Bisa terdiri dari header, footer, section, dll... Sangat cocok untuk membuat list posting blog.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
        <article>
            <header>
                <h3>
                <a href="/my-blog-post">My blog post</a>
                </h3>
            </header>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
            </section>
            <footer>
                <small>
                Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>
                </small>
            </footer>
        </article>
	</div>
</div>

```html
<article>
  <header>
    <h3>
      <a href="/my-blog-post">My blog post</a>
    </h3>
  </header>
  <section>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nec nulla vitae mollis.</p>
  </section>
  <footer>
    <small>
      Posted on <time datetime="2017-04-29T19:00">Apr 29</time> in <a href="/category/code">Code</a>
    </small>
  </footer>
</article>
```