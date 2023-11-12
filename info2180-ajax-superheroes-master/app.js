window.onload = function() {
	let sbtn = document.getElementById("sbtn");
	console.log(sbtn);
	var req;
	
	sbtn.addEventListener('click', function(e){
		e.preventDefault();
		
		req = new XMLHttpRequest();
		var url = "superheroes.php";
		req.onreadystatechange = loadAlist;
		req.open('GET', url);
		req.send();
		
	});//end sbtn on-click listener
	
	function loadAlist(){
		if (req.readyState === XMLHttpRequest.DONE) {
			if (req.status === 200) {
				var response = req.responseText;
				alert(response);
			} else {
				alert('There was a problem with the request.');
			}
		}
	}
	
};//end window.onload



/*
document.addEventListener("DOMContentLoaded", () =>{
	
});

fetch("superheroes.php").then(response => {
			if (response.ok) {
				return response.text()
			} else {
				return Promise.reject('something went wrong!')
			}
		})
		.then(data => {
			alert(data);
		}).catch(error => console.log('There was an error: ' + error));
*/