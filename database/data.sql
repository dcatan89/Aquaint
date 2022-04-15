insert into "public.users" ("firstName", "lastName", "email", "password")
values ('DJ', 'Catan', 'djcat@gmail.com', 'password')
returning *;
