"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./config/database");
const compression_1 = __importDefault(require("compression"));
const limiter_1 = require("./middlewares/limiter");
require("dotenv/config");
const index_1 = require("./models/index");
const error_1 = require("./middlewares/error");
const sentry_server_config_1 = require("./config/sentry.server.config");
const index_2 = require("./routes/index");
const app = (0, express_1.default)();
sentry_server_config_1.sentery.init(app);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, compression_1.default)());
app.use(limiter_1.limiter);
app.use(sentry_server_config_1.sentery.requestHandler);
app.use(sentry_server_config_1.sentery.tracingHandler);
// All routes should live here
app.use("/api/admin", index_2.admin);
app.use("/api/deliverymanager", index_2.driver);
app.use("/api/manger", index_2.manager);
app.use("/api/driver", index_2.deliverychef);
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
});
app.post("/user", async (req, res) => {
    const { name, email } = req.body;
    const user = await index_1.User.create({ name, email });
    res.json(user);
});
app.post("/manager", async (req, res) => {
    const { name, email, password } = req.body;
    const manager = await index_1.Manager.create({ name, email, password });
    res.json(manager);
});
app.post("/managerDelevry", async (req, res) => {
    const { name, email, password, manager } = req.body;
    const managerDelevry = await index_1.DeliveryManager.create({
        name,
        email,
        password,
        manager,
    });
    res.json(managerDelevry);
});
app.use(sentry_server_config_1.sentery.errorHandler);
// fallthrough error handler
// handling 404 errors
app.use(error_1.notFound);
// // handling internal server errors
app.use(error_1.handleError);
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`🚀 Server ready at: http://localhost:${port}`);
    const { connection } = await (0, database_1.connectDB)();
    console.log(`👋 Connected to database successfully: ${connection.name}`);
});
//# sourceMappingURL=server.js.map