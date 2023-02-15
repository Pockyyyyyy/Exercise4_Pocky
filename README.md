# Exercise 4: Interactive Text Generation

This is an exercise from the UCF Computational Media class based on Dev Containers [![Open in Dev Containers](https://img.shields.io/static/v1?label=Dev%20Containers&message=Open&color=blue&logo=visualstudiocode)](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode-remote-try-node). The main purpose is to use p5.js to create a canvas where users can input some message (request) to OpenAi's API through the server and get a response as output.

This exercise is made by **Hongbing Pan**.

## Changes Made By Steps

References: Most codes from OpenAi - Chat GPT

1. Used the example scripts as a start point.
2. Found an input example p5.js sketch online [Open in Dev Containers](https://editor.p5js.org/tom.smith/sketches/fASj3inoc). **Told the Chat GPT to combine the example script and input script together to create a code that the "text" (request) will be whatever the user put in the text box**.
3. At this moment the response is incomplete. For example, if the input is "what is life", then the response will only be "Life is the experience of living, including all the joys, struggles, and challenges that". Users can't tell what is behind "that". So I asked the Chat GPT to revise the code to **when there is a response already exists, then the next time when the user press submit button, it will use the existing response as the input**.
4. After revising the code, I realized if I keep pressing the submit button, it will stop when the response is complete. And even I type a new message as input, it will not clear the old response or use the new message as the new input. **So I told Chat GPT to add a clear button to clear existing responses when the user pressed it**.
5. Then I feel it's hard for the user to realize that you can keep pressing submit button to make the response completed, **so I told Chat GPT to revise the code so the submit button's text will change to "next" after there is a response existed**.
6. After testing, I found out it seems working, but whenever I want to submit a new input, the button's text is still "next" and not submit. So I separate the "Submit button" and "Next button". **When there is a response, show the next button, if not, hide the next button**. Now I have three buttons with different functions - Submit: send a request to API; Next: when there is a response, use this response as the request until the response is complete; Clear: clear the existing responses.
7. When I try to enter a new request when there's an existing response, the submit button doesn't work. **So I revised the code to whenever I submit a new request and there's an existing response, clear the old response and start a new request.**
8. Finally I told Chat GPT to add an event listener to detect when the user presses the enter key, it will also count as submit button.