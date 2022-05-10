# Aquaint

Aquaint is a web application for people who want to socialize for whatever reason their heart desires. It is a friend matching application that lets users see potential friends around the area and match with the ones who seem the most compatible.

### Why I wanted to build this app:
I wanted to build this project becuase I felt that my social skills were at an all time low and it felt harder in general to make connections due to the pandemic. The idea why, is that if dating could have a wider range due to applications being built why can't friendships as well. On the technical side, this project allowed me to bring together the foundations I learned from both front-end and backend development to create a functional full stack  web application.

## Live Version: 
[Aquaint](https://aquaint.herokuapp.com/)

## Technologies Used: 
- React  
- babel JSX loader  
- webpack (for compiling)   
- multer(for fileuploads)   
- Node.js  
- Express (for routing)  
- PostgresQL  
- HTML/CSS  
- BootStrap    
- Google API  
- dotenv 

## Features: 
- User Can Create Profile  
- User Can Upload a Profile Pic  
- User Can Enable and pinpoint location  
- User Can Match with other users  
- User Can Reject another user  
- User Can View their matchlist  
- User Can View individual profiles  
- User Can Update their profile info and picture  
- User Can Delete matches off friendslist  

### Strech Features: 
I would like to include sms messaging using Twilio for event planning, and possibly some kind of video chat feature using Socket.IO

## Preview:

### User Can Reject or Match with Users
![May-05-2022 16-34-45](https://user-images.githubusercontent.com/90487207/167043994-81363164-f734-4c3b-b83c-0953b30a0073.gif)  

### User Can View Profile
![May-05-2022 16-38-04](https://user-images.githubusercontent.com/90487207/167043998-8ab128e7-2420-4b3a-a628-b59787a93932.gif)


## Development

### System Requirements

- Node.js 10 or higher 
- NPM 6 or higher  
- PostgresQL 12 or higher  
- React 17 or higher

### Getting Started

1. Clone the repository.

    ```shell
    git clone git@github.com:dcatan89/Aquaint.git
    cd Aquaint
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Import the example database to pgweb.

    ```shell
   npm run db:import
    ```
    
 1. Run pgweb in a different terminal so you can view the database by opening http://localhost:8081 in your browser

    ```shell
    pgweb
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
