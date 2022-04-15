CREATE TABLE "public.users" (
	"userId" serial NOT NULL,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT NOT NULL,
	"email" TEXT NOT NULL UNIQUE,
	"password" TEXT NOT NULL UNIQUE,
	CONSTRAINT "Users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.userProfiles" (
	"profileId" integer,
	"firstName" TEXT NOT NULL,
	"lastName" TEXT,
	"birthday" TEXT,
	"sex" TEXT,
	"displaySex" BOOLEAN NOT NULL,
	"occupation" TEXT,
	"fact" TEXT,
	"profilePic" TEXT,
	"createdAt" DATETIME NOT NULL,
	"userId" integer NOT NULL,
	CONSTRAINT "userProfiles_pk" PRIMARY KEY ("profileId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.matches" (
	"matchId" serial NOT NULL,
	"isMatched" BOOLEAN,
	"requestedProfileId" integer NOT NULL,
	"acceptedProfileId" integer NOT NULL,
	"matchedAt" DATETIME NOT NULL,
	CONSTRAINT "matches_pk" PRIMARY KEY ("matchId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.locations" (
	"locationId" serial NOT NULL,
	"cityName" TEXT NOT NULL,
	"geolocation" TEXT NOT NULL,
	"profileId" integer NOT NULL,
	CONSTRAINT "locations_pk" PRIMARY KEY ("locationId")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "public.messages" (
	"messageId" serial NOT NULL,
	"fromUserId" integer NOT NULL,
	"toUserId" integer NOT NULL,
	"message" TEXT NOT NULL,
	"timeStamp" TIMESTAMP NOT NULL,
	CONSTRAINT "messages_pk" PRIMARY KEY ("messageId")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "userProfiles" ADD CONSTRAINT "userProfiles_fk0" FOREIGN KEY ("userId") REFERENCES "Users"("userId");

ALTER TABLE "matches" ADD CONSTRAINT "matches_fk0" FOREIGN KEY ("requestedProfileId") REFERENCES "userProfiles"("profileId");
ALTER TABLE "matches" ADD CONSTRAINT "matches_fk1" FOREIGN KEY ("acceptedProfileId") REFERENCES "userProfiles"("profileId");

ALTER TABLE "locations" ADD CONSTRAINT "locations_fk0" FOREIGN KEY ("profileId") REFERENCES "userProfiles"("profileId");

ALTER TABLE "messages" ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("fromUserId") REFERENCES "Users"("userId");
ALTER TABLE "messages" ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("toUserId") REFERENCES "Users"("userId");
