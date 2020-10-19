# HTML `<a>` Tag

## The HTML `<a>` tag is used for creating an a element (also known as an "anchor" element).

Creates a link to a URL: a web page, a section within a page, an email address... Also called the anchor element, where the a comes from.

Tag `<a>` digunakan untuk membuat link ke sebuah URL halaman website, bagian dalam halaman web, atau alamat email. Disebut juga element anchor.

<div class="example">
	<p class="example__label"><strong>Contoh:</strong></p>
	<div class="example__preview">
		<a href="https://www.codingku.id/html/tags/">Belajar HTML dasar</a>.
	</div>
</div>

```html
<a href="https://www.codingku.id/html">Belajar HTML dasar</a>
```

<article class="attribute attribute--required">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag attribute__tag--required">href</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan target link ke URL halaman website</p>
			<strong class="attribute__desc--required">Diperlukan.</strong>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"https://codingku.id"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuat link URL <strong>absolute</strong></p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id">Belajar HTML Dasar</a>
				</div>
			</aside>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"/html/tags"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk membuat link URL <strong>relative</strong> sub direktori ke domain root.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id">Belajar HTML Dasar</a>
				</div>
			</aside>
		</article>
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"#header"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Untuk menargetkan ke sebuah elemen HTML dalam satu halaman website. Disini kami menargetkan ke elemen <code>&lt;header id="header"&gt;</code></p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="#header">header</a>
				</div>
			</aside>
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
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id" target="_blank">Belajar HTML Dasar</a>
				</div>
			</aside>
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
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id" target="_self">Belajar HTML Dasar</a>
				</div>
			</aside>
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
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id" target="_parent">Belajar HTML Dasar</a>
				</div>
			</aside>
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
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id" target="_top">Belajar HTML Dasar</a>
				</div>
			</aside>
		</article>
	</div>
</article>
<article class="attribute">
	<header class="attribute__header">
		<h4 class="attribute__name">
			<code class="attribute__tag">rel</code>
		</h4>
		<div class="attribute__desc">
			<p>Menentukan cara menargetkan link yang terkait ke halaman website yang sedang terbuka.</p>
		</div>
	</header>
	<div class="attribute__values">
		<article class="attribute__value">
			<header class="attribute__value-header">
				<h4 class="attribute__value-title">
					<code class="attribute__value-tag">"nofollow"</code>
				</h4>
				<div class="attribute__value-desc">
					<p>Target link tidak terkait. Biasanya hanya digunakan pada link yang mengarah ke website lain.</p>
				</div>
			</header>
			<aside class="attribute__preview">
				<div class="attribute__preview-output">
					<a href="https://codingku.id" target="_blank">Belajar HTML Dasar</a>
				</div>
			</aside>
		</article>
	</div>
</article>

The a element represents a hyperlink. This is usually a link to another document.

You can use the `<a>` tag to link text or images. You can also link a large block of content (even containing multiple elements) if required - it's not just restricted to hyperlinking single elements. However, there must be no "interactive content" descendant.

### Syntax

The `<a>` tag is written as `<a href=""></a>` with the linked URL between the double quotes of the href attribute and the anchor text (i.e. the text that the user sees) between the start and end tags.

Like this:

```html
<a href="http://www.great-workout.com/">Great Workout</a>.
```

### Examples

#### Basic tag usage

```html
Have a <a href="http://www.great-workout.com/">Great Workout</a>.
```

#### Open the link in a new window (or tab)

Here we use `target="_blank"` to open the link in a new window.

```html
Have a <a href="http://www.great-workout.com/" target="_blank">Great Workout</a>.
```

#### Reload the new window

Here we open multiple links in a new window, but instead of a new window being opened with each link, a new window is opened with the first link, then the following links load their contents into that window.

We do this simply by giving the target attribute a name that doesn't exist (i.e. we make up our own name for the window/tab).

```html
<a href="http://www.html.am/" target="myTab">Link 1</a><br>
<a href="http://www.htmlcodes.ws/" target="myTab">Link 2</a><br>
<a href="http://www.createawebsite.cc/" target="myTab">Link 3</a><br>
```

#### Linked Image

Here we wrap the `<a>` around an image to create a linked image.

```html
<a href="https://en.wikipedia.org/wiki/Phi_Phi_Islands" target="myTab">
<img src="/pix/places/phi-phi-200x150.jpg" alt="Photo of Koh Phi Phi in Thailand">
</a>
```

#### No-Follow

Here we use rel="nofollow" to create a "nofollow" link. This can be used to tell search engines that you don't endorse the content at the other end of the link. The nofollow attribute value is typically used on paid links and advertising.

> Many people refer to this as the "nofollow tag" but it's not actually a tag. It's not even an attribute (the attribute is rel). The nofollow bit is simply a value of the rel attribute.

```html
<a href="http://www.zappyhost.com/" rel="nofollow" target="myTab">Top Web Hosting!</a>
```

### Attributes

Attributes can be added to an HTML element to provide more information about how the element should appear or behave.

There are 3 kinds of attributes that you can add to your HTML tags: Element-specific, global, and event handler content attributes.

The `<a>` element accepts the following attributes.

### Element-Specific Attributes

This table shows the attributes that are specific to the `<a>` tag/element.


| Attribute	    | Description  |
|---------------|--------------|
| href          | Specifies the URL of a page that the link goes to. |
| target        | Specifies the target frame to load the page into. Only to be used when the href attribute is present.<br> Possible values: <br> - _blank <br> - _self <br> - _top <br> - _parent <br> - Any string with at least one character that does not start with a U+005F LOW LINE character.|
| download      | Indicates that the link is to be used for downloading a resource (such as a file). The author can specify a default file name by providing a value. This attribute is optional.<br> Value:<br> [Default file name.] (optional)|



