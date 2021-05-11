// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require('./Emitter');

cc.Class({
    extends: cc.Component,

    properties: {
        labelusername:cc.Label,
        labelpassword:cc.Label,
        richText:cc.RichText,
    },

    showInstruction(){
        this.labelusername.string="Username chi nhan A-Z,a-z,0-9. Username ko qua 10 ky tu";
        this.labelpassword.string="Password min 6 ky tu, max 10 ky tu,can it nhat 1 chu thuong 1 chu hoa va 1 so";
    },

    throwError(arg1,arg2){
        const timeformat = new Date
        var us=/^[A-Za-z0-9]/.test(arg1);
        var pw=/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}/.test(arg2);
        // cc.log(us);
        // cc.log(pw);
        if((us ==false)&&(pw==false)){
            this.labelusername.string = "Loi roi nghen";
            this.labelpassword.string = "Loi roi nghen";
        } else if (us == false){
            this.labelusername.string = "Loi roi nghen";
        }else if ( pw == false){
            this.labelpassword.string = "Loi roi nghen";
        }else{
            this.richText.string = "Chao mung "+"<u><color=#ff0000>"+ arg1+ "</u></color> da dang nhap <color=#ffff00><i>"+ timeformat.toLocaleTimeString('en-US');
        }
        // cc.log(arg1)
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        Emitter.instance.registerEvent('showInstruction',this.showInstruction.bind(this));
        Emitter.instance.registerEvent('throwError',this.throwError.bind(this));
    },

    start () {

    },

    // update (dt) {},
});
