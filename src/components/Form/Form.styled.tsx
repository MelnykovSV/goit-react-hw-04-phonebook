import styled from '@emotion/styled';
import { colors, animations } from '../../constants';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
  label {
    display: block;
    width: 100%;

    input {
      font-size: 18px;
      display: block;
      padding: 21px 25px;
      border: 1px solid ${colors.text.primary};
      width: 100%;
      background-color: ${colors.bg.primary};
      color: ${colors.text.primary};

      border-radius: 15px;
    }
    span {
      display: block;
      color: red;
      font-size: 20px;
      min-height: 23px;
    }
  }

  button {
    cursor: pointer;
    margin-top: 30px;
    font-size: 20px;
    border: none;
    border-radius: 8%/50%;
    background-color: ${colors.button.newContactButtonPrimary};
    color: ${colors.text.primary};
    padding: 15px 20px;
    transition: background-color ${animations.time} ${animations.cubic};
    :hover {
      background-color: ${colors.button.newContactButtonHover};
    }
  }
`;