### Global Attributes

The following attributes are standard across all HTML5 elements. Therefore, you can use these attributes with the `<a>` tag , as well as with all other HTML tags.

- accesskey
- class
- contenteditable
- contextmenu
- dir
- draggable
- dropzone
- hidden
- id
- inert
- itemid
- itemprop
- itemref
- itemscope
- itemtype
- lang
- spellcheck
- style
- tabindex
- title
- translate

For a full explanation of these attributes, see HTML 5 global attributes.

### Event Handler Content Attributes

Event handler content attributes enable you to invoke a script from within your HTML. The script is invoked when a certain "event" occurs. Each event handler content attribute deals with a different event.

Below are the standard HTML5 event handler content attributes.

Again, you can use any of these with the `<a>` element, as well as any other HTML5 element.

- onabort
- oncancel
- onblur
- oncanplay
- oncanplaythrough
- onchange
- onclick
- oncontextmenu
- ondblclick
- ondrag
- ondragend
- ondragenter
- ondragexit
- ondragleave
- ondragover
- ondragstart
- ondrop
- ondurationchange
- onemptied
- onended
- onerror
- onfocus
- onformchange
- onforminput
- oninput
- oninvalid
- onkeydown
- onkeypress
- onkeyup
- onload
- onloadeddata
- onloadedmetadata
- onloadstart
- onmousedown
- onmousemove
- onmouseout
- onmouseover
- onmouseup
- onmousewheel
- onpause
- onplay
- onplaying
- onprogress
- onratechange
- onreadystatechange
- onscroll
- onseeked
- onseeking
- onselect
- onshow
- onstalled
- onsubmit
- onsuspend
- ontimeupdate
- onvolumechange
- onwaiting

 For a full explanation of these attributes, see HTML 5 event handler content attributes.

#### Differences Between HTML 4 & HTML5

In HTML5, the `<a>` can be a placeholder for a hyperlink. This occurs when you don't provide the href attribute.
HTML 4 restricts the `<a>` element to containing only "phrasing content" (known as "inline content" in HTML 4 and lower). HTML5 has changed the `<a>` element so that its content model is now "transparent". This allows the `<a>` element to also contain "flow" content" (known as "block-level" content in previous versions), but there must be no "interactive content" descendant.
A number of attributes are no longer supported in HTML5.
To see more detail on the two versions see HTML5 `<a>` Tag and HTML4 `<a>` Tag. Also check out the links to the official specifications below.

### Template

Here's a template for the `<a>` tag with all available attributes for the tag (based on HTML5). These are grouped into attribute types, each type separated by a space. In many cases, you will probably only need one or two (if any) attributes. Simply remove the attributes you don't need.

For more information on attributes for this tag, see HTML5 `<a>` Tag and HTML4 `<a>` Tag.

```html
<a  
 href=""=""
 target=""=""
 download=""=""
 rel=""=""
 hreflang=""=""
 type=""=""
 
 accesskey=""
 class=""
 contenteditable=""
 contextmenu=""
 dir=""
 draggable=""
 dropzone=""
 hidden=""
 id=""
 itemid=""
 itemprop=""
 itemref=""
 itemscope=""
 itemtype=""
 lang=""
 spellcheck=""
 style=""
 tabindex=""
 title=""
 translate=""

 onabort=""
 onautocomplete=""
 onautocompleteerror=""
 onblur=""
 oncancel=""
 oncanplay=""
 oncanplaythrough=""
 onchange=""
 onclick=""
 onclose=""
 oncontextmenu=""
 oncuechange=""
 ondblclick=""
 ondrag=""
 ondragend=""
 ondragenter=""
 ondragexit=""
 ondragleave=""
 ondragover=""
 ondragstart=""
 ondrop=""
 ondurationchange=""
 onemptied=""
 onended=""
 onerror=""
 onfocus=""
 oninput=""
 oninvalid=""
 onkeydown=""
 onkeypress=""
 onkeyup=""
 onload=""
 onloadeddata=""
 onloadedmetadata=""
 onloadstart=""
 onmousedown=""
 onmouseenter=""
 onmouseleave=""
 onmousemove=""
 onmouseout=""
 onmouseover=""
 onmouseup=""
 onmousewheel=""
 onpause=""
 onplay=""
 onplaying=""
 onprogress=""
 onratechange=""
 onreset=""
 onresize=""
 onscroll=""
 onseeked=""
 onseeking=""
 onselect=""
 onshow=""
 onsort=""
 onstalled=""
 onsubmit=""
 onsuspend=""
 ontimeupdate=""
 ontoggle=""
 onvolumechange=""
 onwaiting=""
	>
</a>
```

### Tag Details

For more details about the `<a>` tag, see HTML5 `<a>` Tag and HTML4 `<a>` Tag.

### Specifications

Here are the official specifications for the Comments element.

HTML5 Specification (W3C)
HTML Living Standard (WHATWG)
Current W3C Draft (the next version that is currently being worked on)
HTML 4 (W3C)

### What's the Difference

W3C creates "snapshot" specifications that don't change once defined. So the HTML5 specification won't change once it becomes an official recommendation. WHATWG on the other hand, develops a "living standard" that is updated on a regular basis. In general, you will probably find that the HTML living standard will be more closely aligned to the current W3C draft than to the HTML5 specification.
