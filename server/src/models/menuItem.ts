import mongoose, { Schema, Document } from "mongoose";

export interface IMenuItem extends Document {
  menuId: mongoose.Types.ObjectId;
  itemName: string;
  description: string;
  price: number;
}

const MenuItemSchema: Schema = new Schema({
  menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
  itemName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export default mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);