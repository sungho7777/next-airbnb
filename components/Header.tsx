import React, { useState } from "react"
import styled from "styled-components"
import AirbnbLogoIcon from "../public/static/svg/logo/airbnb_logo.svg";
import AirbnbLogoTextIcon from "../public/static/svg/logo/airbnb_logo_text.svg";
import Link from "next/link"
import palette from "../styles/palette";
// import ModalPortal from './ModalPortal';
import SignUpModal from './auth/SignUpModal';
import useModal from '../hooks/useModal';
import { useSelector } from "../store"
import HamburgerIcon from "../public/static/svg/header/hamburger.svg"
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth"
import AuthModal from "./auth/AuthModal";
import OutsideClickHandler from 'react-outside-click-handler';
import { logoutAPI } from '../lib/api/auth';
import { userActions } from '../store/user';
import HeaderAuths from "./HeaderAuths";
import HeaderUserProfile from './HeaderUserProfile';

const Container = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
  .header-logo-wrapper {
    display: flex;
    align-items: center;
    .header-logo {
      margin-right: 6px;
    }
  }
  /** 헤더 로그인 회원가입 버튼 */
  .header-auth-buttons {
    .header-sign-up-button {
      height: 42px;
      margin-right: 8px;
      padding: 0 16px;
      border: 0;
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }

    .header-login-button {
      height: 42px;
      padding: 0 16px;
      border: 0;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
      border-radius: 21px;
      background-color: white;
      cursor: pointer;
      outline: none;
      &:hover {
        box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
      }
    }
  }
  
  /* .modal-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top:0;
    left:0;
  .modal-background {
    position: absolute;
    width: 100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.75);
    z-index:10;
  }
  .modal-contents {
    width: 400px;
    height: 400px;
    background-color: white;
    z-index:11;
  } */
  
  .header-user-profile {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 6px 0 16px;
    border: 0;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
    border-radius: 21px;
    background-color: white;
    cursor: pointer;
    outline: none;
    &:hover {
      box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
    }
    .header-user-profile-image {
      margin-left: 8px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  // react-outside-click-hand;er div
  .header-logo-wrapper + div {
    position: relative;
  }

  .header-usermenu {
    position: absolute;
    right: 0;
    top: 52px;
    width: 240px;
    padding: 8px 0;
    box-shadow: 0 2px 16px rgba(0,0,0,0.12);
    border-radius: 8px;
    background-color: white;
    li {
      display: flex;
      align-items: center;
      width: 100%;
      height: 42px;
      padding: 0 16px;
      cursor: pointer;
      &:hover {
        background-color: ${palette.gray_f7};
      }
    }
  }

  .header-usermenu-divider {
    width: 100%;
    height: 1px;
    margin: 8px 0;
    background-color: ${palette.gray_dd};
  }
`;

const Header: React.FC = () => {
  // const [modalOpened, setModalOpened] = useState();
  const {openModal, closeModal, ModalPortal} = useModal();
  const dispatch = useDispatch();

  // 유저 메뉴 열고 닫힘 여부
  const isLogged = useSelector((state) => state.user.isLogged);

  const logout = async () => {
    try {
      await logoutAPI();
      dispatch(userActions.initUser());
      console.log("clicked");
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Container>
      <Link href="/">
        <div className="header-logo-wrapper">
          <AirbnbLogoIcon  className="header-logo" />
          <AirbnbLogoTextIcon />
        </div>
      </Link>
      
      {!isLogged && <HeaderAuths />}
      {isLogged && <HeaderUserProfile />}
      
      <ModalPortal>
        <AuthModal closeModal={closeModal} />
      </ModalPortal>
    </Container>
  );
};

export default Header;