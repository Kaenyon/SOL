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
    let name = "s"+num;
    if(name in window){
      document.getElementById("solution").style.display = "block";
      document.getElementById("footer").style.marginTop = "20px";
      document.getElementById("sol_num").innerHTML = "Solution# " + num;
      document.getElementById("source").innerHTML = window[name];
    }
    else alert("풀이가 아직 업로드되지 않았습니다");
  }
}
