let name = prompt('Как вас зовут?');
if (name == ''){
	while(name == '') name = prompt(`И все же, введите никнейм`)
}
if(name==null){
	alert(`Если всё же захотите поиграть - перезагрузите страничку`)
	die
}
alert(`Привет, ${name}! Давай сыграем игру!`)
let wordList = [
{	word:`Привет`,	help:`Так принято здороватся!`}, 
{	word:`Угадываешь`, help:`То что ты сейчас делаешь`}, 
{	word:`Хлорка`,	help:`Средство для дезинфекции`}, 
{	word:`Сарделька`, help:`Мясное изделие`}, 
{	word:`Бигос`, help:`Польское традиционное блюдо из капусты и мяса`}, 
{	word:`Вареники`, help:`Украинское традиционное блюдо`}, 
{	word:`Моцарелла`, help:`Мягкий сыр`}, 
{	word:`ДжаваСкрипт`, help:`Лучший язык програмирования`}
]
let arrCheckingLetter = [] //массив для проверки повторного ввода буквы
let gameInfo = wordList[Math.floor(Math.random()*wordList.length)];
let gameWord = gameInfo.word;// слово которое учавствует в игре
let gameAnswer = []
let gameScore = gameWord.length //количество очков для условия победы
let gameArrWord = [] //массив который отобращается в игре

for (let i=0; i<gameWord.length; i++){
	gameArrWord.push(' _ ')
	gameAnswer.push(gameWord[i].toUpperCase())
}

//Начало игры

while(gameScore > 0){
	alert(`Угадайте слово! \n Подсказочка: ${gameInfo.help}\n ${gameArrWord.join(' ')}`)
	let letterCheck = prompt('Введите букву')
	letterCheck = letterCheck.toUpperCase()
	if (letterCheck == ''){  //ввели пустую строчку
		alert(`Вы ничего не ввели в поле. Зачем вы так сделали?`)
	}
	else if(letterCheck == null){ //нажали отмену во время ввода слова
		alert('Выходим из игры. Чтоб сыграть снова - перезагрузите страницу')
		break;
	}
	else if(letterCheck.length>1){  //ввели больше одной буквы
		alert(`Вы ввели больше одной буквы!`)
	}
	else if(!(/[а-яё]+/i.test(letterCheck))){
		alert(`Пожалуйста, используйте только буквы кириллицы`)
	}
	else if (checkingDuplicateLetter(letterCheck)){ //проверочка на повторение ввода букв
		arrCheckingLetter.length > 1 ? alert(`Вы уже вводили эту букву! \n И напоминалочка (эти буквы тоже использовали): ${arrCheckingLetter} `) : alert(`Вы уже вводили эту букву!`)
	}
	else if(gameAnswer.includes(letterCheck)){
		alert(`Ты угадал!`)
		lookingForMatch(letterCheck)
	}
	else{
		alert(`Ты не угадал. Продолжай!`)
	}
}
if(gameScore==0){
	if(confirm(`Поздравляю! Вы отгадали слово ${gameWord}. Играем ещё раз?`)) location.reload()
}

function checkingDuplicateLetter (letterCheck){
	if(arrCheckingLetter.includes(letterCheck)){
	return true
	}
	else {
	arrCheckingLetter.push(letterCheck)
	return false
}
}
function lookingForMatch(letter){
	for (let i=0; i<gameAnswer.length; i++) {
  	if(gameAnswer[i] == letter){
  		gameArrWord[i] = gameAnswer[i]
  		gameScore--
  	}
}
}


