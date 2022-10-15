import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;

  margin: 0 auto ${p => p.theme.space[5]}px;
  padding: 0 ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.secondary};

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
`;
