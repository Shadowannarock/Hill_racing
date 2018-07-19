
cc.Class({
    extends: cc.Component,

   


    properties: {
       tireleft:{
         default:null,
         type:cc.Node,
       },
       tireright:{
         default:null,
         type:cc.Node,
       },
       body:{
         default:null,
         type:cc.Node,
       },
       parent:{
         default:null,
         type:cc.Node,
       },
       pushx:{
         default:0,
       },
      pushy:{
        default: 0,
      },
      angularimpulse:{
        default: 0,
      },
      angularVelocity:{
        default:0,
      }
      



    },

    onLoad:function () {
      
     
     // 获取轮胎组件
    this.wheelJoint_l= this.tireleft.getComponent(cc.WheelJoint);
    this.wheelJoint_r= this.tireright.getComponent(cc.WheelJoint);
    //获取刚体组件
    this.body_of_right = this.tireright.getComponent(cc.RigidBody);
    this.body_of_left = this.tireleft.getComponent(cc.RigidBody);
    this.body_of_B = this.body.getComponent(cc.RigidBody);
    this.body_of_car = this.parent.getComponent(cc.RigidBody); 
    
    //end
  },

    
   
    start : function() {
       
        
    },

    update:function (dt) {
        
      
        this.node.setPosition(-303,417); 
        
        if(Math.abs(this.body.x - 2000) < 10){
         
          
          this.tireleft.setPosition(-97,-50);
          this.tireright.setPosition(97,-50);
          this.body.setPosition(0,0);
          //使小车获得补充的能量
          
          //this.body_of_left.angularVelocity += this.angularVelocity;
         
        }
      
       
    },
});
