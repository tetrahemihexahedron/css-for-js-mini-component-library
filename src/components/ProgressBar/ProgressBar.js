/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  const styles = STYLES_BY_SIZE[size];
  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={styles}>
      <ValueBar value={value}></ValueBar>
    </Wrapper>
  );
};

const STYLES_BY_SIZE = {
  small: {
    "--height": 8 + "px",
  },
  medium: {
    "--height": 12 + "px",
  },
  large: {
    "--height": 24 + "px",
  },
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
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
