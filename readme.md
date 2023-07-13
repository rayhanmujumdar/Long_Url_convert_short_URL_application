# Long url generate to short Url application

Date: 11/07/2023

## Project task:

As part of your application, we would like you to build a URL shortening system. The shorted URLs will be stored in the browser's localStorage. The system should have the following pages:

1. **Entry page**: This page should allow users to enter a long URL and generate a short URL.
2. **Edit page**: This page should allow users to edit the long URL or delete a short URL.
3. **List page**: This page should list all of the short URLs that have been created. When a short URL is clicked, the long URL should be opened in a new tab.

**Agenda:**

- functional requirement analysis
- create an SRS (software requirement specifications)
- Choose technology
- Project setup

## Requirement:

- The system should be implemented using HTML, CSS, and JavaScript.
- You should use a react ui framework like AntD or MUI or anything popular.
- The application should be deployed in GitHub pages or any other hosting platform according to your choice.
- The code must be accessed via GitHub or any other public Git repository system like BitBucket or GitLab etc.
- Adding storybooks will be highly encouraged.
- Using typescript will be highly encouraged.

## project Analysis:

- **UI :**
    - Nav link
        - home → page
            - input field
            - url generate functionality
        - url-list → page
            - Show a list of all short URLs.
            - Delete or update button within this section.
            - If I click the delete button, the URL will be deleted.
            - If I click the update button, a modal will open where I can update my long URL.
- **Functionality:**
    - Create a function that generates short URLs called → getShortUrl(fn)
    1. Firstly, the function will check if the provided URL is valid.
    2. If the URL is valid, the function will then check if it is already stored in the local storage.
    3. If local storage is not available or the URL is not found, a new short URL will be generated.
    4. To create a short URL or object ID for the URL, a random hash will be generated using the **`Math.random`** function.
    5. The generated short URL will be stored in an array of short URLs in the local storage.

### Development Journey:

At first, I was very confused about what I should do. So, I created a list of functionalities that I would be using in my project or wrote a pseudo code for my URL generator function.

Then, I set up my React project and started working on UI sections one by one. After that, I created my URL generator function and implemented it in my project. This function was created with the help of my pseudo code.

Next, I added functionalities for adding, updating, and deleting URLs one by one. Finally, I hosted my website on Netlify or a live server.

## Technology choose:

- React with vite
- React router dom
- MUI
- Tailwind css

## Deploy:

- Github: https://github.com/rayhanmujumdar/Long_Url_convert_short_URL_application.git
- live link: https://64af9b7c226fcf25b4a70ed1--celadon-licorice-e59969.netlify.app/