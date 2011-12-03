$(function(){
	$.get("https://www.googleapis.com/customsearch/v1?q=spotify", function(data){
		console.log(data);
	});
})