

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

 function Box({ boxes }){  

    
   return (
       <div className="Box-container">
         {boxes.map(box => (
             <div className="Box-box" 
                key={box.id} 
                style={
                    {height:box.height, 
                    width:box.width, 
                    backgroundColor:box.backgroundColor}
                }
            >
            <button className="Box-remove-btn" onClick={removeBox}>
                X
            </button>

            </div>
         ))}
       </div>
   )
}