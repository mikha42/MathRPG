#pragma strict

var Hand : Transform;

function Start () {
	
}

function Update () {
	transform.Rotate(Vector3.up * 2);
	if (Hand == null){
		var gos : GameObject[];
		gos = GameObject.FindGameObjectsWithTag("HandR"); 
    	var closest : GameObject; 
    	var distance = 1; 
    	var position = transform.position; 
    	// Iterate through them and find the closest one 
    	for (var go : GameObject in gos) { 
        	var diff = (go.transform.position - position); 
        	var curDistance = diff.sqrMagnitude; 
        	if (curDistance < distance) { 
            	closest = go; 
            	distance = curDistance; 
        	} 
    	}
    	Hand = closest.transform;
    } else {
		transform.position = Hand.position;
		transform.rotation.y = Hand.rotation.y;
	}
	if (Input.GetKeyDown("g")){
		Hand = null;
	}
}