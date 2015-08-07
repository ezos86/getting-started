<?php

//Marketo Post

if($_POST['feedback_content'] === ''){
	exit;
}

$fields = array(
	"Email"=>$_POST['email'],
	"gsfeedback" => $_POST['feedback_content'],
	"formid"=>"1303",
	"munchkinId"=>"229-XUE-318"
);

$host = 'http://pages.aerospike.com/index.php/leadCapture/save';

//open connection
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $host);
curl_setopt($ch, CURLOPT_POST, count($fields));
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($fields));

//execute post
$result = curl_exec($ch);
curl_close($ch);

?>