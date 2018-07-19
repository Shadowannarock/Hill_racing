
cc.Class({
    extends: cc.Component,
        
    properties: {
        target:{
            type: cc.Node,
            default : null
        },
        
    },

    init:function(){

    },
    

    onLoad () {
        
    },

    start () {
        
    },

     update (dt) {
        var targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        
        this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos);
        
        
     },
});
