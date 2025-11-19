import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { connectWS } from "../ws";
import { sendMessage, getRoomMessages, readMessage } from "../api/messageAPI";

export default function ChatRoom(){

  const { opponentId } = useParams();
  const opponent = Number(opponentId);

  const myId = Number(localStorage.getItem("userId"));

  const [msgs,setMsgs] = useState([]);
  const [txt,setTxt] = useState("");

  const messagesEndRef = useRef(null);

  useEffect(()=>{
    messagesEndRef.current?.scrollIntoView({behavior:"smooth"});
  },[msgs]);

  useEffect(()=>{
    if(!opponent) return;

    // 최초 메시지 로딩
    getRoomMessages(myId, opponent).then(setMsgs);

    // WebSocket 연결
    const ws = connectWS(myId, (raw)=>{

      console.log("WS msg:", raw);
      const [cmd, fromId] = raw.split(":");

      if(cmd==="NEW_MESSAGE"){
        getRoomMessages(myId, opponent).then(setMsgs);
      }

      if(cmd==="READ_MESSAGE"){
        getRoomMessages(myId, opponent).then(setMsgs);
      }

    });

    return ()=>ws.close();

  },[opponent]);

  const onSend = async()=>{
    if(!txt.trim()) return;

    await sendMessage({
      senderId: myId,
      receiverId: opponent,
      content: txt.trim()
    });

    setTxt("");

    getRoomMessages(myId, opponent).then(setMsgs);
  }

  if(!opponent) return <div>Loading...</div>;

  return (
    <div style={{padding:20}}>
      <h2>Chat With {opponent}</h2>

      <div style={{
        border:"1px solid #aaa",
        height:300,
        overflowY:"auto",
        marginBottom:10,
        padding:10
      }}>
        {msgs.map(m=>{
          const mine = (Number(m.senderId) === Number(myId));

          // ★ 읽음 처리 (상대가 보낸 메시지 & 읽지 않은 경우)
          if(!mine && m.readYn === 'N'){
            readMessage(m.id);      // 반드시 message.id 로!!!
          }

          return(
            <div key={m.id}
              style={{
                display:"flex",
                justifyContent: mine ? "flex-end" : "flex-start",
                marginBottom:"8px"
              }}
            >
              <div style={{
                background: mine ? "#c1e6ff" : "#fce6b0",
                border:"1px solid #ccc",
                borderRadius:"10px",
                padding:"6px 10px",
                maxWidth:"60%",
                whiteSpace:"pre-wrap"
              }}>
                {m.content}
              </div>
            </div>
          )
        })}
        <div ref={messagesEndRef}></div>
      </div>

      <div>
        <input
          value={txt}
          onChange={e=>setTxt(e.target.value)}
          style={{width:"200px"}}
        />
        <button onClick={onSend}>보내기</button>
      </div>
    </div>
  );
}
