import { useState } from "react";

/** NewBoxForm: renders the form for box creation
 *
 * Props: 
 * -addBox: a fn passed from BoxList that adds a box obj
 *          to the state array (boxes)
 * 
 * State:
 * -formData: obj that will contain 
 *  {height, width, background color} from form inputs 
 * 
 * App -> BoxList -> NewBoxForm
 */

function NewBoxForm({addBox}){
    const initialData = {
        height: "",
        width: "",
        backgroundColor: ""
    };

    const [formData, setFormData] = useState(initialData);

    function handleChange(evt){
        const { name, value } = evt.target; 
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));      
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addBox(formData);
        setFormData(initialData);
    }

    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />
    
          <label htmlFor="width">Width:</label>
          <input
            type="width"
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />

          <label htmlFor="backgroundColor">BackgroundColor:</label>
          <input
            type="backgroundColor"
            id="backgroundColor"
            name="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleChange}
          />        
    
          <button>Add a new box!</button>
        </form>
      );

}

//if a component handles evt, should know what the state is

export default NewBoxForm;