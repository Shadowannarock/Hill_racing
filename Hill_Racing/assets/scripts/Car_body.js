
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        console.log(this.node.getComponent(cc.PhysicsPolygonCollider).points.length);
    },

    start () {

    },

    // update (dt) {},
});
