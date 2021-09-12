# tech-challenge-mdw

# Midwestern Tech Challenge Tasks 1 and 2

## To run app locally

- Fork and clone this repo
- Navigate to cloned repository
- run `yarn install`
- run `yarn start` to start development server
- contacts form will post to firebase database and you can visit all contacts at this link or make a get request at the same link:

  - [all_contacts](https://us-central1-midwestern-api.cloudfunctions.net/api/contacts)

- Pages are seeded inside firebase storage and can be visited by making a get request at this link:
  - [pages](https://us-central1-midwestern-api.cloudfunctions.net/api/pages)

## The app is deployed on this address feel free to test it there:

- [midwestern](https://midwestern-tech.netlify.app/)

# Backend

- Backend is deployed to google cloud / firebase
- Link to [backend](https://github.com/Muhidin123/tech-challenge-mdw-backend)

# Content Sections

## Pages

- GET https://us-central1-midwestern-api.cloudfunctions.net/api/pages/ {home} or {contact} can be home or contact to get home or contact page
- GET https://us-central1-midwestern-api.cloudfunctions.net/api/pages to get all pages

## Contacts

- GET https://us-central1-midwestern-api.cloudfunctions.net/api/contacts to get all contacts currently saved in database
- POST https://us-central1-midwestern-api.cloudfunctions.net/api/contacts to SAVE a new contact
  - Accepts a form data object with all the key/value paris from the form
    Example payload:
    ```json
    {
      "first_name": "First",
      "last_name": "Last",
      "title": "Title",
      "email": "some@email.com",
      "message": "Message content text"
    }
    ```
