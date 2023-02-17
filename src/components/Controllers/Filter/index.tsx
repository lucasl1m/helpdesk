import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Title, FilterProps } from './styles';

type Props = FilterProps & TouchableOpacityProps & {
  title: string;
  isSelected: boolean;
}

export function Filter({ title, isSelected, backgroundColor, ...rest }: Props) {

  const { COLORS } = useTheme();

  return (
    <Container 
      backgroundColor={
        isSelected ? COLORS.PRIMARY : '#202024'
      } {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}

