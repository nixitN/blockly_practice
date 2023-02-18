// LV1
for (var count = 0; count < 4; count++) {
    moveForward(100);
    turnRight(90);
}


// LV2
for (var count = 0; count < 5; count++) {
    moveForward(100);
    turnRight(72);
}


// LV3
penColour('#ffff00');

for (var count = 0; count < 5; count++) {
  moveForward(100);
  turnRight(144);
}


// LV4
penColour('#ffff00');

for (var count = 0; count < 5; count++) {
  moveForward(50);
  turnRight(144);
}

penUp();
moveForward(150);
penDown();
moveForward(20);


// LV5
penColour('#ffff00');

for (var count2 = 0; count2 < 4; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }

  penUp();
  moveForward(150);
  penDown();
  turnRight(90);
}


// LV6
penColour('#ffff00');

for (var count2 = 0; count2 < 3; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }
  penUp();
  moveForward(150);
  penDown();
  turnRight(120);
}

penColour('#ffffff');
penUp();
turnLeft(90);
moveForward(100);
penDown();
moveForward(50);


// LV7
penColour('#ffff00');

for (var count2 = 0; count2 < 3; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }
  penUp();
  moveForward(150);
  penDown();
  turnRight(120);
}

penColour('#ffffff');
penUp();
turnLeft(90);
moveForward(100);
penDown();
moveForward(50);

for (var count3 = 0; count3 < 3; count3++) {
  penUp();
  moveBackward(50);
  penDown();
  turnRight(45);
  moveForward(50);
}


// LV8
penColour('#ffff00');
for (var count2 = 0; count2 < 3; count2++) {
  for (var count = 0; count < 5; count++) {
    moveForward(50);
    turnRight(144);
  }
  penUp();
  moveForward(150);
  penDown();
  turnRight(120);
}

penColour('#ffffff');
penUp();
turnLeft(90);
moveForward(100);
penDown();
moveForward(50);

for (var count3 = 0; count3 < 360; count3++) {
  moveBackward(50);
  penDown();
  turnRight(1);
  moveForward(50);
}