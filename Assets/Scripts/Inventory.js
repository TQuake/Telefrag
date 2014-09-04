var song : AudioClip;
private var coatOpen : boolean = false;

function Update () {
//Coat Inventrory
	if (Input.GetKeyDown ("e"))
		{
			coatOpen = true;
			Screen.lockCursor = false;
			Screen.showCursor = true;
			Time.timeScale = .5;
		}
	if (Input.GetKeyUp ("e"))
		{
			coatOpen = false;
			Screen.lockCursor = true;
			Screen.showCursor = false;
			Time.timeScale = 1;
		}
}

function OnGUI () {
	if (coatOpen == true) {
		(GUI.Button (Rect (10,10,150,100), "Button")); {
			print ("You clicked the button!");
		}
	}
}