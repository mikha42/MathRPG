    var keycode = KeyCode.W;
    var doubleTapDelay = .2;
    var forward = 2;
    var left = 0;
    var rb : Rigidbody;
     
    private var count = 0;
     
    function Start () {
        while (true) {
            if (Input.GetKeyDown(keycode)) {
                var t = 0.0;
                while (t < doubleTapDelay) {
                    yield;
                    t += Time.deltaTime;
                    if (Input.GetKeyDown(keycode)) {
                        DoubleTapFunction();
                    }
                }
            }
            yield;
        }
    }
     
    function DoubleTapFunction () {
        rb.AddForce(transform.forward * forward * 20);
        rb.AddForce(transform.right * left * -20);
    }
