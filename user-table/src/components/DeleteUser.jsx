import { deleteUser } from "../Store/Slices/UserSlice"
import { useDispatch } from "react-redux"

function DeleteUser() {
  const dispatch = useDispatch();
  const deleteAllUser =()=>{
    dispatch(deleteUser())
  }
  return (
    <div className="user-container">
        <div className="user-flex-delete">
        <button className="delete-btn" onClick={()=> deleteAllUser()}>Delete all User</button>
        </div>
    </div>
  )
}

export default DeleteUser