window.onscroll = function() {scrollFunc()};

const scrollFunc = () => {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
    document.querySelector('#logo').style.width = '74px';
    document.querySelector('.topnav').style.top = '0';
  } else {
    document.querySelector('#logo').style.width = '115px';
    document.querySelector('.topnav').style.top = '15px';

  }
}


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.icon')) {
    // console.log('yep')
    document.querySelector('.topnav').className = 'topnav'
  }
}


