#pragma strict

var Player : Transform;
var Rot : Vector3;

function Start () {
}

function Update () {
	
	Rot = Player.transform.rotation.eulerAngles;
	
	var mousePos = Input.mousePosition;
	mousePos.x = (mousePos.x - Screen.width/2)/Screen.width*70;
	mousePos.y = (mousePos.y - Screen.height/2)/Screen.height*-70;
	transform.rotation = Quaternion.Euler(mousePos.y+30+Rot.x,mousePos.x+Rot.y,0+Rot.z);
}