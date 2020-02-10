# FED21 Data Interaction
Boilerplate using React, Next.js and Storyblok.

## Prerequisites
- NodeJS 10.X+
- Now (npm install -g now)

## Application set-up
- You can find all client-side code in ```pages/...```
- You can find all server-side code in ```pages/api/...```
- This set-up is specific to Next.js and you can find more info about it in the [Next.js documentation](https://nextjs.org/docs), specifically [here](https://nextjs.org/docs/api-routes/introduction).

## Storyblok
This application is using a Storyblok Test-Environment which I created for you. In order to add your own content and modules, you need to create an account with Storyblok and change the API token in ```react-storyblok-next-boilerplate/pages/api/page/[slug].js```.

## Components
For now I only added two example components (Headline Module and Paragraph Module), which I also set up inside the Storyblok space. You can add many more! :)

## Available routes (for now)
Available slugs (defined by Storyblok):
- [localhost:3000/welcome](http://localhost:3000/welcome)
- [localhost:3000/home](http://localhost:3000/home)

## More Documentation + Build-Up Tutorials
- [Introduction to Storyblok](https://www.storyblok.com/docs/Prologue/Introduction)
- [Advanced - The Complete Guide to Build a Full Blown Multilanguage Website with Next.js](https://www.storyblok.com/tp/next-js-react-guide)

## For later (you will get more info on this):

## To develop
```bash
now dev
```

## To deploy
```bash
now
```