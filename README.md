# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) General Assembly Software Engineering Immersive: Project 2


![homepage](assets/Screenshot%202022-02-22%20at%2012.32.56.png?raw=true)

## Overview

This was my second project of the General Assembly Software Engineering Immersive course.

For this project we were put in pairs to build a React application that consumes a public API. We decided to build an online English dictionary so we researched and found an API to use for this purpose. We used the CSS framework Bulma for the first time to make styling the website easier and faster.
I was paired with [Esin Yilmazbilek](https://github.com/EsinYilmazbilek) for the project and the app was deployed with Netlify and can be found [here](https://clever-nightingale.netlify.app/).


## The Brief

* Consume a public API
* The project should have several components

## Timeframe

2 days.

## Technologies Used

* Bulma
* Excalidraw
* CSS
* React
* Axios
* Express
* Node.js
* GitHub

![homepage defintion](assets/Screenshot%202022-02-22%20at%2012.33.10.png?raw=true)

## Approach Taken

### Planning

We had two days to build the project and before we could start building we had to decide on an idea and find an API. Initially we had thought of a language translator for a fictional language, ie Dothraki, Klingon or Elvish. When we did some research we found that there were API’s for this but they were not free. So we rethought our idea and decided to create an online dictionary as we knew that there were many moving parts to the idea and we could test our skills and knowledge. 

We drew a wireframe of the home page and the definition page to understand what we wanted the app to look like and also to understand what would need to be built. We wanted a very clean and simple looking app given the timeframe we had to build the app.

![excalidraw image](assets/Screenshot%202022-02-22%20at%2012.33.24.png?raw=true)

With such a limited time and with us pair coding via Zoom we knew we would have to plan our time carefully and also work alone to build different elements in parallel.

In order to get a working MVP of our project, the following elements would need to be built:

Home Page:

* Search Bar
* Search Button
* Routing capability to the Definition Page

Definition Page:

* Show Card containing some of the items in the object, namely:
  * Definition
  * Part of Speech
  * Example
  * Phonetics

With the show card we knew it would need to repeat if there were different definitions of the word so we were prepared to map all the definitions onto the show page.

Stretch Goals:

We wanted to achieve these stretch goals in order to give the app an added dimension and elevate it beyond a simple push and pull from an API.

* Random Word Button
* Definition Audio Player

As we came up with our idea quite quickly, we had a few hours to work together before the project actually kicked off the following morning. This allowed us to work together and pair code in order to get a head start. 

We coded quite a lot that afternoon so it really allowed us to plan ahead for the next two days. 

We broke down our plan across the two days as follows:

Day 1

* Build search bar on home page
* Build Definition Show page

Day 2

* Fix bugs
* Add Random Button 
* Add Audio Player
* Style using Bulma/CSS

## The Build

On the initial planning afternoon, we came to a consensus on the app quite quickly and found a great API as well. This meant we were able to start coding together that afternoon. We decided to pair code those few hours to get the shell of the app ready for us to go and work independently. 

We took turns to code and to navigate but on that first afternoon we managed to get the API connected and were able to send GET requests. We also built our router page and had it working so we could manually navigate to the Home and Deintion Show pages. 

At this point our pages showed nothing except “Home” and “Definition” when you navigated to them but we knew they were working and that's all we planned for. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.33.35.png?raw=true)

At this point we broke for the day and we each would work independently that evening. I was to work on the home page and Esin was to work on the Defintion Show Card page. We would pull the Show Card into the Show page to allow us to reduce the amount of code we had on one page and also for us to be able to repeat the card multiple times if there were multiple definitions of a word. 

Each morning we would have a stand up between us to show and explain the work done the previous evening and to share the code we had written via slack. In later projects we would use GitHub more effectively to share different code but for this project it was much easier to share code blocks or zip our code to each other. 

During the day we would sit on Zoom together so we could easily talk to each other and assist when needed. 

That evening I had coded the Home page so that the chosen word would navigate to the Defintion Show page. This was achieved by using a form and React.useState to obtain the word chosen by the user and then this word was used to push the user to a url that we had decided would be the Defintion Show page. 

I made sure to change any word entered into the search bar to lowercase to ensure that the information we were getting from the API would not have any issues with capitalisation. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.33.44.png?raw=true)

Esin had built the Definition Show Card that evening and it would show the agreed items from the object that the API was returning to us. We wanted the Definition, Part of Speech, Origin and Phonetic to be shown on the page. 

Esin had imported it to the Defintion Show Page to allow her to see visually when a word was entered. 

Later I would add an audio player to the code but the only thing I initially added that morning was to ensure that the word being defined was capitalised for a better user experience. I did so by writing the code below.

![codeblock](assets/Screenshot%202022-02-22%20at%2012.33.55.png?raw=true)

Once we had shared our code with each other and checked that everything was functioning as it should be, we worked on our solo elements, whilst still on a Zoom call together. Esin went to work on the Defintion Show page and mapping through the API object to get the definition showing on the page. Esin imported the Definition Show Card to the Defintion Show Page to allow her to see the card on the show page. 

At this time I added the capitalisation code and we decided that the audio player would need to be added and we no longer considered it a stretch goal. We needed it in our app, so I began researching how to build an audio player. 

After reading online about playing audio files, the most efficient and logical path was to import the npm React Audio Player. While there were limitations in the way the audio layer is presented, it would allow us to quickly have an audio player in the code without having to build it ourselves. I read the documentation on the npm page and then installed it into our code. I then wrote the below code.

