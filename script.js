function insert_Row() {
    //Write your code here
  let table= document.getElementById('sampleTable');
	let btn = document.querySelector('input');
	
  btn.eventListener('click', insert_Row )
	function insert_Row(){
		let row = table.insertRow(0);
		row.insertCell(0).innerHTML = "New Cell1";
		row.insertCell(1).innerHTML = "New Cell2";
		
	
	
}
}