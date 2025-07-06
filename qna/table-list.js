//--> 오라클 데이터베이스 로 부터 받은 데이터를 JSON 형식으로 보통 파싱 하므로 시뮬레이팅한 가상 자료 구조  //
let members = [
    { pId: 'aaa', cName: '장길산', cEmail: 'hello1@email.com', cTel: '010-1234-5678' },
    { pId: 'bbb', cName: '임꺽정', cEmail: 'hello2@email.com', cTel: '010-1234-5678' },
    { pId: 'ccc', cName: '하늘이', cEmail: 'hello3@email.com', cTel: '010-1234-0178' },
    { pId: 'ddd', cName: '꽃사랑', cEmail: 'hello4@email.com', cTel: '010-1234-9178' },
    { pId: 'eee', cName: '예쁜이', cEmail: 'hello5@email.com', cTel: '010-1234-7778' },
    { pId: 'fff', cName: '머시써', cEmail: 'hello6@email.com', cTel: '010-1234-4578' },
    { pId: 'ggg', cName: '조각남', cEmail: 'hello7@email.com', cTel: '010-1234-4578' },
    { pId: 'hhh', cName: '연구소', cEmail: 'hello8@email.com', cTel: '010-1234-7678' },
    { pId: 'iii', cName: '말쑥이', cEmail: 'hello9@email.com', cTel: '010-1234-3478' },
    { pId: 'jjj', cName: '통제실', cEmail: 'hell010@email.com', cTel: '010-1234-5678' },
    { pId: 'kkk', cName: '바닷가', cEmail: 'hello11@email.com', cTel: '010-1234-3678' },
]

//--> 테이블 만들기
function createTable() {
    let tbody = document.getElementById('tbody');

    for (let i = 0; i < members.length; i++) {
        let tr = document.createElement('tr');
        tr.className = 'list' + i;
        tbody.appendChild(tr);
        let columns = [members[i].pId, members[i].cName, members[i].cEmail, members[i].cTel];
        for (let j = 0; j < 4; j++) {

            let element = document.createElement('td');
            element.className = columns[j];
            element.innerHTML = `${columns[j]}`;
            tr.appendChild(element);
        }
    }
}

createTable();
