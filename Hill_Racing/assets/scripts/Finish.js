
cc.Class({
    extends: cc.Component,

    properties: {
       contactflag :{
         default : false,
         visible: false ,  
       },
       camera:{
           default: null,
           type: cc.Node,
       },
       newtarget:{
           type:cc.Node,
           default:null,

       },
       finishview:{
           type:cc.Node,
           default:null,
       }
    },

    // LIFE-CYCLE CALLBACKS:
     // 只在两个碰撞体开始接触时被调用一次
     onBeginContact: function (contact, selfCollider, otherCollider) {
       
        //console.log(contact);
       // console.log(selfCollider);
        //console.log(otherCollider);
        contact.disabled = true ;
     
        var xMin = selfCollider.getAABB().xMin;
        
        var xMax = otherCollider.getAABB().xMax;
    
       
        
       if(!this.contactflag){
          
           if((xMax - xMin) < 10 && (xMax - xMin) > 0){
            console.log("called");
           
            console.log(this.camera.position);
           
            //change target
            console.log(this.camera.getComponent('Camera_ctl').target);
            this.camera.getComponent('Camera_ctl').target = this.newtarget ;
            console.log(this.camera.getComponent('Camera_ctl').target);
            //end
            //show finish_view
            this.finishview.active = true ;
            //end

            this.contactflag = true ;
            //固定镜头
            
            /*console.log(cc.director.getWinSize());
            console.log(cc.director.getWinSizeInPixels());
            console.log(cc.view.getFrameSize());
            console.log(cc.director.getVisibleOrigin());
            console.log(cc.director.getVisibleSize());
            */
           /* console.log(this.camera);            
            console.log(this.camera.position);
            this.cpostion = this.camera.position;
            console.log(this.cposition);
            */
            //end
            }
       } 
        

    },

    // 只在两个碰撞体结束接触时被调用一次
    onEndContact: function (contact, selfCollider, otherCollider) {
    },

    // 每次将要处理碰撞体接触逻辑时被调用
    onPreSolve: function (contact, selfCollider, otherCollider) {
    },

    // 每次处理完碰撞体接触逻辑时被调用
    onPostSolve: function (contact, selfCollider, otherCollider) {
    },



     onLoad () {
         //开启碰撞调试信息
       /*var manager = cc.director.getCollisionManager();
       manager.enabled = true ;
       manager.enabledDebugDraw = true ;
       manager.enabledDrawBoundingBox  = true ;**/
     },

    start () {
       
    },

    // update (dt) {},
});
