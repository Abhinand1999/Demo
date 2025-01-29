"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const menuItemController_1 = require("../controllers/menuItemController");
const router = express_1.default.Router();
router.post("/", menuItemController_1.createMenuItem);
router.get("/:menuId", menuItemController_1.getMenuItemsByMenu);
exports.default = router;
