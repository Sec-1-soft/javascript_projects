<?php

$username = $_POST["username"];
$password = $_POST["password"];

$file = fopen("login.txt","w");
fwrite($file,$username."\n".$password."\n"."-----------");
fclose($file);

if($username == "huseyin" && $password=="sahan640***"){
    echo "Giriş başarili"
}

else{
    header("Location:index.html");
    echo "<script>"."Bilgiler yanlis"."</script>";
}

?>