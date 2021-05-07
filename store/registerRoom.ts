import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { secondaryUnitBuildingTypeList } from "../lib/staticData";
import {BedType} from "../types/room";

type RegisterRoomState = {
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest: boolean | null;

    maximumGuestCount:number;
    bedroomCount:number;
    bedCount:number;
    bedList:{id:number; beds:{type:BedType; count:number}[]}[];
    publicBedList:{type:BedType; count:number}[];
};

// * 초기상태
const initialState: RegisterRoomState = {
    largeBuildingType: null,        // * 건물 유형 큰 범주
    buildingType:null,              // * 건물 유형
    roomType: null,                 // * 숙소 유형
    isSetUpForGuest:null,           // * 게스트만을 위해 만들어진 숙소인가?
    //
    maximumGuestCount:1,            // * 최대 숙박 인원
    bedroomCount:0,                 // * 침실 개수
    bedCount:1,                     // * 침대 개수
    bedList:[],                     // * 침대 유형
    publicBedList:[],               // * 공용공간 침대 유형

};

const registerRoom = createSlice({
    name:"registerRoom",
    initialState,
    reducers:{
        // 큰 건물 유형 변경하기
        setLargeBuildingType(state, action: PayloadAction<string>) {
          if(action.payload === "") {
            state.largeBuildingType = null;
          }
          state.largeBuildingType = action.payload;
          return state;
        },
        // * 건물 유형 변경하기.
        setBuildingType(state, action:PayloadAction<string>){
            if(action.payload===""){
                state.buildingType=null;
            }
            state.buildingType = action.payload;
            return state;
        },
        // * 숙소 유형 변경하기.
        setRoomType(state, action: PayloadAction<"entire" | "private" | "public">) {
            state.roomType = action.payload;
            return state;
        },
        // * '게스트용 숙소인지' 변경하기
        setIsSetUpForGuest(state, action:PayloadAction<boolean>){
            state.isSetUpForGuest = action.payload;
            return state;
        },
        // * 최대 숙박 인원 변경하기
        setMaximumGuestCount(state, action:PayloadAction<number>){
            state.maximumGuestCount = action.payload;
            return state;
        },
        // * 침실 개수 변경하기
        setBedroomCount(state, action: PayloadAction<number>) {
            const bedroomCount = action.payload;
            let { bedList } = state;

            state.bedroomCount = bedroomCount;

            if (bedroomCount < bedList.length) {
                //* 기존 침대 개수가 더 많으면 초과부분 잘라내기
                bedList = state.bedList.slice(0, bedroomCount);
            } else {
                //* 변경될 침대 개수가 더 많으면 나머지 침실 채우기
                for (let i = bedList.length + 1; i < bedroomCount + 1; i += 1) {
                bedList.push({ id: i, beds: [] });
                }
            }

            state.bedList = bedList;
            return state;
        },
        // * 최대 침대 개수 변경하기
        setBedCount(state, action:PayloadAction<number>){
            state.bedCount = action.payload;
            return state;
        },
    },
});




export const registerRoomActions={...registerRoom.actions};

export default registerRoom;