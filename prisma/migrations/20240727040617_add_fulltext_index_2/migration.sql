-- CreateIndex
CREATE FULLTEXT INDEX `posts_content_idx` ON `posts`(`content`);

-- CreateIndex
CREATE FULLTEXT INDEX `users_username_email_idx` ON `users`(`username`, `email`);
