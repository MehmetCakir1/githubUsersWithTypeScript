import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IUserProps,IStateProps } from "../types/interfaces";


const initialState:IStateProps={
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    user:<IUserProps>{},
    loading:false,
    error:"",
}

export const getUser = createAsyncThunk(
    'user/getUser', async(searchTerm:string) => {
        return fetch( `https://api.github.com/users/${searchTerm}`)
        .then(res=>{
            return res.ok ? res.json() : res.ok
        })
    }
)



const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers(builder:any){
        builder.addCase(getUser.pending, (state: IStateProps) => {
            state.loading = true;
          })
        builder.addCase(getUser.fulfilled,(state:IStateProps,action:PayloadAction<IUserProps>)=>{
            state.loading=false;
            if(action.payload){
                state.user=action.payload
            }else{
                state.error='User Not Found'
                // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
                state.user = <IUserProps>{}
            }
        })
        builder.addCase(getUser.rejected,(state:IStateProps)=>{
            state.loading=false;
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            state.user = <IUserProps>{};
            state.error="An Error Occured"
        })
    }
})

export default userSlice.reducer



