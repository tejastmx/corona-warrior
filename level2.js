var box1 = document.getElementById("id1");
var box2 = document.getElementById("id2");
var box3 = document.getElementById("id3");
var box4 = document.getElementById("id4");
var box5 = document.getElementById("id5");
var box6 = document.getElementById("id6");
var box7 = document.getElementById("id7");
var box8 = document.getElementById("id8");
var box9 = document.getElementById("id9");
var box10 = document.getElementById("id10");
var box11 = document.getElementById("id11");
var box12 = document.getElementById("id12");
var box13 = document.getElementById("id13");
var box14 = document.getElementById("id14");
var box15 = document.getElementById("id15");
var box16 = document.getElementById("id16");
var box17 = document.getElementById("id17");
var box18 = document.getElementById("id18");
var box19 = document.getElementById("id19");
var box20 = document.getElementById("id20");
var box21 = document.getElementById("id21");
var box22 = document.getElementById("id22");
var box23 = document.getElementById("id23");
var box24 = document.getElementById("id24");
var box25 = document.getElementById("id25");
var box26 = document.getElementById("id26");
var box27 = document.getElementById("id27");
var box28 = document.getElementById("id28");
var box29 = document.getElementById("id29");
var box30 = document.getElementById("id30");
var box31 = document.getElementById("id31");
var box32 = document.getElementById("id32");
var box33 = document.getElementById("id33");
var box34 = document.getElementById("id34");
var box35 = document.getElementById("id35");
var box36 = document.getElementById("id36");
var box37 = document.getElementById("id37");
var box38 = document.getElementById("id38");
var box39 = document.getElementById("id39");
var box40 = document.getElementById("id40");
var box41 = document.getElementById("id41");
var box42 = document.getElementById("id42");
var box43 = document.getElementById("id43");
var box44 = document.getElementById("id44");
var box45 = document.getElementById("id45");
var box46 = document.getElementById("id46");
var box47 = document.getElementById("id47");
var box48 = document.getElementById("id48");
var box49 = document.getElementById("id49");
var box50 = document.getElementById("id50");
var box51 = document.getElementById("id51");
var box52 = document.getElementById("id52");
var box53 = document.getElementById("id53");
var box54 = document.getElementById("id54");
var box55 = document.getElementById("id55");
var box56 = document.getElementById("id56");
var box57 = document.getElementById("id57");
var box58 = document.getElementById("id58");
var box59 = document.getElementById("id59");
var box60 = document.getElementById("id60");
var box61 = document.getElementById("id61");
var box62 = document.getElementById("id62");
var box63 = document.getElementById("id63");
var box64 = document.getElementById("id64");
var box65 = document.getElementById("id65");
var box66 = document.getElementById("id66");
var box67 = document.getElementById("id67");
var box68 = document.getElementById("id68");
var box69 = document.getElementById("id69");
var box70 = document.getElementById("id70");
var box71 = document.getElementById("id71");
var box72 = document.getElementById("id72");
var box73 = document.getElementById("id73");
var box74 = document.getElementById("id74");
var box75 = document.getElementById("id75");

////-------grid-array------------------------
var arrdiv = [
  box1,
  box2,
  box3,
  box4,
  box5,
  box6,
  box7,
  box8,
  box9,
  box10,
  box11,
  box12,
  box13,
  box14,
  box15,
  box16,
  box17,
  box18,
  box19,
  box20,
  box21,
  box22,
  box23,
  box24,
  box25,
  box26,
  box27,
  box28,
  box29,
  box30,
  box31,
  box32,
  box33,
  box34,
  box35,
  box36,
  box37,
  box38,
  box39,
  box40,
  box41,
  box42,
  box43,
  box44,
  box45,
  box46,
  box47,
  box48,
  box49,
  box50,
  box51,
  box52,
  box53,
  box54,
  box55,
  box56,
  box57,
  box58,
  box59,
  box60,
  box61,
  box62,
  box63,
  box64,
  box65,
  box67,
  box68,
  box69,
  box70,
  box71,
  box72,
  box73,
  box74,
  box75,
];

var count = 0;
var count1 = 75;
var health = 0;
var count2 = 75;
var position1 = 0; //position of player-1
var position = 0;
var position2 = 0; //position of player-2

//------------PROMPT----------------------------------
var name = prompt("Enter player name");
document.getElementById("player-1").innerHTML = name;

