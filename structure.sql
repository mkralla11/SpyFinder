-- Table: spies

-- DROP TABLE spies;

CREATE TABLE spies
(
  id bigint NOT NULL,
  version bigint NOT NULL,
  age integer NOT NULL,
  gender boolean NOT NULL,
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  name character varying(255) NOT NULL,
  CONSTRAINT spies_pkey PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE spies
  OWNER TO developer;
