	let numberArray = [];
	let average = 0;
	let resultMediana = 0;
	let filter = [];
	let positiveNumbers = []; 
	let divedByFive = [];
	let goodWords = [];
	let resultGoodWord = [];
	//1

function getRandomArray(length, min, max){
	for (let i = 0; i <= length -1; i++){
	let random = 0;
	random =  Math.floor(Math.random() * ((+max) - (+min) + 1)) + (+min);
	numberArray.push(random);
}
	return numberArray;
}
console.log(getRandomArray(prompt('Write the length of array'), prompt('Write min integer'), prompt('Write max integer')));

//3
function getAverage(quontity, numbers){
	let array = [];
	let sum = 0;
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
 average = sum / quontity;
 return sum / quontity;;


}
console.log(getAverage(+prompt('How long you want the array to be?'), +prompt('Write number')));

//4

function getMediana (quontity, number){
let array = [];
let medianaIndex = 0;
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
		resultMediana = (array[medianaIndex - 1] + array[medianaIndex]) / 2;


		
	} else{
		medianaIndex = array.length / 2 + 0.5;
		resultMediana = array[medianaIndex - 1];
	}
	return resultMediana;
}
console.log(getMediana(+prompt('How long you want the array to be?'), +prompt('Write number')));

//5

function filterEvenNumbers(quontity ,numbers){
	let array = [];
	for (let i = 0; i <= quontity - 2; i++ ){
		array.push(numbers);
		numbers = +prompt('Write numbers');
	}
	array.push(numbers);
	filter = array.filter((el, i, arr) => {
		if (el % 2) return true;
			else return false;
	})
	return filter;
}
console.log(filterEvenNumbers(prompt('How long you want the array to be?'), +prompt('Write number')));

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
	positiveNumbers = numbersBiggerThanNull.length;
	return positiveNumbers;

}
console.log(countPositiveNumbers(+prompt('How long you want the array to be?'), +prompt('Enter number')));
//7
function getDivededByFive(quontity ,numbers){
	let array = [];
	for (let i = 0; i <= quontity - 2; i++ ){
		array.push(numbers);
		numbers = +prompt('Write numbers');
	}
	array.push(numbers);
	divedByFive = array.filter((el, i, arr) => {
		if (Number.isInteger(el / 5)) return true;
			else return false;
	})
	return divedByFive;
	}
	console.log(getDivededByFive(+prompt('How long you want the array to be?'), +prompt('Enter number')));
//8
function replaceBadWords(words){
	const split = words.split('');
	let firstTransformation = '';
	let secondTransformation = [];
	for (let i = 0; i <= split.length - 1; i++){
		if (split[i] === " "){
			secondTransformation.push(firstTransformation);
			firstTransformation = '';
		}else{
			firstTransformation += split[i];
		}
	}
	secondTransformation.push(firstTransformation);
	 secondTransformation.some(i =>{
		if (i === "fuck" || i === "Fuck"){
			resultGoodWord.push("****");
		}else if(i === "fucking" || i === "Fucking"){
			resultGoodWord.push("****ing");
		}else if(i === "shit" || i === "Shit"){
			resultGoodWord.push("****");
		}
		else{
			resultGoodWord.push(i);
		}
	})
	 resultGoodWord = resultGoodWord.join(' ');
	return resultGoodWord;
	}
console.log(replaceBadWords(prompt('Write what you want')));



const container=document.querySelector("#container");
container.innerHTML=`
<p>Random array: ${numberArray};</p>
<p> Average: ${average};</p>
<p>Mediana: ${resultMediana};</p>
<p>Filtered array: ${filter};</p>
<p>Positive numbers: ${positiveNumbers};</p>
<p>Array of numbers you can dived by 5: ${divedByFive};</p>
<p>Sentence without bad words: ${resultGoodWord};</p>
`;