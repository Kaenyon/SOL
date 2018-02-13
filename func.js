var searchKeyPress = function (e){
  e = e || window.event;
  if (e.keyCode == 13){
    document.getElementById('btn').click();
    return false;
  }
  return true;
};
var search_problem function (num) {
  if(num < 1000 || num > 15500) alert("올바른 문제 번호를 입력해주세요");
  else{
    alert(num);
    let url = "https://sailor02.github.io/SOL/" + num;
    window.location(url);
    /*else alert("풀이가 아직 업로드되지 않았습니다");*/
  }
};
var hello(){
  alert("hello");
};
