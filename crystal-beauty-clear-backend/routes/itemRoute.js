import express from 'express';
import { getItems, saveItem } from '../controllers/itemController.js';

const itemRoute = express.Router();//empty router

itemRoute.get("/",getItems)
itemRoute.post("/",saveItem)

export default itemRoute;

