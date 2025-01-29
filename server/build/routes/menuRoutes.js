"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuController_1 = require("../controllers/menuController");
const router = express_1.default.Router();
router.post("/", menuController_1.createMenu);
router.get("/", menuController_1.getMenus);
router.get("/:id", menuController_1.getMenusbyId);
exports.default = router;
