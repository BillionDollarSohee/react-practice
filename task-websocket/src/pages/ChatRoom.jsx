import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { connectWS } from "../ws";
import { sendMessage, getRoomMessages } from "../api/messageAPI";

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

    getRoomMessages(myId, opponent).then(setMsgs);

    const ws = connectWS(myId, (raw)=>{

      console.log("WS msg:", raw);
      const [cmd, fromId] = raw.split(":");

      if(cmd==="NEW_MESSAGE"){
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

  // 내가 보낸 메시지는 ws로 안와서 직접 refresh
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
          console.log("myId=", myId, "sender=", m.senderId);
          const mine = (Number(m.senderId) === Number(myId));

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
                whiteSpace:"pre-wrap"   // 줄바꿈 보존
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
