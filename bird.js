// LV1
heading(45);


// LV2
if (noWorm()) {
    heading(0);
  } else {
    heading(90);
}


// LV3
if (noWorm()) {
    heading(310);
  } else {
    heading(60);
}


// LV4
if (getX() < 80) {
    heading(0);
  } else {
    heading(270);
}


// LV5
if (getY() > 20) {
    heading(270);
  } else {
    heading(180);
}


// LV6
if (noWorm()) {
    heading(345);
  } else if (getY() < 80) {
    heading(90);
  } else {
    heading(180);
}


// LV7
if (getY() > 50) {
    heading(225);
  } else if (noWorm()) {
    heading(300);
  } else {
    heading(180);
}


// LV8
if (getY() < 40) {
    heading(90);
  } else if (noWorm()) {
    heading(345);
  } else if (getX() > 50 && getY() < 50) {
    heading(180);
  } else {
    heading(45);
}


// LV9
if (noWorm() && getX() > 20) {
    heading(180);
  } else if (noWorm() && getY() > 20) {
    heading(270);
  } else if (getY() < 70 && getX() < 40) {
    heading(90);
  } else {
    heading(315);
}


// LV10
if (noWorm() && getY() < 80 && getX() < 30) {
    heading(90);
  } else if (noWorm() && getX() < 80) {
    heading(0);
  } else if (noWorm() && getY() > 50) {
    heading(270);
  } else if (getY() < 80 && getX() > 20) {
    heading(90);
  } else if (getX() > 20) {
    heading(180);
  } else if (getY() > 20) {
    heading(270);
}