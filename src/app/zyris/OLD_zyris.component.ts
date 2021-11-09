import { Component, OnInit } from '@angular/core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
//const gui = new dat.GUI()
import { DragControls } from 'three/examples/jsm/controls/DragControls'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
import { ArcballControls } from 'three/examples/jsm/controls/AcrballControls.js'

@Component({
  selector: 'app-zyris',
  templateUrl: './zyris.component.html',
  styleUrls: ['./zyris.component.css']
})
export class ZyrisComponent implements OnInit {
  // scene
   camera
  // renderer
  // transformControls
  // orbitControler
  // canvas
  pointLight_main;
  click3 = 0;

  constructor() { }

  ngOnInit(): void {

    var ele = document.getElementById('canvasgl');
    //ele.addEventListener("click", clickDetection);

    function clickDetection(e){
  
      let random = Math.random();
      if(random < .2){
        pointLight.position.x = -1600;
        pointLight.color.set( getRandomColor() )
      }
      else if(random >= .2 && random <= .6){
        pointLight.position.x = 58;
      }else{
        pointLight.position.x = 1600;
      }
    }

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    const gui = new dat.GUI()
    

    // Canvas
    const canvas = document.querySelector('canvas.webgl')
    
    // Scene
    const scene = new THREE.Scene()

    const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
    const material = new THREE.MeshBasicMaterial()
    material.color = new THREE.Color(0xff0000)
    const sphere = new THREE.Mesh(geometry,material)
    scene.add(sphere)
    
    scene.background = new THREE.Color("black");
    //const pointLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    const pointLight = new THREE.DirectionalLight( 0xffffff, 1 );
    //const pointLight = new THREE.AmbientLight( 0xffffff, 0.5 );
    //var pointLight = new THREE.PointLight(0xffffff, 0.1)
    this.pointLight_main = pointLight;

    pointLight.position.x = 28;//-1600
    pointLight.position.y = 9;
    pointLight.position.z = 5;
    //pointLight.intensity = 1;

    pointLight.target.position.set(0,0,0);
    scene.add(pointLight)
    scene.add(pointLight.target)

    
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
    scene.add(pointLightHelper)


     gui.add(pointLight.position, 'y').min(-50).max(450).step(0.01)
     gui.add(pointLight.position, 'x').min(-50).max(450).step(0.01)
     gui.add(pointLight.position, 'z').min(-50).max(450).step(0.01)
     gui.add(pointLight, 'intensity').min(0).max(10).step(0.01)

     gui.add(pointLight.rotation, 'y').min(-50).max(450).step(0.01)
     gui.add(pointLight.rotation, 'x').min(-50).max(450).step(0.01)
     gui.add(pointLight.rotation, 'z').min(-50).max(450).step(0.01)
     gui.add(pointLight, 'intensity').min(0).max(10).step(0.01)

 
        const lightColor = {
          color : 0xcccccc
      }
      
       gui.addColor(lightColor, 'color')
           .onChange(() => {
               pointLight.color.set(lightColor.color)
           })

    var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
    //var camera = new THREE.PerspectiveCamera(75,2.5,0.1,1000)

    camera.position.x = 130.5293518410083;
    camera.position.y = 40.55023493489639;
    camera.position.z = 123.50386003251126;
    camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583 )
    

    gui.add(camera.position, 'y').min(-255).max(255).step(0.01)
    gui.add(camera.position, 'x').min(-255).max(255).step(0.01)
    gui.add(camera.position, 'z').min(-255).max(255).step(0.01)



    scene.add(camera)
    this.camera = camera;




    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    
    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        camera.aspect = sizes.width / sizes.height
        camera.updateProjectionMatrix()
    
        // Update renderer
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    })

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    //const orbit = new OrbitControls(camera, renderer.domElement)
   // orbit.update();


    var  transformControler = new TransformControls( camera, renderer.domElement );
    var  orbitControler = new OrbitControls( camera, renderer.domElement );
    orbitControler.update();


    camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583 )

    const clock = new THREE.Clock()

    const tick = () =>
    {

        const elapsedTime = clock.getElapsedTime()

        // Update objects
        sphere.rotation.y = .5 * elapsedTime
     
        //const controls = new OrbitControls(camera, renderer.domElement)
        // Update Orbital Controls
        //controls.update()

        // Render
        renderer.render(scene, camera)

        // Call tick again on the next frame
        window.requestAnimationFrame(tick)
    }

    tick()


    /* */

    var text1;
    var text2;
 
     let fontLoader = new THREE.FontLoader();
        fontLoader.load('assets/zcool.json', function(font) {
          let geometrySetting = {
            font: font,
            size: 20,
           height: 5,
            curveSegments: 20,
            bevelEnabled: true,
            bevelThickness: 1,
            bevelSize: 0.5,
            bevelSegments: 20
          };
          let textGeoGame = new THREE.TextGeometry('Zyris',geometrySetting);
          let textGeoStop = new THREE.TextGeometry('Shakir',geometrySetting);

          let textMatGame = new THREE.MeshLambertMaterial({color: 0xE4BB97});

       let textMatStop = new THREE.MeshLambertMaterial({color: 0x840032});

          let textGame = new THREE.Mesh(textGeoGame,textMatGame);
          let textStop = new THREE.Mesh(textGeoStop,textMatStop);
          text1 = textGame;
          text2 = textStop;
          textGame.position.set(-46.94,110,-17.533);
           textStop.position.set(109,110,-17.533);

       scene.add(textGame);
       scene.add(textStop);


    //      window.addEventListener( 'keydown', function ( event ) 
    //      {
    //         switch ( event.keyCode ) {
        
    //             case 16: // Shift
    //                 console.log(camera)
    //                 console.log(pointLight)
    //                 camera.position.x += 2;

    //                 break;
        
    //         } 
    //       } );
        }); 

    const loader = new GLTFLoader();
    var theater;
    
    loader.load('assets/theater/scene.gltf', (gltf) => {
      gltf.scene.traverse(c => {
        c.castShadow = true;
      });
      theater = gltf.scene;
      theater.position.set(-1191,-3.37, -35.73)
      gltf.scene.scale.set(15,15,15)
      scene.add(gltf.scene);

      // gui.add(gltf.scene.position, 'y').min(-5).max(5).step(0.01)
      // gui.add(gltf.scene.position, 'x').min(-25).max(5).step(0.01)
      // gui.add(gltf.scene.position, 'z').min(-5).max(5).step(0.01)

      //  let tc = new TransformControls( camera, renderer.domElement );
      //  tc.addEventListener('dragging-changed', function (event) {
      //   console.log(gltf.scene.position)
      //   })
      //  tc.attach( gltf.scene );
      //  scene.add( tc );
    }); 

          document.addEventListener('keyup', (event) => {
         if(event.key == 't'){
           transformControler.enabled = false;
           orbitControler.enabled = false;
           transformControler = new TransformControls( camera, renderer.domElement );
           //transformControler.attach( theater );
           transformControler.attach( text1 );
           //transformControler.attach( text2 );

           scene.add( transformControler );

           transformControler.addEventListener('dragging-changed', function (event) {
            //console.log(theater.position)
            console.log(text1.position)
            //console.log(text2.position)
            })

         }else if(event.key == 'o'){
          transformControler.enabled = false;
          orbitControler.enabled = false;
          orbitControler = new OrbitControls(camera, renderer.domElement)

        }
        
       });
    
    

  }//end of ngOnInit






}
