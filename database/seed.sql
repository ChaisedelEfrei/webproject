-- Insert sample data into the users table
INSERT INTO users (username, email, password_hash) VALUES
    ('user1', 'user1@example.com', 'hashed_password1'),
    ('user2', 'user2@example.com', 'hashed_password2');

-- Insert sample data into the posts table
INSERT INTO posts (title, content, user_id) VALUES
    ('Post 1', 'Content for post 1', 1),
    ('Post 2', 'Content for post 2', 2);

-- Insert sample data into the comments table
INSERT INTO comments (text, post_id, user_id) VALUES
    ('Comment 1', 1, 2),
    ('Comment 2', 2, 1);

-- Insert sample data into the likes table
INSERT INTO likes (user_id, post_id) VALUES
    (1, 1),
    (2, 1);
