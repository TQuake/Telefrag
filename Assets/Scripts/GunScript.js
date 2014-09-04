//var mainCamera : GameObject;
var magCapacity : int = 16;
var bullets : int = 16;
var mags : int = 6;
var player : GameObject;
var teleporting : boolean = false;
var enemyPosition : Vector3;
var gunEquiped : boolean = true;

//var camera : GameObject;

function Update () {

	var hit : RaycastHit;
	
//standard shooting	
	if (Input.GetButtonDown("Fire1") && gunEquiped)
	{
		bullets -= 1;
		//checks if the shot hit any object & disallows shooting with an empty mag
		if (Physics.Raycast(Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0)), hit) && bullets > -1 && hit.transform.tag == "enemy") {
			print ("Enemy Hit");
			hit.transform.GetComponent(Target).hp -= 1;
		}
			
		if (Physics.Raycast(Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0)), hit) && bullets > -1)
			print ("Hit");
			
		else
			print ("no hit");
	}
//teleswitch	
	if (Input.GetButtonDown("Fire2") && gunEquiped) {
		//checks if the shot hit any object & disallows shooting with an empty mag
		if (Physics.Raycast(Camera.main.ViewportPointToRay(Vector3(0.5,0.5,0)), hit) && hit.transform.tag == "enemy")
		{
			print ("Switch Position");
			enemyPosition = hit.transform.position + Vector3(0,0,0);
			var playerPosition : Vector3 = player.transform.position;
				player.transform.position = enemyPosition;
				hit.transform.position = playerPosition + Vector3(0,0,0);
			}
		else
			print ("nada");
		}
	}
//reloading	
	if (Input.GetButtonDown("Reload") && gunEquiped && mags > 0) {
		bullets = magCapacity;
		mags -= 1;
		}
//Throw gun
	if (Input.GetButtonDown("ThrowGun")){
		useGravity = true;
		isKinematic = false;
	}
//Drop gun on death

function LateUpdate () {
}