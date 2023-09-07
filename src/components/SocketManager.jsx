import { atom, useAtom } from "jotai";
import { useEffect } from "react";
import { io } from "socket.io-client";

const ip = process.env.REACT_APP_API_URL || "localhost";
console.log(ip);
export const socket = io(`http://${ip}:3001`);
export const charactersAtom = atom([]);

export const SocketManager = () => {
  const [_characters, setCharacters] = useAtom(charactersAtom);
  useEffect(() => {
    function onConnect() {
      console.log("connected");
    }
    function onDisconnect() {
      console.log("disconnected");
    }

    function onHello() {
      console.log("hello");
    }

    function onCharacters(value) {
      setCharacters(value);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("hello", onHello);
    socket.on("characters", onCharacters);
    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("hello", onHello);
      socket.off("characters", onCharacters);
    };
  }, []);
};
