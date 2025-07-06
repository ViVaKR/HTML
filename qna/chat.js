let socket;

function appendChild(text) {
    const messagesDiv = document.getElementById('messages');
    const msg = document.createElement('div');
    msg.style.color = 'white';
    msg.style.backgroundColor = 'transparent';
    msg.style.border = 'none';
    msg.style.width = '60%';
    msg.style.fontSize = '1.2em';
    msg.style.margin = '1px 10px';
    msg.style.padding = '1em';
    msg.innerHTML = text;
    messagesDiv.appendChild(msg);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function connect() {

    socket = new WebSocket('ws://192.168.0.8:3000');

    socket.onmessage = (message) => {
        const data = JSON.parse(message.data);
        if (data.type === 'history')
            data.data.forEach(x => appendChild(`[ ${x.message.userName} ]  ${x.message.message}`));
        else if (data.type === 'response')
            appendChild(`[ ${data.data.userName} ] ${data.data.message}`);
        else {
            appendChild('Unknown message type: ' + data.type);
        }
    };

    socket.onclose = () => {
        appendChild('Disconnected from server');
    }

    socket.onerror = (error) => {
        appendChild('Error: ' + error);
    };

    socket.onopen = () => {
        room = document.getElementById('room').value;
        userName = document.getElementById('userName').value;
        const messageToSend = {
            type: 'history',
            room: room ?? 'default',
            userName: userName ?? '익명',
            message: ' 님께서 접속 하였습니다.'
        };
        if (socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify(messageToSend));
        } else {
            appendChild('WebSocket is not open');
        }
    };
}

function disconnect() {
    if (socket) {
        socket.close();
    }
}

document.getElementById('connect').addEventListener('click', (event) => {
    connect()
});

document.getElementById('messageForm').addEventListener('submit', (event) => {

    event.preventDefault(); // 폼 제출 기본 동작 방지
    if (!socket) {
        console.error('WebSocket is not open');
        return;
    }
    const formData = new FormData(event.target);

    // 메시지 객체에 type 속성 추가
    const messageToSend = {
        type: 'message',
        room: formData.get('room'),
        userName: formData.get('userName'),
        message: formData.get('message')
    };

    if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify(messageToSend));
    } else {
        appendChild('WebSocket is not open');
    }
});
