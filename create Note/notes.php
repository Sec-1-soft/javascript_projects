<?php
session_start();
$data_ = '';

$usr = $_SESSION["username"];
$err = '';
$servername = "localhost";
$username = "root";
$password = "";
$database = "notes";
$conn = new mysqli($servername,$username,$password,$database);

if($conn->connect_error){
   $err = "Sunucuya bağlanılamadı";
}

$sql = "SELECT * FROM notes WHERE username = '$usr'";
$result = $conn->query($sql);

if($result->num_rows > 0){
   while($row = $result->fetch_assoc()){
      $note = $row['notes'];

      $data_ .= "<div class='frm_1' data-id=".$row['id'].">"."<div id='scroll'>"."<p>".$note."</p>"."</div>"."<button class='delete'>"."Delete"."</button>"."</div>";
      
   }
} else {
   $err = "Not bulunamadı";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body id="notes_body">
    <?php
      echo $data_;
    ?>
    <script src="command.js"></script>
</body>
</html>
