import {createSlice} from "@reduxjs/toolkit";
import { secondaryUnitBuildingTypeList } from "../lib/staticData";


type RegisterRoomState = {
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest: boolean | null;
};

// * 초기상태
const initialState: RegisterRoomState = {
    largeBuildingType: null,        // * 건물 유형 큰 범주
    buildingType:null,              // * 건물 유형
    roomType: null,                 // * 숙소 유형
    isSetUpForGuest:null,           // * 게스트만을 위해 만들어진 숙소인가?
};

const registerRoom = createSlice({
    name:"registerRoom",
    initialState,
    reducers:{},
});

// * 건물 유형 변경하기. 338 page
//setBuildingType(state, action:PayloadAction<string>){
//    if(action.payload===""){
//        StaticRange.buildingType=null;
//    }  
//},

// * 숙소 유형 변경하기. 348 page
//setRoomdingType(state, action:PayloadAction<"entire" | "private" | "public">){
//    state.roomType = action.payload;
//    return state;
//},

// * '게스트용 숙소인지' 변경하기
//setIsSetUpForGuest(state, action:PayloadAction<boolean>){
//    state.isSetUpForGuest = action.payload;
//    return state;
//},

export const registerRoomActions={...registerRoom.actions};

export default registerRoom;