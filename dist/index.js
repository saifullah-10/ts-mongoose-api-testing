"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// middleware configuration
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, compression_1.default)());
app.use((0, cors_1.default)({
    credentials: true,
}));
app.get("/test", (req, res) => res.send("hello"));
const server = http_1.default.createServer(app);
server.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map