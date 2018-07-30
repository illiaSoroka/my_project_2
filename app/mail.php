<?php

$frm_name  = "Youname";
$recepient = "ilysha92@bigmir.net";
$sitename  = "Название Сайта";
$subject   = "Новая заявка с сайта \"$sitename\"";

$name = trim($_POST["name"]);
$subject = trim($_POST["subject"]);
$email = trim($_POST["email"]);
$message = trim($_POST["message"]);

$message = "
Имя: $name
Обьект: $subject
E-mail: $email <br>
Сообщение: $message
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
