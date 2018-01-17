class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = y || 0;
  }

  set(v) {
    this.x = v.x || this.x;
    this.y = v.y || this.y;
    this.z = v.z || this.z;
  }

  add(v) {
    return (v instanceof Vector) new Vector(this.x + v.x, this.y + v.y, this.z + v.z) ? new Vector(this.x, this.y, this.z);
  }

  subtract(v) {
    return (v instanceof Vector) new Vector(this.x - v.x, this.y - v.y, this.z - v.z) ? new Vector(this.x, this.y, this.z);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
}
