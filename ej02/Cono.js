var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
    camera.position.z = 20;
    camera.position.y = 5;
    scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);
    const light = new THREE.DirectionalLight( 0xffffff, 1 );
    scene.add(light);


    const geometry = new THREE.ConeGeometry(4, 10, 10);
    const material = new THREE.MeshPhongMaterial( {color: 0xCD5C5C} );
    const cone = new THREE.Mesh(geometry, material);

    cone.rotation.z = 80;

    scene.add(cone);

    function animate() {

        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera)
    }
    animate();