// app.js
import express from "express";
import morgan from "morgan";
import corse from "cors";
import authRoute from "./router/auth.route.js";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(corse());

// Manejar solicitudes GET a la URL raíz
app.get("/", (_, res) => {
  res.send("¡Hola, mundo!");
});

app.use("/api", authRoute);
export default app;