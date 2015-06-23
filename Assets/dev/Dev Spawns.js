#pragma strict

var playr : GameObject;

var Spw1 : GameObject;
var Spw2 : GameObject;
var Spw3 : GameObject;
var Spw4 : GameObject;
var Spw5 : GameObject;
var Spw6 : GameObject;
var Spw7 : GameObject;
var Spw8 : GameObject;
var Spw9 : GameObject;
var Spw0 : GameObject;

function Start () {

}

function Update () {
	if (Input.GetKey("m") && Input.GetKey("k") && Input.GetKey("i")) {
		if (Input.GetKeyDown("1")) {
			Instantiate(Spw1, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("2")) {
			Instantiate(Spw2, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("3")) {
			Instantiate(Spw3, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("4")) {
			Instantiate(Spw4, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("5")) {
			Instantiate(Spw5, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("6")) {
			Instantiate(Spw6, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("7")) {
			Instantiate(Spw7, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("8")) {
			Instantiate(Spw8, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("9")) {
			Instantiate(Spw9, playr.transform.position, playr.transform.rotation);
		}
		if (Input.GetKeyDown("0")) {
			Instantiate(Spw0, playr.transform.position, playr.transform.rotation);
		}
		
	}
}