var hp : int = 2;

function Update () {
if (hp == 0)
	UnityEngine.Object.Destroy(gameObject);
}

//Colisions
function OnCollisionEnter (collision : Collision) {
	if (collision.collider.tag == "deadly"){
		UnityEngine.Object.Destroy(gameObject);
		}
}
