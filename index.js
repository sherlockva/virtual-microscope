     img = document.querySelectorAll(".img");
      bdy = document.getElementById("body");
      view = document.getElementById("view");

      s = Array.from(img);
      var index = 0,
        count = 0,
        opac = 0,
        angle = 0;

      function Start() {
        for (let i = 0; i < s.length; i++) {
          s[i].style.visibility = `hidden`;
        }

        s[0].style.visibility = `visible`;
        s[1].style.visibility = `visible`;
        s[1].style.rotate = `-10deg`;
        s[0].style.opacity = 1;
        s[1].style.opacity = 0;
        count = 0;
        angle = 0;
        opac = 0;
        index = 0;
        view.innerText = angle + " deg";
      }

      Start();

      function reStart() {
        console.log("restarted");
        for (let i = 0; i < s.length; i++) {
          s[i].style.visibility = `hidden`;
          s[i].style.rotate = `180deg`;
        }
        s[0].style.visibility = `visible`;
        s[1].style.visibility = `visible`;
        s[1].style.rotate = `-10deg`;
        s[0].style.opacity = 1;
        s[1].style.opacity = 0;
        count = 0;
        //angle = 180;
        opac = 0;
        index = 0;
        view.innerText = angle + " deg";
      }

      function reBack() {
        console.log("reback is called");
        s[index].style.visibility = `hidden`;
        s[index + 1].style.visibility = `hidden`;
        index = 17;
        count = 10;
        opac = 1;
        s[index + 1].style.visibility = `visible`;
        s[index].style.visibility = `visible`;
        s[index].style.rotate = `10deg`;
        s[index + 1].style.opacity = 1;
        s[index].style.opacity = 1;
        console.log(count + " " + opac + " " + angle + " " + index + " reback");
      }

      function img_change_clock_rotation(i) {
        if (i < 18) {
          console.log("forward function called for index = " + i);

          if (angle < 180) {
            s[i].style.rotate = `${count}deg`;
            s[i + 1].style.rotate = `${count - 10}deg`;
            s[i + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + i + " f");
            view.innerText = angle + " deg";
          } else {
            s[i].style.rotate = `${count + 180}deg`;
            s[i + 1].style.rotate = `${count + 180 - 10}deg`;
            s[i + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + i + " f");
            view.innerText = angle + " deg";
          }
          opac = 0;
          count = 0;
          index++;
          if (index == 18) reStart();
          console.log("index change to " + index);
          console.log(count + " " + opac + " " + angle + " " + i);

          if (index > 0)
            // edge case for index = 0 and user presses key = 37.
            s[index - 1].style.visibility = `hidden`;
          //   if (index < 16)
          //     // edge case for index = 16 and index = 17.
          //     s[index + 2].style.visibility = `hidden`;
          s[index].style.visibility = `visible`;
          s[index + 1].style.visibility = `visible`;
          s[index + 1].style.rotate = `-10deg`;
          s[index].style.opacity = 1;
          s[index + 1].style.opacity = 0;
        } else return;
      }

      function img_change_antiClock_rotation(i) {
        if (i >= 0 && i < 18) {
          console.log("backward function called for index = " + i);

          if (angle < 180) {
            s[i].style.rotate = `${count}deg`;
            s[i + 1].style.rotate = `${count - 10}deg`;
            s[i + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + i + "b");
            view.innerText = angle + " deg";
          } else {
            s[i].style.rotate = `${count + 180}deg`;
            s[i + 1].style.rotate = `${count + 180 - 10}deg`;
            s[i + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + i + "b");
            view.innerText = angle + " deg";
          }

          opac = 1;
          count = 10;
          index--;
          if (index == -1) Start();
          console.log("index change to " + index);
          s[index + 2].style.visibility = `hidden`;
          s[index].style.visibility = `visible`;
        } else return;
      }

      function callAt11() {
        console.log("callAt11 is called");
        index++;
        if(index == 18){
          for (let i = 0; i < s.length; i++) {
          s[i].style.visibility = `hidden`;
          s[i].style.rotate = `180deg`;
          }
        index = 0;
        } 

        if(index > 0)
        s[index - 1].style.visibility = `hidden`;
        s[index].style.visibility = `visible`;
        s[index + 1].style.visibility = `visible`;
        s[index + 1].style.rotate = `-10deg`;
        s[index].style.opacity = 1;
        s[index + 1].style.opacity = 0;
        count = 1;
        opac = 0.1;
        if (angle < 180) {
            s[index].style.rotate = `${count}deg`;
            s[index + 1].style.rotate = `${count - 10}deg`;
            s[index + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + index + "f");
            view.innerText = angle + " deg";
          } else {
            s[index].style.rotate = `${count + 180}deg`;
            s[index + 1].style.rotate = `${count + 180 - 10}deg`;
            s[index + 1].style.opacity = `${opac}`;
            console.log(count + " " + opac + " " + angle + " " + index + "f");
            view.innerText = angle + " deg";
          }
      }

      function callAtNeg1() {
        console.log("callAtNeg1 is called");
        index--;
        if (index == -1) index = 17;
        if(index < 17)
        s[index + 2].style.visibility = `hidden`;
        s[index].style.visibility = `visible`;
        s[index + 1].style.visibility = `visible`;
        count = 9;
        opac = 0.9;
        if (angle < 180) {
          s[index].style.rotate = `${count}deg`;
          s[index + 1].style.rotate = `${count - 10}deg`;
          s[index + 1].style.opacity = `${opac}`;
          console.log(count + " " + opac + " " + angle + " " + index + "b");
          view.innerText = angle + " deg";
        } else {
          s[index].style.rotate = `${count + 180}deg`;
          s[index + 1].style.rotate = `${count + 180 - 10}deg`;
          s[index + 1].style.opacity = `${opac}`;
          console.log(count + " " + opac + " " + angle + " " + index + "b");
          view.innerText = angle + " deg";
        }
      }

      function reStartAt360() {
        for (let i = 0; i < s.length; i++) {
          s[i].style.visibility = `hidden`;
          s[i].style.rotate = `179deg`;
        }
        s[17].style.visibility = `visible`;
        s[18].style.visibility = `visible`;
        s[17].style.rotate = `10deg`;
        s[17].style.opacity = 1
        ;
        s[18].style.opacity = 0.9;
        count = 9;
        //angle = 180;
        opac = 0.9;
        index = 17;
        angle = 359;
        view.innerText = angle + " deg";
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
                s[index].style.rotate = `${count}deg`;
                s[index + 1].style.rotate = `${count - 10}deg`;
              } else {
                console.log("working after 180");
                s[index].style.rotate = `${count + 180}deg`;
                s[index + 1].style.rotate = `${count + 180 - 10}deg`;
              }
              s[index + 1].style.opacity = `${opac}`;
              console.log(count + " " + opac + " " + angle + " " + index);
              view.innerText = angle + " deg";
            }
          } else if (i.keyCode === 37) {
            count--;
            angle--;
            opac = opac - 0.1;
            if (angle == -1) reStartAt360();
            if(angle == 180) reBack();
            if (count == -1) callAtNeg1();
            else if (count == 0) {
              // case for anti clockwise rotation.
              img_change_antiClock_rotation(index);
            } else {
              //if(angle == 179) reBack();
              if (angle <= 180) {
                s[index].style.rotate = `${count}deg`;
                s[index + 1].style.rotate = `${count - 10}deg`;
              } else {
                console.log("working after 180");
                s[index].style.rotate = `${count + 180}deg`;
                s[index + 1].style.rotate = `${count + 180 - 10}deg`;
              }

              s[index + 1].style.opacity = `${opac}`;
              console.log(count + " " + opac + " " + angle + " " + index);
              view.innerText = angle + " deg";
            }
          }
        }
      });