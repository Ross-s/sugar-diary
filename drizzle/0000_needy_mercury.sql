CREATE TABLE `connection_details` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` text NOT NULL,
	`connection_type` text NOT NULL,
	`url` text NOT NULL,
	`auth_token` text NOT NULL
);
