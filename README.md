# devPlace

A social media app built with the MERN Stack.

## Backend: Node, Express, MongoDB

## Users Routes

| Method | Endpoint   | Protected | Usage         | Response             |
| ------ | ---------- | --------- | ------------- | -------------------- |
| Post   | /api/users | No        | Register User | res.json({ token }); |

## Auth Routes

| Method | Endpoint  | Protected | Usage                         | Response        |
| ------ | --------- | --------- | ----------------------------- | --------------- |
| Post   | /api/auth | No        | Authenticate user & get token | res.json(user); |
| Get    | /api/auth | No        | Get user by token             | res.json(user); |

## Post Routes

| Method | Endpoint                         | Protected | Usage             | Response                          |
| ------ | -------------------------------- | --------- | ----------------- | --------------------------------- |
| Post   | /api/posts/                      | Yes       | Create a post     | res.json(post);                   |
| Get    | /api/posts/                      | Yes       | Get all posts     | res.json(posts);                  |
| Get    | /api/posts/:id                   | Yes       | Get post by id    | res.json(post);                   |
| Delete | /api/posts/:id                   | Yes       | Delete a Post     | res.json({ msg: 'Post removed'}); |
| Put    | /api/posts/like:id               | Yes       | Like a Post       | res.json(post.likes);             |
| Put    | /api/posts/unlike:id             | Yes       | Unlike a Post     | res.json(post.likes);             |
| Post   | /api/posts/comment:id            | Yes       | Comment on a Post | res.json(post.comments);          |
| Delete | /api/posts/comment:id/comment_id | Yes       | Delete a Comment  | res.json(post.comments);          |

## Profile Routes

| Method | Endpoint                        | Protected | Usage                           | Response                           |
| ------ | ------------------------------- | --------- | ------------------------------- | ---------------------------------- |
| Get    | /api/profile/me                 | Yes       | Get current users profile       | res.json(profile);                 |
| Post   | /api/profile                    | Yes       | Create or update a user profile | res.json(profile);                 |
| Get    | /api/profile                    | No        | Get all profiles                | res.json(profile);                 |
| Get    | /api/user/:user_id              | No        | Get profile by user ID          | res.json(profile);                 |
| Delete | /api/profile                    | Yes       | Delete profile, user & post     | res.json({ msg: 'User deleted' }); |
| Post   | /api/profile/experience         | Yes       | Add experience to profile       | res.json(profile)                  |
| Delete | /api/profile/experience/:exp_id | Yes       | Delete experience from profile  | res.json(profile)                  |
| Put    | /api/profile/education          | Yes       | Add education to profile        | res.json(profile)                  |
| Delete | /api/profile/education/:edu_id  | Yes       | Delete education from profile   | res.json(profile)                  |
| Put    | /api/profile/education          | Yes       | Add education to profile        | res.json(profile)                  |
| Put    | /api/profile/github/:username   | No        | Get user repos from Github      | res.json(JSON.parse(body))         |

## Frontend: React

## Component Level State

register and login forms.

## Redux

## Middleware

redux-thunk
