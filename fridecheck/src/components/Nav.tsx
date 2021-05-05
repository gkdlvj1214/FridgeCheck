import React, { useState } from "react";
import styled from "styled-components";
import { Login, Signup } from "../components";

interface props {
  handleLoginClick: () => void;
  handleCold: () => void;
  handleFrozen: () => void;
}
//메뉴들이 모인 공간
function Nav({ handleLoginClick, handleCold, handleFrozen }: props) {
  return (
    <NavWrap>
      <Button onClick={handleLoginClick}>로그인</Button>
      <Button>회원가입</Button>
      <Button>유통기한 팁</Button>
      <Button onClick={handleCold}>냉장실 추가</Button>
      <Button onClick={handleFrozen}>냉동실 추가</Button>
    </NavWrap>
  );
}

export default Nav;

const NavWrap = styled.div`
  background-color: ${({ theme }) => theme.colors.green};
`;

const Button = styled.button`
  ${({ theme }) => theme.common.defaultButton}
`;
