	let numberArray = [];
	let average = 0;
	let resultMediana = 0;
	let filter = [];
	let positiveNumbers = []; 
	let divedByFive = [];
	let goodWords = [];
	let resultGoodWord = [];
	//1

/*function getRandomArray(length, min, max){

	if (!Number.isInteger(length) || !Number.isInteger(min) || !Number.isInteger(max)){
		console.log('err');
		return
	} else{
		for (let i = 0; i <= length -1; i++){
			let random = 0;
			random =  Math.floor(Math.random() * ((max) - (min) + 1)) + (min);
			numberArray.push(random);
		}
			return numberArray;
	}

}
console.log(getRandomArray(+prompt('Write the length of array'), +prompt('Write min integer'), +prompt('Write max integer')));

//3

function getAverage(numbers){
	const split = numbers.split('');
	let firstTransformation = 0;
	let secondTransformation = [];
	let finalArray = [];
	for(i = 0; i <= split.length - 1; i++){
		if(split[i] === ','){
			secondTransformation.push(firstTransformation);
			firstTransformation = 0;
		}else if(split[i] === ' '){

		}
		else if(split[i] === '.'){
			firstTransformation -= +split[i - 1];
			firstTransformation -= +split[i + 1];
		}else{
			firstTransformation += +split[i];
		}
	}
	
	secondTransformation.push(firstTransformation);
	secondTransformation.forEach(i => {
		if(i === 0){
			
			
		}else {
			finalArray.push(i);
		}
	})
	let array = [];
	let sum = 0;

	for (let i = 0; i <= finalArray.length - 1; i++){
 	
 		sum += +finalArray[i];
 	
 }
 average = sum / finalArray.length;
 return average;

}

getAverage(prompt('Write numbers to get average'));

//4

function getMediana (number){
const split = number.split('');
let firstTransformation = '';
let secondTransformation = [];
	split.forEach(i => {
		if(i === ','){
			secondTransformation.push(firstTransformation);
			firstTransformation = '';
		}else if(i === ' '){

		}
		else{
			firstTransformation += i;
		}
	})
	secondTransformation.push(firstTransformation);
	console.log(secondTransformation);
let array = [];
let medianaIndex = 0;

for (let i =0; i <= secondTransformation.length - 1; i++){
	if (Number.isInteger(+secondTransformation[i])){
	array.push(secondTransformation[i]);

} else {
	alert('its not an integer');
}

}
console.log(array);
	array.sort((a, b ) => a - b);
	if(array.length % 2 == 0){
		medianaIndex = array.length / 2;
		resultMediana = (+array[medianaIndex - 1] + +array[medianaIndex]) / 2;


		
	} else{
		medianaIndex = array.length / 2 + 0.5;
		resultMediana = array[medianaIndex - 1];
	}
	return resultMediana;
}
getMediana(prompt('Write numbers to get mediana'));

//5

function filterEvenNumbers(numbers){
	let split = numbers.split('');
	let firstTransformation = '';
let secondTransformation = [];
	split.forEach(i => {
		if(i === ','){
			secondTransformation.push(firstTransformation);
			firstTransformation = '';
		}else if(i === ' '){

		}
		else{
			firstTransformation += i;
		}
	})
	secondTransformation.push(firstTransformation);
	secondTransformation.filter((el, i, arr) => {
		if (+el % 2){
			
		} else{
			filter.push(el);
		}

	})
	return filter;
}
filterEvenNumbers(prompt('Write numbers you want to find even numbers'));
//6 */

function countPositiveNumbers(numbers){
	let split = numbers.split('');
	let firstTransformation = '';
let secondTransformation = [];

	for(let i =0; i < split.length; i++){
		if(split[i] === ','){
			secondTransformation.push(firstTransformation);
			firstTransformation = '';
		}else if(split[i] === ' '){

		}else if(split[i] === '-'){
			firstTransformation += split[i];
		}
		else{
			firstTransformation += split[i];
		}
	}
	secondTransformation.push(firstTransformation);
	console.log(secondTransformation);
	const numbersBiggerThanNull = secondTransformation.filter((el, i, arr) => {
		if (+el > 0){
			positiveNumbers.push(el);
		}
		else if(+el <0){

		}
		else{

		}
	})
	return positiveNumbers;

}
countPositiveNumbers(prompt('Write numbers you want to find positive'));

//7
/*function getDivededByFive(numbers){
	let split = numbers.split('');
	console.log(split);
	let firstTransformation = '';
let secondTransformation = [];

	split.forEach(i => {
		if(i === ','){
			secondTransformation.push(firstTransformation);
			firstTransformation = '';
		}else if(i === ' '){

		}else if(i === '-'){
			firstTransformation += i;
		}
		else{
			firstTransformation += i;
		}
	})
	secondTransformation.push(firstTransformation);
	console.log(secondTransformation);
	secondTransformation.filter((el, i, arr) => {
		if (Number.isInteger(el / 5)){
			divedByFive.push(el);
		}
		else{

		}
	})
	return divedByFive;
	}
getDivededByFive(prompt('Write numbers you want to find devides by 5'));
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
console.log(replaceBadWords(prompt('Write what you want, to cack on bad words')));




*/
const container=document.querySelector("#container");
container.innerHTML=`
<p>Random array: ${numberArray};</p>
<p> Average: ${average};</p>
<p>Mediana: ${resultMediana};</p>
<p>Eaven numbers: ${filter};</p>
<p>Positive numbers: ${positiveNumbers};</p>
<p>Array of numbers you can dived by 5: ${divedByFive};</p>
<p>Sentence without bad words: ${resultGoodWord};</p>
`;