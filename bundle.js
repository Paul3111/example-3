(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.buttonRem = document.querySelector("#hide-message-button");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.buttonRem.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          const new_button = document.createElement("div");
          new_button.setAttribute("id", "message");
          new_button.textContent = "This message displayed by JavaScript";
          document.querySelector("#main-container").append(new_button);
          console.log("Thanks for clicking me!");
        }
        hideMessage() {
          const element = document.getElementById("message");
          element.remove();
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
