import express from 'express';
import { getGoodItems, getItems, saveItem, serachItem } from '../controllers/itemController.js';

const itemRoute = express.Router();//empty router

itemRoute.get("/",getItems)
itemRoute.post("/",saveItem)
itemRoute.get("/good",getGoodItems)//we need implement body part
itemRoute.get("/:name",serachItem) // "/" after when we use name or id or etc.in here filtter that one,here no need to body part

export default itemRoute;

