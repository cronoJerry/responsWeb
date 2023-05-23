const toggle = document.querySelector('#toggle');
const HbackC = document.querySelector('#headerBackground');
toggle.addEventListener('click', function (e) {
  e.preventDefault;
  const list = document.querySelector('#landing');
  if (list.style.display === 'none') {
    list.style.display = 'block';
    HbackC.style.backgroundColor = 'rgba(0,0,0,0.3)';
    document.querySelector('#navText').style.display = 'none';
  } else {
    list.style.display = 'none';
    HbackC.style.backgroundColor = 'rgba(0,0,0,0.0)';
    document.querySelector('#navText').style.display = 'block';
  }
});
if (localStorage.getItem('id')) {
  let email = window.localStorage.getItem('id');
  const welcome = document.querySelector('#welcome');
  welcome.innerHTML = `<h4><a href="#">장바구니</a><a href="#">마이페이지</a><a href="#">logout</a></h4><h4> ${email}님 환영합니다.</h4>`;
}

const wrapperDiv = document.querySelector('#wrapper');
const onePiece = [];
onePiece.push('bermu.jpeg');
onePiece.push('brion.jpeg');
onePiece.push('echis.jpeg');
onePiece.push('egnun.jpeg');
onePiece.push('empin.jpeg');
onePiece.push('menir.jpeg');
onePiece.push('bermu.jpeg');
onePiece.push('slowly.jpeg');
onePiece.push('tensi.jpeg');
onePiece.push('wisya.jpeg');
onePiece.push('egnun.jpeg');
onePiece.push('menir.jpeg');
const shirt = [];
shirt.push('librin.jpeg');
shirt.push('maine.jpeg');
shirt.push('merldung.jpeg');
shirt.push('oser.jpeg');
shirt.push('pirlDaily.jpeg');
shirt.push('rianne.jpeg');
shirt.push('ronti.jpeg');
shirt.push('wedom.jpeg');
shirt.push('yopna.jpeg');
shirt.push('librin.jpeg');
shirt.push('maine.jpeg');
shirt.push('rianne.jpeg');
const clothList = ['onePiece', 'shirt'];

for (let i = 0; i < 12; i++) {
  const gridDiv = document.createElement('div');
  gridDiv.className = `product${i}`;
  gridDiv.innerHTML = `<a href="#"><img src="../img/${clothList[0]}/${
    clothList[0] === clothList[0] ? onePiece[i] : shirt[i]
  }" /></a>`;
  wrapperDiv.append(gridDiv);
}

const product = [
  document.querySelector('.product0'),
  document.querySelector('.product1'),
  document.querySelector('.product2'),
  document.querySelector('.product3'),
  document.querySelector('.product4'),
  document.querySelector('.product5'),
  document.querySelector('.product6'),
  document.querySelector('.product7'),
  document.querySelector('.product8'),
  document.querySelector('.product9'),
  document.querySelector('.product10'),
  document.querySelector('.product11'),
];
let count = 0;
let nInterval = setInterval(changeImg, 2000);

function changeImg() {
  if (count > 1) {
    count = 0;
  }
  for (let k = 0; k < 12; k++) {
    product[k].innerHTML = `<a href="#"><img src="../img/${clothList[count]}/${
      clothList[count] === clothList[0] ? onePiece[k] : shirt[k]
    }" /></a>`;
  }
  count++;
}

function reloading() {
  location.reload();
}

