-- DropIndex
DROP INDEX `users_username_email_idx` ON `users`;

-- CreateIndex
CREATE FULLTEXT INDEX `users_username_email_displayName_idx` ON `users`(`username`, `email`, `displayName`);
