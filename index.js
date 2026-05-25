const express = require("express");
const mineflayer = require("mineflayer");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot activo");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Web lista");
});

// CONFIGURA AQUÍ TU SERVIDOR
const bot = mineflayer.createBot({
  host: "menorcity.falix.gg", // Pon tu IP aquí
  port: "45296",                     // Pon tu puerto aquí
  username: "Bot24Siete",
  version: "1.26.1"               // Pon la versión de tu servidor
});

bot.on('login', () => console.log("¡Bot conectado al server!"));
bot.on('error', (err) => console.log("Error:", err));
