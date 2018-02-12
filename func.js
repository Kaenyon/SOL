function searchKeyPress(e){
  e = e || window.event;
  if (e.keyCode == 13){
    document.getElementById('btn').click();
    return false;
  }
  return true;
}
function search_problem(num) {
  if(num < 1000 || num > 15500) alert("올바른 문제 번호를 입력해주세요");
  else{
    let url = "https://sailor02.github.io/SOL/" + num;
    window.location(url);
    /*else alert("풀이가 아직 업로드되지 않았습니다");*/
  }
}
