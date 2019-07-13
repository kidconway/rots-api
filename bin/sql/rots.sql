CREATE TABLE characters(
  id serial,
  name character varying(20),
  personality character varying(50),
  race character varying(20),
  level int,
  classType character varying(50)
);

CREATE TABLE cities(
  id serial,
  name character varying(50),
  location character varying(50)
);

CREATE TABLE resides(
  charName character varying(20),
  cityName character varying(50)
);

INSERT INTO characters(name, personality, race, level, classType)
VALUES
('Angoldir', 'Vigiliant', 'Wood Elf', 72, 'warrior'),
('Glimli', 'Boorish', 'Dwarf', 76, 'tank'),
('Edison', 'Cerebral', 'Human', 42, 'conjurer'),
('Oso', 'Athletic', 'Beorning', 36, 'swashbuckler'),
('Maisie', 'Mischevious', 'Human', 50, 'swashbuckler'),
('Beto', 'Clever', 'Hobbit', 51, 'tank'),
('Skailug', 'Aggressive', 'Uruk-Hai', 42, 'berserker'),
('Bunkar', 'Alcoholic', 'Dwarf', 41, 'default warrior');

INSERT INTO cities(name, location)
VALUES
('Vinyanost', ' West Central'),
('Maethelburg', 'West North'),
('Ranger Camp', 'West West'),
('Laketown', 'East North'),
('Elven Halls', 'East North'),
('Troy', 'East Central');

INSERT INTO resides(charName, cityName)
VALUES
('Angoldir', 'Vinyanost'),
('Glimli', 'Laketown'),
('Edison', 'Troy'),
('Oso', 'Troy'),
('Maisie', 'Maethelburg'),
('Beto', 'Vinyanost'),
('Bunkar', 'Laketown'),
('Skailug', 'Ungorod');
