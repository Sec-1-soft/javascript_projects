<?php

session_start();

$error = '';
$servername = "localhost";
$username = "root";
$password = "";
$database = "login_db";

$conn = new mysqli($servername,$username,$password,$database);

if($conn ->connect_error){
    echo "Hata veritabanına bağlanılamadı".$conn->connect_error;
}

if(isset($_POST["username"]) && isset($_POST["password"])){

$username = $_POST["username"];
$password = $_POST["password"];

$username = mysqli_real_escape_string($conn,$username);
$password = mysqli_real_escape_string($conn,$password);

$sql = "select * from login_data where username='$username' and password='$password'";
$result = $conn->query($sql);




if($result->num_rows>0){
    $_SESSION['username'] = $username;
    $_SESSION['loggedin'] = true;

    if($_SESSION['loggedin']){
    header("Location:home.php");
    }
    else{
        header("Location:index.php");
    }
 }

 else{
    $error = "Kullanıcı adı veya şifre hatalı";
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
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="bulb.png" type="image/x-icon">
</head>
<body>
    <header class="title-cap">
        <h1 class="title">&#128161 light bulb</h1>
    </header>
    <section class="page-contents">
        <div id="form-frame">
            <form action="" id="form" method="post">
                <table>
                    <tr>
                        <td><label class="label">Username:</label></td>
                        <td><input type="text" id="username" name="username"></td>
                    </tr>
                    <tr>
                        <td><p></p></td>
                    </tr>
                    <tr>
                        <td><label class="label">Password:</label></td>
                        <td><input type="password" id="password" name="password"></td>
                    </tr>
                    <tr>
                        <td><p></p></td>
                    </tr>
                    <tr>
                        <td>&nbsp &nbsp &nbsp &nbsp;</td>
                        <td><input type="submit" value="login" id="login"></td>
                    </tr>
                    <tr>
                        <td>&nbsp &nbsp &nbsp &nbsp;</td>
                        <td style="color:red;font-family:arial;font-size:12px;"><?php echo $error ?></td>
                    </tr>
                    <tr>
                    <td>&nbsp &nbsp &nbsp &nbsp;</td>
                        <td><p style="font-family:arial;font-size:12px;">Don't you have an account?</p></td>
                    </tr>

                    <tr>
                    <td>&nbsp &nbsp &nbsp &nbsp;</td>
                    <td><a href="sign.php" style="font-family:arial;font-size:10px">Sign Up</a></td>
                    </tr>

                </table>
            </form>
        </div>
    </section>
</body>
</html>
