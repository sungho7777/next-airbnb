import React from "react";
import styled from "styled-components";
import palette from "../../../styles/palette";
//import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "../../common/DatePicker";
import {useSelector} from "../../../store";
import {registerRoomActions} from "../../../store/registerRoom";
import { useDispatch } from "react-redux";
import RegisterRoomFooter from "./RegisterRoomFooter";

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
        label{
            display:block;
            position:relative;
            width:100%;
            height:46px;
            padding:0 11px;
            border:1px solid ${palette.gray_eb};
            border-radius:4px;
            font-size:16px;
            outline:none;
            & ::placeholder{
                color:${palette.gray_76}
            }
            & :focus{
                border-color:${palette.dark_cyan}
            }
        }
        input{}
        .register-room-start-date {
            margin-right: 20px;
        }
        .register-room-end-date {
            margin-left: 20px;
        }
    }
`;

const RegisterRoomDate: React.FC=()=>{
    const dispatch = useDispatch();

    const startDate = useSelector((state) => state.registerRoom.startDate);
    const endDate = useSelector((state) => state.registerRoom.endDate);

    const dateStartDate = startDate ? new Date(startDate) : null;
    const dateEndDate = endDate ? new Date(endDate) : null;

    // * ?????? ?????? ?????? ?????? ???
    const onChangeStartDate = (date:Date | null)=>{
        console.log("onChangeStartDate : "+date);

        dispatch(
            registerRoomActions.setStartDate(date ? date.toISOString() : null)
        );
    };
    // * ?????? ?????? ?????? ?????? ???
    const onChangeEndDate = (date:Date | null)=>{
        console.log("onChangeEndDate : "+date);

        dispatch(
            registerRoomActions.setEndDate(date ? date.toISOString() : null)
        );
    };

    return (
        <Container>
            <h2>?????? ?????? ?????? ????????????</h2>
            <h3>11??????</h3>
            <div className="register-room-date-wrapper">
                <div className="register-room-start-date">
                    <label>
                        <span>?????? ?????????</span>
                        <DatePicker 
                            selected={startDate ? new Date(startDate) : null}
                            onChange={onChangeStartDate}

                            monthsShown={2}
                            selectsStart
                            startDate={dateStartDate}
                            endDate={dateEndDate}
                            minDate={new Date()}
                        />
                    </label>
                </div>
                <div className="register-room-end-date">
                    <label>
                        <span>?????? ?????????</span>
                        <DatePicker 
                            selected={endDate ? new Date(endDate) : null}
                            onChange={onChangeEndDate} 

                            monthsShown={2}
                            selectsStart
                            startDate={dateStartDate}
                            endDate={dateEndDate}
                            minDate={dateStartDate}
                        />
                    </label>
                </div>
            </div>
            <RegisterRoomFooter
                prevHref="/room/register/price"
                nextHref="/room/register/checklist"
            />
        </Container>
    );
};

export default RegisterRoomDate;