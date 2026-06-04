/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const ProgressBar = ({ value, size }) => {
  const styles = STYLES_BY_SIZE[size];
  return (
    <Wrapper role="progressbar" aria-valuenow={value} style={styles}>
      <BarWrapper>
        <ValueBar value={value}></ValueBar>
      </BarWrapper>
    </Wrapper>
  );
};

const STYLES_BY_SIZE = {
  small: {
    "--height": 8 + "px",
    "--padding": 0 + "px",
    "--border-radius": 4 + "px",
  },
  medium: {
    "--height": 12 + "px",
    "--padding": 0 + "px",
    "--border-radius": 4 + "px",
  },
  large: {
    "--height": 24 + "px",
    "--padding": 4 + "px",
    "--border-radius": 8 + "px",
  },
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const BarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const ValueBar = styled.div`
  width: ${(p) => p.value}%;
  height: 100%;
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
