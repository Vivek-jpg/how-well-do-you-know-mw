const chalk=require("chalk");


var readlineSync = require("readline-sync");

var score = 0;

function print(data){
  console.log(data);
}

print(chalk.magenta.bgWhite.bold("                            "));
print(chalk.black.green.bold("  How well do you know me? 🤨  "));
print(chalk.magenta.bgWhite.bold("                            "));
print("\n");

var highScore = [{
  name: "Sneha",
  score: 70,
},
{
  name: "shivani",
  score: 60
}]



var questions = [{
  question: "1. What is my name?\n\n1.vivek kumar\n2.rohit \n3.sunny\n\n",
  answer: "1"
},
{
  question: "2.What nickname did i have?\n\n1.HONEY\n2.sunny\n3.HARRY\n\n",
  answer: "2"
},
{
  question:"3. What is my dream car?\n\n1.BMW i8\n2.Audi R8\n3.aston martin\n\n",
  answer: "3"
},
{
  question: "4. which sport vivek likes to play?\n\n1.vollyballMan\n2.taekwondo\n3.boxing\n\n",
  answer: "3"
  
},
{
  question: "5. what is my cat name?\n\n1.bo\n2.pussy\n3.kitty\n\n",
  answer: "3"
},
{
  question: "6. i am good at in which subject?\n\n1.English\n2.Science\n3.drawing\n\n",
  answer: "3"
},
{
  question: "7.what is my hostel name?\n\n1.raman A\n2.raman B \n3.raman C\n\n",
  answer: "3"
},
{
  question: "8. which weather i like most?\n\n1.rain\n2.winter\n3.summer\n\n",
  answer: "1"

},
{
  question: "9.name of my bike?\n\n1.lela \n2.anarkali\n3.gaddi\n\n",
  answer: "2"
},
{
  question: "10. What is my favorite video game?\n\n1.Assassin's Creed 3\n2.Prince of Persia\n3.Call of duty\n\n",
  answer: "2"
}];


print("\n");


function welcome(){
  var userName = readlineSync.question(chalk.green("What's your name?\n"));
  print("\n");
  print(chalk.white.bgMagenta("Hello!" , chalk.strikethrough.bold(userName.toUpperCase()) + " 😀 " + " Welcome to the Game 🤓  "));
  

  print("\n");
  print(chalk.red.bold("Let's see How well do you know me?  😊😇😇 "));
  print("\n");
  print(chalk.green("Let's Begin! 😁 "));
  print("\n");
 
 }



function play(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase())
  {
    print(chalk.green.bold("You are right 🙂" ));
    score = score + 10;
  }else{
    print(chalk.redBright.bold("You are wrong 🙁"));
    score = score - 10;
    print("Correct answer is: "+ chalk.greenBright.bold(answer));
  }
  print(chalk.magentaBright.bold("curent score: "+ score));
  print(chalk.red.bold("___________________________________________________\n"));
}

function game(){

  for( var i=0; i<questions.length; i++){
   play(questions[i].question, questions[i].answer);
  }

       
  }


  

function showScore(){
  if(score<0){
    print("/n");
    print(chalk.whiteBright.bold.bgMagenta("😕  Your final score is: "+ score));
   print("\n");

  }else{
    print("\n");
    print(chalk.whiteBright.bold.bgMagenta("😁  Your final score is: "+ score));
    print("\n");
  }
  
  print(chalk.green.bold("___________________________________________________\n"));

  if(score > 70){
    print(chalk.redBright.bold("😲 You are amazing \nYou've Scored " + chalk.green.bold(score) + " now you are in our leaderBoard 😎\n Please share screenshot so that i can update leaderBoard 😁 "));
  }else 
  {
   print(chalk.yellow.bold("You don't know much about me🤨\n"));
  }

  print(chalk.green.bold("___________________________________________________\n"));
   print("\n");
    
    print(chalk.magenta.bgWhite.bold("_________________"));
print(chalk.magenta.bgWhite.bold.underline("  Leaderboad     "));
print(chalk.magenta.bgWhite.bold("                 \n"));

    
  highScore.map(score => console.log(chalk.black.bgWhite.bold(score.name, ":", score.score)))

 
}

welcome();
game();
showScore();
exit();
function exit(){
print("\n");
print(chalk.magenta("Thank you for playing this quiz. Have a nice day😊😇\n"));

 var v = readlineSync.question(chalk.green("Do you want to play again? 😊😇\n\nEnter YES or NO:\n"));

if(v.toUpperCase()==="YES"){
  print("\n")
  game();
  showScore();
}
else{
  print("Okay Buddy see you in the next quiz  ")
  
}

}