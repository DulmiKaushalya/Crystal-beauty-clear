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