var darkBtn = document.getElementById('nav-darkToggle-btn');
var body = document.getElementById('body');

function darkToggle(){
  if (darkBtn.className == 'nav-darkToggle-btn') {
    console.log(darkBtn.className);
    darkBtn.classList.add('on');
    body.className = 'dark';
  } else {
    darkBtn.classList.remove('on');
    body.classList.remove('dark');
  }
  console.log(darkBtn.classList);
}

darkBtn.addEventListener('click', darkToggle, false);