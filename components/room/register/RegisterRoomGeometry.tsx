import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";

const Container=styled.div`
    padding:62px 30px 100px;
    h2{
        font-size:19px;
        font-weight:800;
        margin-bottom:56px;
    }
    h3{
        font-weight:bold;
        color:${palette.gray_76};
        margin-bottom:6px;
    }
`;


const RegisterRoomGeomtry:React.FC=()=>{
    return (
        <>
            <Container>
                <h2>핀이 놓인 위치가 정확한가요?</h2>
                <h3>4단계</h3>
                <p>필요한 경우 핀이 정확한 위치에 자리하도록 조정할 수 있어요.</p>
            </Container>
        </>
    );
};

export default RegisterRoomGeomtry;

// 433 page;