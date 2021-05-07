import React, {useMemo, useState} from "react";
import styled from "styled-components";
import { bedTypes } from "../../../lib/staticData";
import { registerRoomActions } from "../../../store/registerRoom";
import palette from "../../../styles/palette";
import {BedType} from "../../../types/room";
import Button from "../../common/Button";
import Selector from "../../common/Selector";

const Container = styled.li`
  width: 100%;
  padding: 28px 0;
  border-top: 1px solid ${palette.gray_dd};
  &:last-child {
    border-bottom: 1px solid ${palette.gray_dd};
  }
  .register-room-bed-type-top {
    display: flex;
    justify-content: space-between;
  }
  .register-room-bed-type-bedroom {
    font-size: 19px;
    color: ${palette.gray_48};
  }
  .register-room-bed-type-selector-wrapper {
    margin-top: 28px;
    width: 320px;
  }
  .register-room-bed-type-counters {
    width: 320px;
    margin-top: 28px;
  }
  .register-room-bed-type-counter {
    width: 290px;
    margin-bottom: 18px;
  }
`;

interface IProps{
    bedroom:{id:number; beds:{type:BedType; count:number}[]};
}

const RegisterRoomBedTypes: React.FC<IProps> = ({bedroom})=>{
    const [opened, setOpened] = useState(false);
    // * 선택된 침대 옵션들
    const [activedBedOptions, setActivedBedOptions] = useState<BedType[]>([]);





    // * 침대 개수 총합
    const totalBedsCount = useMemo(()=>{
        let total=0;
        bedroom.beds.forEach((bed)=>{
            total += bed.count;
        });
        return total;
    }, [bedroom]);
    // * 남은 침대 옵션들
    const lastBedOptions=useMemo(()=>{
        return bedTypes.filter((bedType)=>!activedBedOptions.includes(bedType));
    }, [activedBedOptions, bedroom]);




    // * 침실 유형 열고 닫기
    const toggleOpend = () => setOpened(!opened);




    return (
        <Container>
            
        
            <div className="register-room-bed-type-top">
                <div className="register-room-bed-type-bedroom-texts">
                    <p className="register-room-bed-type-bedroom">{bedroom.id}번 침실</p>
                    <p className="register-room-bed-type-bedroom-counts">
                        침대 {totalBedsCount}개
                    </p>
                </div>
                <Button 
                    onClick={toggleOpend}
                    styleType="register"
                    color="white"
                >
                    {opened && "완료"}
                    {!opened &&
                        (totalBedsCount === 0 ? "침대 추가하기":"침대 수정하기")
                    }
                </Button>
            </div>
            {opened && (
                <div className="register-room-bed-type-selector-wrapper">
                    <Selector
                        type="register"
                        options={lastBedOptions}
                        defaultValue="다른 침대 추가"
                        value="다른 침대 추가"
                        disabledOptions={["다른 침대 추가"]}
                        useValidation={false}
                        onChange={(e)=>setActivedBedOptions([
                            ...activedBedOptions,
                            e.target.value as BedType,
                        ])}
                    />
                </div>
            )}
            {opened && (
                <div className="register-room-bed-type-counters">
                    {activedBedOptions.map((type)=>(
                        <div className="register-room-bed-type-counter" key={type}>
                            <Container
                                label={type}
                                value={bedroom.beds.find((bed)=>bed.type===type)?.count || 0}
                                key={type}
                                onChange={(value)=>
                                    dispatch(
                                        registerRoomActions.setBedTypeCount({
                                            bedroomId:bedroom.id,
                                            type,
                                            count:value,
                                        })
                                    )
                                }
                            />
                        </div>
                    ))}
                </div>
            )}
        </Container>
    );
};

export default RegisterRoomBedTypes;