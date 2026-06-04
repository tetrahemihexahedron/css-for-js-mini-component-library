/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value}>
      <ValueBar value={value}></ValueBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: 12px;
  border-radius: 4px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const ValueBar = styled.div`
  width: ${(p) => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
