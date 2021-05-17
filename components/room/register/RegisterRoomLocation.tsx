import React, { useState } from "react";
import styled from "styled-components";
import NavigationIcon from "../../../public/static/svg/register/navigation.svg";
import palette from "../../../styles/palette";
import Button from "../../common/Button";
import Selector from "../../common/Selector";
import Input from "../../common/Input";

import {countryList} from "../../../lib/staticData";
import { useSelector } from "../../../store";
import { useDispatch } from "react-redux";
import { registerRoomActions } from "../../../store/registerRoom";
import {getLocationInfoAPI} from "../../../lib/api/map";
import RegisterRoomFooter from "./RegisterRoomFooter";
import RegisterRoomBedTypes from "./RegisterRoomBedTypes";

/*

    4단계

*/
const Container = styled.div`
    padding: 62px 30px 100px;
    h2 {
        font-size: 19px;
        font-weight: 800;
        margin-bottom: 56px;
    }
    h3 {
        font-size: 14px;
        font-weight: bold;
        color: ${palette.gray_76};
        margin-bottom: 6px;
    }
    .register-room-step-info {
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
    .register-room-location-button-wrapper {
        width: 176px;
        margin-bottom: 24px;
    }
    .register-room-location-country-selector-wrapper {
        width: 385px;
        margin-bottom: 24px;
    }

    .register-room-location-city-district{
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
    .register-room-location-street-address{
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
    .register-room-location-detail-address{
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
    .register-room-location-postcode{
        font-size: 14px;
        max-width: 400px;
        margin-bottom: 24px;
    }
`;


const RegisterRoomLocation:React.FC=()=>{
    const country = useSelector((state)=>state.registerRoom.country);
    const city = useSelector((state)=>state.registerRoom.city);
    const district = useSelector((state)=>state.registerRoom.district);
    const streetAddress = useSelector((state)=>state.registerRoom.streetAddress);
    const detailAddress = useSelector((state)=>state.registerRoom.detailAddress);
    const postcode = useSelector((state)=>state.registerRoom.postcode);

    const dispatch = useDispatch();

    // * 국가 변경 시
    const onChangeCountry =(event:React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(registerRoomActions.setCountry(event.target.value));
    };
    // * 시도 변경 시
    const onChangeCity =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(registerRoomActions.setCity(event.target.value));
    };
    // * 시군구 변경 시
    const onChangeDistrict =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(registerRoomActions.setDistrict(event.target.value));
    };
    // * 도로명주소 변경 시
    const onChangeStreetAddress =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(registerRoomActions.setStreetAddress(event.target.value));
    };
    // * 동호수 변경 시
    const onChangeDetailAddress =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(registerRoomActions.setDetailAddress(event.target.value));
    };
    // * 우편번호 변경 시
    const onChangePostcode =(event:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(registerRoomActions.setPostcode(event.target.value));
    };

    // * 현재 주소 불러오기 로딩
    const [loading, setLoading] = useState(false);

    // * 현재 위치 불러오기에 성공했을 때
    const onSuccessGetLocation = async({coords}:{coords:Coordinates}) =>{
        try {
            const {data} = await getLocationInfoAPI({
                latitude:coords.latitude,
                longitude:coords.longitude,
            });
            dispatch(registerRoomActions.setCountry(currentLocation.country));
            dispatch(registerRoomActions.setCity(currentLocation.city));
            dispatch(registerRoomActions.setDistrict(currentLocation.district));
            dispatch(registerRoomActions.setStreetAddress(currentLocation.streetAddress));
            dispatch(registerRoomActions.setPostcode(currentLocation.postcode));

            dispatch(registerRoomActions.setLatitude(currentLocation.latitude));
            dispatch(registerRoomActions.setLongitude(currentLocation.longitude));
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };
    
    // * 현재 위치 사용 클릭 시
    const onClickGetCurrentLocation=()=>{
        setLoading(true);
        navigator.geolocation.getCurrentPosition(onSuccessGetLocation, (e)=>{
            console.log(e);
        });
    };

    return (
        <Container>
            <h2>숙소의 위치를 알려주세요.</h2>
            <h3>4단계</h3>
            <p className="register-room-step-info">
                정확한 숙소 주소는 게스트가 예약을 완료한 후에만 공개됩니다.
            </p>
            <div className="reigster-room-location-button-wrapper">
                <Button 
                    color="dark_cyan" 
                    colorReverse 
                    icon={<NavigationIcon /> }
                    onChange={onClickGetCurrentLocation}
                >
                    {loading ? "불러오는 중..." : "현재 위치 사용"}
                </Button>
            </div>
            <br />
            <div className="register-room-location-country-selector-wrapper">
                <Selector
                    type="register"
                    options={countryList}   // 국가리스트
                    useValidation={false}
                    defaultValue="국가/지역 선택"
                    disabledOptions={["국가/지역 선택"]}

                    value={country}
                    onChange={onChangeCountry}
                />
            </div>
            <br />
            <div className="register-room-location-city-district">
                <Input 
                    label="시/도"
                    value={city}
                    onChange={onChangeCity}
                />
                <Input 
                    label="시/군/구" 
                    value={district} 
                    onChange={onChangeDistrict}
                />
            </div>
            <div className="register-room-location-street-address">
                <Input 
                    label="도로명주소" 
                    value={streetAddress}
                    onChange={onChangeStreetAddress}
                />
            </div>
            <div className="register-room-location-detail-address">
                <Input 
                    label="동호수(선택 사항)"
                    value={detailAddress}
                    onChange={onChangeDetailAddress}
                    useValidation={false}
                />
            </div>
            <div className="register-room-location-postcode">
                <Input 
                    label="우편번호" 
                    value={postcode}
                    onChange={onChangePostcode}
                />
            </div>
            <RegisterRoomFooter
                prevHref="/room/register/bathroom"
                nextHref="/room/register/geometry"
            />
        </Container>
    );
};


export default RegisterRoomLocation;