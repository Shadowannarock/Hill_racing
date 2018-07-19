
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

     update (dt) {
         //console.log(this.node.position);
         if(this.node.x < -480)
            this.node.x = 1410 ;
         this.node.x -= 15*dt;
     },
});
