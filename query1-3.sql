Select first_name,last_name,create_date from customer inner join rental where customer.customer_id=rental.customer_id and rental.return_date is not null;