//----------AUDIO------------------------------------------
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

function negative() {
  var n = document.getElementById("wrong");
  n.play();
}

//-----------PLAYER-1------------------------------
var imgindex = 0;
var button = document
  .getElementById("btn")
  .addEventListener("click", functionT);

function functionT() {
  imgindex = Math.floor(Math.random() * 4);

  // play();

  if (imgindex == 1) {
    count += 1;
  }
  if (imgindex == 2) {
    count += 2;
  }
  if (imgindex == 3) {
    count += 3;
  }
  if (imgindex == 4) {
    count += 4;
  }

  ///-----moving player on grid-------------------------------

  var i = document.getElementById("img1");

  if (count > 0) {
    position = count - 1;
    arrdiv[
      position
    ].innerHTML = `<img src ="human.png" id ="img1" height="80px" width ="80px">`;
    i.remove();
  }

  var igindex = Math.floor(Math.random() * 4);

  // play();

  ///---------------------------------

  if (igindex == 1) {
    count1 -= 1;
  }
  if (igindex == 2) {
    count1 -= 2;
  }
  if (igindex == 3) {
    count1 -= 3;
  }
  if (igindex == 4) {
    count1 -= 4;
  }
  //----------------------------------
  var iindex = Math.floor(Math.random() * 2);

  if (iindex == 1) {
    count2 -= 1;
  }
  if (iindex == 2) {
    count2 -= 2;
  }

  ///
  ///-----moving corona on grid-------------------------------

  var k = document.getElementById("img2");

  if (count1 > 0) {
    position1 = count1 - 1;
    arrdiv[
      position1
    ].innerHTML = `<img src ="corona.png" id ="img2" height="80px" width ="80px">`;

    k.remove();
  }
  //---------------
  var kk = document.getElementById("img3");

  if (count2 > 0) {
    position2 = count2 - 1;
    arrdiv[
      position2
    ].innerHTML = `<img src ="corona2.png" id ="img3" height="80px" width ="80px">`;

    kk.remove();
  }

  if (
    count == 5 ||
    count == 9 ||
    count == 15 ||
    count == 20 ||
    count == 25 ||
    count == 32 ||
    count == 44 ||
    count == 35 ||
    count == 42 ||
    count == 53 ||
    count == 61 ||
    count == 48 ||
    count == 64 ||
    count == 3 ||
    count == 17 ||
    count == 28 ||
    count == 38
  ) {
    play();
    health += 20;
    document.getElementById("health").innerHTML = "health = " + health + "%";
  }

  //

  if (count == 13 || count == 22 || count == 39 || count == 37) {
    health -= 10;
  }

  if (count > count1) {
    if (health > 100) {
      // document.getElementById("result").style.display = "block";
      // document.getElementById("result-won").innerHTML = name + " won !!";
      // count = 0;
      // count1 = 75;

      document.getElementById("img2").style.display = "none";
    } else {
      negative();
      document.getElementById("result").style.display = "block";
      document.getElementById("result-won").innerHTML = name + "  died !!!";
      count = 0;
      count1 = 75;
      health = 0;
    }
  }

  if (health > 120) {
    if (count > count2) {
      document.getElementById("img3").style.display = "none";
    }
  }

  if (count == 75 || count == 74 || count == 73 || count == 72) {
    document.getElementById("result").style.display = "block";
    document.getElementById("result-won").innerHTML =
      name + " reached to the market";
    // document.getElementById("ctn").style.display = "none";
  }

  // document.getElementById("again").addEventListener("click", function () {
  //   window.reload();
  // });
  // var z = document.getElementById("img2");

  // if (count3 > 0) {
  //   position1 = count3 - 1;
  //   arrdiv[
  //     position1
  //   ].innerHTML = `<img src ="corona.png" id ="img2" height="80px" width ="80px">`;

  //   z.remove();
  // }

  ///------------------POP-UP----------------------
  //     document.getElementById("popup").addEventListener("click", function () {
  //       document.getElementById("popup-1").classList.toggle("active");
  //     });
  //     document.getElementById("close-btn").addEventListener("click", function () {
  //       // document.getElementById("popup-1").classList.hide("active");
  //       document.getElementById("popup-1").style.display = "none";
  //       document.getElementById("popup").style.display = "none";
  //       document.getElementById("start-btn").disabled = false;
  //     });
  //   }
  // }
}