I began adding some styling elements to the code as I was going along to save time. This was the strong tag I added to the h5. I also added conditional rendering to the code for audio and the phonetics as we identified these two as the variables in the object that were not always present.

![codeblock](assets/Screenshot%202022-02-22%20at%2012.34.04.png?raw=true)

I then worked on the Defintion Show Page by adding the search bar and a home button while Esin continued to work with the arrays and mapping through them. This proved to be a larger and more complicated task. The search bar would need to follow the same patterns as it did on the home page so I was able to progress through it quite quickly. At this point I needed to work with Esin as the mapping was quite complicated for our definitions. 

If you view the console log below you can see that there are arrays within arrays within arrays for each definition. Navigating our way through this took a large amount of time as there were various elements to it. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.34.26.png?raw=true)

We had to map through the initial array and then for various elements we had to either map another array or use the index number to then provide us with the data.  

This took time as we were having to work through each part of the definition show card one by one to get it to appear. This ended up taking a large part of the day and involved lots of additional reading from us and seeking help from our TA. 

We did eventually get all the information to display for us and decided to break for the day. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.34.34.png?raw=true)

Before we broke for the day we each decided what we wanted to work on that evening. Esin was going to tackle the styling with Bulma and I wanted to tackle the Random word button. 

Esin handled the styling and stuck with the idea of keeping it clean and simple. Given the time constraints it is exactly as we wanted it. With more time we could have tried some different things. I had an idea to try and make it look like a CD-ROM dictionary from the 90’s much like Encarta. However, this is a future style choice that requires far more time. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.34.50.png?raw=true)

The next day with the styling complete I shared my code with Esin for the Random Word Button. This was slightly tricky as I had to use a second API to pull in a random word, however there are not many great, free examples out there. I did find a serviceable API and I wrote code to pull the random word into the same functions that the user word was working with. I added a button to the HTML to get the function to be called upon the click of the button.

![codeblock](assets/Screenshot%202022-02-22%20at%2012.35.00.png?raw=true)

With only the day left to finish the project, I focussed on error handling which consisted of a user spelling a word incorrectly. To highlight this to the user, I used a Boolean that changed to true if during the try/catch function the API couldnt locate the word requested. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.35.09.png?raw=true)

Once the Boolean became true, I used Toast notifications on the top of the screen to advise the user they had made a spelling mistake. It would then disappear and the user could respell the word. 

![codeblock](assets/Screenshot%202022-02-22%20at%2012.35.17.png?raw=true)

With the rest of the day we tidied up code and tried to fix a couple of bugs we had. I will explain more about the bugs in the relevant section below. 

## Challenges

Our Dictionary API had a complex structure and was more complex than anything else we worked with before. It was made with a nested data structure containing objects and arrays. Figuring out how to access all the relevant information was something that required reading, trial and error and some additional assistance from our TA. It certainly helped me in my final project as I had to map across my arrays in a similar way and it was useful to look back on this project for guidance.  

Creating a random word button was a challenge because of the API’s I had to use. There are plenty if you are willing to pay but finding free and useful ones is not easy. The one we used is the best I could find but even this creates problems with some of the random words it creates. Having two API’s working together is something I enjoyed doing but they are naturally created by two different people/teams and there were clashes because of this. 

## Wins

* This being my first pair coding project, it showed me the benefits of working together with someone else. We were able to achieve a lot of elements in the two days because we could separate and work but also come together and flow through code more quickly when someone is navigating, whilst someone else codes. It was a very positive experience to be able to have discussions with the person I was working with, hearing their ideas and solutions while learning together. It helped me to plan and move forward with a more precise manner and gave us a wider perspective on how to approach the tasks.
* Managing the retrieval of data through nested arrays was a good learning experience and felt very satisfying as we got each piece of information to display. 
* Using a CSS framework was a new experience and I enjoyed the interaction I had with Bulma. So much so I used it for my Project 4 as well. Bulma helped us save time on the design and allowed us to focus on the coding of the app.


## Key Learnings

I would say that the three things I took away from the project were the following:

* Planning ahead again was a huge part of the success of the project. The use of Excalidraw really helped us envision what the app would look like ahead of time. 
* Learning to split the tasks into the days available and then again into which person would work on them was highly beneficial. This really showed me the benefit of working in a team and the amount that could be achieved because of this.  
* Keeping my code consistent, clean and orderly is something I learnt in Project 1, but learning to make this work with another person's style of coding was something I learnt on this Project. Agreeing on a style or allowing one person to go through afterwards and make the code similar is important. 


## Known Bugs

There is a bug with the spelling mistake error handling. Once it informs the user of the spelling mistake it disappears as it should, however when the user clicks on the search bar again to retype the word, the error handling toast reappears as they are typing the respelled word.
With the spelling error handling, there is an issue once the user has retyped the word. When they hit enter or click the define button, the page does not remount with the new word. The define button has to be clicked twice to send the page to the new word.
Both these bugs are to do with the error handling toast and the values the user is typing in. They can be fixed but we didn't have time to get into fixing it with the tight deadline. 
As I mentioned previously there is an issue when the random word API offers a word that is not in the dictionary API. This is something I want to fix in my future improvements of the app. 

## Future Improvements

I would like to add further error handling for the cases where the API doesn’t retrieve the data on the first instance or doesn’t have the searched word in its contents. I used a spelling mistake due to time pressures but there should be another couple error handling options depending on the response from the API. This is especially an issue with the random word functionality, if the word doesn’t exist on the API.
I would like to add additional information to the definition page and have it display synonyms and the examples of the searched words being used in sentences.
