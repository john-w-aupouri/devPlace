# devPlace

A social media app built with the MERN Stack.

## API

| Method | Endpoint                         | Protected | Usage                         | Response                         |
| ------ | -------------------------------- | --------- | ----------------------------- | -------------------------------- |
| Post   | /api/auth/                       | No        | Authenticate user & get token | res.json(user);                  |
| Get    | /api/auth/                       | No        | Get user by token             | res.json(user);                  |
| Post   | /api/posts/                      | Yes       | Create a post                 | res.json(post);                  |
| Get    | /api/posts/                      | Yes       | Get all posts                 | res.json(posts);                 |
| Get    | /api/posts/:id                   | Yes       | Get post by id                | res.json(post);                  |
| Delete | /api/posts/:id                   | Yes       | Delete a Post                 | res.json({ msg: 'Post removed}); |
| Put    | /api/posts/like:id               | Yes       | Like a Post                   | res.json(post.likes);            |
| Put    | /api/posts/unlike:id             | Yes       | Unlike a Post                 | res.json(post.likes);            |
| Post   | /api/posts/comment:id            | Yes       | Comment on a Post             | res.json(post.comments);         |
| Delete | /api/posts/comment:id/comment_id | Yes       | Delete a Comment              | res.json(post.comments);         |
