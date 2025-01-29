import express from "express";
import { createMenuItem, getMenuItemsByMenu } from "../controllers/menuItemController";

const router = express.Router();

router.post("/", createMenuItem);
router.get("/:menuId", getMenuItemsByMenu);

export default router;
