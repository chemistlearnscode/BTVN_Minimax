// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require('./Emitter')

cc.Class({
    extends: cc.Component,

    properties: {
        userlist:cc.ScrollView,
        itemPf:cc.Prefab,
        _index:1,
    },

    updateList(arg) {
        // cc.log(arg)
        let item = cc.instantiate(this.itemPf);
        item.getComponent(cc.Label).string= arg;
        item.y -=30*this._index;
        this._index++;
        this.userlist.content.addChild(item);
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        Emitter.instance.registerEvent('addList', this.updateList.bind(this));
    },

    start() {

    },

    // update (dt) {},
});
