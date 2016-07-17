## D3.js Step by Step

Check out the [tutorial](http://zeroviscosity.com/category/d3-js-step-by-step).

#### NOTE: Examples now target D3 v4.

Here's what changed in this repo from v3 to v4:

* `d3.scale.category20b()` became `d3.scaleOrdinal(d3.schemeCategory20b)`
* `d3.svg.arc()` became `d3.arc()`
* `innerRadius()` needs to be explicitly defined so it is now `.innerRadius(0)` for the pie chart
* `d3.layout.pie()` became `d3.pie()`
