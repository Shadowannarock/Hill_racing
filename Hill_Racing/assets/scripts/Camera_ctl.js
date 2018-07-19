cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.camera = this.getComponent(cc.Camera);
    },
    //当我们使用摄像机时，如果使用到了物理系统或者碰撞系统这些会内置渲染节点的系统，
    //需要调用相关的 api 将他们的渲染节点也添加到摄像机上。
    
    onEnable: function () {
        cc.director.getPhysicsManager().attachDebugDrawToCamera(this.camera);
    },
    onDisable: function () {
        cc.director.getPhysicsManager().detachDebugDrawFromCamera(this.camera);
    },

    // called every frame, uncomment this function to activate update callback
    lateUpdate: function (dt) {
        let targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        
        this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos);
    
        //调整缩放比例
        let ratio = targetPos.y / cc.winSize.height;
    
        this.camera.zoomRatio = 1 + (0.5 - ratio) * 0.5;
    },
});