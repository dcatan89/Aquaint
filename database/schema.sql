CREATE TABLE "users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "userProfiles" (
	"profileId" serial NOT NULL,
	"fullName" TEXT NOT NULL,
	"birthday" TEXT,
	"sex" TEXT,
	"displaySex" BOOLEAN NOT NULL,
	"occupation" TEXT,
	"fact" TEXT,
	"createdAt" timestamptz(6) not null default now(),
	"userId" integer NOT NULL,
	CONSTRAINT "userProfiles_pk" PRIMARY KEY ("profileId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "images" (
	"imageId" serial NOT NULL,
	"image" TEXT NOT NULL,
	"profileId" TEXT NOT NULL,
	CONSTRAINT "images_pk" PRIMARY KEY ("imageId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "matches" (
	"matchId" serial NOT NULL,
	"isMatched" BOOLEAN,
	"requestedProfileId" integer NOT NULL,
	"acceptedProfileId" integer NOT NULL,
	"matchedAt" timestamptz(6) not null default now(),
	CONSTRAINT "matches_pk" PRIMARY KEY ("matchId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "locations" (
	"locationId" serial NOT NULL,
	"cityName" TEXT NOT NULL,
	"lat" FLOAT NOT NULL,
	"lng" FLOAT NOT NULL,
	"profileId" integer NOT NULL,
	CONSTRAINT "locations_pk" PRIMARY KEY ("locationId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "messages" (
	"messageId" serial NOT NULL,
	"fromUserId" integer NOT NULL,
	"toUserId" integer NOT NULL,
	"message" TEXT NOT NULL,
	"timeStamp" timestamptz(6) not null default now(),
	CONSTRAINT "messages_pk" PRIMARY KEY ("messageId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "userProfiles" ADD CONSTRAINT "userProfiles_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");

ALTER TABLE "matches" ADD CONSTRAINT "matches_fk0" FOREIGN KEY ("requestedProfileId") REFERENCES "userProfiles"("profileId");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk1" FOREIGN KEY ("acceptedProfileId") REFERENCES "userProfiles"("profileId");

ALTER TABLE "locations" ADD CONSTRAINT "locations_fk0" FOREIGN KEY ("profileId") REFERENCES "userProfiles"("profileId");

ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("fromUserId") REFERENCES "users"("userId");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("toUserId") REFERENCES "users"("userId");
