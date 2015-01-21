# Proto-Tooltips

This jQuery tooltips plugin is intended for use in prototypes as a way to effectively communicate purpose and workflow throughout a web project.

## How do I add Proto-Tooltips to my website?

Add the following file to your site:

```
proto-tooltips.min.js
```
You will also require jQuery, which can be found here: https://github.com/jquery/jquery

## How do I use Proto-Tooltips?

Proto-Tooltips makes use of HTML data-attributes to generate unique tooltips where you need them! Just add the following attributes to any HTML element:

```
class="proto-tooltip" data-proto-tooltip="YOUR TOOLTIP TEXT HERE"
```

Here's an example of what it would look like in practice:

```
<a href="#" class="proto-tooltip" data-proto-tooltip="Note to self: Link this to a different page!">My Link</a>
```

## Can I customize Proto-Tooltips?

You sure can, there are various settings you can manipulate:

```
protoTooltip({
    tooltipClass: '.proto-tooltip',             // This is the class you will add to elements
    time: 1000,                                 // This is the delay for the flashing effect
    flash: true,                                // Change this to false to turn the flashing effect off
    opacity: '0.6',                             // This is the opacity that the element will switch to when flashing
    tooltipStyles: 'display: inline-block;'     // These are the tooltip stylings that will be applied
      + 'padding: 5px;'
      + 'margin: 0;'
      + 'background: #fff;'
      + 'position: absolute;'
      + 'border: 1px solid black;'
      + 'border-radius: 3px;'
      + 'box-shadow: 1px 1px #000;'
      + 'color: #000;'
      + 'max-width: 100px;'
});
```

<<<<<<< HEAD
Simply add the above code in and manipulate it to your heart's content! The above settings are the default, and if you like these you won't even have to add the snippet in.
=======
Simply add the above code in and manipulate it to your heart's content! The above settings are the default, and if you like these you won't even have to add the snippet in.
>>>>>>> FETCH_HEAD
