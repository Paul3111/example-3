class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    const new_button = document.createElement('div');
    new_button.setAttribute('id', 'message');
    // or new_button.id = 'message';
    new_button.textContent = 'This message displayed by JavaScript';

    document.querySelector('#main-container').append(new_button);
    console.log('Thanks for clicking me!')
  }
}

module.exports = MessageView;