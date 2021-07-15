<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname     = "words";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$query = "SELECT * FROM words";
$trp = mysqli_query($conn, $query);
$rows = array();
while ($r = mysqli_fetch_assoc($trp)) {
    $rows[] = $r;
}

/**
 *  An example CORS-compliant method.  It will allow any GET, POST, or OPTIONS requests from any
 *  origin.
 *
 *  In a production environment, you probably want to be more restrictive, but this gives you
 *  the general idea of what is involved.  For the nitty-gritty low-down, read:
 *
 *  - https://developer.mozilla.org/en/HTTP_access_control
 *  - https://fetch.spec.whatwg.org/#http-cors-protocol
 *
 */

header("Access-Control-Allow-Origin: *");
header('Content-Type: application/json');

echo json_encode($rows);
