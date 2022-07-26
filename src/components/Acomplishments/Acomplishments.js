import React from 'react';
import { data } from '../../constants/constants';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;