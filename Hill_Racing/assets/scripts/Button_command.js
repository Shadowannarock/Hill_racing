var Global = require("Global_control");
cc.Class({
    extends: cc.Component,

    properties: {
       target:{
           default:null,
           type:cc.Node,
       },
       
    },
    onLoad:function(){
        cc.director.preloadScene("loading_scene");
        cc.director.preloadScene("level1_scene");
        cc.director.preloadScene("level_select_scene");

    },

    btnResume:function (){
        cc.director.resume();
        this.target.active = false ;
    },
    btnRestart:function(){
        Global.restart = true ;
        Global.level = cc.director.getScene().name ;//return string
        cc.director.loadScene("loading_scene");
        //console.log(this.loading);
        console.log("called");
        cc.director.resume();
        //cc.game.restart();
    },
   
    btnMute :function(event,customEventData){
        //静音音频源 
        this.audios = this.target.getComponent("cc.AudioSource");
        if(this.audios.mute)
            this.audios.mute = false ;
        else    
            this.audios.mute = true ;
       
     },
     btnSound :function(event,customEventData){
        //开启音频源
        //cc.game.pause();
     },
     
   
    btnQuit :function(event,customEventData){
        
        cc.game.end();//Exit game
    },
    btnStart:function(){
        cc.director.loadScene("level_select_scene");
    },

    btnReset: function(){
        //console.log(this.target.getComponent(cc.RigidBody));
       
        this.body = this.target.getComponent(cc.RigidBody);
        this.body_of_l = this.target.getChildByName('tire_left').getComponent(cc.RigidBody);
        this.body_of_r = this.target.getChildByName('tire_right').getComponent(cc.RigidBody);
       
        this.target.rotation = 0;
        this.body_of_l.angularVelocity = 0;
        this.body_of_r.angularVelocity = 0;
        this.body.angularVelocity = 0; 
    },
    btnPause:function(){
        cc.director.pause();//只暂停逻辑

        //cc.game.pause();//暂停所有
        this.target.active = true ;
        
    },
    btnNext:function(){
        //to next_level_scene
        var sceneName = cc.director.getScene().name
        console.log(sceneName);
        var posOfNum = sceneName.indexOf('s')-2;

        var strToInt = parseInt(sceneName.charAt(posOfNum));
        strToInt += 1;
       
        var nextLevel = "level"+strToInt.toString()+"_scene";
        
        cc.director.loadScene(nextLevel);
        
    },
    btnBackToSelect:function(){
        //to level_select_scene 
        cc.director.loadScene("level_select_scene"); 
    },
    btnBackToMain:function(){
        //back to main_scene
        cc.director.loadScene("main_scene");
    },

    btnLevel1:function(){
        cc.director.loadScene("level1_scene");
    },

    btnLevel2:function(){
        cc.director.loadScene("level2_scene");
    },
    btnPauseQuite:function(){
        cc.director.loadScene("level_select_scene");
        console.log("called");
        cc.director.resume();
    },
    btnPauseRestart:function(){
        //
    },
 


   

    // update (dt) {},
});
