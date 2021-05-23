import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";

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
    label {
        span {
        display: block;
        margin-bottom: 8px;
        }
    }
    input {
        display: block;
        position: relative;
        width: 100%;
        height: 46px;
        padding: 0 11px;
        border: 1px solid ${palette.gray_eb};
        border-radius: 4px;
        font-size: 16px;
        outline: none;
        & ::placeholder {
        color: ${palette.gray_76};
        }
        & :focus {
        border-color: ${palette.dark_cyan};
        }
    }
    .register-room-date-wrapper {
        display: flex;
        align-items: center;
        .register-room-start-date {
        margin-right: 20px;
        }
        .register-room-end-date {
        margin-left: 20px;
        }
    }
`;

const RegisterRoomDate: React.FC=()=>{

    return (
        <Container>
            <h2>예약 가능 여부 설정하기</h2>
            <h3>11단계</h3>
        </Container>
    );
};

export default RegisterRoomDate;



// react-datepicker 사용하기
//     506 page