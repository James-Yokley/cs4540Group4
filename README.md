# cs4540Group4
Mozilla Firefox Web Extension Project




Accessibility Extension for Mozilla Firefox
    Our extension will be easy to use and contain a variety of accessibility functions that will make web browsing more accessible. This will be done in phases and will allow us to implement multiple features through the remainder of the course.

We will begin by focusing on filters for various degrees and types of color blindness. This extension will allow users to see webpages with the contrast intended by the original creator. By making this filter run with a few clicks, we are enabling color blind users to be able to toggle this on when browsing, but also allows for it to be toggled off if another user is on the browser. 

In addition to color blind filters, we plan to implement a change in text to assist dyslexic readers. Over the past few years, a new font has been developed called Dyslexie. This font makes it easier for people with dyslexia to read pages of text. 

We think that with these two accessibility functions alone, we will be able to assist a large group of people in their day to day lives when browsing the web. The improvements in productivity that will be brought by this extension are applicable to studying, reading, work, and so much more. 

The components that we will need in order to build this extension are somewhat minimal. We will build a user interface that will have buttons to turn on the different filters that we offer. These buttons will be handled with event listeners in the background.js file which will then make a call to the correct function in the main javascript file. This will enact either one of the filters for colorblind mode or the font change for dyslexia friendliness. The permissions that will be required in our manifest document will be kept as minimal as possible. While we don't currently know the extent of the permissions we will need, we will keep security and privacy on the forefront of our decisions. 

For all of our group members, this will be the first web extension we will have built on our own. While the theory for how we accomplish our build is sound, there is certainly the potential for us to run into challenges. Whatever those may be, I am confident that having a team of four will allow us to learn, collaborate, and teach one another to get past them. 

We plan to divide the work by functions, event handling, and design. By breaking up the extension into these four components (two functions), we will be able to divide and conquer. 

Our intended audience for this extension is anyone that may have a disability or encounter issues with accessibility when using their web browser. Dyslexia alone affects as many as 10-15% of web users globally [1] and we feel that this audience would greatly benefit from having their font change at a click of a button to one that has been proven to help readability. For the colorblind filters, we have intentions of adding different filters to assist with both Red-Green and Blue-Yellow color blindness.  

User Stories: 

Robin is a senior in high school and has dyslexia. Because of the pandemic, many of her classes have been online. While her school has gone back to in person, much of the lecture material and homework is only made available through a website put together by her school. She particularly finds it difficult to get through the readings posted on there and finds herself quickly falling behind. After downloading our accessibility extension and enabling the font for users with dyslexia, she has found it much easier to study, stay up to date on assignments, and do well in her courses. 

Stephen is red-green colorblind and has started a new remote job as a data analyst. His first assignment is to review an existing dashboard in tableau online with colorful graphs and charts. When writing his report on this, he incorrectly cites two categories as a single category due to a red and green section of a pie chart being next to each other. He installs our accessibility extension and turns on the filter for deuteranopia. This allows him to see the difference between the sections and avoid this problem in the future. 

*****
[[1]](https://userway.org/blog/userways-dyslexia-friendly-font/#_ftnref1) https://www.dyslexia-reading-well.com/dyslexia-font.html
