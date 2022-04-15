insert into "users" ("firstName", "lastName", "email", "password")
values ('DJ', 'Catan', 'djcat@gmail.com', 'password'),
       ('daniel', 'james', 'jjj@gmail.com', '1IrvineCalifornia1')
returning *;

insert into "userProfiles" ("fullName", "birthday", "sex", "displaySex", "occupation", "fact", "profilePic", "createdAt" ,"userId")
values ('DJ Catan', '12/03/1994', 'Male', 'True','developer', 'yes', 'me' , NULL,1),
      ('daniel james', '12/04/1994', 'Male', 'True','dancer', 'yes', 'me' , NULL,2)
returning *;

insert into  "matches" ("isMatched", "requestedProfileId", "acceptedProfileId", "matchedAt")
values ('true', 1, 2, NULL),
       ('true', 2, 1, NULL)
returning *;

insert into "locations" ("cityName", "geolocation", "profileId")
values ('Irvine', '1234', 1),
       ('Irvine', '1234', 2)
returning *;

insert into "messages" ("fromUserId", "toUserId", "message")
values (1, 2, 'Hello!'),
       (2, 1, 'Hi!')
returning *;
