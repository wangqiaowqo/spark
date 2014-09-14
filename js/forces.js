//阻力
function Forces() {

}

Forces.zeroForce = function() {
    return new Vector2D(0, 0);
};

//地心引力
Forces.constantGravity = function(m, g) {
    return new Vector2D(0, m * g);
};

//线性阻力
Forces.linearDrag = function(k, vel) {
    var force;
    var velMag = vel.length();
    if (velMag > 0) {
        force = vel.multiply(-k);
    } else {
        force = new Vector2D(0, 0);
    }

    return force;
};

//合力
Forces.add = function(arr) {
    var forceSum = new Vector2D(0, 0);
    for (var i = 0; i < arr.length; i++) {
        var force = arr[i];
        forceSum.incrementBy(force);
    }

    return forceSum;
};

//高速时的阻力
Forces.drag = function(k, vel) {
    var force;
    var velMag = vel.length();
    if (velMag > 0) {
        force = vel.multiply(-k * velMag);
    } else {
        force = new Vector2D(0, 0);
    }
    return force;
};