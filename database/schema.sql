-- Create users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

-- Create posts table
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INT REFERENCES users(id)
);

-- Create comments table
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    text TEXT,
    post_id INT REFERENCES posts(id),
    user_id INT REFERENCES users(id)
);

-- Create likes table (a JOIN table for users and posts)
CREATE TABLE likes (
    user_id INT REFERENCES users(id),
    post_id INT REFERENCES posts(id),
    PRIMARY KEY (user_id, post_id)
);


