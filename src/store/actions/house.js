export function addRoom(name, typeRoom) {
  return {
    type: 'ADD_ROOM',
    payload: {
      name,
      typeRoom,
    },
  };
}

export function deleteRoom(id) {
  return {
    type: 'DELETE_ROOM',
    payload: {
      id,
    },
  };
}

export function editRoom(id, name, typeRoom) {
  return {
    type: 'EDIT_ROOM',
    payload: {
      id,
      name,
      typeRoom,
    },
  };
}
