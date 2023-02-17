import styled from 'styled-components/native';

export type OrderStyleProps = {
  status: 'open' | 'closed';
};

export const Container = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  overflow: hidden;

  margin-bottom: 8px;
`;

export const Content = styled.View`
  flex: 1;
  height: 100%;
  padding: 8px 16px;
  justify-content: center;
  background-color: #202024;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Status = styled.View<OrderStyleProps>`
  width: 4px;
  height: 100%;
  background-color: ${({ theme, status }) => status === 'open' ? theme.COLORS.OPEN : theme.COLORS.CLOSED};
`;

export const Title = styled.Text`
  flex: 1;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.TITLE};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 18px;
`;


export const Info = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;


export const Label = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};  
  margin-left: 3px;
`;