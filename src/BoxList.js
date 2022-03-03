import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box.js"
import NewBoxForm from "./NewBoxForm.js";


/** BoxList
 *
 * Props: none
 * 
 * State:
 * -boxes: an array of boxes => [{
        height,
        width,
        backgroundColor
    }, ...];
 * 
 * App -> BoxList -> Box and NewBoxForm
 */

function BoxList() {
    const [boxes, setBoxes ] = useState([]);

    /** add a new box to the BoxList */
    function addBox(box){
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }

    /** remove a box from the BoxList */
    function removeBox(id){

        setBoxes(boxes => boxes.filter(b => b.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => 
            <Box key={box.id} box={box} removeBox={removeBox} />)}
        </div>
    );

}


//concerned with a list of boxes, not the form state






export default BoxList;