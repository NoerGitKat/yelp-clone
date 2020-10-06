CREATE TABLE restaurant
(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR
  (50) NOT NULL,
  location VARCHAR
  (50) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 AND price_range <= 5)
);

CREATE TABLE review
(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  restaurant_id BIGINT NOT NULL REFERENCES restaurant(id),
  name VARCHAR
  (50) NOT NULL,
  reviewText TEXT NOT NULL,
  rating INT NOT NULL check
  (rating >=1 and rating <= 5)
);

