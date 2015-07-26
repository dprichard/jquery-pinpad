<?php

if(isset($_POST['pinnumber']) && $_POST['pinnumber'] != '')
	{
		$pinnumber = $_POST['pinnumber'];
		$mypin = '1234';
		
		if($pinnumber == $mypin)
			{
				$timeout = time()+30;
				setcookie('pinauthorized','1', $timeout, "/browserpin/");
				echo '1';
			}
		else
			{
				echo '0';
			}
	}
	
?>