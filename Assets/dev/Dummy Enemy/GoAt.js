#pragma strict

function Start () {

}

function Update () {
	var gos : GameObject[]; 
    gos = GameObject.FindGameObjectsWithTag("Player"); 
    var closest : GameObject; 
    var distance = 40; 
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
    transform.position.x = Mathf.Sign(- transform.position.x + closest.transform.position.x)/40 + transform.position.x;
    transform.position.z = Mathf.Sign(- transform.position.z + closest.transform.position.z)/40 + transform.position.z;
}
