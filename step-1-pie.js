(function(d3) {
  'use strict';

  var data = [
    { count: 10 }, 
    { count: 20 },
    { count: 30 },
    { count: 40 }
  ];

  var width = 400;
  var height = 400;
  var radius = Math.min(width, height) / 2;

  var color = d3.scale.category20b();

  var arc = d3.svg.arc()
    .outerRadius(radius);

  var pie = d3.layout.pie()
    .value(function(d) { return d.count; })
    .sort(null);

  var svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) + 
      ',' + (height / 2) + ')');

  var path = svg.selectAll('path')
    .data(pie(data))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d, i) { 
      return color(i); 
    });
})(window.d3);