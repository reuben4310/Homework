(function () {
  const socketIo = io();
  
  const loginForm = $('#loginForm');
  loginForm.submit(e => {
    e.preventDefault();

    socketIo.emit('login', $('#name').val(), (err,callbackData) => {
      if(err) {
        $('#error').text(err);
      } else {
        loginForm.slideUp();
        $('#messagesContainer').slideDown();
        $('#chatters').text(callbackData);
      }
    });
  });

  const messageInput = $('#message');
  $('#messageForm').submit(e => {
    e.preventDefault();
    const msg = messageInput.val().trim();
    if (msg) {
      socketIo.emit('message', messageInput.val());
    }
  });

  const messagesElem = $('#messages');
  socketIo.on('message', msg => {
    messagesElem.append(`<div>${msg.author} wrote: ${msg.msg}</div>`);
  });

  const privateMessagesElem = $('#private');
  socketIo.on('Direct_message', msg => {
    privateMessagesElem.append(`<div>${msg.name} wrote: ${msg.msg}</div>`);
  });
}());