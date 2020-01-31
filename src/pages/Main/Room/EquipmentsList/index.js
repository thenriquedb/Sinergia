import React, { useEffect } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';

import CardEquipment from '../../../../components/Cards/CardEquipment';
import HiddenCard from '../../../../components/Cards/CardEquipment/HiddenCard';

import { Container } from './styles';

function EquipmentsList({ room, reload }) {

  const { equipments } = room;

  return (
    <Container>
      <SwipeListView
        data={equipments}
        extraData={reload}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        rightOpenValue={-100}
        disableRightSwipe={true}
        renderItem={({ item }) => <CardEquipment equipment={item} />}
        renderHiddenItem={({ item, index }) => (
          <HiddenCard
            roomName={room.name}
            roomId={room.id}
            idEquipment={item.id} />
        )}
      />
    </Container>
  );
}


export default EquipmentsList;