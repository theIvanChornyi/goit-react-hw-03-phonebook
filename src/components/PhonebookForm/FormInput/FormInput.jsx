import PropTypes from 'prop-types';
import { Box } from 'components/Box';

import { FormLabel, Input, ErrorNotification } from './FormInput.styled';

export const FormInput = ({ inputType, formName }) => (
  <Box htmlFor={formName} display="block" mb={4} as="label">
    <FormLabel>{formName}</FormLabel>
    <Input type={inputType} name={formName} id={formName} required />
    <ErrorNotification component="div" name={formName} />
  </Box>
);

FormInput.propTypes = {
  inputType: PropTypes.string.isRequired,
  formName: PropTypes.string.isRequired,
};
