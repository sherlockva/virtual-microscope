img = document.querySelectorAll(".img");
img2 = document.querySelectorAll(".img2");
bdy = document.getElementById("body");
view = document.getElementById("view");
view2 = document.getElementById("view2");

class Node {
  constructor(s1, s2) {
    this.s1 = s1;
    this.s2 = s2;
  }
}

const s = new Node(img, img2);
console.log(s.s1[0].currentSrc);

// s = Array.from(img);
var index = 0,
  count = 0,
  opac = 0,
  angle = 0;

function Start() {
  for (let i = 0; i < s.s1.length; i++) {
    s.s1[i].style.visibility = `hidden`; //for s1
    s.s2[i].style.visibility = `hidden`; //for s2
  }

  // for s1
  s.s1[0].style.visibility = `visible`;
  s.s1[1].style.visibility = `visible`;
  s.s1[1].style.rotate = `-10deg`;
  s.s1[0].style.opacity = 1;
  s.s1[1].style.opacity = 0;
  //for s2
  s.s2[0].style.visibility = `visible`;
  s.s2[1].style.visibility = `visible`;
  s.s2[1].style.rotate = `-10deg`;
  s.s2[0].style.opacity = 1;
  s.s2[1].style.opacity = 0;
  count = 0;
  angle = 0;
  opac = 0;
  index = 0;
  view.innerText = angle + " deg";  //for s1
  view2.innerText = angle + " deg"; //for s2
}

Start();

function reStart() {
  console.log("restarted");
  for (let i = 0; i < s.s1.length; i++) {
    //for s1
    s.s1[i].style.visibility = `hidden`;
    s.s1[i].style.rotate = `180deg`;
    //for s2
    s.s2[i].style.visibility = `hidden`;
    s.s2[i].style.rotate = `180deg`;
  }
  //for s1
  s.s1[0].style.visibility = `visible`;
  s.s1[1].style.visibility = `visible`;
  s.s1[1].style.rotate = `-10deg`;
  s.s1[0].style.opacity = 1;
  s.s1[1].style.opacity = 0;
  //for s2
  s.s2[0].style.visibility = `visible`;
  s.s2[1].style.visibility = `visible`;
  s.s2[1].style.rotate = `-10deg`;
  s.s2[0].style.opacity = 1;
  s.s2[1].style.opacity = 0;
  count = 0;
  opac = 0;
  index = 0;
  view.innerText = angle + " deg";  //for s1
  view2.innerText = angle + " deg"; //for s2
}

function reBack() {
  console.log("reback is called");
  //for s1
  s.s1[index].style.visibility = `hidden`;
  s.s1[index + 1].style.visibility = `hidden`;
  //for s2
  s.s2[index].style.visibility = `hidden`;
  s.s2[index + 1].style.visibility = `hidden`;
  index = 17;
  count = 10;
  opac = 1;
  //for s1
  s.s1[index + 1].style.visibility = `visible`;
  s.s1[index].style.visibility = `visible`;
  s.s1[index].style.rotate = `10deg`;
  s.s1[index + 1].style.opacity = 1;
  s.s1[index].style.opacity = 1;
  //for s2
  s.s2[index + 1].style.visibility = `visible`;
  s.s2[index].style.visibility = `visible`;
  s.s2[index].style.rotate = `10deg`;
  s.s2[index + 1].style.opacity = 1;
  s.s2[index].style.opacity = 1;
  console.log(count + " " + opac + " " + angle + " " + index + " reback");
}

