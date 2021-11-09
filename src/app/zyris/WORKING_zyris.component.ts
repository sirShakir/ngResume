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
  scene
  camera
  renderer
  transformControler
  orbitControler
  canvas
  pointLight
  click3 = 0;
  gui
  theater
  plane
  text1
  text2
  demoStarted = false;
  constructor() { }

  ngOnInit(): void {

    var ele = document.getElementById('canvasgl');
    this.gui = new dat.GUI()
    // Canvas
    this.canvas = document.querySelector('canvas.webgl')
    // Scene
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas
    })
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    this.renderer.setSize(sizes.width, sizes.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
    const material = new THREE.MeshBasicMaterial()
    material.color = new THREE.Color(0xff0000)
    const sphere = new THREE.Mesh(geometry,material)
    this.scene.add(sphere)
    
    this.scene.background = new THREE.Color("black");
    //const pointLight = new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 );
    const pointLight = new THREE.DirectionalLight( 0xffffff, 1 );
    //const pointLight = new THREE.AmbientLight( 0xffffff, 0.5 );
    //var pointLight = new THREE.PointLight(0xffffff, 0.1)
    this.pointLight = pointLight;

    pointLight.position.x = 28;//-1600
    pointLight.position.y = 9;
    pointLight.position.z = 5;
    pointLight.intensity = 4;

    //pointLight.target.position.set(0,0,0);
    this.scene.add(pointLight)
    //this.scene.add(pointLight.target)

    
    const pointLightHelper = new THREE.PointLightHelper(pointLight, 1)
    this.scene.add(pointLightHelper)

    this.cameraSetup();
    this.guiSetup()

    window.addEventListener('resize', () =>
    {
        // Update sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight
    
        // Update camera
        this.camera.aspect = sizes.width / sizes.height
        this.camera.updateProjectionMatrix()
    
        // Update renderer
        this.renderer.setSize(sizes.width, sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })


    this.transformControler = new TransformControls( this.camera, this.renderer.domElement );
    this.orbitControler = new OrbitControls( this.camera, this.renderer.domElement );
    //this.orbitControler.update();

    
    /* */
    this.loadModels();
    this.hotkeySetups();
    this.tick()

  }//end of ngOnInit


  tick = () =>{
    const clock = new THREE.Clock()
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    if(this.demoStarted == true){
      this.plane.translateX( -2);
      //this.camera.translateX( 4 );
      this.camera.lookAt(this.plane.position) 

      //this.camera.translateX( 2);
      if(this.camera.position.z < -21){
        this.camera.translateZ( -2.0);
      }else{
        this.camera.translateZ( -3.5);
      }
      
      //console.log(this.camera.position.z)
    }
    //this.plane.position.x += .7;
    
    //const controls = new OrbitControls(camera, renderer.domElement)
    // Update Orbital Controls
    //this.orbitControler.update()

    // Render
    this.renderer.render(this.scene, this.camera)
    // Call tick again on the next frame
    window.requestAnimationFrame(this.tick)
  }

  loadModels(){
    let classobj = this;

    let fontLoader = new THREE.FontLoader();
    fontLoader.load('assets/zcool.json', (font) => {
        let geometrySetting = {
        font: font,
        size: 1800,
        height: 7,
        curveSegments: 20,
        bevelEnabled: true,
        bevelThickness: 100,
        bevelSize: 0.5,
        bevelSegments: 20
        };
        let textGeoGame = new THREE.TextGeometry('Zyris',geometrySetting);
        let textGeoStop = new THREE.TextGeometry('Shakir',geometrySetting);

        let textMatGame = new THREE.MeshLambertMaterial({color: 0xE4BB97});
        let textMatStop = new THREE.MeshLambertMaterial({color: 0x840032});

        let textGame = new THREE.Mesh(textGeoGame,textMatGame);
        let textStop = new THREE.Mesh(textGeoStop,textMatStop);
        this.text1 = textGame;
        this.text2 = textStop;

        // textGame.position.set(-46.94,110,-17.533);
        // textStop.position.set(109,110,-17.533);
        textGame.position.set(-3400,8,-295);
        textStop.position.set(4800,8,-295);
        this.scene.add(textGame);
        this.scene.add(textStop);

        const planeFolder = this.gui.addFolder('Text')
        this.gui.add(this.text1.position, 'y').min(-50).max(450).step(0.01)
        this.gui.add(this.text1.position, 'x').min(-2050).max(450).step(0.01)
        this.gui.add(this.text1.position, 'z').min(-2250).max(450).step(0.01)
    });  

    // let loader = new GLTFLoader();
    // loader.load('assets/plane/scene.gltf', (gltf) => {
    //     gltf.scene.traverse(c => {
    //       c.castShadow = true;
    //     });
    //     classobj.plane = gltf.scene;
    //     classobj.plane.position.set(-3400,120,20);
    //     this.plane.rotation.y = 3.1;
    //     gltf.scene.scale.set(3.5,3.5,3.5)
    //     classobj.scene.add(gltf.scene);
    //     const planeFolder = this.gui.addFolder('Plane')
    //     this.gui.add(this.plane.rotation, 'y').min(-250).max(100).step(0.01)
    //     this.gui.add(this.plane.rotation, 'x').min(-250).max(100).step(0.01)
    //     this.gui.add(this.plane.rotation, 'z').min(-250).max(1000).step(0.01)

    //     //this.camera.add(classobj)
      
    // }); 
    // loader.load('assets/theater/scene.gltf', (gltf) => {
    //   gltf.scene.traverse(c => {
    //     c.castShadow = true;
    //   });
    //   classobj.theater = gltf.scene;
    //   classobj.theater.position.set(-1191,-3.37, -35.73)
    //   gltf.scene.scale.set(15,15,15)
    //   classobj.scene.add(gltf.scene);

    //   // gui.add(gltf.scene.position, 'y').min(-5).max(5).step(0.01)
    //   // gui.add(gltf.scene.position, 'x').min(-25).max(5).step(0.01)
    //   // gui.add(gltf.scene.position, 'z').min(-5).max(5).step(0.01)

    //   //  let tc = new TransformControls( camera, renderer.domElement );
    //   //  tc.addEventListener('dragging-changed', function (event) {
    //   //   console.log(gltf.scene.position)
    //   //   })
    //   //  tc.attach( gltf.scene );
    //   //  scene.add( tc );
    // }); 



  }

  cameraSetup(){
    this.camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,50000)
    //var camera = new THREE.PerspectiveCamera(75,2.5,0.1,1000)

    this.camera.position.x = -4200.5293518410083;
    this.camera.position.y = 325.55023493489639;
    this.camera.position.z = 1642.50386003251126;

    this.scene.add(this.camera)
    this.camera.rotation.x = -0.24;
    this.camera.rotation.y = -0.18;
    this.camera.rotation.z = -0.04;

    //this.camera.rotation.set(-0.1261862712228412, 0.021848038994861523, 0.002771421589071801 )
    //this.camera.rotation.set(-0.1796765527406611, 0.2501208004301373, 0.04492831959926583 )
    //this.gui.add(this.camera.position, 'y').min(-255).max(255).step(0.01)
    //this.gui.add(this.camera.position, 'x').min(-255).max(255).step(0.01)
    //this.gui.add(this.camera.position, 'z').min(-255).max(255).step(0.01)


  }

  guiSetup(){
    this.gui.add(this.pointLight.position, 'y').min(-50).max(450).step(0.01)
    this.gui.add(this.pointLight.position, 'x').min(-50).max(450).step(0.01)
    this.gui.add(this.pointLight.position, 'z').min(-50).max(450).step(0.01)
    this.gui.add(this.pointLight, 'intensity').min(0).max(10).step(0.01)
    const lightColor = {
        color : 0xcccccc
    }
    
    this.gui.addColor(lightColor, 'color')
            .onChange(() => {
                this.pointLight.color.set(lightColor.color)
    })
     this.gui.add(this.camera.rotation, 'y').min(-50).max(450).step(0.01)
     this.gui.add(this.camera.rotation, 'x').min(-50).max(450).step(0.01)
     this.gui.add(this.camera.rotation, 'z').min(-50).max(450).step(0.01)

 

  }


  hotkeySetups(){

    document.addEventListener('keyup', (event) => {
        if(event.key == 't'){
        this.transformControler.enabled = false;
        this.orbitControler.enabled = false;
        this.transformControler = new TransformControls( this.camera, this.renderer.domElement );
        //transformControler.attach( theater );
        this.transformControler.attach( this.plane );
        //transformControler.attach( text2 );

        this.scene.add( this.transformControler );

        this.transformControler.addEventListener('dragging-changed', function (event) {
        //console.log(theater.position)
        //console.log(this.plane.position)
        //console.log(text2.position)
        })

        }else if(event.key == 'o'){
        this.transformControler.enabled = false;
        this.orbitControler.enabled = false;
        this.orbitControler = new OrbitControls(this.camera, this.renderer.domElement)
        }
      else if(event.key == 'c'){
          // this.camera.rotation.x = -0.24;
          // this.camera.rotation.y = -0.18;
          // this.camera.rotation.z = -0.04;

          // this.camera.position.x = -3310.5293518410083;
          // this.camera.position.y = 325.55023493489639;
          // this.camera.position.z = 442.50386003251126;
          //console.log(this.camera.position)
          //console.log(this.camera.rotation)
          
          this.startDemo();
      }
    
    });
  }

  startDemo(){
    this.demoStarted = true;
  }
}
