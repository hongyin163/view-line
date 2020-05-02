/**
 * 线的存储
 */
import { ILineStore, ILine } from '../types';

import {
    calcLines
} from './lib';
/**
 * line 集合，{pos,type,start,end}
 */
export const Lines: ILineStore = {
    vLines: [],
    hLines: []
}

/**
 * 初始化容器内的线数据
 */
export function initLine(childs: HTMLElement[], dragDom: HTMLElement) {

    let vLines: Array<ILine> = [], hLines: Array<ILine> = [];

    for (let i = 0; i < childs.length; i++) {
        const child = childs[i] as HTMLElement;
        if (child === dragDom) {
            continue;
        }
        let {
            offsetTop,
            offsetLeft,
            offsetHeight,
            offsetWidth
        } = child;
        let l = calcLines(offsetTop, offsetLeft, offsetHeight, offsetWidth);
        vLines = vLines.concat(l.v);
        hLines = hLines.concat(l.h);
    }

    Lines.vLines = vLines.sort((a, b) => a.pos - b.pos);
    Lines.hLines = hLines.sort((a, b) => a.pos - b.pos);
}
