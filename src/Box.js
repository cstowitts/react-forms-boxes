
/** Box: renders a box and its removal button
 *
 * Props:
 * -box: a box obj from the state array (boxes)
 * -removeBox: a fn that removes the specific box from the 
 *             boxes state array
 * 
 * State:
 * -none
 * 
 * App -> BoxList -> Box 
 */

 function Box({ box, removeBox}){  
   function remove() {
        removeBox(box.id);
   }
    
   return (
       <div className="Box-container">    
             <div className="Box-box" 
                
                style={
                    {height:`${box.height}px`, 
                    width:`${box.width}px`, 
                    backgroundColor:`${box.backgroundColor}`}
                }
            >

            </div>
            <button className="Box-remove-btn" onClick={remove}>
                X
            </button>
         
       </div>
   )
}

export default Box;