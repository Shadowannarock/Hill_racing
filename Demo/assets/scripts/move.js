/*
    Copyright(c) 2018 SkyIsland
    All rights reserved.
    Author      ：Rao_xuejiang
    Date        :2018/7/7
    Description :Project  Hill_racing
    Version     :1.0 test
*/
cc.Class({
    extends: cc.Component,

    properties: {
        car :require('Car'),
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad :function()  {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,(event) =>{
            if(event.keyCode = cc.Key.back){
                cc.director.end();
            }
        });
        this.physicsManager = cc.director.getPhysicsManager();
        this.car.getComponent(cc.RigidBody).linearVelocity = cc.v2(800,800);//初始化速度
        console.log(this.car.getComponent(cc.RigidBody).linearVelocity );//test
       //test

    },

    start () {

        
    },

    // update (dt) {},
});
