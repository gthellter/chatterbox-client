// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template( // pass in an object

    '<div class="chat message">' +
        '<div class="username">name: <%= username %> </div>' +
        '<div class="message">message: <%= text %> </div>' +
      '</div>'
  )

};