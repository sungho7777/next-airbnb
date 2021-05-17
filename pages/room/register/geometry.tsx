import React from "react";
import {NextPage} from "next";
import dynamic from "next/dynamic";

/*

    구글 지도로 숙소 위치 조정하기. (4단계)

*/
const RegisterRoomGeometry=dynamic(
    import("../../../components/room/register/RegisterRoomGeometry"),
    {ssr:false}
);

const geometry:NextPage=()=>{
    return <RegisterRoomGeometry />
};


export default geometry;