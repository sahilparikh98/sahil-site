This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## sahil-site

This is my personal website, which you can view at [sparikh.io](https://sparikh.io). It's quite basic, written in ReactJS and Bootstrap 4. I do have plans to migrate to Typescript later. 
Occasionally, I will test out ideas and components in this web app, so it may be a perpetual work in progress. See the [issues](https://github.com/sahilparikh98/sahil-site/issues) tab for what I'm working on.
I would also love some design suggestions or bugs you find on the site. It's really just a practice ground for my skills in web development.

The main philosophy of this site is to *practice thinking in React*. So you'll see that other than using Bootstrap for basic styling and responsive layouts, I'm trying to focus on putting the rest of the site together using just React and my brain. There are a lot of ways to more easily accomplish what this site does, but then I wouldn't learn anything would I?

### I want to build a website too, but I don't have all of this time

This can be quite the undertaking, especially if you're like me and you're trying to learn. I have always wanted to do this, but I waited for a time period in which I had some uninterrupted time to really focus and motivate myself through the ups and downs of web development. If you want something quickly, some great resources for building your site easily are [beautiful-jekyll](https://github.com/daattali/beautiful-jekyll), which allows you to basically write your whole website in Markdown. Easy! I used this to build my website before this one. Or check out [urspace.io](https://urspace.io), it takes in your resume and builds you a really clean looking, portfolio style site. Both of these are really great options.

### I have the time

Great! Here I've detailed the steps I took to develop a website that I wanted.

#### Design

I actually took the time to develop the design for my site in Figma. Figma is a really great tool that can help you plan out designs, and it's fairly easy to use too. I designed each page of my site using their platform. The design of my site isn't very intense, as you can see, but it was a good opportunity to learn some of the basics of Figma.

#### Stack

I decided to leverage the basics on this site in order to learn them well. There are other easier alternatives, like GatsbyJS, which are fantastic at static sites, that I could have picked up, but I wanted to work simply with React and learn how to put a site together with just React.    

I've also used Bootstrap for most of my layout, nav-bar, and popovers. Bootstrap is really nice because it's the industry standard for many current design and layout paradigms, and offers great plug-and-play features. It was really nice to use it for my responsive layouts. For a simple site, all you'd really need is a fluid container. When using Bootstrap and routing with [react-router](https://reactrouter.com/?utm_source=reactnl&utm_medium=email), be sure to use a `LinkContainer` from [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap) to wrap your links to your other pages.

#### Hosting

I bought my domain on NameCheap and hosted the site using Firebase hosting. Firebase hosting is free and super easy to set up. I also used [react-snap](https://github.com/stereobooster/react-snap) to do some pre-rendering for my site to make it faster, in lieu of server-side rendering (for now). Eventually, I [plan](https://github.com/sahilparikh98/sahil-site/issues/12) to move over to server-side rendering. You can read more about pre-rendering for static sites [here](https://create-react-app.dev/docs/pre-rendering-into-static-html-files/).

#### Things to note

I've gotten in the habit of using class fields for my methods. This has the added benefit of properly binding `this` to my methods so that I don't have to run into the issue of forgetting to bind it in the constructor. Note that is really only important for callbacks, but as far as I can tell it doesn't hurt to apply to all your methods. You can read more about this [here](https://reactjs.org/docs/handling-events.html).

### Neat stuff that I did that no one will care about

#### Colors

You can change the colors of the text and background on my site! I thought this was a fun little experiment in managing top-level state and just something cool I wanted to do. It posed a lot of interesting design challenges that were fun to work through. Also it definitely would not have been doable without one of the most well-made npm packages I've ever used, [react-color](https://casesandberg.github.io/react-color/). It made the color picker for me so that I didn't have to do all that work. Give it a spin if you ever get a chance. 

Yes, there is very little value in making your site's colors customizable. That's why this is included in the section title "stuff that I did that no one will care about".

#### Time-based changes

I used JavaScript's [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object library to change some markup on the site based on the current time. Note that the time is computed at load, meaning it won't change as you use the site, only when you originally load (or refresh) the site.

First, the site will automatically switch to a dark theme when viewing at night in your local timezone. You might ask, "When is night?" Well, I decided that night for most people is when it gets dark and for most people it starts to get dark around 8 even if the sun hasn't set. If you live in one of the polar timezones where it's light until 12am or something during the summers and you have a problem with this, open an [issue](https://github.com/sahilparikh98/sahil-site/issues/new). Otherwise, leave me alone.  

Second, on the home page next to my main text, there is an emoji of a city. This emoji will change to reflect the current time in New York City, cycling through 4 different emojis representing morning, afternoon, evening/sunset, and night in the city. 

You might ask why I did either of these. Well, why does anyone do anything?
