// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // load outer element chatView
  },

  render: function(roomName) {

    // TODO: Render _all_ the messages.
    // iterate messages
    // while (){}
    // pass in message object to messageView.render
      // call renderMessage
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // call messageView._render
    message = MessageView.render(message);
    //append to
    $(message).appendTo(MessagesView.$chats);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};