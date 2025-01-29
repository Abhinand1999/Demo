"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuItemsByMenu = exports.createMenuItem = void 0;
const menuItem_1 = __importDefault(require("../models/menuItem"));
const createMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menuId, itemName, description, price } = req.body;
        const menuItem = new menuItem_1.default({ menuId, itemName, description, price });
        yield menuItem.save();
        res.status(201).json(menuItem);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createMenuItem = createMenuItem;
const getMenuItemsByMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menuId } = req.params;
        if (!menuId) {
            res.status(404).json({ message: "No menus Id missing!" });
        }
        const items = yield menuItem_1.default.find({ menuId });
        if (items.length === 0) {
            res.status(404).json({ message: "No menus items found!" });
        }
        res.status(200).json(items);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getMenuItemsByMenu = getMenuItemsByMenu;
