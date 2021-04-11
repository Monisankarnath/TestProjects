var readline=require('readline-sync')
const questions=[
  '1. What is my age? \n a. 22 b. 23 c. 24\n',
  'w. What is my favourite Indian Dish? \n a. Chicken Biriyani b. Mutton Biriyani c. PaniPuri\n',
  '3. What is my current gaming name? \n a. IamMoni b. Warrior c. Senshi\n',
  '4. In which city am I currently living in? \n  a. Guwahati b. Silchar c. Jorhat\n',
  '5. Which language am I good in programming? \n a. Java b. JS c. Python\n',

]
const answers=[
  'a','b','c','b','a'
]

const quiz=()=>{
  var marks =0;
  var maxScore=3;
  for(let i=0;i<answers.length;i++){
    var ans=readline.question(questions[i]);
    if(ans===answers[i]) marks++;
  }
  console.log('Total Marks obtained : ',marks)
  if(marks>maxScore) console.log('Congrats, you broke the record!');
  else console.log('You failed to break the record.')
}
quiz()