import { fakeUserData } from "../Api";
import { addUser } from "../Store/Slices/UserSlice";
import { useDispatch } from "react-redux";
import DisplayUser from "./displayUser";

function AddUser() {
  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    dispatch(addUser(payload));
  };

  return (
    <div className="user-container">
      <div className="user-flex">
        <h2>List Of user Details</h2>
        <button onClick={() => addNewUser(fakeUserData())}>Add User</button>
      </div>
      <DisplayUser />
      <hr />
    </div>
  );
}

export default AddUser;
