import * as THREE from 'three';
export class Projectile extends THREE.Object3D {
    radius;
    velocity;
    initialPosition;
    constructor(position, radius) {
        super();
        this.radius = radius;
        this.velocity = new THREE.Vector3();
        this.initialPosition = position;
        // Create a sphere
        var geometry = new THREE.SphereGeometry(this.radius);
        var material = new THREE.MeshPhongMaterial();
        material.color = new THREE.Color(0.335, 0.775, 0.891);
        this.add(new THREE.Mesh(geometry, material));
        this.reset();
    }
    reset() {
        // Reset the projectiles's position
        this.position.copy(this.initialPosition);
    }
    update(deltaTime) {
        // Add your code here
    }
}
//# sourceMappingURL=Projectile.js.map