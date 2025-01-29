import express from "express";
import { createMenu, getMenus,getMenusbyId } from "../controllers/menuController";

const router = express.Router();

router.post("/", createMenu);
router.get("/", getMenus);
router.get("/:id", getMenusbyId);


export default router;
