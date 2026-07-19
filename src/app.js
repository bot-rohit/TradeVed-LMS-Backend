const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const app = express()
const authRoutes = require("./routes/auth.routes")
const profileRoutes = require("./routes/profile.routes")
const roleRoutes = require("./routes/role.routes")
const verifyToken = require("./middlewares/auth.middleware");
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.use("/auth", authRoutes)
app.use("/dash", verifyToken, profileRoutes);
app.use("/role", verifyToken, roleRoutes);

module.exports = app;