# AI GURU

This code was generated with [ChatGPT](https://chat.openai.com).

## Prompts used

- Can you write angular code for a simple form with one input text box and one submit button
- can you write the code to import the necessary Angular modules and set up the component in your app module for this code to work properly.
- can you write the css for app.component.css
- how to start a new angular project for this code
  - Responded with the `ng new` command
- Error: src/app/app.component.ts:10:3 - error TS2564: Property 'inputValue' has no initializer and is not definitely assigned in the constructor.
  - Responded with the code `inputValue: string = ''; // Initialize inputValue with an empty string`
- can you add a header and a footer
- can you add styling for the header and footer
- make the background of the header lighter
- add some gap between the footer and the content above it
- when the submit button is clicked, the text entered in the inout box should be displayed below the submit button. 
- can you style this text
- send a post request to https://jj574jft7k7y7i7dqqai3pe7kq0sfdno.lambda-url.ap-south-1.on.aws when the submit button is clicked. The body of the request is a json with key "payload" and value as the content of the text input.
- response.message has "\n" characters. How to display new lines in html page for "\n"
- disable the button after submission and reenable after the api response
- rename submittedValue to wisdomText
- update the placeholder to "ENTER HERE" and button text to "GET WISDOM"
- Change button text to "GETTING WISDOM..." after submission and back to "GET WISDOM" after api response
- Add class wisdom-text to wisdomText
- When the button is disabled, change its color to grey
- also change cursor to normal mouse arrow when the button is disabled
- Add the text "WHAT ARE YOU STRUGGLING WITH?" above the input text box
- Add some space between the label and the input text. Make the label larger and bolder.
- make the label a little lighter in colour

## Workflow

1. Prompt ChatGPT and copy generated code to corresponding files
2. Run `ng serve` and validate in browser at `http://localhost:4200/`
3. Push and Deploy
   1. Using script: `sh cicd.sh`
   2. Or manually:
      1. Push to GitHub
         1. `git status`
         2. `git add .`
         3. `git commit -m "Commit message"`
         4. `git push origin main`
      2. Deploy to GitHub Pages
         1. `ng deploy --base-href=/ai-guru/` (prerequisite: `ng add angular-cli-ghpages`)

