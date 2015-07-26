<?php 

if(isset($_COOKIE['pinauthorized']))
	{
		if($_COOKIE['pinauthorized'] == '1')
			{
				$pinauthorized = '1';	
			}
		else
			{
				$pinauthorized = '0';
			}
	}
else
	{
		$pinauthorized = '0';
	}
		
?>	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<link rel="stylesheet" href="css/pinpad.css" type="text/css" />	
	<link type="text/css" href="css/colorbox.css" rel="stylesheet" />
 	<script src="js/jquery.js" type="text/javascript"></script>
	<script src="js/jquery.colorbox.js" type="text/javascript"></script>
	<script src="js/jrumble.1.1.js" type="text/javascript"></script>
	<script src="js/jquery.browserpin.js" type="text/javascript"></script>


	<title>Browser Pin</title>
	
<?php if($pinauthorized == '0') { ?>
<script type="text/javascript">
window.onload = init;
</script>
<?php } ?>
	
</head>
<body onkeyup="keypressed();">
	<input type="hidden" name="pinnumber" id="pinnumber" value=""  />
	<div class="secretmessage" id="secretmessage">The Pin Number is 1234</div>
	<p><a class='example8' href="#"></a></p>
		<div style='display:none'>
		<div id='inline_example1'>
		<div class="pinpad">
		<div class="pinpad-result-row">
			<div class="pinpad-result1blank" id="blank1">
			</div>
			<div class="pinpad-result1hidden" id="hidden1">
			</div>
			<div class="pinpad-result1blank" id="blank2">
			</div>
			<div class="pinpad-result1hidden" id="hidden2">
			</div>
			<div class="pinpad-result1blank" id="blank3">
			</div>
			<div class="pinpad-result1hidden" id="hidden3">
			</div>
			<div class="pinpad-result2blank" id="blank4">
			</div>
			<div class="pinpad-result2hidden" id="hidden4">
			</div>
		</div>
		<div class="pinpadnumberrow1">
			<div class="number1" onclick="numberEntered('1')">
			</div>
			<div class="number1" onclick="numberEntered('2')">
			</div>
			<div class="number2" onclick="numberEntered('3')">
			</div>
		</div>
		<div class="pinpadnumberrow1">
			<div class="number1" onclick="numberEntered('4')">
			</div>
			<div class="number1" onclick="numberEntered('5')">
			</div>
			<div class="number2" onclick="numberEntered('6')">
			</div>
		</div>
		<div class="pinpadnumberrow1">
			<div class="number1" onclick="numberEntered('7')">
			</div>
			<div class="number1" onclick="numberEntered('8')">
			</div>
			<div class="number2" onclick="numberEntered('9')">
			</div>
		</div>
		<div class="pinpadnumberrow2">
			<div class="number1" onclick="numberEntered('0')">
			</div>
			<div class="number1" onclick="numberEntered('back')">
			</div>
			<div class="number2" id="gobutton" onclick="numberEntered('go')">
			</div>
		</div>
	</div>
	</div>
</body>
</html>