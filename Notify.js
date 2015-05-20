//chiedi il permesso
function AskForPermission(){
  if (!Notification) {
    alert('Please us a modern version of Chrome, Firefox, Opera or Firefox.');
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
	
	return Notification.permission;
}

//invia notifica
function notifyMe(sTitolo,sPathIcon,sMessage,sOnClick) {


  var notification = new Notification(sTitolo, {
    icon: sPathIcon,
    body: sMessage
  });


  notification.onclick = function () {
    window.open(sOnClick);
  }
}