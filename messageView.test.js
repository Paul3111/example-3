/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = "My first message!";
    buttonEl.click();
  

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').textContent).toEqual('My first message!');
  });

  it('Adds and removes the message when new button is clicked.', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const buttonRem = document.querySelector('#hide-message-button');
    buttonRem.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});