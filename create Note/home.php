<?php
session_start();

if(!$_SESSION["loggedin"]){
    header("Location:index.php");
}

else{

$dt = '';

$title_usr = $_SESSION["username"];

$servername = "localhost";
$username = "root";
$password = "";
$database = "notes";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    $dt = "Sunucuya bağlanılamadı" . $conn->connect_error;
}


if (isset($_POST['not'])) {
    
    $not_ = $_POST['not'];

    
    $not_ = mysqli_real_escape_string($conn,$not_);

    $not_ = mysqli_real_escape_string($conn,$not_);
    $not_ = stripslashes($not_);

    $sql = "INSERT INTO notes (username, notes) VALUES ('$title_usr', '$not_')";

   if(!$conn->query($sql)) {
        $dt = "Notunuz kayıt edilemedi" . $conn->error;
    }
}
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="icon" href="bulb.png" type="image/x-icon">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="title-cap">
        <h1 class="title">&#128161 <?php echo $title_usr ?> light bulb</h1>
        <br>
        <button id="logout">Logout</button>
        <button id="add" onclick="disp_()">Add Note</button>
    </header>
    <section class="page-contents">
        <iframe src='notes.php' id="iframe_notes"></iframe>
        <div id="note-frame" style="display:none">
            <form action="" id="frm" method="post">
                <textarea name="not" id="not"></textarea>
                <br>
                <br>
                <input type="submit" value="Save" id="save" name="save">
                <br>
                <p><?php echo $dt ?></p>
            </form>
            <button id="no_display" onclick="no_display()">Close</button>
        </div>
    </section>
    <script src="command.js"></script>
</body>
</html>