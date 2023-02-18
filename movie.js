penColour('#009900');
circle(50, time() / 2, time() / 2);
penColour('#ff0000');
if (time() < 50) {
  circle(50, 70, 10);
} else {
  circle(50, 80, 20);
}
circle(80, Math.pow((time() - 50) / 5, 2), 5);
circle(20, 100 - time(), 5);
penColour('#000000');
line(60, 50, 80, Math.pow((time() - 50) / 5, 2), 5);
line(40, 50, 20, 100 - time(), 5);
if (time() < 50) {
  line(100 - time(), 0, 60, 20, 5);
  line(time(), 0, 40, 20, 5);
} else {
  line(time(), 0, 60, 20, 5);
  line(100 - time(), 0, 40, 20, 5);
}
penColour('#3333ff');
rect(50, 40, 20, 40);