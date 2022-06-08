import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "./services/api";
import { getUsers } from "./userSlice";

export const fetchUsers = () => async dispatch => {
    try {
        await api.get("/users")
        .then((res) => {
            dispatch(getUsers(res.data))
            console.log(res);
        })
    } catch (error) {
        console.log(error.message)
    }
}