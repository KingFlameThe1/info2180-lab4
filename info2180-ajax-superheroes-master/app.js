var ODArray;

window.onload = function() {
	var sbtn = document.getElementById("sbtn");
	//console.log(sbtn);

fetch("superheroes.php").then(response => {
	if (response.ok) {
		//console.log(response);
		return response.text()
	} else {
		return Promise.reject('something went wrong!')
	}
}).then(data => {
	//console.log(data);
	//alert(data);
	ODArray = parD(data.trim());
	DisplayOInf(ODArray[0]);
}).catch(error => console.log('There was an error: ' + error));


	sbtn.addEventListener('click', function(e){
		e.preventDefault();
		
		var txt = document.getElementById("search").value;
		txt.replace( /(<([^>]+)>)/ig, '');
		//console.log(txt);
		if(txt.includes("!@#$%^&*()+=-[]\\\';,./{}|\":<>?")){
			alert("Try again.");
		}
		else{
			NDArray = parD(ODArray[1]);
			//console.log(DArray);
			ProD(NDArray, txt);
		}
		
	});//end sbtn on-click listener
	
	
};//end window.onload

function parD(data){
	if(data.includes("@#$%^&")){
		return data.split("@#$%^&");
	}
	return data.split("_:::_");
}//end parse data

function ProD(DArray, txt){
	//console.log(DArray);
	var check = 1;
	for (ind in DArray){
		//console.log(ind);
		if(txt == ""){
			check = 0;
			DisplayOInf(ODArray[0]);
			break;
		}
		else if(DArray[ind].includes(txt)){
			DisplayFInf(DArray[ind]);
			check = 0;
		}
	}
	if(check == 1){
		NFound();
	}
	
}//end process data

function DisplayOInf(st){
	var NSec = document.getElementById("result");
	NSec.innerHTML = null;
	var hder1 = document.createElement('h1');
	hder1.innerHTML = "Result";
	NSec.appendChild(hder1);
	NSec.innerHTML += st;
	
}//end display orginal info

function DisplayFInf(st){
	infArr = st.trim().split("||//");
	var NSec = document.getElementById("result");
	NSec.innerHTML = null;
	//NSec.removeChild('h1');
	var hder1 = document.createElement('h1');
	hder1.innerHTML = "Result";
	var hder2 = document.createElement('h2');
	hder2.innerHTML = infArr[1];
	var hder3 = document.createElement('h3');
	hder3.innerHTML = "A.K.A "+infArr[0];
	var bio = document.createTextNode(infArr[2]);
	
	NSec.appendChild(hder1);
	NSec.appendChild(hder2);
	NSec.appendChild(hder3);
	NSec.appendChild(bio);
	
}//end display new info

function NFound(){
	var NSec = document.getElementById("result");
	NSec.innerHTML = null;
	var hder1 = document.createElement('h1');
	hder1.innerHTML = "Result";
	NSec.appendChild(hder1);
	let nftxt = document.createTextNode("SUPERHERO NOT FOUND");
	let nftxtdiv = document.createElement('div');
	nftxtdiv.setAttribute('class', 'notfoundtxt');
	nftxtdiv.appendChild(nftxt);
	NSec.appendChild(nftxtdiv);
}