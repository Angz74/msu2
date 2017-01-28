d3.json("js/data.json", function (data){

	var min = d3.min(data, function(d){
		return d.age;
	});

	

	var max = d3.max(data, function(d){
		return d.age;
	});

	var ages = d3.set(data, function(d){
		return d.age;
		// if return d.name;, it will return as a name
	})
	console.log(ages.values());
})

http://localhost:8080/