## This is a student project at Hyper Island for our Data-Interaction module together with @madamerobot.
I have only focused on getting everything to work and trying to understand as much as possible. I have barely added any content or done any styling as of yet.


### Your biggest three challenges throughout the project
- A lot of new/weird lingo/naming in Storyblok and the code syntax made it hard to understand
- First time using a CMS so understanding how everything works together took time
- Creating a new page that could take content from Storyblok AND custom content from code

### Your biggest three learnings - what would you tell yourself if you started again?
- CMS is cool but not always useful for all kinds of websites. For a portfolio it feels a bit obsolete unless you want to implement a blog or perhaps contiously add new projects
- Spending time simply looking and experimenting with the code makes you understand it after a while.
- Talking with class mate/colleagues can really help. Even if you don't get the answer just talking through the current obstacles can open up to solutions

https://andy-portfolio.now.sh/

-----------------------------------------------------------------------------------------------------------------------------
## Instructions

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

## Tooling
This application uses SASS so that we can write modular CSS.
The CSS you are writing for each component is going to be scoped to these modules only and not affect any other parts of the site.

## To run (development)
```bash
now dev
```

## For later (you will get more info on this):

## To deploy to live
```bash
now
```
