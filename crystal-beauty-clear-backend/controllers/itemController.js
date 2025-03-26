import Item from '../models/item.js';

export function getItems(req, res) {
    Item.find().then(
        (Item)=>{
            res.json(Item);
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )

}

export function saveItem(req,res){

    const item = new Item(req.body);
    item.save().then(
        (Item)=>{
            res.json({
                message: "Item saved"
        });
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )
}

export function getGoodItems(req, res) {
   
            res.json({
                message: "Good Items"
            });
   

}

export function serachItem(req,res){
    const itemName = req.params.name;

    Item.find({
        name :itemName
    }).then(
        (Item)=>{
            res.json(Item);
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error"
            })
        }
    )
}