function img_change_clock_rotation(i) {
  if (i < 18) {
    console.log("forward function called for index = " + i);

    if (angle < 180) {
      //for s1
      s.s1[i].style.rotate = `${count}deg`;
      s.s1[i + 1].style.rotate = `${count - 10}deg`;
      s.s1[i + 1].style.opacity = `${opac}`;
      //for s2
      s.s2[i].style.rotate = `${count}deg`;
      s.s2[i + 1].style.rotate = `${count - 10}deg`;
      s.s2[i + 1].style.opacity = `${opac}`;
      console.log(count + " " + opac + " " + angle + " " + i + " f");
      view.innerText = angle + " deg"; //for s1
      view2.innerText = angle + " deg"; //for s2
    } else {
      //for s1
      s.s1[i].style.rotate = `${count + 180}deg`;
      s.s1[i + 1].style.rotate = `${count + 180 - 10}deg`;
      s.s1[i + 1].style.opacity = `${opac}`;
      //for s2
      s.s2[i].style.rotate = `${count + 180}deg`;
      s.s2[i + 1].style.rotate = `${count + 180 - 10}deg`;
      s.s2[i + 1].style.opacity = `${opac}`;
      console.log(count + " " + opac + " " + angle + " " + i + " f");
      view.innerText = angle + " deg"; //for s1
      view2.innerText = angle + " deg"; //for s2
    }
    opac = 0;
    count = 0;
    index++;
    if (index == 18) reStart();
    console.log("index change to " + index);
    console.log(count + " " + opac + " " + angle + " " + i);

    if (index > 0){
      // edge case for index = 0 and user presses key = 37.
      s.s1[index - 1].style.visibility = `hidden`; //for s1
      s.s2[index - 1].style.visibility = `hidden`; //for s2
    }
    
    //for s1
    s.s1[index].style.visibility = `visible`;
    s.s1[index + 1].style.visibility = `visible`;
    s.s1[index + 1].style.rotate = `-10deg`;
    s.s1[index].style.opacity = 1;
    s.s1[index + 1].style.opacity = 0;
    //for s2
    s.s2[index].style.visibility = `visible`;
    s.s2[index + 1].style.visibility = `visible`;
    s.s2[index + 1].style.rotate = `-10deg`;
    s.s2[index].style.opacity = 1;
    s.s2[index + 1].style.opacity = 0;
  } else return;
}

function img_change_antiClock_rotation(i) {
  if (i >= 0 && i < 18) {
    console.log("backward function called for index = " + i);

    if (angle < 180) {
      //for s1
      s.s1[i].style.rotate = `${count}deg`;
      s.s1[i + 1].style.rotate = `${count - 10}deg`;
      s.s1[i + 1].style.opacity = `${opac}`;
      //for s2
      s.s2[i].style.rotate = `${count}deg`;
      s.s2[i + 1].style.rotate = `${count - 10}deg`;
      s.s2[i + 1].style.opacity = `${opac}`;
      console.log(count + " " + opac + " " + angle + " " + i + "b");
      view.innerText = angle + " deg"; //for s1
      view2.innerText = angle + " deg"; //for s2
    } else {
      //for s1
      s.s1[i].style.rotate = `${count + 180}deg`;
      s.s1[i + 1].style.rotate = `${count + 180 - 10}deg`;
      s.s1[i + 1].style.opacity = `${opac}`;
      //for s2
      s.s2[i].style.rotate = `${count + 180}deg`;
      s.s2[i + 1].style.rotate = `${count + 180 - 10}deg`;
      s.s2[i + 1].style.opacity = `${opac}`;
      console.log(count + " " + opac + " " + angle + " " + i + "b");
      view.innerText = angle + " deg"; //for s1
      view2.innerText = angle + " deg"; //for s2
    }

    opac = 1;
    count = 10;
    index--;
    if (index == -1) Start();
    console.log("index change to " + index);
    //for s1
    s.s1[index + 2].style.visibility = `hidden`;
    s.s1[index].style.visibility = `visible`;
    s.s1[index].style.opacity = 1;
    //for s2
    s.s2[index + 2].style.visibility = `hidden`;
    s.s2[index].style.visibility = `visible`;
    s.s2[index].style.opacity = 1;
    if (index > 0){
      s.s1[index + 1].style.opacity = 1; //for s1
      s.s2[index + 1].style.opacity = 1; //for s2
    }
      
  } else return;
}

