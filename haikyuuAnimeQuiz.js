var readline=require('readline-sync')
const questions=[
  '1. What does Kageyama call Hinata? \n a. Hinata Boke b. Hinata my love c. Baka\n',
  'w. Who is the best jump server until the last season? \n a. Tadashi b. Miya Atsumu c. Tsukishima Kei\n',
  '3. Who is Kageyama afraid of the most? \n a. Daichi b. Tooru c. Hinata\n',
  '4. What is Tooru called by Hinata? \n  a. King b. Great King c. Tooru San\n',
  '5. What is Hinata called? \n a. Best Decoy b. Ace c. Little Giant\n',

]
const answers=[
  'a','b','b','b','a'
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