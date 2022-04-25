insert into "users" ("firstName", "lastName", "email", "password")
values ('DJ', 'Catan', 'djcat@gmail.com', 'password'),
       ('Berry', 'Allen', 'djj@gmail.com', '1IrvineCalifornia1'),
       ('graniel', 'james', 'cjj@gmail.com', '1IrvineCalifornia2'),
       ('harrydaniel', 'james', 'sjj@gmail.com', '1IrvineCalifornia3'),
       ('MACK', 'james', 'gjj@gmail.com', '1IrvineCalifornia4'),
       ('STAN', 'james', 'ggjj@gmail.com', '1IrvineCalifornia5'),
       ('SPIKE', 'james', 'ggsjj@gmail.com', '1IrvineCalifornia6'),
       ('Ariel', 'james', 'gggjj@gmail.com', '1IrvineCalifornia7'),
       ('danies', 'james', 'jjsdfsdj@gmail.com', '1IrvineCa234lifornia8'),
       ('danied', 'james', 'jjswwsdj@gmail.com', '1IrvineCa64lifornia8'),
       ('daniec', 'james', 'jjswertdj@gmail.com', '1Irvi53neCalifornia8'),
       ('danieg', 'james', 'jjswerftdj@gmail.com', '1Ir5vineCalifornia8'),
       ('daniww', 'james', 'jjsdertj@gmail.com', '1I4rvineCalifornia8'),
       ('danieqq', 'james', 'jjsdfdsfsdj@gmail.com', '13IrvineCalifornia8'),
       ('danielll', 'james', 'jjsq12dj@gmail.com', '12IrvineCalifornia8')
returning *;

insert into "userProfiles" ("fullName", "birthday", "sex", "displaySex", "occupation", "fact","userId")
values ('DJ Catan', '12/03/1995', 'Male', 'True','developer', 'I can dance', 1),
       ('daniel james', '12/04/1996', 'Male', 'True','dancer', 'I can sing', 2),
       ('Bridget N', '12/04/1996', 'Female', 'True','Cryer', 'I can cry', 3),
       ('Va P', '12/04/1997', 'Male', 'True','engineer', 'I can work', 4),
       ('Danny', '12/04/1999', 'Female', 'True','guitar player', 'I am a twin', 5),
       ('Eren Y', '12/04/1999', 'M', 'True','Rumbler', 'I am the founding titan', 6),
       ('Mika', '12/04/1993', 'Female', 'True','Eren Admirer', 'I fight titans', 7),
       ('RICKY', '12/04/1992', 'Female', 'True','pop-star', 'Hips do lie', 8),
       ('XCXCC', '12/04/1999', 'Female', 'True','Sleeper', 'I can sleep', 9),
       ('Rebecca Elle', '12/04/1932', 'Other', 'True','Boss', 'I have a twin', 10),
       ('Davey Dickens', '12/04/1953', 'Other', 'True','Gymrat', 'I can bench 405', 11),
       ('Kathy Rugberg II', '12/04/1901', 'Other', 'True','Seamstress', 'I collect bargies', 12),
       ('Michellen Manue', '12/04/1992', 'Other', 'True','Critic', 'I sell tires', 13),
       ('Doggo', '12/04/1990', 'GoodBoy', 'True','Runner', 'I can Chase My Tail for Hours', 14),
       ('Newt', '12/04/1980', 'Female', 'True','TikTok', 'I have 205 million followers', 15)
returning *;

insert into  "images" ("image", "profileId")
values ('/images/dj-profile.jpg', 1),
       ('/images/dj.png', 2),
       ('/images/lightg.jpg', 3),
       ('/images/p4.jpeg', 4),
       ('/images/plantg.jpg', 5),
       ('/images/ron.jpg', 6),
       ('/images/p7.jpeg', 7),
       ('/images/p8.jpeg', 8),
       ('/images/person1.jpg', 9),
       ('/images/bluebg.jpg', 10),
       ('/images/bwg.jpg', 11),
       ('/images/hatg.jpg', 12),
       ('/images/crguy.jpg', 13),
       ('/images/dog.jpg', 14),
       ('/images/laugh.jpeg', 15)
returning *;

insert into  "matches" ("isMatched", "requestedProfileId", "acceptedProfileId", "userId")
values ('true', 1, 2, 2),
       ('true', 2, 1, 1)
returning *;

insert into "locations" ("cityName", "lat", "lng", "profileId")
values ('Irvine', 33.634940430843194,  -117.74014631397628, 1),
       ('Irvine', 33.634940430843193,  -117.74014631397620, 2),
       ('Irvine', 33.634940430843190,  -117.74014631397621, 3),
       ('Irvine', 33.634940430843185,  -117.74014631397639, 4),
       ('Irvine', 33.653378, -117.775763, 5),
       ('Irvine', 33.634940430843183,  -117.74014631397038, 6),
       ('Irvine', 33.634940430843185,  -117.74014631397638, 7),
       ('Irvine', 33.634940430843183,  -117.74014631397608, 8),
       ('Irvine', 33.634940430843191,  -117.74014631397618, 9),
       ('Irvine', 33.712560, -117.741569, 10),
       ('Irvine', 33.706364, -117.720233, 11),
       ('Irvine', 33.660326884275, -117.74470375502942, 12),
       ('Irvine', 33.659194, -117.731058, 13),
       ('Irvine', 33.642437, -117.760077, 14),
       ('Irvine', 33.651552, -117.775382, 15)
returning *;

insert into "messages" ("fromUserId", "toUserId", "message", "userId")
values (1, 2, 'Hello!', 1),
       (2, 1, 'Hi!', 2)
returning *;
