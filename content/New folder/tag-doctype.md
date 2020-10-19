# HTML <!doctype> Tag

## The HTML <!doctype> tag is used for specifying which language and version the document is using. This is referred to as the document type declaration (DTD).

Technically speaking, the <!doctype> tag does not represent an HTML element (there is no <!doctype> element). However, it has been included here, as it is a required preamble to all HTML documents.

Also, it is usually referred to as the "doctype declaration" as opposed to the "doctype tag". Having said that, "tag" is a pretty loose term that tends to be applied quite generically across the web, so I've included it in the list of "HTML tags".

### Syntax

The <!doctype> declaration is written as <!doctype> (no end tag) with the language being specified inserted within the tag. The <!doctype> declaration is case-insensitive (i.e. can be either uppercase or lowercase).

The <!doctype> declaration must go right at the top of the page, before any other HTML code.

Like this:

```html
<!doctype html>
<html>
 <head>
	<title></title>
 </head>
 <body>
   <p>Page content...</p>
 </body>
</html>
```

### Differences Between HTML 4 & HTML 5

The main difference between HTML 4 and HTML5 is that HTML 4 requires a URL reference to a DTD (Document Type Definition) to be provided that specifies the language and its exact version. HTML5 doesn't require the DTD to be specified.

The <!doctype> tag is mostly useless in HTML5, because HTML5 does not require a reference to a DTD. However, for legacy reasons, the HTML5 specification recommends including the <!doctype> declaration at the top of all HTML documents. Therefore, you can use a value of html within the <!doctype> tag.

To see more detail on the two versions see HTML5 <!doctype> Tag and HTML4 <!doctype> Tag. Also check out the links to the official specifications below.

You may also be interested in XML <!doctype> which discusses doctype declarations in XML documents (which includes XHTML documents).

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
