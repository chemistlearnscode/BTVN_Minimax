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
        username:cc.EditBox,
        password:cc.EditBox,
        // labelusername:cc.Label,
        // labelpassword:cc.Label,
        // richText: cc.RichText,
    },

    // LIFE-CYCLE CALLBACKS:
    

    beginEdit(){
        Emitter.instance.emit('showInstruction');
        // Emitter.instance.emit('throwError');
    },

    endEdit(){
        Emitter.instance.emit('throwError',this.username.string,this.password.string);
    },

    updateScrollview(){
        // cc.log('ed')
        Emitter.instance.emit('addList',this.username.string)
    },
    onLoad () {
        Emitter.instance.registerEvent('listenButton',this.updateScrollview.bind(this));
    },

    start () {

    },

    // update (dt) {},
});
