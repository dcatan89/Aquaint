insert into "public.users" ("firstName", "lastName", "email", "password")
values ('DJ', 'Catan', 'djcat@gmail.com', 'password'),
       ('daniel', 'james', 'jjj@gmail.com', '1IrvineCalifornia1')
returning *;
