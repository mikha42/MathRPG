#pragma strict

var Equip = false;

function Start () {
}

function Update () {
	if (Input.GetKeyDown("g")) {
		if (Equip == true){
			transform.gameObject.tag = "Untagged";
			Equip = false;
		} else {
			transform.gameObject.tag = "HandR";
			yield WaitForSeconds(0.1);
			Equip = true;
		}
	}
}