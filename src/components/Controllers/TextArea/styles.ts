import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({ theme }) => ({
  placeholderTextColor: theme.COLORS.SUBTEXT
})) <TextInputProps>`
  width: 100%;
  height: 100px;
  background-color: #18181B;
  border-radius: 12px;
  font-size: 14px;
  padding: 16px 16px;
  padding-left: 20px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  border: 1px solid ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;