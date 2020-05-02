/**
 * 间距块
 */
import { ISpace, IDirection } from '../types';
import { Lines } from './store';
import { ILine } from 'src/types';

function createSpaceLineRoot(direction) {
    let id = `view__${direction}-dist-line-root`;
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        dom = div;
    }
    return dom;
}

function createHSpaceLine({ pos, start, end, height }, offsetTop, offsetLeft) {
    let id = 'view__h-space-line_' + start;
    let root = createSpaceLineRoot('h');
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = 'view__h-space-line';
        root.appendChild(div);
        dom = div;
    }
    let l = start, r = end;
    if (start > end) {
        l = end, r = start
    }
    dom.innerHTML = `<i class="line"/>`;
    dom.style.display = 'block';
    dom.style.left = `${l + offsetLeft}px`;
    dom.style.top = `${pos + offsetTop}px`;
    dom.style.width = `${Math.abs(r - l)}px`;
    dom.style.height = `${height}px`;
}


function createVSpaceLine({ pos, start, end, width }, offsetTop, offsetLeft) {
    let id = 'view__v-space-line_' + start;
    let root = createSpaceLineRoot('v');
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = 'view__v-space-line';
        root.appendChild(div);
        dom = div;
    }
    let t = start, b = end;
    if (start > end) {
        t = end, b = start
    }
    dom.innerHTML = `<i class="line"/>`;
    dom.style.display = 'block';
    dom.style.left = `${pos + offsetLeft}px`;
    dom.style.top = `${t + offsetTop}px`;
    dom.style.width = `${width}px`;
    dom.style.height = `${Math.abs(b - t)}px`;
}

export function createVSpaceLines(lineIndexPairs: ISpace[] = [], offsetTop, offsetLeft) {
    hideSpaceLine('v');
    lineIndexPairs.forEach((item) => {
        let { from, to } = item;
        let l1 = from as ILine;
        let l2 = to as ILine;
        // { pos, start, end }, offsetTop, offsetLeft
        let t = Math.min(l1.start, l2.start, l1.end, l2.end);
        let b = Math.max(l1.start, l2.start, l1.end, l2.end);
        let line = {
            pos: (l1.start + l1.end) / 2,
            start: l1.pos,
            end: l2.pos,
            height: b - t,
        };

        createHSpaceLine(line, offsetTop, offsetLeft);
    });
}


export function createHSpaceLines(lineIndexPairs: ISpace[] = [], offsetTop, offsetLeft) {
    hideSpaceLine('h');
    lineIndexPairs.forEach((item) => {
        let { from, to } = item;
        let l1 = from as ILine;
        let l2 = to as ILine;
        // { pos, start, end }, offsetTop, offsetLeft
        let l = Math.min(l1.start, l2.start, l1.end, l2.end);
        let r = Math.max(l1.start, l2.start, l1.end, l2.end);
        let line = {
            pos: (l1.start + l1.end) / 2,
            start: l1.pos,
            end: l2.pos,
            width: r - l,
        };
        createVSpaceLine(line, offsetTop, offsetLeft);
    });
}

function calcAllSpaceLines(direction: IDirection, allLines: ILine[] = [], tarLines: ILine): Array<ISpace> {
    // 计算vl,vr的间距，按顺序查找，确保vl>vr，连续的vl>vr的线
    let i: number = 0, j: number = 1, results: Array<Array<number>> = [];
    let l1type = direction === 'v' ? 'vr' : 'hb';
    let l2type = direction === 'v' ? 'vl' : 'ht';
    let mid = (tarLines[0].end - tarLines[0].start) / 2 + tarLines[0].start;

    let lines: ILine[] = allLines.concat(tarLines).filter((line: ILine) => {
        // 父容器的线去除        
        if (line.start === 0) {
            return false;
        }
        if (line.type === 'vm' || line.type === 'hm') {
            return false;
        }
        if (line.start < mid && line.end > mid) {
            return true;
        }
        return false;
    }).sort((a: ILine, b: ILine) => a.pos - b.pos);

    while (j < lines.length) {
        if (lines[i].type === l1type) {
            if (lines[j].type !== l2type) {
                j++;
                continue;
            }
            if (lines[i].pos <= tarLines[0].pos && lines[j].pos >= tarLines[2].pos) {
                i++;
                continue;
            }
            // i 是vr j是vl
            results.push([i, j]);
        }

        i++; j++;
    }

    return results.map((item) => {
        let [i, j] = item;
        return {
            from: lines[i],
            to: lines[j],
            dist: lines[j].pos - lines[i].pos,
        }
    })
}

function findTarSpaceLine(spaceLines, tarLines) {
    let left = tarLines[0];
    let right = tarLines[2];
    let leftTar, rightTar;
    if (spaceLines.length <= 1) {
        return []
    }
    spaceLines.forEach((line, index) => {
        let { from, to } = line;
        if (left.pos === to.pos) {
            if (index < 1) {
                return;
            }
            let line = spaceLines[index - 1];
            let dist = line.dist;
            leftTar = from.pos + dist;
        }
        if (right.pos === from.pos) {
            if (index >= spaceLines.length - 1) {
                return;
            }
            let line = spaceLines[index + 1];
            let dist = line.dist;
            rightTar = to.pos - dist;
        }
    })
    return [leftTar, rightTar]
}

/**
 * 
 *显示间距线，返回最近的间距块以及目标吸附位置
 */
export const showSpaceLine = (direction: IDirection, line, offsetTop, offsetLeft) => {
    //判断是横向还是纵向，
    //计算组件的间距，显示同一方向的间距,
    // let results;
    if (direction === 'h') {
        let spaceLines = calcAllSpaceLines('h', Lines.hLines, line.h);
        createHSpaceLines(spaceLines, offsetTop, offsetLeft);
    } else {
        let spaceLines = calcAllSpaceLines('v', Lines.vLines, line.v);
        createVSpaceLines(spaceLines, offsetTop, offsetLeft)
    }
}

export const calcSpaceLineList = (direction, line) => {
    let results, spaceLines;
    if (direction === 'h') {
        spaceLines = calcAllSpaceLines('h', Lines.hLines, line.h);
        results = findTarSpaceLine(spaceLines, line.h);
    } else {
        spaceLines = calcAllSpaceLines('v', Lines.vLines, line.v);
        results = findTarSpaceLine(spaceLines, line.v);
    }
    return results;
}


/**
 * 隐藏
 * @param {string} direction 方向
 */
export const hideSpaceLine = (direction:IDirection) => {
    let hdom = document.getElementById(`view__${direction}-dist-line-root`);
    if (!hdom) {
        return;
    }
    hdom.remove();
}
