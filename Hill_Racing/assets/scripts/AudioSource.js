
cc.Class({
    extends: cc.Component,

    properties: {
        audio:{
            url:cc.AudioClip,
            default: null
        },
        volume:{
            default: 0,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //常驻节点
        cc.game.addPersistRootNode(this.node);
        
        this.current = cc.audioEngine.play(this.audio, true, this.volume);
    },

    start () {

    },

    // update (dt) {},
    onDestroy:function(){
        cc.audioEngine.stop(this.current);
    }
});
