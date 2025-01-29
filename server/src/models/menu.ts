import mongoose, { Schema, Document } from "mongoose";

export interface IMenu extends Document {
  name: string;
  description: string;
}

const MenuSchema: Schema = new Schema({
menuName: { type: String, required: true },
  description: { type: String, required: true },
});

export default mongoose.model<IMenu>("Menu", MenuSchema);