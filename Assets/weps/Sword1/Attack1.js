#pragma strict

var anim : Animation;

function Start () {

}

function Update () {
	if (Input.GetMouseButtonDown(0)) {
    	anim.Sample();
	}
}