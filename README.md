# Project REST-rant

REST-Rant is an app where users can review restaurants. 

[REST-RANT] is a project build to understand how APIs work. Also, it describes how to setup a basic README file. 
The goal is to learn how end-points are build for a client to pull information from a server. 

##  Routes

| Method | Path                    | Purpose                                     |
|--------|-------------------------|---------------------------------------------|
| GET    | /                       | Home page                                   |
| GET    | /places                 | Places index page                           |
| POST   | /places                 | Create new place                            |
| GET    | /places/new             | Form page for creating a new place          |
| GET    | /places/:id             | Details about a particular place            |
| PUT    | /places/:id             | Update a particular place                   |
| GET    | /places/:id/edit        | Form page for editing an existing place    |
| DELETE | /places/:id             | Delete a particular place                   |
| POST   | /places/:id/rant        | Create a rant (comment) about a place       |
| DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a place       |
| GET    | *                       | 404 page (matches any route not defined)   |



## Database

| Field    | Type      |
|----------|-----------|
| name     | String    |
| city     | String    |
| state    | String    |
| cuisines | String    |
| pic      | String    |
