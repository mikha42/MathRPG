#pragma strict

var charRotY = 0 ;
var charRotZ = 0 ;

function Start () {
}

function Update () {

	if (Input.GetKey ("q")) {
		charRotY = charRotY - 3;
	}
		if (Input.GetKey ("e")) {
		charRotY = charRotY + 3;
	}
	var mousePos = Input.mousePosition;
	mousePos.x = (mousePos.x - Screen.width/2)/Screen.width*40;
	mousePos.y = (mousePos.y - Screen.height/2)/Screen.height*-40;
	transform.rotation = Quaternion.Euler(mousePos.y+30,mousePos.x+charRotY,charRotZ);
}