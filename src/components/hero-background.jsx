import React,{useEffect,useRef} from 'react';
import * as THREE from 'three';

export default function HeroBackground(){
 const ref=useRef(null);
 useEffect(()=>{
  const host=ref.current;
  if(!host)return;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(42,1,.1,100);
  camera.position.z=5.2;
  const renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
  renderer.setClearColor(0x000000,0);
  host.appendChild(renderer.domElement);

  const group=new THREE.Group();
  const geometry=new THREE.IcosahedronGeometry(1.55,5);
  const material=new THREE.MeshBasicMaterial({color:0x9a9a9a,wireframe:true,transparent:true,opacity:.16});
  const mesh=new THREE.Mesh(geometry,material);
  group.add(mesh);

  const innerGeometry=new THREE.IcosahedronGeometry(1.18,3);
  const innerMaterial=new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true,transparent:true,opacity:.045});
  const inner=new THREE.Mesh(innerGeometry,innerMaterial);
  group.add(inner);
  scene.add(group);

  const pointer={x:0,y:0};
  const target={x:0,y:0};
  const onMove=e=>{
   target.x=(e.clientX/window.innerWidth-.5)*.34;
   target.y=(e.clientY/window.innerHeight-.5)*.22;
  };
  window.addEventListener('pointermove',onMove,{passive:true});

  const resize=()=>{
   const w=host.clientWidth||window.innerWidth;
   const h=host.clientHeight||window.innerHeight;
   camera.aspect=w/h;
   camera.updateProjectionMatrix();
   renderer.setSize(w,h,false);
  };
  resize();
  window.addEventListener('resize',resize);

  let frame;
  const clock=new THREE.Clock();
  const animate=()=>{
   const t=clock.getElapsedTime();
   pointer.x+=(target.x-pointer.x)*.035;
   pointer.y+=(target.y-pointer.y)*.035;
   group.rotation.y=t*.055+pointer.x;
   group.rotation.x=Math.sin(t*.32)*.055-pointer.y;
   group.rotation.z=Math.sin(t*.18)*.025;
   const breathe=1+Math.sin(t*.55)*.025;
   group.scale.setScalar(breathe);
   mesh.material.opacity=.12+Math.sin(t*.7)*.025;
   inner.rotation.y=-t*.075;
   inner.rotation.x=t*.035;
   renderer.render(scene,camera);
   frame=requestAnimationFrame(animate);
  };
  animate();

  return()=>{
   cancelAnimationFrame(frame);
   window.removeEventListener('resize',resize);
   window.removeEventListener('pointermove',onMove);
   geometry.dispose();material.dispose();innerGeometry.dispose();innerMaterial.dispose();renderer.dispose();
   renderer.domElement.remove();
  };
 },[]);
 return <div className="hero-background" ref={ref} aria-hidden="true"/>;
}
