import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import { SectionTitle } from './Section.styled';

export const Section = ({ tittle, children }) => (
  <Box as="section" width="600px" ml="auto" mr="auto" pt={5} pb={5}>
    <SectionTitle>{tittle}</SectionTitle>
    <>{children}</>
  </Box>
);

Section.propTypes = {
  tittle: PropTypes.string.isRequired,
  children: PropTypes.node,
};
