// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    //$('option').remove();
    var rooms = Object.keys(Rooms.storage);
    rooms.forEach((room) => {
      $(`<option> ${room}</option>`).appendTo(RoomsView.$select);
    });
  },

  renderRoom: function(roomName) {
    // TODO: Render out a single room.
    // $('.chat').remove();
    var $room = $('<div class="chat room">' +
        `<h1> ${roomName}</h1>` +
        '</div>')
    ;
    var selectedRoom = Rooms.storage[roomName];
    while (selectedRoom && selectedRoom.size > 0) {
      //console.log(selectedRoom.size);
      var $message = $(MessageView.render(selectedRoom.retrieveMessage()));
      $message.appendTo($room);
    }
    ($room).appendTo('#chats');

  },

  handleChange: function(event) {
    var selectBox = document.getElementsByClassName('rooms')[0];
    console.log('how many times?');
    selectBox.addEventListener('change', () => {
      var index = selectBox.selectedIndex;
      var selectedRoom = selectBox.options[index].value;
      //$('.chat').remove();
      RoomsView.renderRoom(selectedRoom);
    }, true);
    selectBox.removeEventListener('change', () => {
      var index = selectBox.selectedIndex;
      var selectedRoom = selectBox.options[index].value;
      //$('.chat').remove();
      RoomsView.renderRoom(selectedRoom);
    }, true);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
