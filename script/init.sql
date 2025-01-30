\c postgres
DROP DATABASE IF EXISTS ems;
CREATE DATABASE ems WITH OWNER='postgres';

\c ems;

CREATE TABLE employee (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  "statusDelete" BOOLEAN DEFAULT false  
);

INSERT INTO employee (name, email) VALUES ('PPP', 'ppp@e.com');
INSERT INTO employee (name, email) VALUES ('EEE', 'eee@ex.com');
INSERT INTO employee (name, email) VALUES ('FFF', 'fff@exa.com');
INSERT INTO employee (name, email) VALUES ('ZZZ', 'zzz@examp.com');
INSERT INTO employee (name, email) VALUES ('CCC', 'ccc@exampl.com');
INSERT INTO employee (name, email) VALUES ('OOO', 'ooo@example.com');
INSERT INTO employee (name, email) VALUES ('AAA', 'aaa@e.com');
INSERT INTO employee (name, email) VALUES ('HHH', 'hhh@ex.com');
INSERT INTO employee (name, email) VALUES ('III', 'iii@exa.com');
INSERT INTO employee (name, email) VALUES ('JJJ', 'jjj@exam.com');
INSERT INTO employee (name, email) VALUES ('VVV', 'vvv@exampl.com');
INSERT INTO employee (name, email) VALUES ('SSS', 'sss@example.com');
INSERT INTO employee (name, email) VALUES ('BBB', 'bbb@e.com');
INSERT INTO employee (name, email) VALUES ('UUU', 'uuu@ex.com');
INSERT INTO employee (name, email) VALUES ('LLL', 'lll@exa.com');
INSERT INTO employee (name, email) VALUES ('MMM', 'mmm@exam.com');
INSERT INTO employee (name, email) VALUES ('NNN', 'nnn@examp.com');
INSERT INTO employee (name, email) VALUES ('GGG', 'ggg@examp.com');
INSERT INTO employee (name, email) VALUES ('QQQ', 'qqq@exampl.com');
INSERT INTO employee (name, email) VALUES ('RRR', 'rrr@example.com');
INSERT INTO employee (name, email) VALUES ('TTT', 'ttt@e.com');
INSERT INTO employee (name, email) VALUES ('YYY', 'yyy@ex.com');
INSERT INTO employee (name, email) VALUES ('WWW', 'www@exa.com');
INSERT INTO employee (name, email) VALUES ('KKK', 'kkk@exam.com');
INSERT INTO employee (name, email) VALUES ('XXX', 'xxx@examp.com');
INSERT INTO employee (name, email) VALUES ('DDD', 'ddd@example.com');

  