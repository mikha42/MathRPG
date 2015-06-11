#pragma strict

var lockonG : Transform;
var lockon = false;
var PlayerT : Transform;

function Start () {

}

function Update () {
	if (Input.GetKeyDown("f")) {
		
		if (lockon == false) {
			var hit : RaycastHit;
 
			Physics.Raycast(PlayerT.position, PlayerT.forward, hit);
 
			if(hit.collider.tag == "Enemy") {
				lockonG = hit.transform;
				lockon = true;
			
			}
		} else {
			lockon = false;
		}
	}
	if (lockon == true){
		PlayerT.LookAt(lockonG, Vector3.up);
	}
}