function callAt11() {
  console.log("callAt11 is called");
  index++;
  if (index == 18) {
    for (let i = 0; i < s.s1.length; i++) {
      //for s1
      s.s1[i].style.visibility = `hidden`;
      s.s1[i].style.rotate = `180deg`;
      //for s2
      s.s2[i].style.visibility = `hidden`;
      s.s2[i].style.rotate = `180deg`;
    }
    index = 0;
  }

  if (index > 0){
    s.s1[index - 1].style.visibility = `hidden`; //fro s1
    s.s2[index - 1].style.visibility = `hidden`; //for s2
  }
  
  //for s1
  s.s1[index].style.visibility = `visible`;
  s.s1[index + 1].style.visibility = `visible`;
  s.s1[index + 1].style.rotate = `-10deg`;
  s.s1[index].style.opacity = 1;
  s.s1[index + 1].style.opacity = 0;
  //for s2
  s.s2[index].style.visibility = `visible`;
  s.s2[index + 1].style.visibility = `visible`;
  s.s2[index + 1].style.rotate = `-10deg`;
  s.s2[index].style.opacity = 1;
  s.s2[index + 1].style.opacity = 0;
  count = 1;
  opac = 0.1;
  if (angle < 180) {
    //for s1
    s.s1[index].style.rotate = `${count}deg`;
    s.s1[index + 1].style.rotate = `${count - 10}deg`;
    s.s1[index + 1].style.opacity = `${opac}`;
    //for s2
    s.s2[index].style.rotate = `${count}deg`;
    s.s2[index + 1].style.rotate = `${count - 10}deg`;
    s.s2[index + 1].style.opacity = `${opac}`;
    console.log(count + " " + opac + " " + angle + " " + index + "f");
    view.innerText = angle + " deg"; //for s1
    view2.innerText = angle + " deg"; //for s2
  } else {
    //for s1
    s.s1[index].style.rotate = `${count + 180}deg`;
    s.s1[index + 1].style.rotate = `${count + 180 - 10}deg`;
    s.s1[index + 1].style.opacity = `${opac}`;
    //for s2
    s.s2[index].style.rotate = `${count + 180}deg`;
    s.s2[index + 1].style.rotate = `${count + 180 - 10}deg`;
    s.s2[index + 1].style.opacity = `${opac}`;
    console.log(count + " " + opac + " " + angle + " " + index + "f");
    view.innerText = angle + " deg"; //for s1
    view2.innerText = angle + " deg"; //for s2
  }
}

function callAtNeg1() {
  console.log("callAtNeg1 is called");
  index--;
  if (index == -1) index = 17;
  if (index < 17){
    s.s1[index + 2].style.visibility = `hidden`; //for s1
    s.s2[index + 2].style.visibility = `hidden`; //for s2
  }
  
  //for s1
  s.s1[index].style.visibility = `visible`;
  s.s1[index + 1].style.visibility = `visible`;
  //for s2
  s.s2[index].style.visibility = `visible`;
  s.s2[index + 1].style.visibility = `visible`;
  count = 9;
  opac = 0.9;
  if (angle < 180) {
    //for s1
    s.s1[index].style.rotate = `${count}deg`;
    s.s1[index + 1].style.rotate = `${count - 10}deg`;
    s.s1[index + 1].style.opacity = `${opac}`;
    //for s2
    s.s2[index].style.rotate = `${count}deg`;
    s.s2[index + 1].style.rotate = `${count - 10}deg`;
    s.s2[index + 1].style.opacity = `${opac}`;
    console.log(count + " " + opac + " " + angle + " " + index + "b");
    view.innerText = angle + " deg"; //for s1
    view2.innerText = angle + " deg"; //for s2
  } else {
    //for s1
    s.s1[index].style.rotate = `${count + 180}deg`;
    s.s1[index + 1].style.rotate = `${count + 180 - 10}deg`;
    s.s1[index + 1].style.opacity = `${opac}`;
    //for s2
    s.s2[index].style.rotate = `${count + 180}deg`;
    s.s2[index + 1].style.rotate = `${count + 180 - 10}deg`;
    s.s2[index + 1].style.opacity = `${opac}`;
    console.log(count + " " + opac + " " + angle + " " + index + "b");
    view.innerText = angle + " deg"; //for s1
    view2.innerText = angle + " deg"; //for s2
  }
}

