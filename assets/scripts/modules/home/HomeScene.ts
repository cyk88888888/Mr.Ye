import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import * as fgui from "fairygui-cc";
import { registerModule } from '../../framework/mgr/ModuleMgr';
import { UIScene } from '../../framework/ui/UIScene';
import { JuHuaDlg } from '../common/JuHuaDlg';
import { BottomTabLayer } from './BottomTabLayer';
import { Home } from './Home';
@ccclass('HomeScene')
export class HomeScene extends UIScene {
    private ctor() {
        let self = this;
        self.mainClassLayer = Home;
        let subLayerMgr = self.subLayerMgr;
        let classList = [];
        for (let i = 0; i < classList.length; i++) {
            subLayerMgr.register(classList[i]);
        }
    }

    private onEnter(){
        let bottom = BottomTabLayer.show();
        bottom;
    }
}
registerModule('HomeScene', ['UI/Home'], true);

