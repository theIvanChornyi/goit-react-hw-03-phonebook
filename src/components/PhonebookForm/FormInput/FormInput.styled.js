import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormLabel = styled.span`
  display: block;
  margin-bottom: ${p => p.theme.space[3]}px;

  text-align: center;
  text-transform: capitalize;

  font-weight: ${p => p.theme.fontWeights.normal}px;
  font-size: ${p => p.theme.fontSizes.regular};
  color: ${p => p.theme.colors.accent};
`;
export const Input = styled(Field)`
  display: block;
  width: ${p => p.theme.space[8]}px;
  height: ${p => p.theme.space[5]}px;

  margin: 0 auto;
  padding: 0 ${p => p.theme.space[4]}px;

  color: ${p => p.theme.colors.secondary};

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};
`;

export const ErrorNotification = styled(ErrorMessage)`
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  min-height: ${p => p.theme.space[6]}px;

  padding: ${p => p.theme.space[4]}px;

  background-color: ${p => p.theme.colors.accent};
  color: ${p => p.theme.colors.white};
  text-align: center;
  vertical-align: middle;

  border-radius: ${p => p.theme.radii.normal};
  transform: translateX(-50%);
`;
