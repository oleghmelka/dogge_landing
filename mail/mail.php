<?php
$name = $_POST['name_user'];
$mail = $_POST['mail_user'];
$phone = $_POST['phone_user'];
$message = $_POST['text_user'];





if(isset($name) && isset($phone))
{

    $to = 'T.Rabtsava@prestigio.eu, P.Dubovsky@prestigio.eu';
    $email_subject = "Новое сообщение с сайта";
    $email_body = "<br/>"."Имя: $name<br/>E-mail: $mail<br/>Телефон:$phone<br/>Сообщение:<br/>$message";
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    mail($to,$email_subject,$email_body, $headers);
}
