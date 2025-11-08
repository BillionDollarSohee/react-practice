export function connectWS(myId, onMessage) {
  const ws = new WebSocket(`ws://192.168.2.29:8090/ws?userId=${myId}`);

  ws.onopen = () => console.log("WS connected");

  ws.onmessage = (e) => {
    console.log("WS msg:", e.data);
    if(onMessage) onMessage(e.data);
  };

  ws.onclose = () => console.log("WS closed");

  return ws;
}
