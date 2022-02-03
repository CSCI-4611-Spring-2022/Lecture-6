import * as THREE from 'three'
import { GraphicsApp } from './GraphicsApp'
import { Projectile } from './Projectile'

export class AngryVectors extends GraphicsApp
{ 
    private inputVector : THREE.Vector2;
    private projectile : Projectile;

    constructor()
    {
        // Pass in the aspect ratio to the constructor
        super(1920/1080);
        
        // Initialize all member variables here
        // This will help prevent runtime errors
        this.inputVector = new THREE.Vector2();
        this.projectile = new Projectile(new THREE.Vector3(), 0.5);
    }

    createScene() : void
    {
        // Setup camera
        this.camera.position.set(0, 1.6, 0);
        this.camera.lookAt(0, 1.6, 0);
        this.camera.up.set(0, 1, 0);

        // Create an ambient light
        var ambientLight = new THREE.AmbientLight('white', 0.3);
        this.scene.add(ambientLight);

        // Create a directional light
        var directionalLight = new THREE.DirectionalLight('white', .6);
        directionalLight.position.set(0, 2, 1);
        this.scene.add(directionalLight)

        // Create the skybox material
        var skyboxMaterial = new THREE.MeshBasicMaterial();
        skyboxMaterial.side = THREE.BackSide;
        skyboxMaterial.color.set('skyblue');

        // Create a skybox
        var skybox = new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), skyboxMaterial);
        this.scene.add(skybox)

        // Create the ground material
        var groundMaterial = new THREE.MeshLambertMaterial();
        groundMaterial.color.set('green');

        // Create a field mesh
        var ground = new THREE.Mesh(new THREE.BoxGeometry(1000, 1, 1000), groundMaterial);
        ground.position.set(0, -.5, 0);
        this.scene.add(ground)

        // Add the projectile to the scene
        this.projectile.position.z = -1;
        this.projectile.position.z = -2;
        this.scene.add(this.projectile);
    }

    update(deltaTime : number) : void
    {
   
    }

    // Event handler for keyboard input
    // You don't need to modify this function
    onKeyDown(event: KeyboardEvent): void 
    {
        if(event.key == 'w' || event.key == 'ArrowUp')
            this.inputVector.y = 1;
        else if(event.key == 's' || event.key == 'ArrowDown')
            this.inputVector.y = -1;
        else if(event.key == 'a' || event.key == 'ArrowLeft')
            this.inputVector.x = -1;
        else if(event.key == 'd' || event.key == 'ArrowRight')
            this.inputVector.x = 1;
        else if(event.key == ' ')
        {
            //this.ball.reset();
        }
    }

    // Event handler for keyboard input
    // You don't need to modify this function
    onKeyUp(event: KeyboardEvent): void 
    {
        if((event.key == 'w' || event.key == 'ArrowUp') && this.inputVector.y == 1)
            this.inputVector.y = 0;
        else if((event.key == 's' || event.key == 'ArrowDown') && this.inputVector.y == -1)
            this.inputVector.y = 0;
        else if((event.key == 'a' || event.key == 'ArrowLeft')  && this.inputVector.x == -1)
            this.inputVector.x = 0;
        else if((event.key == 'd' || event.key == 'ArrowRight')  && this.inputVector.x == 1)
            this.inputVector.x = 0;
    }
}
