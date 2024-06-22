
<?php
// Create
$mysqli->query("INSERT INTO products (name, price) VALUES ('Product1', 100)");
// Read
$result = $mysqli->query("SELECT * FROM products");
// Update
$mysqli->query("UPDATE products SET price = 200 WHERE name = 'Product1'");
// Delete
$mysqli->query("DELETE FROM products WHERE name = 'Product1'");

?>