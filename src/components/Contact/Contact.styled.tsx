import styled from '@emotion/styled';
import { colors, animations } from '../../constants';

export const Container = styled.li`
  background-color: ${colors.bg.contact};
  width: 100%;
  border-radius: 15px;
  display: flex;
  padding: 15px 25px;
  justify-content: space-between;
  align-items: center;
  transition: background-color ${animations.time} ${animations.cubic};
  p {
    margin: 0;
  }
  button {
    width: 43px;
    height: 43px;
    cursor: pointer;
    opacity: 0;
    transition: opacity ${animations.time} ${animations.cubic};
    background-color: ${colors.button.contactButtonPrimary};
    border: 1px solid white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background-color: ${colors.bg.contact};
    button {
      opacity: 1;
      transition: background-color ${animations.time} ${animations.cubic};
      &:hover {
        background-color: ${colors.button.contactButtonHover};
      }
    }
  }
`;
