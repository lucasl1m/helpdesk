import styled from 'styled-components/native';

export const Form = styled.View`
  flex: 1;
  margin-top: 24px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;