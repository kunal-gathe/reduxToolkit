import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        removeUser(state, action){
            state.splice(action.payload, 1)
        },
        deleteUser(state, action){
            return []
        },
    }
})

export default  usersSlice.reducer;
export const {addUser,removeUser, deleteUser} = usersSlice.actions;