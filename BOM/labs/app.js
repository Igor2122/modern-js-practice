<<<<<<< HEAD
function setPlusIcon() {
    let alLis = document.getElementsByTagName('li');
    
    for (var i = 0; i < alLis.length; i++) {
        let li = alLis[i];
        let alULs = li.getElementsByTagName('ul');
        console.log(alULs);
        if(alULs > 0){
            
                console.log('hello');
            if(alULs[0].className == 'expandable'){
                li.style.listStyleImage = "url('img/9-512.png')";
            }
        }

    }
}

setPlusIcon();
=======
window.onload = setPlusIcon;


function setPlusIcon() {
  let allLi = document.getElementsByTagName('li');
  for (let i = 0; i < allLi.length; i++) {
    let li = allLi[i];
    let allUl = li.getElementsByTagName('ul');
    if (allUl.length > 0) {
      if (allUl[0].className == 'expandable') {
        li.style.listStyleImage = 'url("img/plus.gif")';
      }
    }
  }
}

let links = document.getElementsByTagName('a');
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', aClick, false);
}

function aClick(e) {
  e = e || event;

  let clicked = e.target.parentNode || e.srcElement;
  let li = clicked.parentNode;
  console.log(clicked);
  let ul = clicked.getElementsByTagName('ul');
  if (ul.length == 0) {
    return true;
  }
  if (ul[0].style.display == 'block') {
    ul[0].style.display = '';
    li.style.listStyleImage = 'url("img/plus.gif")';
  } else {
    ul[0].style.display = 'block';
    li.style.listStyleImage = 'url("img/point.gif")';
  }
  try {
    e.preventDefault();
  } catch (x) {
    e.returnValue = false;
  }
}
>>>>>>> master
