		var time_variable;
		function getXMLObject()  //XML OBJECT
			{
		   		var xmlHttp = false;
		   		try 
					{
		     			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP")  // For Old Microsoft Browsers
		   			}
		   		catch (e) 
					{
		     			try {
		       					xmlHttp = new ActiveXObject("Microsoft.XMLHTTP")  // For Microsoft IE 6.0+
		     				}
				     	catch (e2) 
							{
				       			xmlHttp = false   // No Browser accepts the XMLHTTP Object then false
				     		}
		   			}
		   		if (!xmlHttp && typeof XMLHttpRequest != 'undefined') 
					{
		     			xmlHttp = new XMLHttpRequest();        //For Mozilla, Opera Browsers
		   			}
		   		return xmlHttp;  // Mandatory Statement returning the ajax object created
			}
		var xmlhttp = new getXMLObject();	//xmlhttp holds the ajax object
		function checkPinCode(pinnumber) {
			  var getdate = new Date();  //Used to prevent caching during ajax call
				  if(xmlhttp) { 
				    xmlhttp.open("POST","ajax/checkPin.php",true); //calling testing.php using POST method
				    xmlhttp.onreadystatechange  = handleServerResponseCheckPinCode;
				    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				    xmlhttp.send("pinnumber=" + pinnumber); //Posting txtname to PHP File
				  }			
			}
		function handleServerResponseCheckPinCode() {
		   if (xmlhttp.readyState == 4) {
		     if(xmlhttp.status == 200) {
				pinresult = xmlhttp.responseText;
					if(pinresult == '1')
						{   
							$('#blank1').show();
							$('#blank2').show();
							$('#blank3').show();
							$('#blank4').show();
							$('#hidden1').hide();
							$('#hidden2').hide();
							$('#hidden3').hide();
							$('#hidden4').hide();
							$('#secretmessage').show();
							document.getElementById("pinnumber").value = '';
							$.fn.colorbox.close(); 
							setTimeout("init()",30000);
						}
					else if(pinresult == '0')
						{
							$('#blank1').show();
							$('#blank2').show();
							$('#blank3').show();
							$('#blank4').show();
							$('#hidden1').hide();
							$('#hidden2').hide();
							$('#hidden3').hide();
							$('#hidden4').hide();
							document.getElementById("pinnumber").value = '';
							$('#inline_example1').val('').trigger('mouseup');
	        				$('#inline_example1').unbind('mousedown');
					        $('#inline_example1').jrumble({rumbleEvent: 'mousedown', rangeX: 6,	rangeY: 0, rangeRot: 0});
					        $('#inline_example1').trigger('mousedown');
					        setTimeout(function(){
					            $('#inline_example1').val('').trigger('mouseup');
					            $('#inline_example1').unbind('mousedown');
					        }, 500);
						}
		     }
		     else {
		        alert("Error during AJAX call. Please try again");
		     }
		   }
		}
	function keypressed(event){
		
	if(!event)
		{
			event = window.event;
		}
	
	$(document).keydown(function(e) { if (e.keyCode == 8) e.preventDefault(); });
	if(event.keyCode=='8' || event.keyCode=='46')
		{
			var currentValue = document.getElementById("pinnumber").value;
			var currentValueLength = (currentValue.length - 1)
			document.getElementById("pinnumber").value = currentValue.substring(0,currentValueLength);
		}
	if(event.keyCode=='13' || event.keyCode=='18')
		{
			numberEntered('go');
		}
	else if(document.getElementById("pinnumber").value.length == '4')
		{
			$('#inline_example1').val('').trigger('mouseup');
	        $('#inline_example1').unbind('mousedown');
			$('#inline_example1').jrumble({rumbleEvent: 'mousedown', rangeX: 6,	rangeY: 0, rangeRot: 0});
	        $('#inline_example1').trigger('mousedown');
	        setTimeout(function(){
	            $('#inline_example1').val('').trigger('mouseup');
	            $('#inline_example1').unbind('mousedown');
	        }, 500);
		}
	else
		{
				if(event.keyCode=='48' || event.keyCode=='96')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '0');
					}
				if(event.keyCode=='49' || event.keyCode=='97')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '1');
					}
				if(event.keyCode=='50' || event.keyCode=='98')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '2');
					}
				if(event.keyCode=='51' || event.keyCode=='99')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '3');
					}
				if(event.keyCode=='52' || event.keyCode=='100')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '4');
					}
				if(event.keyCode=='53' || event.keyCode=='101')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '5');
					}
				if(event.keyCode=='54' || event.keyCode=='102')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '6');
					}
				if(event.keyCode=='55' || event.keyCode=='103')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '7');
					}
				if(event.keyCode=='56' || event.keyCode=='104')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '8');
					}
				if(event.keyCode=='57' || event.keyCode=='105')
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + '9');
					}
				showDigits();
		}
	}
	function numberEntered(thenumber){
		if(thenumber == 'go')
			{
				if(document.getElementById("pinnumber").value.length == '4')
					{
						//alert(document.getElementById("pinnumber").value);
						checkPinCode(document.getElementById("pinnumber").value);
					}
				else
					{
							$('#inline_example1').val('').trigger('mouseup');
	        				$('#inline_example1').unbind('mousedown');
					        $('#inline_example1').jrumble({rumbleEvent: 'mousedown', rangeX: 6,	rangeY: 0, rangeRot: 0});
					        $('#inline_example1').trigger('mousedown');
					        setTimeout(function(){
					            $('#inline_example1').val('').trigger('mouseup');
					            $('#inline_example1').unbind('mousedown');
					        }, 500);
					}
			}
		else if(thenumber == 'back')
			{
				var currentValue = document.getElementById("pinnumber").value;
				var currentValueLength = (currentValue.length - 1)
				document.getElementById("pinnumber").value = currentValue.substring(0,currentValueLength);
				showDigits();
			}
		else 
			{
				if(document.getElementById("pinnumber").value.length == '4')
					{
							$('#inline_example1').val('').trigger('mouseup');
	        				$('#inline_example1').unbind('mousedown');
					        $('#inline_example1').jrumble({rumbleEvent: 'mousedown', rangeX: 6,	rangeY: 0, rangeRot: 0});
					        $('#inline_example1').trigger('mousedown');
					        setTimeout(function(){
					            $('#inline_example1').val('').trigger('mouseup');
					            $('#inline_example1').unbind('mousedown');
					        }, 500);
					}
				else
					{
						document.getElementById('pinnumber').value = (document.getElementById('pinnumber').value + thenumber);
						showDigits();
					}
			}
	}
	function showDigits() {
		if(document.getElementById("pinnumber").value.length == '0')
			{
				$('#blank1').show();
				$('#blank2').show();
				$('#blank3').show();
				$('#blank4').show();
				$('#hidden1').hide();
				$('#hidden2').hide();
				$('#hidden3').hide();
				$('#hidden4').hide();
			}
		else if(document.getElementById("pinnumber").value.length == '1')
			{
				$('#blank1').hide();
				$('#blank2').show();
				$('#blank3').show();
				$('#blank4').show();
				$('#hidden1').show();
				$('#hidden2').hide();
				$('#hidden3').hide();
				$('#hidden4').hide();
			}
		else if(document.getElementById("pinnumber").value.length == '2')
			{
				$('#blank1').hide();
				$('#blank2').hide();
				$('#blank3').show();
				$('#blank4').show();
				$('#hidden1').show();
				$('#hidden2').show();
				$('#hidden3').hide();
				$('#hidden4').hide();
			}
		else if(document.getElementById("pinnumber").value.length == '3')
			{
				$('#blank1').hide();
				$('#blank2').hide();
				$('#blank3').hide();
				$('#blank4').show();
				$('#hidden1').show();
				$('#hidden2').show();
				$('#hidden3').show();
				$('#hidden4').hide();
			}
		else if(document.getElementById("pinnumber").value.length == '4')
			{
				$('#blank1').hide();
				$('#blank2').hide();
				$('#blank3').hide();
				$('#blank4').hide();
				$('#hidden1').show();
				$('#hidden2').show();
				$('#hidden3').show();
				$('#hidden4').show();
			}
	}
		function init() {
			$(".example8").colorbox({width:"343px", height:"380px", open:true, overlayClose:false, scrolling:false, inline:true, close:"", href:"#inline_example1"});
		}
		