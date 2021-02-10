import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import { ThemeContext } from "../context/ThemeMode";

export default function ThemeSwitch() {
  const [openSwich, setOpenSwich] = React.useState(false);
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  const handleSwitch = () => setOpenSwich(!openSwich);

  return (
    <Button active={openSwich}>
      <Box>
        <p>Modo Lectura</p>
        <Group>
          <ButtonBorder
            active={colorMode === "light" ? "#f05454" : ""}
            onClick={() => setColorMode("light")}
          >
            LIGHT
          </ButtonBorder>

          <ButtonBorder
            active={colorMode === "dark" ? "#f05454" : ""}
            onClick={() => setColorMode("dark")}
          >
            DARK
          </ButtonBorder>
          <ButtonAround onClick={handleSwitch}>
            <Icon size="mini" name={openSwich ? "arrow right" : "arrow left"} />
          </ButtonAround>
        </Group>
      </Box>
    </Button>
  );
}

const Button = styled.div`
  min-width: 0px;
  transition: all 0.4s ease 0s;
  position: fixed;
  right: 0px;
  transform: ${(props) =>
    props.active ? "translate(0px)" : "translateX(100%)"};
  top: 15%;
  z-index: 99;
`;

const Box = styled.div`
  box-shadow: rgba(22, 28, 45, 0.18) 0px 22px 34px;
  box-sizing: border-box;
  min-width: 0px;
  background: ${(props) => props.theme.color.themeswitch};
  border: medium none transparent;
  max-width: 185px;
  text-align: center;
  border-bottom-left-radius: 25px;
  padding: 15px 13px;
  position: relative;

  p {
    color: #333;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.7rem;
  }
`;

const Group = styled.div`
  min-width: 0px;
  box-shadow: rgba(22, 28, 45, 0.2) 0px 12px 34px;
  border-radius: 33px;
  background-color: rgb(255, 255, 255);
  overflow: hidden;
  display: flex;
  max-width: 153px;
`;

const ButtonBorder = styled.button`
  background: ${(props) => props.active && props.active};
  border: medium none;
  width: 50%;
  font-size: 11px;
  font-weight: 700;
  height: 42px;
  padding-left: 15px;
  padding-right: 15px;
  letter-spacing: 1.38px;
  text-transform: uppercase;
  outline: currentcolor none medium !important;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonAround = styled.button`
  width: 30px;
  height: 50px;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  -moz-box-pack: center;
  justify-content: center;
  border: 0px none;
  color: rgb(255, 255, 255);
  font-size: 30px;
  position: absolute;
  left: 1px;
  top: 0px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transform: translateX(-100%);
  outline: currentcolor none medium !important;
  background-color: ${(props) => props.theme.color.themeswitch};

  i {
    color: #333;
  }

  &:hover {
    cursor: pointer;
  }
`;
