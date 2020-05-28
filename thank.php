<?php
header("Content-Type: text/html; charset=utf-8");

if(isset($_POST['phone'])) {
	
$email = "info@justo.com.ua"; #Email, на него придут письма
$title = "Перезвоните мне 'Quiz Justo'"; #Заголовок письма
$sender="<noreply@{$_SERVER['HTTP_HOST']}>"; // Адрес отправителя
$header="Content-type:text/plain;charset=utf-8
From: {$sender}
";

$text = "
Информация о покупателе:

Имя: ".$_POST['name']."
Телефон: ".$_POST['phone']."

Заявка пришла с сайта:" . $_SERVER['HTTP_REFERER'] ."
Время заказа: ".date("Y-m-d H:i:s");

if(mail($email, $title, $text, $header)) {
	header('Location: thnks.html');
} else {
	echo "Ошибка. Возможно функция mail отключена. Обратитесь к хостинг-провайдеру или возьмите консультацию на сайте, где купили шаблон";
}
} else {
	echo "Ошибка";
}
?>