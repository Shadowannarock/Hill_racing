var Global = require("Global_control");
cc.Class({
    extends: cc.Component,

    properties: {
       time:{
           default : 0,
           visible:false,
       }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.director.preloadScene("main_scene");
        this.time = 0 ;
    },

    start () {

    },

    update (dt) {
        

        console.log(this.time);
        console.log(Global.restart);
        if(Math.abs(this.time-3) < 0.1){
            if(Global.restart)
                cc.director.loadScene(Global.level);
            else    
            cc.director.loadScene("main_scene");

        }
        this.time +=dt;
    },
});
