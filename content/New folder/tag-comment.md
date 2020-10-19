# The HTML 'comments' tag is used for creating comments within your HTML code.

The comments tag is not actually an HTML element (it is specified elsewhere in the HTML specifications). However, comments are an integral part of any HTML document. They allow the author to add comments that aren't displayed to the end users.

These comments can assist the author in understanding the code. This is particularly useful if there's a lot of code, the author is new to a website, or if the author is modifying an HTML document that he/she hasn't updated for a long time, and needs a reminder about what various parts do.

### Syntax

The Comments tag is written as `<!-- -->` with the comments inserted between the start and end tags. Note that the exclamation mark is only used in the start tag.

Like this:

```html
<!-- Comments here... -->
```

### Examples

```html
<!-- This is a comment. Therefore, it isn't displayed to the user. -->
<p>This is normal text and is displayed to the user.</p>
```

### Multiple Lines

There is no difference between tag usage whether you're commenting out one line or multiple lines. You still insert the comments between the start and end tags. You can even have the start and end tags on their own line. This can make your comments easier to read.

```html
<!-- 
This is line 1.
This is line 2.
And this line 3.
-->
<p>This is normal text and is displayed to the user.</p>
```

### Formatting Comments

Some authors like to include other characters to format their comments and draw attention to certain parts.

```html
<!-- Document declaration -->
<!doctype html>
<!-- 
===============
HEADER
===============
-->
<header>
Header....
</header>
<!-- 
===============
MAIN SECTION
===============
-->
<main>
<!-- Navigation -->
<nav>
Navigation...
</nav>
<!-- Article -->
<article>
<p>Article content....</p>
</article>
</main>
<!-- 
===============
FOOTER
===============
-->
<footer>
Footer....
</footer>
```

### Differences Between HTML 4 & HTML 5

### Tag Details

For more details about the Comments tag, see HTML5 Comments Tag and HTML4 Comments Tag.

### Specifications

Here are the official specifications for the Comments element.

HTML5 Specification (W3C)
HTML Living Standard (WHATWG)
Current W3C Draft (the next version that is currently being worked on)
HTML 4 (W3C)

### What's the Difference?

W3C creates "snapshot" specifications that don't change once defined. So the HTML5 specification won't change once it becomes an official recommendation. WHATWG on the other hand, develops a "living standard" that is updated on a regular basis. In general, you will probably find that the HTML living standard will be more closely aligned to the current W3C draft than to the HTML5 specification.
