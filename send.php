<?php
error_reporting(0);

$type    = $_POST['type'];
$check     = $_POST['check'];
$marketing   = $_POST['marketing'];
$recourse = $_POST['recourse'];
$recourse1  = $_POST['recourse1'];
$recourse2    = $_POST['recourse2'];
$tel     = $_POST['tel'];

$to = "K8direkt@yandex.ru";
$subject = "Новая заявка";
$message = '
	Пользователь оставил свои данные <br>
 <b>Что подают:</b> ' . $_POST['type'] . ' <br>
 <b>Средний чек:</b> ' . $_POST['check'] . ' <br>
 <b>Контекстная реклама:</b> ' . $_POST['marketing'] . ' <br>
 <b>Сколько новых обращений могут обработать:</b> ' . $_POST['recourse'] . ' <br>
 <b>Сколько новых обращений могут обработать:</b> ' . $_POST['recourse1'] . ' <br>
 <b>Конверсия:</b> ' .  $_POST['recourse2'] . ' <br>
	<b>Телефон:</b> ' .  $_POST['tel'] . '';
$headers = "From: K8direkt@yandex.ru" . "\r\n" .
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
mail($to,$subject,$message,$headers);

?>