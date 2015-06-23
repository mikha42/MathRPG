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
     if (closest == null) {
     	transform.Rotate(Vector3.up);
     } else {
     	transform.LookAt(closest.transform.position);
     }
}