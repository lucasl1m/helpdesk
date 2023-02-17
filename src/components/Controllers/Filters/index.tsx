import React from 'react';
import { useTheme } from 'styled-components/native';

import { Filter } from '@components/Controllers/Filter';
import { Container, Title, Options } from './styles';

type Props = {
  onFilter: (status: string) => void;
  status: string;
}

export function Filters({ onFilter, status }: Props) {
  return (
    <Container>
      <Title>Filtre pelo status do chamado</Title>

      <Options>
        <Filter
          title="Abertos"
          isSelected={ status === 'open' }
          onPress={() => onFilter('open')}
        />

        <Filter
          title="Encerrados"
          isSelected={ status === 'closed' }
          onPress={() => onFilter('closed')}
        />
      </Options>
    </Container>
  );
}