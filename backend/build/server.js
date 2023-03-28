"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
// import authRouter from "./routes/authRouter";
// import userRouter from "./routes/userRouter";
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app.use(cookieParser());
app.use((0, cors_1.default)({
    origin: "https://skye-wallet.vercel.app",
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    credentials: true,
}));
app.get("/", (req, res) => {
    res.status(200).send("Payquity user microservice");
});
// app.use("/auth", authRouter);
// app.use("/user", userRouter);
exports.default = app;
