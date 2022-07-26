import React from 'react';
import { LeftSection } from './HeroStyles';
import Button from '../../styles/GlobalComponents/Button';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>Welcome to <br/> My personal portfolio</SectionTitle>
      <SectionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae ex euismod, porta orci id, efficitur nisi. Fusce cursus magna quis risus auctor, ac eleifend velit eleifend.</SectionText>
      <Button onClick={() => window.location = 'mailto:name@example.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;