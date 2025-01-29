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
exports.getMenusbyId = exports.getMenus = exports.createMenu = void 0;
const menu_1 = __importDefault(require("../models/menu"));
const mongodb_1 = require("mongodb");
const createMenu = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { menuName, description } = req.body;
        const menu = new menu_1.default({ menuName, description });
        yield menu.save();
        res.status(201).json(menu);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.createMenu = createMenu;
const getMenus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const menus = yield menu_1.default.find();
        if (menus.length === 0) {
            res.status(404).json({ message: "No menus found!" });
        }
        else {
            res.status(200).json(menus);
        }
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getMenus = getMenus;
const getMenusbyId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json({ message: " ID missing" });
        }
        const menus = yield menu_1.default.find({ _id: new mongodb_1.ObjectId(id) });
        if (menus.length === 0) {
            res.status(404).json({ message: "No menus found!" });
        }
        res.status(200).json(menus);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});
exports.getMenusbyId = getMenusbyId;
