function myFunction(x) {
    x.classList.toggle("change");
  }

  function navBar(){
    const navMobile=document.getElementById('mobileShow');
    navMobile.style.display='flex';
  }

  function navBarcross(){
    const navMobile=document.getElementById('mobileShow');
    navMobile.style.display='none';
  }
//   Editor's Picks
  function eproductChange(){
    const eproduct= document.getElementById('imgchange');
    eproduct.src='./img/fc1-1.webp';
  }
  function eproductChange1(){
    const eproduct= document.getElementById('imgchange');
    eproduct.src='./img/e1-2.webp';
  }
  function eproductChange2(){
    const eproduct= document.getElementById('imgchange');
    eproduct.src='./img/fc1-3.webp';
  }

  function eproductChange3(){
    const eproduct= document.getElementById('imgchange2');
    eproduct.src='./img/e2-1.webp';
  }
  function eproductChange4(){
    const eproduct= document.getElementById('imgchange2');
    eproduct.src='./img/e2-2.webp';
  }
  function eproductChange5(){
    const eproduct= document.getElementById('imgchange2');
    eproduct.src='./img/e2-3.webp';
  }

  function eproductChange6(){
    const eproduct= document.getElementById('imgchange3');
    eproduct.src='./img/e3-1.webp';
  }
  function eproductChange7(){
    const eproduct= document.getElementById('imgchange3');
    eproduct.src='./img/e3-2.webp';
  }
  function eproductChange8(){
    const eproduct= document.getElementById('imgchange3');
    eproduct.src='./img/e3-3.webp';
  }

  function eproductChange9(){
    const eproduct= document.getElementById('imgchange4');
    eproduct.src='./img/e4-1.webp';
  }
  function eproductChange10(){
    const eproduct= document.getElementById('imgchange4');
    eproduct.src='./img/e4-2.webp';
  }
  function eproductChange11(){
    const eproduct= document.getElementById('imgchange4');
    eproduct.src='./img/e4-3.webp';
  }

  function editorBtnshow(){
    document.getElementById('editorbtnshow').style.display='flex';
  }
  function editorBtnshow2(){
    document.getElementById('editorbtnshow2').style.display='flex';
  }
  function editorBtnshow3(){
    document.getElementById('editorbtnshow3').style.display='flex';
  }
  function editorBtnshow4(){
    document.getElementById('editorbtnshow4').style.display='flex';
  }

  (function(){
    // Targeted date
    var countDownDate = new Date("April 2, 2024 23:59:59").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {
        // Get current date and time
        var now = new Date().getTime();
        // Time to the date
        var timeToDate = countDownDate - now;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(timeToDate / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeToDate % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeToDate % (1000 * 60)) / 1000);
        // Display the result in the element with id="counter"
        document.getElementById("counter").innerHTML = days +"d " +' '+ hours + "h " +' '+ minutes + "m " +' '+ seconds +"s";
        // If the countdown is finished, display a message 
        if (timeToDate < 0) {
            clearInterval(x);
            document.getElementById("counter").innerHTML = "Countdown finished";
        }
    }, 1000);

})();


// shop this look

function shopImgchange(){
    const shop= document.getElementById('shopimgchange');
    shop.src='./img/s-2.webp';
  }
  function shopImgchange1(){
    const shop= document.getElementById('shopimgchange');
    shop.src='./img/s-4.webp';
  }


//   light slider

