import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { secondaryUnitBuildingTypeList } from "../lib/staticData";
import {BedType} from "../types/room";

type RegisterRoomState = {
    // * 숙소등록하기 1단계 (건물, 숙소) 리덕스 설정
    largeBuildingType: string | null;
    buildingType: string | null;
    roomType: string | null;
    isSetUpForGuest: boolean | null;
    
    // * 숙소등록하기 2단계 (인원, 침대, 공용공간) 리덕스 설정
    maximumGuestCount:number;
    bedroomCount:number;
    bedCount:number;
    bedList:{id:number; beds:{type:BedType; count:number}[]}[];
    publicBedList:{type:BedType; count:number}[];
    
    // * 숙소등록하기 3단계 (욕실) 리덕스 설정
    bathroomCount:number;
    bathroomType: "private" | "public" | null;

    // * 숙소등록하기 4단계 (위치) 리덕스 설정
    country:string;
    city:string;
    district:string;
    streetAddress:string;
    detailAddress:string;
    postcode:string;
    latitude:number;
    longitude:number;

    // * 숙소등록하기 5단계 (편의시설) 리덕스 설정
    amentities:string[];

    // * 숙소등록하기 6단계 (편의공간) 리덕스 설정
    conveniences:string[];

    // * 숙소등록하기 7단계 (숙소사진) 리덕스 설정
    photos:string[];

    // * 숙소등록하기 8단계 (숙소설명) 리덕스 설정
    description:string;

    // * 숙소등록하기 9단계 (제목) 리덕스 설정
    title:string;

    // * 숙소등록하기 10단계 (가격) 리덕스 설정
    price:number;

    // * 숙소등록하기 11단계 (날짜) 리덕스 설정
    startDate:string|null;
    endDate:string|null;
};

// * 초기상태
const initialState: RegisterRoomState = {
    //
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
    //
    bathroomCount: 1,               // * 욕실 개수
    bathroomType: null,             // * 욕실 유형
    //
    country:"",                     // * 국가/지역
    city:"",                        // * 시/도
    district:"",                    // * 시/군/구
    streetAddress:"",               // * 도로명주소
    detailAddress:"",               // * 동호수
    postcode:"",                    // * 우편번호
    latitude:0,                     // * 위도
    longitude:0,                    // * 경도
    //
    amentities:[],                  // * 편의시설
    //
    conveniences:[],                // * 편의공간
    //
    photos:[],                      // * 숙소사진
    //
    description:"",                 // * 숙소설명
    //
    title:"",                       // * 제목
    //
    price:0,                        // * 숙소요금
    //
    startDate:null,                 // * 예약 시작날짜
    endDate:null,                   // * 예약 마감날짜
    
};

const registerRoom = createSlice({
    name:"registerRoom",
    initialState,
    reducers:{
        /*
        
            * 숙소등록하기 1단계 (건물, 숙소) Change
        
        */
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
        /*
        
            * 숙소등록하기 2단계 (인원, 침대, 공용공간) Change
        
        */
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
        // * 침대 유형 개수 변경하기
        setBedTypeCount(state, action:PayloadAction<{bedroomId:number; type:BedType; count:number}>){
            const {bedroomId, type, count} = action.payload;
            const bedroom = state.bedList[bedroomId - 1];
            const prevBeds = bedroom.beds;
            const index = prevBeds.findIndex((bed) => bed.type === type);

            if(index === -1){
                // * 타입이 없다면...
                state.bedList[bedroomId - 1].beds = [...prevBeds, {type, count}];
                return state;
            }

            // * 타입이 존재 한다면...
            if(count === 0){
                state.bedList[bedroomId - 1].beds.splice(index, 1);
            }else{
                state.bedList[bedroomId - 1].beds[index].count = count;
            }
            return state;
        },
        // * 공용공간 침대 유형 개수 변경하기.
        setPublicBedTypeCount(state, action:PayloadAction<{type:BedType; count:number}>){
            const {type, count} = action.payload;

            const index=state.publicBedList.findIndex((bed)=>bed.type===type);
            if(index === -1){
                // * 타입이 없다면...
                state.publicBedList = [...state.publicBedList, {type, count}];
                return state;
            }

            // * 타입이 존재 한다면...
            if(count === 0){
                state.publicBedList.splice(index, 1);
            }else{
                state.publicBedList[index].count = count;
            }
            return state;
        },
        /*
        
            * 숙소등록하기 3단계 (욕실) Change
        
        */
        // * 욕실 개수 변경하기.
        setBathroomCount(state, action:PayloadAction<number>){
            state.bathroomCount = action.payload;
        },
        // * 욕실 유형 변경하기.
        setBathroomType(state, action:PayloadAction<"private" | "public">){
            state.bathroomType = action.payload;
        },
        /*
        
            * 숙소등록하기 4단계 (위치) Change
        
        */
       // * 국가 변경하기
        setCountry(state, action: PayloadAction<string>) {
            state.country = action.payload;
        },
       // * 시도 변경하기
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload;
        },
       // * 시군구  변경하기
        setDistrict(state, action: PayloadAction<string>) {
            state.district = action.payload;
        },
       // * 도로명주소 변경하기
        setStreetAddress(state, action: PayloadAction<string>) {
            state.streetAddress = action.payload;
        },
       // * 동호수 변경하기
        setDetailAddress(state, action: PayloadAction<string>) {
            state.detailAddress = action.payload;
        },
       // * 우편번호 변경하기
        setPostcode(state, action: PayloadAction<string>) {
            state.postcode = action.payload;
        },
       // * 위도 변경하기
        setLatitude(state, action: PayloadAction<number>) {
            state.latitude = action.payload;
        },
       // * 경도 변경하기
        setLongitude(state, action: PayloadAction<number>) {
            state.longitude = action.payload;
        },
        /*
        
            * 숙소등록하기 5단계 (편의시설) Change
        
        */
       // * 편의 시설 변경하기
        setAmentities(state, action: PayloadAction<string[]>) {
            state.amentities = action.payload;
        },
        /*
        
            * 숙소등록하기 6단계 (편의공간) Change
        
        */
        // * 편의 공간 변경하기
        setConveniences(state, action: PayloadAction<string[]>) {
            state.conveniences = action.payload;
        },
        /*
        
            * 숙소등록하기 7단계 (숙소사진) photo
        
        */
        // * 숙소 사진 변경하기
        setPhotos(state, action: PayloadAction<string[]>) {
            state.photos = action.payload;
        },
        /*
        
            * 숙소등록하기 8단계 (숙소설명) description
        
        */
        // * 숙소 설명 변경하기
        setDescription(state, action: PayloadAction<string>) {
            state.description = action.payload;
        },
        /*
        
            * 숙소등록하기 9단계 (제목) description
        
        */
        // * 숙소 제목 변경하기
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        /*
        
            * 숙소등록하기 10단계 (가격) Change
        
        */
        // * 숙소 가격 변경하기.
        setPrice(state, action:PayloadAction<number>){
            state.price = action.payload;
        },
        /*
        
            * 예약날짜 등록하기 11단계 (날짜) date
        
        */
        // * 예약 시작날짜 변경하기.
        setStartDate(state, action:PayloadAction<string|null>){
            state.startDate = action.payload;
        },
        // * 예약 마감날짜 변경하기.
        setEndDate(state, action:PayloadAction<string|null>){
            state.endDate = action.payload;
        },






    },
});




export const registerRoomActions={...registerRoom.actions};

export default registerRoom;