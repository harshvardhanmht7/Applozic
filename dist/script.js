var count = 1;

function Features(evt, cityName, btnid) {
  count = parseInt(btnid, 10);
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";


}


document.getElementById("1").click();

setInterval(

  function() {
    count++;
    if (count == 6) {
      count = 1;
    }

    var id = "" + count + "";
    document.getElementById(id).click();
  }

  , 5000);




//slides js



var count1 = 0;

function moveslide(n) {
  count1 = count1 + n;
  clickslide(count1);
}


function clickslide(n) {

  count1 = n;
  if (count1 === 3) {
    count1 = 0;
  }
  if (count1 === -1) {
    count1 = 2;
  }
  var totalsides = document.getElementsByClassName('slideimg');
  var totaldots = document.getElementsByClassName('dot');
  for (var i = 0; i < totalsides.length; i++) {
    totalsides[i].style.display = "none";

  }
  for (var i = 0; i < totaldots.length; i++) {

    totaldots[i].className = totaldots[i].className.replace(" active", "");
  }

  totalsides[count1].style.display = "block";
  totaldots[count1].className += " active";

}


clickslide(0);

setInterval(function() {
  moveslide(1)
}, 6000);
