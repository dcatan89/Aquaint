insert into "users" ("firstName", "lastName", "email", "password")
values ('DJ', 'Catan', 'djcat@gmail.com', 'password'),
       ('Berry', 'Allen', 'djj@gmail.com', '1IrvineCalifornia1'),
       ('graniel', 'james', 'cjj@gmail.com', '1IrvineCalifornia2'),
       ('harrydaniel', 'james', 'sjj@gmail.com', '1IrvineCalifornia3'),
       ('MACK', 'james', 'gjj@gmail.com', '1IrvineCalifornia4'),
       ('STAN', 'james', 'ggjj@gmail.com', '1IrvineCalifornia5'),
       ('SPIKE', 'james', 'ggsjj@gmail.com', '1IrvineCalifornia6'),
       ('Ariel', 'james', 'gggjj@gmail.com', '1IrvineCalifornia7'),
       ('daniel', 'james', 'jjsdj@gmail.com', '1IrvineCalifornia8')
returning *;

insert into "userProfiles" ("fullName", "birthday", "sex", "displaySex", "occupation", "fact","userId")
values ('DJ Catan', '12/03/1995', 'Male', 'True','developer', 'I can dance', 1),
       ('daniel james', '12/04/1996', 'Male', 'True','dancer', 'I can sing', 2),
       ('Bridget N', '12/04/1996', 'F', 'True','Cryer', 'I can cry', 3),
       ('Va P', '12/04/1997', 'Male', 'True','engineer', 'I can work', 4),
       ('Danny', '12/04/1999', 'F', 'True','guitar player', 'I am a twin', 5),
       ('Eren Y', '12/04/1999', 'M', 'True','Rumbler', 'I am the founding titan', 6),
       ('Mika', '12/04/1993', 'F', 'True','Eren Admirer', 'I can swing', 7),
       ('RICKY', '12/04/1992', 'M', 'True','pop-star', 'Hips do lie', 8),
       ('XCXCC', '12/04/1991', 'F', 'True','Sleeper', 'I can sleep', 9)
returning *;

insert into  "images" ("image", "profileId")
values ('/images/dj-profile.jpg', 1),
       ('/images/dj.png', 2),
       ('/images/p2.jpeg', 3),
       ('/images/p4.jpeg', 4),
       ('/images/p5.jpeg', 5),
       ('/images/p6.jpeg', 6),
       ('/images/p7.jpeg', 7),
       ('/images/p8.jpeg', 8),
       ('/images/person1.jpeg', 9)
returning *;

insert into  "matches" ("isMatched", "requestedProfileId", "acceptedProfileId")
values ('true', 1, 2),
       ('true', 2, 1)
returning *;

insert into "locations" ("cityName", "lat", "lng", "profileId")
values ('Irvine', 33.634940430843194,  -117.74014631397628, 1),
       ('Irvine', 33.634940430843193,  -117.74014631397620, 2),
       ('Irvine', 33.634940430843190,  -117.74014631397621, 3),
       ('Irvine', 33.634940430843185,  -117.74014631397639, 4),
       ('Irvine', 33.634940430843182,  -117.74014631397433, 5),
       ('Irvine', 33.634940430843183,  -117.74014631397038, 6),
       ('Irvine', 33.634940430843185,  -117.74014631397638, 7),
       ('Irvine', 33.634940430843183,  -117.74014631397608, 8),
       ('Irvine', 33.634940430843191,  -117.74014631397618, 9)
returning *;

insert into "messages" ("fromUserId", "toUserId", "message")
values (1, 2, 'Hello!'),
       (2, 1, 'Hi!')
returning *;
