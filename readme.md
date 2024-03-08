# GSF Integration Playground

This is a simple server/client that demonstrates how you are able to use punchout within GSF.

## Instructions

1. Install NodeJS if you don't have it already
2. Run `npm install`
3. Include your API Key / Customer Id within `index.js`
4. Run `node index.js`
5. Click the punchout button.

## Redirect

> [!WARNING]  
> When the GSF API returns the response, it returns a 302 redirect.
> 
> You must ensure that your calling code does **not** automatically follow this redirect.
> Instead, you must inspect the `Location` header, obtain the URL, and then navigate to this URL in a new browser window/tab.

## Demonstration

https://github.com/GSFCarParts/GSFPunchoutIntegrationPlayground/assets/110169369/d807378f-b0df-482d-89c8-158c25732668

