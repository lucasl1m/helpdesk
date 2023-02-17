import React, { useRef } from 'react';
import { BottomSheetView, BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import { Background } from './styles';
import { Button } from '@components/Controllers/Button';
import { OrderForm } from '@components/Forms/OrderForm';
import { useTheme } from 'styled-components';

export function NewOrder() {

  const theme = useTheme();
  
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handleSnapPress() {
    bottomSheetRef.current?.present();
  }

  return (
    <>
      <Button title="Novo chamado" onPress={handleSnapPress} />

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={['50%']}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          handleIndicatorStyle={{ backgroundColor: theme.COLORS.WHITE }}
          backdropComponent={() => <Background />}
          backgroundStyle={{ backgroundColor: "#202024" }}
        >
          <BottomSheetView>
            <OrderForm />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}