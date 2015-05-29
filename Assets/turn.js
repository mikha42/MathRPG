#pragma strict

function Start () {

}

function Update () {
	if (Input.GetKey ("q")) {
		transform.Rotate(Vector3.down * 3,Space.Self);
	}
		if (Input.GetKey ("e")) {
		transform.Rotate(Vector3.up * 3,Space.Self);
	}
		if (Input.GetKey ("w")) {
		transform.Translate(Vector3.forward / 7);
	}
		if (Input.GetKey ("s")) {
		transform.Translate(Vector3.back / 7);
	}
		if (Input.GetKey ("a")) {
		transform.Translate(Vector3.left / 7);
	}
		if (Input.GetKey ("d")) {
		transform.Translate(Vector3.right / 7);
	}
}