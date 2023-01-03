function request() {
  //김민정님의 코드를 클론 코딩함
  let num = document.getElementById("mid").value;
  if (isNaN(num)){//숫자가 아닌 경우
    switch(num) { //0.박정현 1.복무창 2.오민석 3.한규원 4.김도영 5.김준호 6.문희범
        case "박정현": num = 0;
        break;
        case "복무창": num = 1;
        break;
        case "오민석": num = 2;
        break;
        case "한규원": num = 3;
        break;
        case "김도영": num = 4;
        break;
        case "김준호": num = 5;
        break;
        case "문희범": num = 6;
        break;
    }
  }
  else{
    num=num;
  }
  fetch('https://my-json-server.typicode.com/smashh712/json_placeholder/members/'+num)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    const birth = document.createElement("div"); //HTML요소를 만드는 메서드
    birth.textContent = data.name+"의 생일은 "+ data.birth.substr(0,2)+"년 "+data.birth.substr(2,2)+"월 "+data.birth.substr(4,6)+"일 입니다";
    const show = document.getElementById("show"); //
    show.appendChild(birth); //부모노드에 자식 노드를 추가하는 메서드 appendchild는 하나의 노드만 추가 가능
    //노드의 개념을 모르겠음
  });
}
//request();