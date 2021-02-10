import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  padding-right: 15px;
  padding-left: 15px;

  @media (min-width: ${(props) => props.theme.dimension.small}) {
    width: 100%;
  }

  @media (min-width: ${(props) => props.theme.dimension.tablet}) {
    width: 100%;
    max-width: 960px;
  }
`;
export default Container;
