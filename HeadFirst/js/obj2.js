window.onload = function(){
	function Dog (name, breed, weight){
		this.name = name; 
		this.breed = breed;
		this.weight = weight;
	}
	Dog.prototype.bark = function(){
			if(this.weight>20){
				alert(this.name +'WOOOOO!');
			}
			else{
				alert(this.name + 'Yip');
			}
		}; 
	Dog.prototype.run = function(){
		console.log('Run!');
	}
	Dog.prototype.siting = false;
	Dog.prototype.sit = function(){
		if(this.siting){
			console.log(this.name + "  is already siting")
		}
		console.log(this.name + " is now siting");
	}
	var fido = new Dog('Fido', 'Mixed', 38);
	var spot = new Dog('Spot', 'Mixed',20);
	var dogs = [fido, spot];
	for (var i = 0; i<dogs.length; i++){
		var size = 'small';
		if(dogs[i].weight>21){
			size='large';
		}
		if(dogs[i] instanceof Dog){
			console.log('dog');
		}
		console.log(
		'Dog:'+ dogs[i].name +' '+'is a'+' '+ size
		);		
	}



	fido.bark(); 
	fido.run();
	fido.siting;
	fido.sit();
	spot.bark();
	spot.run;
	spot.sit();
	console.log(Dog.prototype);
	// new prototype and constr

	var aDog = new Dog ();
	function showDog (name,breed, weight, handler){
		Dog.call(this, name, breed, weight);
		this.handler = handler;
	}

	showDog.prototype = new Dog();


}