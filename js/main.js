'use strict';

const cards = document.getElementById('cards');
const check = document.getElementById('check');
const retry = document.getElementById('retry');
const userName = document.getElementById('user_name');

userName.focus();

check.addEventListener('click', () => {
  const msgs = [
    '給食の進化を遂げた',
    '太鼓より蘇った',
    '最も恐れられた女',
  ];
  const jobs = [
    {name: '勇者', img: 'hero.gif'},
    {name: '魔法使い', img: 'wizard.gif'},
    {name: '武闘家', img: 'fighter.gif'},
  ];

  const types = [
    {name: 'その保脳を全てを焼き尽くす', img: 'bg-fire'},
    {name: 'その清水寺の全てを浄化する', img: 'bg-water'},
    {name: 'その雷撃は万物の怒りを鎮め', img: 'bg-thunder'},
  ];

  let msg;
  let job;
  let type;

  const resultImg = document.getElementById('result_img');
  const tweet = document.getElementById('tweet');
  let tweetUrl;

  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

function setTextContent(id, text) {
  document.getElementById(id).textContent = text;
}

if(userName.value ==='' || userName.value.length > 10) {
  userName.value = '名無し';
}

msg = getRandomElement(msgs);
job = getRandomElement(jobs);
type = getRandomElement(types);

tweetUrl =
  'https://twitter.com/intent/tweet?text=' +
  encodeURIComponent(
    userName.value + 'さんは' +
    msg +
    job.name + 'でした!!'
  ) +
    '&hashtags=キャラ診断';

setTextContent('result_name', userName.value);
setTextContent('result_msg', msg);
setTextContent('result_job', job.name);
resultImg.children[0].src = 'img/' + job.img;
setTextContent('result_type', type.name);
resultImg.classList.add(type.img);

//ツイート機能
tweet.href = tweetUrl;

  cards.classList.add('move');

});

retry.addEventListener('click', () => {
  cards.classList.remove('move');
  userName.value = '';
  userName.focus();
});
