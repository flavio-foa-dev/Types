CREATE TABLE car(
  id SERIAL,
  title VARCHAR(50),
  model VARCHAR(50),
  PRIMARY KEY(id),
)

-- psql -d postegres -f caminho