// LV1
cannon(90, 40);


// LV2
cannon(180, 50);


// LV3
while (true) {
    cannon(45, 60);
}


// LV4
while (true) {
    cannon(270, 60);
}


// LV5
while (true) {
    cannon(180, scan(180));
}


// LV6
while (true) {
    cannon(0, scan(0));
}


// LV7
swim(315);


// LV8
swim(280);


// LV9
while (getX() < 50) {
    swim(0);
}

stop();

while (true) {
    cannon(0, scan(0));
}


// LV10
while (getX() < 70) {
    cannon(45, scan(45));
    swim(45);
}
  
stop();
  
while (true) {
   cannon(45, scan(45));
}


// + LV
var angle, distance;

function detect() {
  while (scan(angle) == Infinity) {
    angle = Math.random() * 360;
  }
  distance = scan(angle);
}


angle = 0;
distance = Infinity;

while (true) {
  detect();
  cannon(angle, scan(angle));
  swim(angle);
}