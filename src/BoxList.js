import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box.js"
import NewBoxForm from "./NewBoxForm.js";

/** BoxList: manages boxes, add and remove box fns, state live here
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
 * App -> BoxList -> NewBoxForm
 */

function BoxList() {
    const [ boxes, setBoxes ] = useState([]);

    /** add a new box to the BoxList */
    //box could be boxRawData
    //newBox could be boxWithId, differentiate between these boxes
    function addBox(box){
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    }
    //good not to call box 'formData' 

    /** remove a box from the BoxList */
    function removeBox(id){
        setBoxes(boxes => boxes.filter(b => b.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(box => 
                <Box key={box.id} box={box} removeBox={removeBox} />
            )}
        </div>
    );

}


//concerned with a list of boxes, not the form state






export default BoxList;