<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "notes";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    $id = $_POST['id'];

    // Prepare and bind statement
    $stmt = $conn->prepare("DELETE FROM notes WHERE id = ?");
    $stmt->bind_param("i", $id);

    // Execute statement
    if ($stmt->execute()) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }

    $stmt->close();
$conn->close();
?>
