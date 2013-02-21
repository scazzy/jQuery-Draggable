Lightweight Draggable() jquery plugin

<h2>jQuery Draggable()</h2>
A jQuery plugin that adds cross-browser dragging support.

In order to use the plugin, simply bind the "draggable" event to an element. 

Here is an example:

// Basic dragging a div
<pre>
$("div").draggable();
</pre>



// Restricting dragging to an axis
<pre>
$("div").draggable({
  axis: 'x'
});
</pre>



// Restricting dragging to it's parent container (boundary)
<pre>
$("div").draggable({
  containParent: true
});
</pre>

<br>
<hr/>
<br>

<h3>Demo:</h3>
http://jsfiddle.net/yelton/2TQgB/
