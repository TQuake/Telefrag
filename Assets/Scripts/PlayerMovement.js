//on ground movement variables
//Acceleration
var acceleration : float;
var walkAcceleration : float = 1500;
var runAcceleration : float = 3000;
//Deceleration
var walkDeacceleration : float = 0;
var walkAccelAirRation : float = .25;
var walkDeaccelerationVolx : float;
private var walkDeaccelerationVolz : float;
//Objects
var cameraObject : GameObject;
var walkEffect : AudioClip;
//max speeds
private var maxSpeed : float;
var maxWalkSpeed : int = 20;
var maxRunSpeed : int = 40;

var horizontalMovement : Vector2;
//jumping variables
private var grounded : boolean = false;
var maxSlope : float = 90;
var jumpVelocity : float = 40;
private var dead : boolean = false;

function Update () 
{
	horizontalMovement = Vector2(rigidbody.velocity.x, rigidbody.velocity.z);
	//Enforces max walk speed
	if (horizontalMovement.magnitude > maxSpeed)
	{
		horizontalMovement = horizontalMovement.normalized;
		horizontalMovement *= maxSpeed;
	}
	rigidbody.velocity.x = horizontalMovement.x;
	rigidbody.velocity.z = horizontalMovement.y;
	
	//Deacceleration
	if (grounded)
	{
		rigidbody.velocity.x = Mathf.SmoothDamp(rigidbody.velocity.x, 0, walkDeaccelerationVolx, walkDeacceleration);
		rigidbody.velocity.z = Mathf.SmoothDamp(rigidbody.velocity.z, 0, walkDeaccelerationVolz, walkDeacceleration);
	}
	
	// z for y is intentional
	//Rotating with camera
	transform.rotation = Quaternion.Euler(0, cameraObject.GetComponent(MouseLook).currentyRotation, 0);
	//Adding walking force
	if (grounded)
		rigidbody.AddRelativeForce(Input.GetAxis("Horizontal") * acceleration * Time.deltaTime, 0, Input.GetAxis("Vertical") * acceleration * Time.deltaTime);
	else
		rigidbody.AddRelativeForce(Input.GetAxis("Horizontal") * acceleration * walkAccelAirRation * Time.deltaTime, 0, Input.GetAxis("Vertical") * acceleration * walkAccelAirRation * Time.deltaTime);
	//Running
	if (Input.GetButton ("Run") && grounded){
		maxSpeed = maxRunSpeed;
		acceleration = runAcceleration;
		}
	else{
		maxSpeed = maxWalkSpeed;
		acceleration = walkAcceleration;
	}
	//Jumping
	if (Input.GetButtonDown("Jump") && grounded)
		rigidbody.AddForce(0, jumpVelocity, 0);
		
	if (Input.GetKey ("q")){
		Screen.lockCursor = true;
		Screen.showCursor = false;
		}	
}
//Colisions
function OnCollisionEnter (collision : Collision) {
	if (collision.collider.tag == "deadly"){
		dead = true;
		transform.DetachChildren();
		cameraObject.transform.DetachChildren();
		UnityEngine.Object.Destroy(gameObject);
		}
}

//Grounded
function OnCollisionStay (collision : Collision)
{
	for (var contact : ContactPoint in collision.contacts)
	{
		if(Vector3.Angle(contact.normal, Vector3.up) < maxSlope)
			grounded = true;
	}
}

//setting grounded back to false
function OnCollisionExit ()
{
	grounded = false;
}

function OnGUI () {
	if (dead) {
		Screen.lockCursor = false;
		Screen.showCursor = true;
		(GUI.Button (Rect (10,10,150,100), "Respawn"));
			print ("nope");
	}
}
