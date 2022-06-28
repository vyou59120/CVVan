const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);

document.getElementsByClassName('entete')[0].appendChild(renderer.domElement);

// document.body.appendChild(renderer.domElement);

const verticesOfCube = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

const geometry = new THREE.PolyhedronGeometry( verticesOfCube, indicesOfFaces, 10, 5 );
// const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var material = new THREE.MeshLambertMaterial( { color: "#0094D7", wireframe: true } );

var sphere = new THREE.Mesh( geometry, material );

// scene.add(sphere);

let wireframe = new THREE.WireframeGeometry( geometry );

let line = new THREE.LineSegments( wireframe );
        
line.material.color.setHex(0x0094D7);
        
scene.add(line);

//*ajout points carré
function drawBalls(){
  const positions = sphere.geometry.attributes.position.array

  for (let i = 0; i < positions.length; i += 3) {
      const v = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
      positions[i] = v.x
      positions[i + 1] = v.y
      positions[i + 2] = v.z

      const geometry = new THREE.SphereGeometry(0.1, 32, 16); // (radius, widthSegments, heightSegments)
      const material = new THREE.MeshBasicMaterial( {color: 0x13DFF6} );
      const littleSphere = new THREE.Mesh(geometry, material);
      littleSphere.position.set(v.x,v.y,v.z);
      sphere.add(littleSphere);

  }
}

drawBalls();

const segmentsX = 55;
const segmentsZ = 55;
const sizeX = 55 * segmentsX;
const sizeZ = 55 * segmentsZ;

const geometryPlan = new THREE.PlaneGeometry(sizeX, sizeZ, segmentsX, segmentsZ);

geometryPlan.rotateX(Math.PI * -0.61);

const materialPlan = new THREE.MeshBasicMaterial({
  color: 0x015D9D,
  wireframe: true,
});

const terrain = new THREE.Mesh(geometryPlan, materialPlan);
//terrain.position.z = -200;
terrain.position.y = -250;
terrain.position.z = -250;
const totalSegmentsX = segmentsX + 1;
const totalSegmentsZ = segmentsZ + 1;


function drawBallsTerrain(){
  const positions = terrain.geometry.attributes.position.array
  console.log(terrain)
  console.log(terrain.geometry)
  console.log(terrain.geometry.attributes)
  console.log(terrain.geometry.attributes.position)
  for (let i = 0; i < positions.length; i += 3) {
      const v = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2])
      positions[i] = v.x
      positions[i + 1] = v.y
      positions[i + 2] = v.z

      const geometry = new THREE.SphereGeometry(2, 32, 16); // (radius, widthSegments, heightSegments)
      const material = new THREE.MeshBasicMaterial( {color: 0x13DFF6} );
      const littleSphere = new THREE.Mesh(geometry, material);
      littleSphere.position.set(v.x,v.y,v.z);

      terrain.add(littleSphere);

  }
}

drawBallsTerrain();

scene.add(terrain);

camera.position.z = 20;

function animate() {
  requestAnimationFrame(animate);
  // scene.position.x = -13;
  // scene.position.y = 7;
  // scene.position.z = 13;
  //scene.rotation.y += 0.001;
  line.rotation.y += 0.001;
  sphere.rotation.y += 0.001;
 
  scene.add(sphere);
  // line.rotation.y += 0.001;
  // terrain.rotation.y += 0.001;
  // this.circle.rotation.y += 0.001;
  renderer.render(scene, camera);
}

animate();
