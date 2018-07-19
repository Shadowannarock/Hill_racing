
cc.Class({
    extends: cc.Component,

    properties: {
       camera :{
        default :null,
        type:cc.Node,
       },   
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    update (dt) {
        var cameraPos = this.camera.convertToWorldSpaceAR(0.0);
        this.node.position = this.node.parent.convertToNodeSpaceAR(cameraPos);
        
    },
});
