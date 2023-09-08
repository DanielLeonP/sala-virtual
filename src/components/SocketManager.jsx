import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { io } from "socket.io-client";

const ip = process.env.REACT_APP_API_URL || "localhost";
console.log(ip);
export const socket = io(`http://${ip}:3001`);
export const charactersAtom = atom([]);

export const SocketManager = ({ onChangeId }) => {
  const [_characters, setCharacters] = useAtom(charactersAtom);

  useEffect(() => {
    function onConnect() {
      console.log("connected");
      // setMyId()
    }
    function onDisconnect() {
      console.log("disconnected");
    }

    function onUserId(myId) {
      console.log("My id: ", myId);
      onChangeId(myId)
    }

    function onCharacters(value) {
      setCharacters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("userId", onUserId);
    socket.on("characters", onCharacters);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("userId", onUserId);
      socket.off("characters", onCharacters);
    };
  }, []);
};
