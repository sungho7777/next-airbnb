import React, { useState } from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
import isEmpty from "lodash/isEmpty";
import { useSelector } from "../../../store";
//import UploadIcon from "../../../public/static/svg/register/upload.svg";
import Button from "../../common/Button";
import { uploadFileAPI } from "../../../lib/api/file";

import { useDispatch } from "react-redux";
import { registerRoomActions } from "../../../store/registerRoom";
import RegisterRoomPhotoCardList from "./RegisterRoomPhotoCardList";
import RegisterRoomFooter from "./RegisterRoomFooter";


const Container = styled.div`
    padding: 62px 30px 100px;
    h2{
        font-size:19px;
        font-weight800;
        margin-botto,:56px;
    }
    h3{
        font-weight:bold;
        color:${palette.gray_76};
        margin-bottom:6px;
    }
    .register-room-step-info{
        font-size:14px;
        max-width:400px;
        margin-bottom:24px;
    }
    .register-room-upload-photo-wrapper{
        width: 858px;
        height: 433px;
        margin: auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px dashed ${palette.gray_bb};
        border-radius: 6px;
        input {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0;
          cursor: pointer;
        }
        img {
          width: 100%;
          max-height: 100%;
        }
      }

`;
/*
    {
        file: File {
        _events: [Object: null prototype] {},
        _eventsCount: 0,
        _maxListeners: undefined,
        size: 11408431,
        path: 'C:\\Users\\User\\AppData\\Local\\Temp\\upload_0479411d72d32501fdef15a8241d44e1',
        name: '박주환001_아이메모리_인천돌사진.jpg',
        type: 'image/jpeg',
        hash: null,
        lastModifiedDate: 2021-05-23T02:02:12.851Z,
        _writeStream: WriteStream {
            _writableState: [WritableState],
            _events: [Object: null prototype] {},
            _eventsCount: 0,
            _maxListeners: undefined,
            path: 'C:\\Users\\User\\AppData\\Local\\Temp\\upload_0479411d72d32501fdef15a8241d44e1',
            fd: 3,
            flags: 'w',
            mode: 438,
            start: undefined,
            autoClose: true,
            pos: undefined,
            bytesWritten: 11408431,
            closed: false,
            [Symbol(kFs)]: [Object],
            [Symbol(kCapture)]: false,
            [Symbol(kIsPerformingIO)]: false
        },
        [Symbol(kCapture)]: false
        }
    }
*/
const RegisterRoomPhoto:React.FC=()=>{
    const dispatch = useDispatch();

    const photos = useSelector((state) => state.registerRoom.photos);

    // * 이미지(파일) 업로드 하기
    const uploadImage = async(event: React.ChangeEvent<HTMLInputElement>)=>{
        const {files} =event.target;

        if(files && files.length > 0){
            const file = files[0];
            const formdata = new FormData();
            formdata.append("file", file);
            try{
                const {data} = await uploadFileAPI(formdata);
                if(data){
                    dispatch(registerRoomActions.setPhotos([...photos, data]));
                }
            }catch(e){
                console.log(e);
            }
        }
    };


    return (
        <Container>
            <h2>숙소 사진 올리기</h2>
            <h3>7단계</h3>
            <p className="register-room-step-info">
                게스트가 사진을 보고 숙소의 느낌을 생생히 떠올려볼 수 있도록 해주세요.
                우선 사진 1장을 업로드 하고 숙소를 등록한 후에 추가할 수 있습니다.
            </p>
            {isEmpty(photos) && (
                <div className="register-room-upload-photo-wrapper">
                    <>
                        <input type="file" accept="image/*" onChange={uploadImage} />
                        <Button  color="bittersweet" width="167px">
                            사진 업로드
                        </Button>
                    </>
                </div>
            )}
            {!isEmpty(photos) && <RegisterRoomPhotoCardList photos={photos} />}
            <RegisterRoomFooter 
                prevHref="/room/register/conveniences"
                nextHref="/room/register/description"
            />
        </Container>
    );


};

export default RegisterRoomPhoto;