
SELECT address FROM address inner join store WHERE store_id IN (
   select store_id from inventory inner join film where film.title = "TWISTED PIRATES" and film.film_id=inventory.film_id
) and store.address_id = address.address_id;
