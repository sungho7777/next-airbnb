import React, { useMemo } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import palette from "../../styles/palette"
import { useSelector } from "../../store";
import { registerRoomActions } from "../../store/registerRoom";
import {largeBuildingTypeList} from "../../lib/staticData";
import Selector from "../common/Selector";

const Container = styled.div`
    padding: 62px 30px 100px;
    h2 {
        font-size: 19px;
        font-weight: 800;
        margin-bottom: 56px;
    }
    h3 {
        font-weight: bold;
        color: ${palette.gray_76};
        margin-bottom: 6px;
    }
    .register-room-building-selector-wrapper {
        width: 320px;
        margin-bottom: 32px;
    }
    .register-room-room-type-radio {
        max-width: 485px;
        margin-bottom: 50px;
    }
    .register-room-is-setup-for-guest-radio {
        margin-bottom: 50px;
    }
`;

// * 선택 불가능한 큼 범위 건물 유형
const disabledlargeBuildingTypeOptions = ["하나를 선택해주세요."];

const RegisterRoomBuilding:React.FC=()=>{
    const largeBuildingType = useSelector(
        (state) => state.registerRoom.largeBuildingType
      );
      const buildingType = useSelector((state) => state.registerRoom.buildingType);
      const roomType = useSelector((state) => state.registerRoom.roomType);
      const isSetUpForGuest = useSelector(
        (state) => state.registerRoom.isSetUpForGuest
      );
    
      const dispatch = useDispatch();

    // * 선택된 건물 유형 options
    const detailBuildingOptions=useMemo(()=>{
        switch (largeBuildingType) {
            case "아파트": {
                const { 
                    apartmentBuildingTypeList,
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(apartmentBuildingTypeList[0])
                );
                return apartmentBuildingTypeList;
            }
            case "주택": {
                const {
                    houstBuildingTypeList
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(houstBuildingTypeList[0])
                );
                return houstBuildingTypeList;
            }
            case "별채": {
                const {
                    secondaryUnitBuildingTypeList,
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(secondaryUnitBuildingTypeList[0])
                );
                return secondaryUnitBuildingTypeList;
            }
            case "독특한 숙소": {
                const {
                    uniqueSpaceBuildingTypeList
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(uniqueSpaceBuildingTypeList[0])
                );
                return uniqueSpaceBuildingTypeList;
            }
            case "B&B": {
                const {
                    bnbBuildingTypeList
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(bnbBuildingTypeList[0])
                );
                return bnbBuildingTypeList;
            }
            case "부티크호텔": {
                const {
                    boutiquesHotelBuildingTypeList,
                } = require("../../lib/staticData");
                dispatchEvent(
                    registerRoomActions.setBuildingType(boutiquesHotelBuildingTypeList[0])
                );
                return boutiquesHotelBuildingTypeList;
            }
            default:
            return [];
        }
    }, [largeBuildingType]);


    return (
        <Container>
            <h2>등록할 숙소 종류는 무엇인가요?</h2>
            <h3>1단계</h3>
            <div className="register-room-building-selector-wrapper">
                <Selector
                    type="register"
                    value="하나를 선택하시요."
                    defaultValue="하나를 선택해주세요."
                    disabledOptions={disabledlargeBuildingTypeOptions}
                    label="우선 범위를 좁혀볼가요?"
                    options={largeBuildingTypeList}
                    onChange={()=>{}}
                />
            </div>
        </Container>
    );
};

export default RegisterRoomBuilding;