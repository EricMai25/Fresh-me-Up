DROP TABLE Pant;
DROP TABLE Shirt;
DROP TABLE Shoes;
DROP TABLE Suit;
DROP TABLE Watch;

CREATE TABLE Pant(
id INT NOT NULL PRIMARY KEY,
name TEXT,
article TEXT,
color TEXT,
image TEXT,
type TEXT,
favorite BOOLEAN,
date TEXT,
laundry BOOLEAN
);

CREATE TABLE Shirt(
id INT NOT NULL PRIMARY KEY,
name TEXT,
article TEXT,
color TEXT,
image TEXT,
type TEXT,
favorite BOOLEAN,
date TEXT,
laundry BOOLEAN
);

CREATE TABLE Shoes(
id INT NOT NULL PRIMARY KEY,
name TEXT,
article TEXT,
color TEXT,
image TEXT,
type TEXT,
favorite BOOLEAN,
date TEXT,
laundry BOOLEAN
);

CREATE TABLE Suit(
id INT NOT NULL PRIMARY KEY,
name TEXT,
article TEXT,
color TEXT,
image TEXT,
type TEXT,
favorite BOOLEAN,
date TEXT,
laundry BOOLEAN
);

CREATE TABLE Watch(
id INT NOT NULL PRIMARY KEY,
name TEXT,
article TEXT,
color TEXT,
image TEXT,
type TEXT,
favorite BOOLEAN,
date TEXT,
laundry BOOLEAN
);

COPY Pant   FROM 'D:\Program Files\Git\mvproject\hrsf107-mvp\Data\Pant.csv'  CSV HEADER;
COPY Shirt  FROM 'D:\Program Files\Git\mvproject\hrsf107-mvp\Data\Shirt.csv' CSV HEADER;
COPY Shoes  FROM 'D:\Program Files\Git\mvproject\hrsf107-mvp\Data\Shoes.csv' CSV HEADER;
COPY Suit   FROM 'D:\Program Files\Git\mvproject\hrsf107-mvp\Data\Suit.csv' CSV HEADER;
COPY Watch  FROM 'D:\Program Files\Git\mvproject\hrsf107-mvp\Data\Watch.csv' CSV HEADER;