class House {
  constructor() {
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  getAllRooms() {
    return this.rooms;
  }
}

class Room {
  constructor(roomType) {
    this.roomType = roomType;
  }
}

const house = new House();
house.addRoom(new Room("Bedroom"));
house.addRoom(new Room("Living room"));
house.addRoom(new Room("Bathroom"));

const rooms = house.getAllRooms();

rooms.forEach(function(room){
  console.log(room.roomType);
});
