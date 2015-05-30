#pragma strict

var Hand : Transform;

function Start () {

}

function Update () {
	transform.position = Hand.position;
	transform.rotation.y = Hand.rotation.y;
}