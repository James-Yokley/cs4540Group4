## Technical Product Report

#### What we built during this phase:

During this phase of our work on the Seeing is Believing Firefox extension, we created an installable Firefox package designed to apply open-source filters to assist people with various types of color blindness using a technique called daltonization. Our extension is equipped with a basic icon and settings menu to apply or reset the filters for protanopia, deuteranopia, and tritanopia.

Once a filter option is selected, it is applied to colorful visual elements on the current webpage. Other filter options can be selected and applied, or the user can click the reset option to return to the default look. 

Currently, our filters simulate the types of colorblindness for red-blind, green-blind, and blue-blind. We now have the foundation to add or alter the svg filters to configure them for daltonization.


#### High-level design of our software:

Our software consists of multiple functions; colorblind preview filtering, dyslexia style injection, and colorblind image enhancements. These filters are implemented through a popup menu consisting of javascript, html, and css files. For colorblind preview filtering, clicking on the buttons in the extension will make a call to a function that will implement the filter. On the backend of these functions we utilize open source code that generates the filters. This feature allows a developer to view their webpages through the lens of those with deuteranopia and protanopia. In our next phase we will focus on building the functionality for dyslexia style injection which will change the font to an open source dyslexia friendly font and improve contrast within the webpage to make things easier to read. We will also be implementing a Daltonization function which will increase the contrast of images on a page making them much easier to see. Our final button is the reset button, which will remove any active filters. 

![Alt text](https://github.com/James-Yokley/cs4540Group4/blob/main/doc/phase2/Seeing_Believing_Overview-2.jpg)


#### Technical Highlights:
##### Interesting bugs, challenges, lessons learned, observations?

One of the current bugs we are dealing with is css causing a grayed out popup menu when using certain background components. Our popup menu was originally designed with a gradient background, but had to be changed to simpler static colors for the purpose of the demo.

We also had difficulty triggering the filter selection from the popup menu. The choose_filter.js was not correctly adding event listeners, meaning that no action was performed when clicking an option.

One of the challenges we encountered because we were only testing on one site, not realizing the site was having an effect. We spent a considerable amount of time before trying another website and seeing that the functionality was working.

From that challenge, we learned that a varied test environment for the software components is the only way to see how it is performing. Basing decisions after testing on just one sample website is an easy mistake to make, and now we know to avoid it.


#### What worked well:

Our team did a good job on continuously researching how we can implement filters for color-blindness.

We came together when we had problems

#### what needs improvement:

We could have used our time more efficiently by spreading out responsibilities over a longer time range.

#### Triage: What we will build for final demo:

For the final demo we are planning to have implemented all daltonization filters for the types of color-blindness and add an option to change the font to OpenDyslexic which can help assist with some symptoms of dyslexia. 

Additionally, we would like to completely revise our popup menu and design so that it has a more professional look that's more inline with the firefox UI/UX guidelines.
