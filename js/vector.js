function Vector2D(x, y) {
    this.x = x;
    this.y = y;
}

//2维向量
Vector2D.prototype = {
    lengthSquared: function() {
        return this.x * this.x + this.y * this.y;
    },

    //向量长度
    length: function() {
        return Math.sqrt(this.lengthSquared());
    },

    normalize: function() {
        var length = this.length();
        if (length > 0) {
            this.x /= length;
            this.y /= length;
        }
        return this.length();
    },

    clone: function() {
        return new Vector2D(this.x, this.y);
    },

    //两个向量点积
    dotProduct: function(vec) {
        return this.x * vec.x + this.y * vec.y;
    },

    //两个向量相加
    add: function(vec) {
        return new Vector2D(this.x + vec.x, this.y + vec.y);
    },

    //两个向量相减
    subtract: function(vec) {
        return new Vector2D(this.x - vec.x, this.y - vec.y);
    },

    //向量乘于标量
    multiply: function(k) {
        return new Vector2D(this.x * k, this.y * k)
    },

    negate: function() {
        this.x = -this.x;
        this.y = -this.y;
    },

    incrementBy: function(vec) {
        this.x += vec.x;
        this.y += vec.y;
    },

    decrementBy: function(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    },

    scaleBy: function(k) {
        this.x *= k;
        this.y *= k;
    },

    addScaled: function(vec, dt) {
        return this.add(vec.multiply(dt));
    }
};

//两个向量的距离
Vector2D.distance = function(vec1, vec2) {
    return (vec1.subtract(vec2)).length();
};

//两个向量的夹角，余弦定理 cosθ=vec1•vec1/|vec1|×|vec2|
Vector2D.angleBetween = function(vec1, vec2) {
    return Math.acos(vec1.dotProduct(vec2) / (vec1.length() * vec2.length()));
};