import * as THREE from "three"

export default function example() {

  // const renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight);
  // // renderer가 가지고 있는 canvas
  // document.body.appendChild(renderer.domElement)

  // 동적으로 캔버스 조립하기
  const canvas = document.querySelector("#three-canvas");
  const renderer = new THREE.WebGLRenderer({
    canvas,
    // 성능 저하는 있을 수 있다.
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();

  // Perspective camera

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  // three.js에서 거리는 우리가 만드는 것에 상대적으로 동작한다.
  camera.position.x = 1;
  camera.position.z = 5;
  camera.position.y = 2;

  // Orthographic camera

  // const camera = new THREE.OrthographicCamera(
  //   -(window.innerWidth / window.innerHeight), // left
  //   window.innerWidth / window.innerHeight, // right
  //   1, // top
  //   -1, // bottom
  //   0.1,
  //   1000
  // );

  // camera.position.x = 1;
  // camera.position.z = 5;
  // camera.position.y = 2;
  camera.lookAt(0, 0, 0);
  // orthographic의 경우 줌아웃은 z 축을 건들이는 것이 아니라, zoom 속성을 사용해야 한다.
  // camera.zoom = .5;
  // camera의 속성을 변경하면 updateProjectionMatrix를 호출해야 한다.
  // camera.updateProjectionMatrix();
  scene.add(camera)

  // Mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({
    // color: 0xff0000
    // color: "#ff0000"
    color: "red"
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // 그리기

  renderer.render(scene, camera);
}