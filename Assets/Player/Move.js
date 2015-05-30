#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKey ("q")) {
		transform.Rotate(Vector3.down * 2,Space.Self);
	}
		if (Input.GetKey ("e")) {
		transform.Rotate(Vector3.up * 2,Space.Self);
	}
		if (Input.GetKey ("w")) {
		transform.Translate(Vector3.forward / 15);
	}
		if (Input.GetKey ("s")) {
		transform.Translate(Vector3.back / 15);
	}
		if (Input.GetKey ("a")) {
		transform.Translate(Vector3.left / 15);
	}
		if (Input.GetKey ("d")) {
		transform.Translate(Vector3.right / 15);
	}
}