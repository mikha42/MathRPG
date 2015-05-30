#pragma strict

var Plr : Transform;
var Anim : Animator;
var oldT : Vector3;

function Start () {
	var oldT = Plr.transform.position;
}

function Update () {

	var distance = Vector3.Distance(oldT, Plr.transform.position);
	
	if (distance != 0){
		Anim.speed = 1;
		var oldT = Plr.transform.position;
	}
	if (distance == 0){
		Anim.speed = 0.1;
	}
}