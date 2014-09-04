(function(d3) {
  'use strict';

  var data = [10, 20, 30, 40];

  var width = 960,
    height = 500,
    radius = Math.min(width, height) / 2;

  var color = d3.scale.category10();

  var arc = d3.svg.arc()
    .outerRadius(radius - 10);

  var pie = d3.layout.pie() 
    .value(function(d) { return d; });

  var svg = d3.select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

  var path = svg.selectAll('path')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) { return color(i); });
})(window.d3);
