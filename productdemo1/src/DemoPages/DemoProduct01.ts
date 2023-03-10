import { Scene , Engine, Vector3, SceneLoader, AbstractMesh, CubeTexture, ArcRotateCamera } from "@babylonjs/core";
import "@babylonjs/loaders";

export class DemoProduct01{

    scene: Scene;
    engine: Engine;
    watch!: AbstractMesh;
    camera!: ArcRotateCamera;

constructor(private canvas:HTMLCanvasElement)
    {
        this.engine = new Engine(this.canvas, true);
        this.engine.displayLoadingUI();
        this.scene = this.CreateScene();
        this.CreateCamera();
        this.CreateWatch();

        this.engine.runRenderLoop(() =>{
        this.scene.render();
        });
    }


CreateScene() : Scene{
    const scene = new Scene(this.engine);
    
    
    const enveText = CubeTexture.CreateFromPrefilteredData("./environment/christmasStudio.env", scene);
    enveText.gammaSpace = false;
    enveText.rotationY = Math.PI;

    scene.environmentTexture = enveText;
    scene.createDefaultSkybox(enveText, true, 1000, 0.25);

    return scene;
}

CreateCamera(): void
{
    this.camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 40, Vector3.Zero(), this.scene);
    this.camera.attachControl(this.canvas, true);
    this.camera.wheelPrecision = 100;
    this.camera.minZ = 0.1;
    this.camera.lowerRadiusLimit = 0.5;
    this.camera.upperRadiusLimit = 5;
    this.camera.panningSensibility = 0;
    //this.camera.useBouncingBehavior = true;
    this.camera.useAutoRotationBehavior = true;
    this.camera.autoRotationBehavior!.idleRotationSpeed = 0.5;
    this.camera.autoRotationBehavior!.idleRotationSpinupTime = 1000;
    this.camera.autoRotationBehavior!.idleRotationWaitTime = 2000;
    this.camera.autoRotationBehavior!.zoomStopsAnimation = true;

    this.camera.useFramingBehavior = true;
    this.camera.framingBehavior!.radiusScale = 2;
    this.camera.framingBehavior!.framingTime = 4000;
}

async CreateWatch():Promise<void>
{
    const {meshes} = await SceneLoader.ImportMeshAsync(
        "",
        "./models/",
        "vintage_watch.glb",
        this.scene,
        (evt) => {
            if(evt.lengthComputable)
            {
                const loadStatus = ((evt.loaded * 100) / evt.total).toFixed();
        
            }
            else
            {
                const dlCount  = evt.loaded / (1024 * 1024);
                const loadStatus = (Math.floor(dlCount * 100) / 100).toFixed();
        
            }
        }
      );
    this.watch = meshes[0];

    // meshes[1].showBoundingBox = true;
    // meshes[2].showBoundingBox = true;
    // meshes[3].showBoundingBox = true;

    this.camera.setTarget(meshes[3]);
    this.engine.hideLoadingUI();
}

}