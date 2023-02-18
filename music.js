function start1() {
    setInstrument('drum');
    full_sheet();
    full_sheet();
}
  
  
function start2() {
    setInstrument('guitar');
    rests();
    full_sheet();
    full_sheet();
}
  
  
function start3() {
    setInstrument('choir');
    rests();
    rests();
    full_sheet();
    full_sheet();
}
  
  
function start4() {
    setInstrument('piano');
    rests();
    rests();
    rests();
    full_sheet();
    full_sheet();
}
  
  
function full_sheet() {
    first_part();
    first_part();
    second_part();
    second_part();
    third_part();
    third_part();
    forth_part();
    forth_part();
}
  
function first_part() {
    play(0.25, 7);
    play(0.25, 8);
    play(0.25, 9);
    play(0.25, 7);
}
  
function second_part() {
    play(0.25, 9);
    play(0.25, 10);
    play(0.5, 11);
}
  
function rests() {
    rest(1);
    rest(1);
}
  
function third_part() {
    play(0.125, 11);
    play(0.125, 12);
    play(0.125, 11);
    play(0.125, 10);
    play(0.25, 9);
    play(0.25, 7);
}
  
function forth_part() {
    play(0.25, 7);
    play(0.25, 4);
    play(0.5, 7);
}