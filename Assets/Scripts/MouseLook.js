Screen.lockCursor = true;

var lookSensativity : float = 5;
@HideInInspector
var yRotation : float;
@HideInInspector
var xRotation : float;
@HideInInspector
var currentyRotation : float;
@HideInInspector
var currentxRotation : float;
@HideInInspector
var yRotationV : float;
@HideInInspector
var xRotationV : float;
var lookSmoothDamp : float;
function Update () 
{
	yRotation += Input.GetAxis("Mouse X") * lookSensativity;
	xRotation += Input.GetAxis("Mouse Y") * lookSensativity;
	
	xRotation = Mathf.Clamp(xRotation,-90,90);
	
	currentxRotation = Mathf.SmoothDamp(currentxRotation, xRotation, xRotationV, lookSmoothDamp);
	currentyRotation = Mathf.SmoothDamp(currentyRotation, yRotation, yRotationV, lookSmoothDamp);

	transform.rotation = Quaternion.Euler(xRotation, yRotation, 0);
}