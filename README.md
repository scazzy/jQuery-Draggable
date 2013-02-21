jQuery-Draggable--
==================

Lightweight Draggable() jquery plugin

jQuery Draggable() Plugin
A jQuery plugin that adds cross-browser dragging support.

In order to use the plugin, simply bind the "draggable" event to an element. 

Here is an example:

// Basic dragging a div
$("div").draggable();

// Restricting dragging to an axis
$("div").draggable({
  axis: 'x'
});

// Restricting dragging to it's parent container (boundary)
$("div").draggable({
  containParent: true
});
