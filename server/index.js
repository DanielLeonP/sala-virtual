import { Server } from "socket.io";
import { Socket } from "socket.io-client";

const io = new Server({
  cors: {
    origin: "*",
    credentials: true
  },
});

io.listen(3001);

const characters = [];

const generateRandomPosition = () => {
  return [Math.random() * 3, 0, Math.random() * 3];
};

const generateRandomHexColor = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

io.on("connection", (socket) => {
  console.log(`Usuario ${socket.id} conectado`);

  characters.push({
    id: socket.id,
    position: generateRandomPosition(),
    hairColor: generateRandomHexColor(),
    topColor: generateRandomHexColor(),
    bottomColor: generateRandomHexColor(),
  });

  socket.emit("hello");

  io.emit("characters", characters);

  socket.on("move", (position) => {
    const character = characters.find(
      (character) => character.id === socket.id
    );
    character.position = position;
    io.emit("characters", characters);
  });

  socket.on("disconnect", () => {
    console.log(`Usuario ${socket.id} desconectado `);

    characters.splice(
      characters.findIndex((character) => character.id === socket.id),
      1
    );
    io.emit("characters", characters);
  });
});