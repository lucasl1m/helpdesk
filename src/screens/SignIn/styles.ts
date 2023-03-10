import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48,
  },
})`
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  text-align: center;
  margin-top: 24px;
  `;