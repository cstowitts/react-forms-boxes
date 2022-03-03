
/** Box
 *
 * Props:
 *  
 * 
 * State:
 * 
 * 
 * App -> BoxList -> Box and NewBoxForm
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