import { Request, Response } from "express";
import MenuItem from "../models/menuItem";

export const createMenuItem = async (req: Request, res: Response) => {
  try {
    const { menuId, itemName, description, price } = req.body;
    const menuItem = new MenuItem({ menuId, itemName, description, price });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

export const getMenuItemsByMenu = async (req: Request, res: Response) => {
  try {
    const { menuId } = req.params;
    if (!menuId) {
      res.status(404).json({ message: "No menus Id missing!" });
    }
    const items = await MenuItem.find({ menuId });
    if (items.length === 0) {
      res.status(404).json({ message: "No menus items found!" });
    }
    res.status(200).json(items);
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};


