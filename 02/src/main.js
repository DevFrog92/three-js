import * as THREE from "three"

// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// // renderer가 가지고 있는 canvas
// document.body.appendChild(renderer.domElement)

// 동적으로 캔버스 조립하기
const canvas = document.querySelector("#three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

// three.js에서 거리는 우리가 만드는 것에 상대적으로 동작한다.
camera.position.z = 5;
scene.add(camera)