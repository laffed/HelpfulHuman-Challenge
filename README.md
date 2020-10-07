# Helpful Human Applicant Interview Challenge [John Kangsumrith]

## Running Guide

## - Areas for Improvement -

#### Color Spectrum Increase 
Because the detail page required hue ranges for a chosen color, the initial color DB includes only 360 hexcode corresponding to the 360 degrees of hue. Saturation and Light were not modulated. 

This creates limitations in the range of colors available to the user. The Random Color button only chooses from 360 data points instead of the full 16,777,216 number of possible hex color codes. 

**Possible Solutions**
-Eliminate the database altogether. 
We do not need to store any of these hex values. They are predicatable and the data will never change. 
Instead either the frontend will pass in HSL values or the backend will convert hexcodes to HSL values. Then the backend will generate an array of hues based on this HSL value and convert each HSL value back into its hexcode. The client will then receive this array of hexcodes just as before. 

For the grid view, we could still generate a random set of 12 colors for each page, but these pages would not be able to maintain that state and there is the possibility for duplication. 

Because pagination is required, a set number of data points is also requiredand therefore would require a database of at least some colors. 

This could be overcome by maintaining a set of primary hex codes on the client and modulating saturation and light for these values within a certain range. This way, duplication would be very unlikely and we would remove the need for an api call altogether. 

Because this is an example project, we wish to demonstrate the creation of a 'DB' and Restful endpoints, but in practice this application would work just as well as a purely frontend web app where all business logic is maintained on the client side. 

## Core
Stated briefly, the core goal is to create a simple but functional app that has a data, view and logic layer. The app will display color swatches, and that's about it!

The core goals should be completed in full. 

## Stretch
The stretch goals can also be met if you choose to do so. Not completing the stretch goals does not disqualify you in any way nor will it lead to a disadvantage in comparison to other applicants.

## Bonus Stretch
Bonus stretch goals inherit properties of stretch goals but completing these goals will say to us, "I believe the code I've written for the core goals and the stretch goals is production ready".

## Additional Information
An applicant completing a well thought out solution to the core challenges is just as meaningful to us as a solution that completes all goals but is not implemented very well.

If you'd like to implement additional functionality, or change the functionality of this challenge, feel free but be prepared to discuss your reasoning for doing so. We like critical thinking. We don't like improper implementation without reason.

## Time
Keep track of how much time you spent on the challenge but also feel free to spend as much time as you want. Your time is very valuable and we are thankful you're taking the time demonstrate your skills for us.


## Core Goals
- Replicate design
  - [Font](./FONT.md)
  - Styles
  - Iconography
- Replicate functionality
  - Create a database of colors (minimum 100)
  - Paginate your data to show a certain number of swatches at a time
  - Display both the color swatch and the label of the color
  - Ability to select random color and modify view accordingly
  - Clicking swatch changes to color detail view

## Stretch Goals
- Design
  - Make it responsive
- Functionality
  - Generate color list from a script

## Bonus Stretch Goals
- Design
  - Include interaction design
  - Add tints/shades in detail view

- Functionality
  - Add search functionality
  - Color generation script guarantees same colors and order
  - Group by color (Make sidebar menu functional)

- Data
  - Fetch data with GraphQL


## Deliverables
In your email submission response to the test invitation from AngelList, please include the following:
- Link to your repo
- URL to your hosted App (Use a free hosting service of your choice)
- [Include a Donger](http://dongerlist.com/) that best represents your state of mind when complete

Thanks and we look forward to your submission!

ლ ( ◕  ᗜ  ◕ ) ლ
