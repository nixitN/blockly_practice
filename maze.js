// LV1
moveForward();
moveForward();


// LV2
moveForward();
turnLeft();
moveForward();
turnRight();
moveForward();


// LV3
while (notDone()) {
    moveForward();
}


// LV4
while (notDone()) {
  moveForward();
  turnLeft();
  moveForward();
  turnRight();
}


// LV5
moveForward();
moveForward();
turnLeft();
while (notDone()) {
  moveForward();
}


// LV6
while (notDone()) {
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
}


// LV7
while (notDone()) {
  if (isPathForward()) {
    moveForward();
  }
  if (isPathRight()) {
    turnRight();
  }
}


// LV8
while (notDone()) {
  if (isPathForward()) {
    moveForward();
  }
  if (isPathLeft()) {
    turnLeft();
  }
  if (isPathRight()) {
    turnRight();
  }
}


// LV9
while (notDone()) {
  moveForward();
  if (isPathForward()) {
    moveForward();
  } else {
    if (isPathLeft()) {
      turnLeft();
    } else {
      turnRight();
    }
  }
}


// LV 10
while (notDone()) {
  if (isPathLeft()) {
    turnLeft();
  }
  moveForward();
  if (isPathLeft()) {
    turnLeft();
  }
  moveForward();
  if (isPathRight()) {
    turnRight();
    moveForward();
  }
}