function reStartAt360() {
  for (let i = 0; i < s.length; i++) {
    //for s1
    s.s1[i].style.visibility = `hidden`;
    s.s1[i].style.rotate = `179deg`;
    //for s2
    s.s2[i].style.visibility = `hidden`;
    s.s2[i].style.rotate = `179deg`;
  }
  //for s1
  s.s1[17].style.visibility = `visible`;
  s.s1[18].style.visibility = `visible`;
  s.s1[17].style.rotate = `10deg`;
  s.s1[17].style.opacity = 1;
  s.s1[18].style.opacity = 0.9;
  //for s2
  s.s2[17].style.visibility = `visible`;
  s.s2[18].style.visibility = `visible`;
  s.s2[17].style.rotate = `10deg`;
  s.s2[17].style.opacity = 1;
  s.s2[18].style.opacity = 0.9;
  
  count = 9;
  opac = 0.9;
  index = 17;
  angle = 359;
  view.innerText = angle + " deg"; //for s1
  view2.innerText = angle + " deg"; //for s2
}

bdy.addEventListener("keydown", (i) => {
  if (count >= 0 && count <= 10) {
    if (i.keyCode === 39) {
      count++;
      angle++;
      opac = opac + 0.1;
      if (angle == 360) Start();
      if (count == 11) callAt11(i);
      else if (count == 10) {
        // case for clockwise rotation.
        img_change_clock_rotation(index);
      } else {
        if (angle <= 180) {
          //for s1
          s.s1[index].style.rotate = `${count}deg`;
          s.s1[index + 1].style.rotate = `${count - 10}deg`;
          //for s2
          s.s2[index].style.rotate = `${count}deg`;
          s.s2[index + 1].style.rotate = `${count - 10}deg`;
        } else {
          console.log("working after 180");
          //for s1
          s.s1[index].style.rotate = `${count + 180}deg`;
          s.s1[index + 1].style.rotate = `${count + 180 - 10}deg`;
          //for s2
          s.s2[index].style.rotate = `${count + 180}deg`;
          s.s2[index + 1].style.rotate = `${count + 180 - 10}deg`;
        }
        s.s1[index + 1].style.opacity = `${opac}`;
        s.s2[index + 1].style.opacity = `${opac}`;
        console.log(count + " " + opac + " " + angle + " " + index);
        view.innerText = angle + " deg"; //for s1
        view2.innerText = angle + " deg"; //for s2
      }
    } else if (i.keyCode === 37) {
      count--;
      angle--;
      opac = opac - 0.1;
      if (angle == -1) reStartAt360();
      if (angle == 180) reBack();
      if (count == -1) callAtNeg1();
      else if (count == 0) {
        // case for anti clockwise rotation.
        img_change_antiClock_rotation(index);
      } else {
        if (angle <= 180) {
          //for s1
          s.s1[index].style.rotate = `${count}deg`;
          s.s1[index + 1].style.rotate = `${count - 10}deg`;
          //for s2
          s.s2[index].style.rotate = `${count}deg`;
          s.s2[index + 1].style.rotate = `${count - 10}deg`;
        } else {
          console.log("working after 180");
          //for s1
          s.s1[index].style.rotate = `${count + 180}deg`;
          s.s1[index + 1].style.rotate = `${count + 180 - 10}deg`;
          //for s2
          s.s2[index].style.rotate = `${count + 180}deg`;
          s.s2[index + 1].style.rotate = `${count + 180 - 10}deg`;
        }

        s.s1[index + 1].style.opacity = `${opac}`; //for s1
        s.s2[index + 1].style.opacity = `${opac}`; //for s2
        console.log(count + " " + opac + " " + angle + " " + index);
        view.innerText = angle + " deg"; //for s1
        view2.innerText = angle + " deg"; //for s2
      }
    }
  }
});
