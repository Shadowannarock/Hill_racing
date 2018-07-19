module.exports = {
    restart :false,
    level:"level_select_scene",

};
cc.Class({
    extends: cc.Component,

    properties: {
       target:{
            default:null,
            type:cc.Node,
        },
    },
   

    onLoad :function() {
        //test
       
        //end
      //开启碰撞检测系统
      //var manager = cc.director.getCollisionManager();
      //manager.enabled = true ;
      //manager.enabledDebugDraw =true ;
    
      //开启物理系统
        cc.director.getPhysicsManager().enabled = true;//开启物理系统
      //绘制物理调试信息
      //cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit;
      //设置物理重力  
      cc.director.getPhysicsManager().gravity = cc.v2(0,-320);
      // 安卓使用返回键关闭游戏增加监听
        if(cc.sys.os == cc.sys.OS_ANDROID){

            cc.EventListener.create({
                event: cc.EventListener.KEYBOARD,
                onKeyPressed: function(keyCode,event){
                    if(keyCode == cc.KEY.back){
                        cc.director.end();
                    }
                },
                onKeyReleased: function(keyCode,event){
                    //cc.log('released key:' + keyCode);
                }
            })
        }
    },

    start () {
        
    },

     update (dt) {
        
        console.log(this.target.position);
         
         
         
         //if(Math.abs(this.tire.x - 560) < 10 &&Math.abs(this.tire.y - 164) < 10)
           // console.log("point");
     },
});
