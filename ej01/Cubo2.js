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

//OrbitControls
var controls = new THREE.OrbitControls(camera, renderer.domElement);
    const light = new THREE.AmbientLight(0x404040, 5);
    scene.add(light);

    //Colores
    const color = [0x2c5a57, 0x4F9543, 0x84B342];

    //Función geometría cubo
    function cubo(base, altura, ancho, col) {
        const geometry = new THREE.BoxGeometry(base, altura, ancho);
        const material = new THREE.MeshToonMaterial({ color: col });
        return new THREE.Mesh(geometry, material);
    }

    var ArCub = [];
    var n = color.length;

    //Transformación del primer cubo base
    for (var i = 0; i < n; i++) {
        //Lado
        var lado = i + 3;
        //Ingreso de parámetros geometría cubos
        ArCub[i] = cubo(1, 1, 1, color[i]);
        ArCub[i].scale.x = 3.5;
        ArCub[i].scale.y = 3.5;
        ArCub[i].scale.z = 3.5;
    }

    //Transformación del segundo cubo
    for (i = 1; i < n; i++){
        ArCub[i].position.y = lado/2;
        ArCub[i].scale.x = 2;
        ArCub[i].scale.y = 2;
        ArCub[i].scale.z = 2;
    }

    //Transformación del tercer cubo
    for (i = 2; i < n; i++){
        ArCub[i].position.y = lado/2;
        ArCub[i].position.y = 4;
        ArCub[i].scale.x = 1;
        ArCub[i].scale.y = 1;
        ArCub[i].scale.z = 1;
    }
    const group = new THREE.Group();
    for (i = 0; i < n; i++) {
        group.add(ArCub[i]);
    }

    group.rotation.y = Math.PI / 4;


    scene.add(group);

    //Animación para el OrbitControls
    function animate() {

        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera)
    }
    animate();
