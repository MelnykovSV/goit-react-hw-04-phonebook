import styled from '@emotion/styled';
import { BiSearchAlt2 } from 'react-icons/bi';
import { colors } from '../../constants';

export const Container = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
  div {
    position: relative;
  }
  h2 {
    margin-bottom: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 334px;
    overflow-y: auto;
  }
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 25px;
  }
  input {
    font-size: 18px;
    display: block;
    padding: 21px 25px;
    border: 1px solid ${colors.text.primary};
    width: 100%;
    background-color: ${colors.bg.primary};
    color: ${colors.text.primary};
    border-radius: 8%/50%;
  }
`;

export const StyledSearchIcon = styled(BiSearchAlt2)`
  position: absolute;
  width: 40px;
  height: 40px;
  right: 20px;
  top: 50%;
  color: ${colors.text.primary};
  transform: translateY(-50%);
`;
