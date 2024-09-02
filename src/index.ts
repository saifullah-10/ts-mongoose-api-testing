import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import dotEnv from "dotenv";

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// middleware configuration

app.use(bodyParser.json());
app.use(cookieParser());
app.use(compression());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/test", (req: express.Request, res: express.Response) =>
  res.send("hello")
);

const server = http.createServer(app);

server.listen(PORT, (): void => {
  console.log(`server listening on ${PORT}`);
});
