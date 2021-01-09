<?php 
	$to;
	if(isset($_POST['email'])){
		$to = $_POST['email'];
	}
	function mandar(){
	    $from = "santiago.ariel.paz04@gmail.com";
	    $subject = "Aviso Countdown";
	    $message = "Ha terminado la espera de la cuenta hacia atras :)";
	    $headers = "From:" . $from;
	    mail($to,$subject,$message, $headers);
	    echo "listo";
	}
	echo '<script>';
	echo 'if(localStorage.getItem("Termino") == "1"){
		alert('?> mandar(); <?php');
	}';
	echo '</script>'
?>