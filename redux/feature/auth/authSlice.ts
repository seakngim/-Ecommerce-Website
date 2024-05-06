import { RootState } from "@/redux/store ";
import { createSlice , PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    token: null as string | null,
};

const authSlice =createSlice({
    name:'auth',
    initialState,
    reducers:({
        setAssessToken(state,action:PayloadAction<string>)
        {
           state.token=action.payload;
        }
    })
});
export const {setAssessToken} = authSlice.actions;
export const selecToken= ((state:RootState)=>state.auth.token)
export default authSlice.reducer;