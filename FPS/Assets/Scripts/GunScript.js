//var mainCamera : GameObject;
var magCapacity : int = 16;
var bullets : int = 16;
var mags : int = 6;
//var camera : GameObject;

function Update () {
	//to be used later to add move the gun more realistically
	//transform.rotation = Quaternion.Euler(mainCamera.GetComponent(MouseLook).currentxRotation ,mainCamera.GetComponent(MouseLook).currentyRotation ,0 );
	var hit : RaycastHit;
	
	if (Input.GetButtonDown("Fire1"))
	{
		bullets -= 1;
		//checks if the shot hit any object & disallows shooting with an empty mag
		if (Physics.Raycast(Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0))) && bullets > -1)
			print ("Hit");
		else
			print ("no hit");
	}
	
	if (Input.GetButtonDown("Reload") && mags > -1) {
		bullets = magCapacity;
		mags -= 1;
		}
}