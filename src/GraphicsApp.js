import * as THREE from 'three';
export class GraphicsApp {
    // Camera parameters
    aspectRatio;
    fov;
    znear;
    zfar;
    // Renderer, scene, and camera objects
    renderer;
    scene;
    camera;
    // Clock for computing fps
    clock;
    constructor(aspectRatio = 1.333) {
        // Set the default camera parameters
        this.aspectRatio = aspectRatio;
        this.fov = 60;
        this.znear = 1;
        this.zfar = 1000;
        // Initialize graphics
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.resize();
        // Register event handlers
        window.addEventListener('resize', () => { this.resize(); }, false);
        window.addEventListener('mousedown', (event) => { this.onMouseDown(event); });
        window.addEventListener('mouseup', (event) => { this.onMouseUp(event); });
        window.addEventListener('mousemove', (event) => { this.onMouseMove(event); });
        window.addEventListener('keydown', (event) => { this.onKeyDown(event); });
        window.addEventListener('keyup', (event) => { this.onKeyUp(event); });
        // Create the default scene object
        this.scene = new THREE.Scene();
        // Create the default camera object
        this.camera = new THREE.PerspectiveCamera(this.fov, this.aspectRatio, this.znear, this.zfar);
        // Initialize the fps clock
        this.clock = new THREE.Clock();
    }
    // Create the scene and enter the main loop
    start() {
        this.createScene();
        this.mainLoop();
    }
    // This starts the main loop of the game
    mainLoop() {
        // Update the scene
        this.update(this.clock.getDelta());
        // Draw the graphics
        this.renderer.render(this.scene, this.camera);
        // Run the main loop function on the next frame
        window.requestAnimationFrame(() => this.mainLoop());
    }
    // Resize and center the viewport, preserving the aspect ratio
    // You do not need to modify this function
    resize() {
        // Resize the renderer to match the window size
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        // Get the size of the viewport
        var viewport = new THREE.Vector4();
        this.renderer.getViewport(viewport);
        // Compute the aspect ratios
        var windowAspectRatio = window.innerWidth / window.innerHeight;
        // Resize and center the viewport to preserve the aspect ratio
        if (this.aspectRatio > windowAspectRatio) {
            this.renderer.setViewport(0, (window.innerHeight - window.innerWidth / this.aspectRatio) / 2, window.innerWidth, window.innerWidth / this.aspectRatio);
        }
        else {
            this.renderer.setViewport((window.innerWidth - window.innerHeight * this.aspectRatio) / 2, 0, window.innerHeight * this.aspectRatio, window.innerHeight);
        }
    }
    // Your app should override these methods to handle events
    onMouseDown(event) { }
    onMouseUp(event) { }
    onMouseMove(event) { }
    onKeyDown(event) { }
    onKeyUp(event) { }
}
//# sourceMappingURL=GraphicsApp.js.map