-- Query 1: Select all posts with their authors' usernames
SELECT posts.title, users.username
FROM posts
JOIN users ON posts.user_id = users.id;

-- Query 2: Select the content of a post and its comments
SELECT posts.title, posts.content, comments.text
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
WHERE posts.id = 1;

-- Query 3: Find the most liked post and its author
SELECT posts.title, users.username
FROM posts
JOIN likes ON posts.id = likes.post_id
JOIN users ON posts.user_id = users.id
GROUP BY posts.id, users.username
ORDER BY COUNT(likes.user_id) DESC
LIMIT 1;

-- Query 4: Select the number of comments for each post
SELECT posts.title, COUNT(comments.id) AS comment_count
FROM posts
LEFT JOIN comments ON posts.id = comments.post_id
GROUP BY posts.title;
