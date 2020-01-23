window.onscroll = function() {scrollFunc()};

const scrollFunc = () => {
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350){
    document.querySelector('#logo').style.width = '60px';
    document.querySelector('.topnav').style.top = '0';
  } else {
    document.querySelector('#logo').style.width = '100px';
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

// const handleMouseOverBox = (e) => {
//   const targ =  e.target
//   console.log(targ.className)
//   // targ.childNodes[3].style.color = 'green'
// }