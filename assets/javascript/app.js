var correctAnswers = 0;
var wrongAnswers = 0;

$(document).ready(function(){ //within here, okay got it, i think i tried this way, but i think it was acting funny because 

var $start = $('#start');
var $timer = $('#timer');
var $containerQ1 = $('#containerQ1');
var $containerQ2 = $('#containerQ2');
var $containerQ3 = $('#containerQ3');
var $containerQ4 = $('#containerQ4');
var $containerQ5 = $('#containerQ5');
var $containerResults = $('#containerResults')
var $answerButton = $('.answerButton')
var $rightAnswer = $('.rightAnswer')
var $wrongAnswer = $('.wrongAnswer')
var $correct = $('#correct');
var $incorrect = $('#incorrect');
var $button = $("button")
var buttonLocked = false
var nextQuestion; //defined it here

var tikTok = {
	time: 15,

	start: function (){
		intervalId = setInterval( tikTok.count, 1000)
	},

	stop: function (){
		clearInterval(intervalId)
	},

	count: function (){
		tikTok.time --
		$('#timer').html(tikTok.time)
		timeOut()
		danger()
	}


}

function clearButton(){

	$rightAnswer.removeClass('btn-success');
	$wrongAnswer.removeClass('btn-danger');
	clearInterval(nextQuestion);
	buttonLocked = false
	tikTok.time = 15
	$timer.css('color','black')
	tikTok.start()



} 

function timeOut() {
	console.log(tikTok.time)
	if (tikTok.time <= 0){
	tikTok.stop();
	wrongAnswers ++;
	$correct.html(correctAnswers);
	$incorrect.html(wrongAnswers);
	$rightAnswer.addClass('btn-success');
	$wrongAnswer.addClass('btn-danger'); 
	buttonLocked = true;
	nextQuestion = setInterval(interValFunc, 4000); 
	
	
	}
}

function danger() {
	if (tikTok.time <=5){
		$timer.css('color','red')
	}
}


$start.on('click', function() {
	$('#opener').addClass('disappear');
	$start.addClass('disappear');
	$containerQ1.removeClass('disappear'); 
	$correct.html(correctAnswers);
	$incorrect.html(wrongAnswers);
	tikTok.start();

});

	
 $answerButton.on('click', function() {
 	tikTok.stop()

 	if (buttonLocked === false){

	 			

		if ($(this).hasClass('rightAnswer')){
			correctAnswers ++;
			$correct.html(correctAnswers);
			$incorrect.html(wrongAnswers);
			$rightAnswer.addClass('btn-success');
			buttonLocked = true
			

		}
		else {
			wrongAnswers ++;
			$correct.html(correctAnswers);
			$incorrect.html(wrongAnswers);
			$rightAnswer.addClass('btn-success');
			$wrongAnswer.addClass('btn-danger');
			buttonLocked = true;
		}


			nextQuestion = setInterval(interValFunc, 4000);

	}


});

function interValFunc () { 
	if ($containerQ1.hasClass('disappear') === false && $rightAnswer.hasClass('btn-success')){
		$containerQ1.addClass('disappear');
		$containerQ2.removeClass('disappear');
		clearButton();
	

	} else if ($containerQ2.hasClass('disappear') === false && $rightAnswer.hasClass('btn-success')){
		$containerQ2.addClass('disappear');
		$containerQ3.removeClass('disappear');
		clearButton();
		

	} else if ($containerQ3.hasClass('disappear') === false && $rightAnswer.hasClass('btn-success')){
		$containerQ3.addClass('disappear');
		$containerQ4.removeClass('disappear');
		clearButton();

		
	} else if ($containerQ4.hasClass('disappear') === false && $rightAnswer.hasClass('btn-success')){
		$containerQ4.addClass('disappear');
		$containerQ5.removeClass('disappear');
		clearButton();
	
	} else if ($containerQ5.hasClass('disappear') === false && $rightAnswer.hasClass('btn-success')){
		$containerQ5.addClass('disappear');
		$containerResults.removeClass('disappear');
		clearButton();
		tikTok.stop();
	}
		
}


});

