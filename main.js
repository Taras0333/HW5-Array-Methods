
//1

function getRandomArray(length, min, max){
	let numberArray = [];
	for (let i = 0; i <= length -1; i++){
	let random = 0;
	random =  Math.floor(Math.random() * ((+max) - (+min) + 1)) + (+min);
	numberArray.push(random);
}
	return numberArray;
}
console.log(getRandomArray(prompt('Write the length'), prompt('Write min integer'), prompt('Write max integer')));

//3
function getAverage(quontity, numbers){
	let sum = 0;
	let array = [];

	for (let i = 0; i <= quontity - 2; i++){
 	if (Number.isInteger(numbers)){
 		sum += numbers;
 		array.push(numbers);
 		numbers = +prompt('Write number');
 	} else{
 		sum += 0
 		alert('its not an integer');
 		break;
 	}
 }
 if (Number.isInteger(numbers)){
 		sum += numbers;
 		array.push(numbers);
 	} else{
 		sum += 0
 		alert('its not an integer');
 	}
 return sum / quontity;


}
console.log(getAverage(+prompt('how long?'), +prompt('Write number')));

//4

function getMediana (quontity, number){
let array = [];
let medianaIndex = 0;
let result = 0;
for (let i =0; i <= quontity - 2; i++){
	if (Number.isInteger(number)){
	array.push(number);
	number = +prompt('Write number');

} else {
	alert('its not an integer');
}

}
	if (Number.isInteger(number)){
	array.push(number);

} else {
	alert('its not an integer');
}
	array.sort((a,b ) => a - b);
	if(array.length % 2 == 0){
		medianaIndex = array.length / 2;
		result = (array[medianaIndex - 1] + array[medianaIndex]) / 2;


		
	} else{
		medianaIndex = array.length / 2 + 0.5;
		result = array[medianaIndex - 1];
	}
	return result;
}
console.log(getMediana(+prompt('how long?'), +prompt('Write number')));

//5

function filterEvenNumbers(quontity ,numbers){
	let array = [];
	for (let i = 0; i <= quontity - 2; i++ ){
		array.push(numbers);
		numbers = +prompt('Write numbers');
	}
	array.push(numbers);
	const filter = array.filter((el, i, arr) => {
		if (el % 2) return true;
			else return false;
	})
	return filter;
}
console.log(filterEvenNumbers(prompt('How much'), +prompt('Write numbers')));
//6
function countPositiveNumbers(quontity ,numbers){
	let array = [];
	for (let i = 0; i <= quontity - 2; i++ ){
		array.push(numbers);
		numbers = +prompt('Write numbers');
	}
	array.push(numbers); 
	const numbersBiggerThanNull = array.filter((el, i, arr) => {
		if (el > 0) return true;
			else return false;
	})
	const result = numbersBiggerThanNull.length;
	return result;

}
console.log(countPositiveNumbers(+prompt('How much'), +prompt('Enter numbers')));
//7
function getDivededByFive(quontity ,numbers){
	let array = [];
	for (let i = 0; i <= quontity - 2; i++ ){
		array.push(numbers);
		numbers = +prompt('Write numbers');
	}
	array.push(numbers);
	const divedByFive = array.filter((el, i, arr) => {
		if (Number.isInteger(el / 5)) return true;
			else return false;
	})
	return divedByFive;
	}
	console.log(getDivededByFive(+prompt('How much'), +prompt('Enter numbers')));