
// var form = document.getElementById("form");

// form.addEventListener("submit", function(e){
// 	e.preventDefault();
// 	console.log("submit");
// 	var formData = new FormData(form);
// 	var entries = {};
// 	for(var pair of formData.entries()){
// 		console.log(pair);
// 		entries[pair[0]] = pair[1];
// 	}
// 	console.log(entries);
// 	var JSONData = JSON.stringify(entries);
// 	localStorage.setItem(entries.genre, JSONData);
// 	console.log(localStorage);
// });







// for (var i = array.length - 1; i >= 0; i--) {
// 	 if(array[i].type == 'text'){
// 	 	var a = document.creatElement('div');
// 	 	var b = document.creatElement('input');
// 	 	b.setAtribute('type', 'text');
// 	 	var c = document.creatElement('label');
// 	 	c.innerHTML = array[i].label;
// 	 	a.appendChild(b);
// 	 	a.appendChild(c);
// 	 }
// }



document.getElementById("hike-button").addEventListener("click", function(){
	var defaultInfo = new DefaultForm({});
	displayForm(defaultInfo);
});



function displayForm(formInfo) {
	//clear all forms here, grab display by id set html set to blank string
	var createForm = document.createElement("form");
	createForm.setAttribute("class", "form");
	document.getElementById("display").appendChild(createForm);
	var makeDiv = document.createElement("div");
	makeDiv.setAttribute("class", "ugh");
	createForm.appendChild(makeDiv);

	var fields = formInfo.fields;
	for ( var keyObject in fields){
		var input;
		console.log(keyObject, fields[keyObject]);
		var type = fields[keyObject].type;
		
		var label = document.createElement("label");
		label.innerHTML = fields[keyObject].label;
		makeDiv.appendChild(label);

		if ( type == "text") {
			input = document.createElement("input");
		 	input.setAttribute("type", "text");
		 	input.setAttribute("class", "text-input");
		 	input.setAttribute("name", keyObject);
		 	makeDiv.appendChild(input);
		 } else if ( type == "radio") {
		 	for (let i = 0; i < fields[keyObject].options.length; i++) {
	 			input = document.createElement("input");
	 		 	input.setAttribute("type", "radio");
	 		 	input.setAttribute("class", "radio");
	 		 	input.setAttribute("name", keyObject);
	 		 	input.setAttribute("value", fields[keyObject].options[i]);
	 		 	makeDiv.appendChild(input);

	 		 	var optionLabel = document.createElement("label");
	 		 	optionLabel.innerHTML = fields[keyObject].options[i];
	 		 	makeDiv.appendChild(optionLabel);
		 	}
		 }



	}

	
	console.log(formInfo.name);
	

}



var DefaultForm = function(options){
	this.name = "Hike",
	this.fields = {
 		name : {
 			label: "Name:",
 			type: "text"
 		},
 		trailLocation : {
 			label: "Location:",
 			type: "text"
 		},
 		trailDifficulty : {
 			label: "Difficulty:",
 			type: "select",
 			options: [
 				"1.: Beginner/ casual stroll",
				"2: Intermediate/ I started to sweat a little ",
				"3: Advanced/",
				"4: Pro/ I can't feel my legs"
 			]
 		},
 		trailLength : {
 			label: "Length:",
 			type: "text"
 		},
 		trailWaterFeature : {
 			label: "Water Feature:",
 			type: "radio",
 			options: [
 				"yes",
 				"no"
			]
 		},
 	}
 };


var BikeForm = function(options){
	this.name = "Bike",
	this.fields.bike = {
		typeBike : {
			label: "Bike Type:",
			type: "select",
			options: [
				"1.: Beginner/ casual stroll",
				"2: Intermediate/ I started to sweat a little ",
				"3: Advanced/",
				"4: Pro/ I can't feel my legs"
			]
		},
		paved : {
			label: "Paved:",
			type: "radio",
			options: [
				"yes",
				"no"
			]
		},
		familyFriendly : {
			label: " Family Friendly:",
			type: "radio",
			options: [
				"yes",
				"no"
			]
		}
	}
};

BikeForm.prototype = new DefaultForm({});

var NatureForm = function(options) {
	this.name = "Bike",
	this.fields.nature = {
 		typePreserve : {
 			label: " Preserve is it in:",
 			type: "select",
 			options: [
 				"1.: Beginner/ casual stroll",
				"2: Intermediate/ I started to sweat a little ",
				"3: Advanced/",
				"4: Pro/ I can't feel my legs"
 			]
 		},

 		activiesOffered : {
 			label: "Activities offered?",
 			type: "select",
 			options:  [
 				"1.: Beginner/ casual stroll",
				"2: Intermediate/ I started to sweat a little ",
				"3: Advanced/",
				"4: Pro/ I can't feel my legs"
 			]
 		},

 		familyFriendly : {
 			label: " Family Friendly:",
 			type: "radio",
 			options: [
 				"yes",
 				"no"
 			]
 		},

 		educational : {
 			label: " Is the trail educational:",
 			type: "radio",
 			options: [
 				"yes",
 				"no"
 			]
 		},

 		animalSighting : {
 			label: "Animal Sight Seeing",
 			type: "text"
 		}	
	}
};

NatureForm.prototype = new DefaultForm({});


 




















 	
// 	this.fields = {
// 		name: {
// 			label: "Name:"
// 			type: "text"		
// 		}
// 		rating: {
// 			label: "Rating:",
// 			type: "select",
// 			options: [
// 				"1.: Hated it",
// 				"2: It was ok, I guess"
// 				"etc..."
// 			]
// 		},
// 		agian: { 
//			label: "Woud experience again?",
// 			type: " radio",
// 			options: [
//				"yes",
//				"no"
//			]
// 		}
// 	
// }


















// var DefaulutForm = function() {
// 	this.name = "Other",
// 	this.fields = [
// 		name: {
// 			label: "Name:"
// 			type: "text"		
// 		}
// 		rating: {
// 			label: "Rating:",
// 			type: "select",
// 			options: [
// 				"1.: Hated it",
// 				"2: It was ok, I guess"
// 				"etc..."
// 			]
// 		},
// 		agian: { 
//			label: "Woud experience again?",
// 			type: " radio",
// 			options: [
//				"yes",
//				"no"
//			]
// 		}
// 	]
// }



// 	]
// }

// // child class example

// var Cocktailform = Object.create(DefaulutForm);

// Cocktailform.fields.alcohol = {
// 	label: "alcohol",
// 	type: "select",
// 	options: [
// 		"gin",
// 		"vodka",
// 		"rum"


// 	]
// }; 
// Cocktailform.fields.again.label = " Would drink again?";

// // loop throgh the filds to create form inputs usin an if statement

// var input;
// if ( type = "text") {
// 	input = document.creatElement("input");
// 	input.set Attribute("type". "type");
// } else if ( type = " select") {
// 	input = document.creatElement("select");
// 	for (var i = 0; i < selectOptions.length; i ++) {
// 		var option = document.creatElement("option");
// 		options.setAtribute("value", selectOptions[i]);
// 		option.innerHTML = selectOptions[i];
// 		input.appendChild(option);
// 	}
// }