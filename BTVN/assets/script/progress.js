// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter=require('./Emitter')

cc.Class({
    extends: cc.Component,

    properties: {
        prog:cc.ProgressBar,
    },

    // LIFE-CYCLE CALLBACKS:

    updateProgress(){
        // cc.log('hi');
        let speed = 1/8;
        let progress=this.prog.progress;
        if(progress<1){
            // cc.log('ahihi')
            progress += speed;
        }else{

        }
        this.prog.progress=progress
    },

    onLoad () {
        Emitter.instance.registerEvent('listenButton',this.updateProgress.bind(this));
    },

    start () {

    },

    // update (dt) {},
});
