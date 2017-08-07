var answers = 0;
var userName = prompt('Hey! Whats your name?');
console.log('Username is: ' + userName);

function questions (promptMsg, correctAnswer, correctMsg, wrongMsg) {
  var userInput = prompt ( promptMsg ).toLowerCase();
  console.log('Did ' + userName + ' answer the question correctly? ' + correctAnswer );

  if ( userInput === correctAnswer || userInput === correctAnswer.charAt()) {
    alert(correctMsg);
    answers++;

  } else {
    alert( wrongMsg );

  }
}

questions( 'Is my favorite Pokemon Charizard?', 'no', 'Correct! Sylveon is my favorite!', 'Oh dang sorry ' + userName + ' It is actually Sylveon!' );

questions( 'Do I like coffee?', 'no', 'Ding, Ding, Ding! Correct, I do not like coffee.', 'Oh sorry ' + userName + ' incorrect, I do not like coffee.' );

questions('Was I born in Portland?', 'yes', 'haha ya, Portlandia ftw!', 'Of course I was, silly goose!' );

questions( 'Have I been sky diving?', 'yes', 'Hell ya! Such an amazing experience, highly recommend.', 'I might be scared of heights, but yes I have been sky diving.');

questions( 'Is my favorite color Red?', 'no', 'Correct! It is Blue.', 'No way! Any shade of blue is my favorite!');

for (var i = 0; i < 4; i ++ ) {
  var miles = parseInt(prompt('How many miles did I run yesterday?'));
  console.log('User thinks Zach ran ' + miles + ' miles.' );

  if (miles === 0) {
    alert('Sad but true.');
    console.log('Sad but true.');
    answers++;
    break;
  } else if (miles < 0 ) {
    alert('haha no way! Thats low.');
  } else if ( miles > 0 ) {
    alert(' A little high!');
  } else {
    alert('Please enter a #');
  }
}

for (var i = 0; i < 6; i ++ ) {
  var cityLived = [ 'aloha', 'beaverton', 'tigard', 'hillsboro' ];
  var userGuess = prompt('Which cities in Oregon do you think I have lived in? Besides Portland!!').toLowerCase();
  console.log('User thinks I have lived in: ' + userGuess );

  if (cityLived.indexOf (userGuess) === -1) {
    alert('Oh dang, that is wrong. Try Again! ' + ( 5 - i) + ' tries left.');
    if (i === 5 ) {
      alert('Here are all the answers! ' + cityLived );
    }
  } else {
    alert('Omgsh ya! How did you know?');
    answers ++;
    break;
  }
}

alert(userName + ' you got ' + answers + ' questions right!');
console.log(userName + ' answered ' + answers + ' questions correctly!');