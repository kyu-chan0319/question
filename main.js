const titleText = document.getElementById('title');  
const questionText = document.getElementById('question');
const textbox = document.getElementById('description');
let value;
const btn = document.getElementById('btn');
const button = document.getElementById('ans-btn');

//サウンドの宣言
const correctAudio = new Audio();
correctAudio.src = 'correct.mp3';

const incorrectAudio = new Audio();
incorrectAudio.src = 'incorrect.mp3';

const returnAudio = new Audio();
returnAudio.src = 'return.mp3';

const maruImg = document.getElementById('maru')
const batsuImg = document.getElementById('batsu')

let sum;
let correctAnswer;

//問題
const questions = [
  {question: '平成は何年度に終わったでしょうか。', answer: '31年'},
  {question: 'マイメロの出身地はどこでしょうか。', answer: 'マリーランド'},
  {question: 'どんなに頼んでも、売ってくれない人のお仕事はなんでしょう。', answer: '占い師'},
  {question: 'カメとラクダとサイが買い物をしてます。何を買うでしょうか。', answer: 'カメラ'}
];

//問題数カウントする
function writeQuestion() {
  titleText.textContent = `第${sum + 1}問`;
  questionText.textContent = questions[sum].question;
}

//解答押すと行われる
function onAnswer(ans) {
  value = textbox.value; 
  // value = imgSrc.value;

//イベント処理の中断
if (value === '') {
    returnAudio.play();
    alert("入力されていません。");
    return false;
}

//解答押すと行われる
  if (value === questions[sum].answer) {
    console.log('正解');
    correctAnswer++;
    maruImg.style.visibility = 'visible';
    setTimeout(function(){
      maruImg.style.visibility = 'hidden';
    },500);
    correctAudio.play();
  } else {
    console.log('不正解');
    batsuImg.style.visibility = 'visible';
    setTimeout(function(){
      batsuImg.style.visibility = 'hidden';
    },500);
    incorrectAudio.play();
  }
  
  sum++

//結果の表示
  if (sum >= questions.length) {
    alert(`${questions.length}問中${correctAnswer}問正解です`);
    onStart();
  } else {
    writeQuestion();
  }

  //TextBoxの文字リセット
  console.log(value)
  textbox.value = '';
}
function onStart() {
  sum = 0;
  correctAnswer = 0;
  writeQuestion();

  console.log(button);
}


onStart();