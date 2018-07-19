
cc.Class({
    extends: cc.Component,

    properties: {
       time:{
           default:0,
           visible:false,
       }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.preloadScene("level1_scene");
        this.time = 0;
    },

    start () {

    },

     update (dt) {
        console.log(dt);
        console.log(this.time);
        if(Math.abs(this.time-3) < 0.1){
            cc.director.loadScene("level1_scene");
        }
        this.time += dt;
     },
});
