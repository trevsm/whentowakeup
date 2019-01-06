var values  = [
	{value:50, label:'A' },
];
var total = 0;
var dragging = null;

values.forEach(function(d){
 	d.absoluteValue = total;
 	total += d.value;
});

console.log(values);
var height = 520,
width = 520,
margin = {
  top:20,
  left:20,
  bottom:20,
  right:20};
var radius = (height - margin.top - margin.bottom)/2;
var parent = d3
.select('.ring-input')
.append('svg')
.attr({
		height:height,
		width:width
	}).append('g').attr('transform','translate('+margin.left+','+margin.top+')')

parent.append('line').attr('id','test-line')

var angularScale = d3.scale.linear().range([0,360]).domain([0,total]);

var ring = parent.append('g').attr('id','rim').attr('transform','translate('+radius+','+radius+')');
ring.append('circle').attr({
	r:radius,
	'class':'ring'
})

var handles = parent.append('g').attr('id','handles').attr('transform','translate('+radius+','+radius+')');
var drag = d3.behavior
    .drag()
    .origin(function(d) { return d; })
    .on("drag", dragmove)
    .on('dragend', function(){ d3.select(this).classed('active',false); });

//position the handles based on the input values
function drawHandles(){
	var join = handles.selectAll('circle').data(values);
	join.enter()
		.append('circle').attr({
			r:10,
			'class':'handle'
		}).on("mouseover", function(){
    		d3.select(this).classed('active',true);
    	})
    	.on("mouseout", function(){
    		d3.select(this).classed('active',false);
    	})
		.call(drag);

	join.attr({
		transform:function(d){
			return 'rotate(' + angularScale(d.absoluteValue) + ') translate(' +radius + ',0)'
		}
	})
}

drawHandles();

function dragmove(d,i) {
	d3.select(this).classed('active',true);
	var coordinates = d3.mouse(parent.node());
 	var x = coordinates[0]-radius;
 	var y = coordinates[1]-radius;
  	var newAngle = Math.atan2( y , x )* 57.2957795;
  	if(newAngle<0){
  		newAngle = 360 + newAngle;
  	}
 	d.absoluteValue = angularScale.invert(newAngle);
  	//REDRAW HANDLES
  	drawHandles()
}
