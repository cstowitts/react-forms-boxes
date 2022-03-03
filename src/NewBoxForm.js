
/** BoxList
 *
 * Props: none
 * 
 * State:
 * -formData: obj that will contain 
 *  {height, width, background color} from form inputs 
 * 
 * App -> BoxList -> Box and NewBoxForm
 */

function NewBoxForm({addBox}){

    const [formData, setFormData] = useState({
        height: "",
        width: "",
        backgroundColor: ""
    });

    function handleChange(evt){
        const { name, value } = evt.target; 
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));      
    }

}

//if a component handles evt, should know what the state is
