#pragma strict

function Update () {
	var hit : RaycastHit;
//Kicking
	if (Input.GetButtonDown ("Kick")){
		if (Physics.Raycast(Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0)), hit, 2) && hit.transform.tag == "enemy"){
			hit.rigidbody.AddForceAtPosition ((rigidbody.transform.forward * 4), hit.point, ForceMode.Impulse); 
		}
	}
}