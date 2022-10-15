import styled from 'styled-components';
export const ContactItem = styled.li`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
  align-items: center;
  justify-content: space-between;

  min-width: ${p => p.theme.space[8]}px;
  padding: ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.regular};

  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.normal};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const DeleteBtn = styled.button`
  display: block;

  padding: ${p => p.theme.space[3]}px;

  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.m};

  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 200ms;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    cursor: pointer;
  }
`;
export const Description = styled.div``;
