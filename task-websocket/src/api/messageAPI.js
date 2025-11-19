const BASE = "http://192.168.2.29:8090/message";

export async function sendMessage(message){
  return fetch(`${BASE}/send`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(message)
  })
}

export async function getRoomMessages(senderId, receiverId){
  const r = await fetch(`${BASE}/room?senderId=${senderId}&receiverId=${receiverId}`);
  return r.json();
}

export async function readMessage(messageId){
  return fetch(`${BASE}/read/${messageId}`, {
    method:"POST"
  });
}
