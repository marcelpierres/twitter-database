# twitter-database

This application is designed to take in request from the user\
The request as passed through as a POST to which a POSTGRES Database is updated\


### Subject

A Subject is a News category that is requested through twitter such as\

- space
- science
- technology
- etc.

A Subject has:

- a unique 'id'.
- a 'name'.

This is a table with the 'endpoint' description:

| Action               | URL               | Method     | Response                     |
| -------------------- | ------------------|------------|------------------------------|
| Add a Subject        | /api/subjects     | POST       | New Subject                  |
| View list of Subjects| /api/subjects     | GET        | Array of Subjects            |
| View Subject Details | /api/subjects{id} | GET        | A Subject                    |
| Update Subject       | /api/subjects{id} | PATCH      | Update A Subject             |
| Remove a Subject     | /api/subjects{id} | DELETE     | Remove A Subject             |