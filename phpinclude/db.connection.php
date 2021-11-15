<?php
//The connection object

$conn = new mysqli("localhost", "root", "", "prez_db");

if($conn->connect_error){
    die("Connection failed: ".$conn->connect_error);
}

?>