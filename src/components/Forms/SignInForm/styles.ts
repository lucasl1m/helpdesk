import styled from 'styled-components/native';

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  margin-bottom: 24px;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const Footer = styled.View`  
  display: flex;  
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  margin-top: 24px;
`;

export const Text = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};

  margin-bottom: 8px;
`;