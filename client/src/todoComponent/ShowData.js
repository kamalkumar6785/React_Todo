import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
function handleEditClick(item) {
    var b  = window.prompt(`Enter new value of the todo item: `)
    console.log(b)
    axios.put(`https://react-todo-kffq.onrender.com/api/data/${item._id}`,{
      "data":b  
    }).then(response=>{
        console.log(response);
    
        window.location.reload();
    })

    // window.location.reload();
    // window.location.reload();
    // window.location.reload();

}

const ShowData = ({ item, onSelect, onEdit }) => {
    return (
        <>
            <li className="list">
            
                <button className="delete-button" onClick={() => { onSelect(item._id) }} title="Delete">
                    <i className="fa fa-trash-o icon"></i>
                </button>

                <button className="edit-button"  onClick={() => handleEditClick(item)}  title="Edit">
                    🖊
                </button>

                <p>{item.data}</p>
            
            </li>
            <hr />
        </>
    );
}
export default ShowData;