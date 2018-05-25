# Web design

This repository is for the subject web design as part of the minor Web Development on the HvA.

For this project I designed a new portfolio specifically for 2 users. The first being Marijn. He was born spastic, this means that most (if not all) of his web use is done through the keyboard. The second is someone who is interested in hiring me as intern.

### Priciples used

**Consistency matters**
Not to hard to implement seeing as the amount of content is not that implessive but still something I tried to keep. Always content and objects/images in the same place so you can expect where to find them.

**Strong visual hierarchies work best**
Goed hand in hand with Consistency matters. By making the titles unavoidable you will always know where you are. Afterwards your eyes might fall on the 3D objects as it is someting not to unique but still not something you see every day.

**Interfaces exist to be used**
In my case this point only applies when people are actually rotating the 3D objects and looking around them.

### User scenario

As `$user` i want to see the projects in there right context to see if this person is fit to hire as an intern.

`$user`

- Three.js / WebGL developer
- Inter suppervisor
- Front end developer

### Purpose of the website

- To get an internship in 3D within the web
- To leave a good impression of my work
- To have them contact me

### Content

- 2D
- 3D
- Home page title
- Home page intro
- About me
- Project
	- Purpose
	- Scripts used
	- Tools
	- Link to project
	- Dribbble
	- Github
	- Codepen
	- Pictures

### Sketches

![]( ./markdown-images/1.jpg )

![]( ./markdown-images/2.jpg )

### My personal experiment

This project is actually an experiment of mine. During the past half year accessibillity was a repeating topic. But as someone who is interested in 3D within the browser this is a task on it's own. When using 3D in the browser you work in a `canvas` element. This is an element that on it's own you won't reach by tabbing to it. But even if you fix this you still can't interact with it the same way as you might do with your mouse. So to enable it to work with your keyboard only you would need to get to work.

And that is exactly what I did. In this experiment I wanted to see how hard this was, wheather it was achievable (withing the time span) and wheather it was even a good idea in the first place. Turns out, if you structure your code correctly you can reuse alot of the functions you used for mouse for keyboard aswell. This still didn't make it ease but just a bit better. One of the many pain points to this was the focus on the `canvas` element and when/how to leave it. In the end for this project I had to manually keep count of the objects that needed to be watched and the current index to check what element was focused at a given time.

### Feedback Vasillis

- The focus on the 3D objects is to subtle. (Added)
- Back button (details page) closer when tabbing. So you can go back immediately go back. (Added)
- Add arrows under the object (on the details page) to indicate that you can rotate it using the arrow keys. (Added)
- Make sure you can always rotate the object, not just when it is focused. (details page) (Added)
- Make the focus clearer. On the 3D objects you can easily mis what element is focused. (Added)

### Feedback Mo

- Turn `OrbitControls` off (Added)
- Set the fps counter on the bottom right of the screen. Now partially overlaps with the back button. (Added)
- Now renamed to... section in about me isn't needed. (Added)
- When you keep tabbing (without developers tools open) you will eventually end up at the start of the website with the focus. Then when focusing on the canvas element it will focus the last object. This because that is the last known tabIndex

### Feedback Marijn

For Marijnwe (the people who's user was marijn) initially we expected him to primarily use his keyboard. This ended up being entirely wrong. He actually mostly uses the touchpad on his laptop. So going through the website, although it took more time then most people, still went pretty smooth. Now that he was here I was able to ask him a bit more about the troubles he encountered when trying to use a website that uses 3D. To this his response was that trying to rotate an object always was a challenge. Needing to click and drag was a bit much. Same with tasks that needed him to use 2 keys (on his keyboard) at once. A tip/sollution to this was to A. have it rotate automatically or B. have it rotate once on clicking it.

[Video of the test with Marijn]

[Video of the test with Marijn]: https://www.youtube.com/watch?v=4htr2Zfk7sU

### Known issues

- When you keep tabbing (without developers tools open) you will eventually end up at the start of the website with the focus. Then when focusing on the canvas element it will focus the last object. This because that is the last known tabIndex

### Resit (Herkansing)

For the resit there where a few things missing from the website. (This mostly because I focussed more on my own experiment then on the project.) So for the resit I mainly needed to change my user scenario to one that has something I want the users to do. And to add more of a flow to the website.

Changing the user scenario was pretty easy because I already knew what I wanted my users to do. The website is a portfolio website so I wanted people to contact me for an internship. So I changed my user scenario form "As `$user` i want to see the projects in there right context." to "As `$user` i want to see the projects in there right context to see if this person is fit to hire as an intern.". To make it so that people actually contact me I desided to add an contact bar at the end of every project page. There you can now find my phone number and email adress.

To create more of a flow through my website I didn't want the users to need to go back to the home page if they where on a project page. I wanted them to be able to continue browsing and just keep clicking throught the projects. For this on the project pages I added 2 thumbnails (and links) of 2 random projects. One project of a 3D object and one of a 2D project. This because I want the user to hire me for an webgl internship but also see that is do/did much more than play around with 3D. This is why it will always show one 3D and one 2D project.