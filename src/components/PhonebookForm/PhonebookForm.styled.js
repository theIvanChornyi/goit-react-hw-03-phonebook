import styled from 'styled-components';
export const AddBtn = styled.button`
  display: block;
  margin: 0 auto;
  padding: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 200ms;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    cursor: pointer;
  }
`;
