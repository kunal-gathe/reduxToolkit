import { useDispatch, useSelector } from "react-redux"
import { MdDelete } from "react-icons/md";
import { removeUser } from "../Store/Slices/UserSlice";


function DisplayUser() {
     const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.users
    })

    const removeSingleUser =(id)=>{
        dispatch(removeUser(id))
    }


  return (
    <div>
        {
            data.map((user,id)=>{
                return (
                    <div key={id} className="flex">
                        <li>{user}</li>
                        <div><MdDelete className="delete" onClick={()=> removeSingleUser(id)} /></div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default DisplayUser