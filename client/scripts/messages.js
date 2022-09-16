// This object houses all themessage message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = function () {
  this.storage = [];
  this.size = 0;
  // TODO: Define how you want to store your messages.
  this._data = null;

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  this.storeMessage = function (message) {
    this.storage.push(message);
    this.size++;
  };

  this.retrieveMessage = function() {
    return this.storage.pop();
    this.size--;
  };


};