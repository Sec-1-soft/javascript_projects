<?php
session_start();

$insert = '';
$servername = "localhost";
$username = "root";
$password = "";
$database = "login_db";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Veritabanına bağlanılamadı: " . $conn->connect_error);
}

if (isset($_POST["username"]) && isset($_POST["password"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Kullanıcı adını veritabanındaki kayıtlarla karşılaştırmak için önce escape ediyoruz
    $escaped_username = mysqli_real_escape_string($conn, $username);

    // Kullanıcı adı zaten kaydedilmiş mi?
    $check_username_query = "SELECT * FROM login_data WHERE username = '$escaped_username'";
    $check_username_result = $conn->query($check_username_query);

    if ($check_username_result->num_rows > 0) {
        $insert = "Bu kullanıcı adı alınmış.";
    } else {
        // Yeni kullanıcı kaydı için hazırlık
        $escaped_password = mysqli_real_escape_string($conn, $password);
        $insert_query = "INSERT INTO login_data (username, password) VALUES ('$escaped_username', '$escaped_password')";

        // Yeni kullanıcıyı kaydet
        if ($conn->query($insert_query) === TRUE) {
            $insert = "Kayıt oldunuz.Giriş sayfasına dön.";
            header("Refresh: 1, Location: index.php");
        } else {
            $insert = "Hata kayıt olunamadı";
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
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header class="title-cap">
        <h1 class="title">&#128161 Hussein's light bulb</h1>
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
                        <td><input type="submit" value="Sign Up" id="login"></td>
                    </tr>
                    <tr>
                        <td>&nbsp &nbsp &nbsp &nbsp;</td>
                        <td style="color:red;font-family:arial;font-size:12px;"><?php echo $insert ?></td>
                    </tr>
                    <tr>
                    <td>&nbsp &nbsp &nbsp &nbsp;</td>
                        <td><p style="font-family:arial;font-size:12px;">Do you have an account?</p></td>
                    </tr>

                    <tr>
                    <td>&nbsp &nbsp &nbsp &nbsp;</td>
                    <td><a href="index.php" style="font-family:arial;font-size:10px">Login</a></td>
                    </tr>

                </table>
            </form>
        </div>
    </section>
</body>
</html>
