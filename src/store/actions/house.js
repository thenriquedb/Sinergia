export function addRoom(name) {
  return {
    type: 'ADD_ROOM',
    payload: {
      name,
    },
  };
}
