import * as THREE from 'three';

export class PlutoModel {
    private container: HTMLElement;
    private camera: THREE.PerspectiveCamera;
    private scene: THREE.Scene;
    private renderer: THREE.WebGLRenderer;
    private geometry: THREE.SphereGeometry;
    private material: THREE.MeshBasicMaterial;
    private mesh: THREE.Mesh;

    constructor(container: HTMLElement) {
        this.container = container;
        this.init();
    }

    init() {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(75, this.container.clientWidth / this.container.clientHeight, 0.1, 1000);
        this.camera.position.z = 2;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement);

        this.geometry = new THREE.SphereGeometry(0.5, 32, 32);
        this.material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);

        window.addEventListener('resize', this.onWindowResize);
        this.animate();
    }

    onWindowResize = () => {
        this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('3d-model');
    if (container) {
        new PlutoModel(container);
    }
});

