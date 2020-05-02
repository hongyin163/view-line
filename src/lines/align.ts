/**
 * 对齐线
 */
import { Lines } from './store';
import { findLine } from './lib'

/**
 * 
 * @param {string} direction 方向，v垂直方向，h水平方向
 * @param {*} top 
 * @param {*} left 
 * @param {*} height 
 * @param {*} width 
 */
function getNearLine(direction, line) {
    // 获取两个方向的线数据
    // let line = calcLines(top, left, height, width);
    if (direction === 'v') {
        if (Lines.vLines.length == 0) {
            return;
        }
        if (line.v.length == 0) {
            return;
        }
        let nearLines = line.v.map((item) => {
            return findLine(item, Lines.vLines);
        }).map((item, i) => {
            return {
                val: Math.abs(item.pos - line.v[i].pos),
                from: line.v[i],
                ...item,
            }
        }).sort((a, b) => a.val - b.val);

        return nearLines.map((tarLine, index) => {
            let display = tarLine.val === 0;
            if (index === 0 && tarLine.val > 0) {
                display = true;
            }
            return {
                type: tarLine.type,
                display,
                pos: tarLine.pos,
                start: Math.min(tarLine.from.start, tarLine.start),
                end: Math.max(tarLine.from.end, tarLine.end),
                from: tarLine.from,
            }
        })

    } else {
        if (Lines.hLines.length == 0) {
            return;
        }
        if (line.h.length == 0) {
            return;
        }
        let nearLines = line.h.map((item) => {
            return findLine(item, Lines.hLines);
        }).map((item, i) => {
            return {
                val: Math.abs(item.pos - line.h[i].pos),
                from: line.h[i],
                ...item,
            }
        }).sort((a, b) => a.val - b.val);

        return nearLines.map((tarLine, index) => {
            let display = tarLine.val === 0;
            if (index === 0 && tarLine.val > 0) {
                display = true;
            }
            return {
                type: tarLine.type,
                display,
                pos: tarLine.pos,
                start: Math.min(tarLine.from.start, tarLine.start),
                end: Math.max(tarLine.from.end, tarLine.end),
                from: tarLine.from,
            }
        })
        // return []
    }
}

function createSpaceLineRoot() {
    let id = `view__align-line-root`;
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        dom = div;
    }
    return dom;
}


function createVLines(key, { pos, start, end, display }, offsetTop, offsetLeft) {
    let id = 'view__v-line_' + key;
    let cls = 'view__v-line';
    let dom = document.getElementById(id);
    let root = createSpaceLineRoot();
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = cls;
        root.appendChild(div);
        dom = div;
    }
    dom.style.display = display ? 'block' : 'none';
    dom.style.left = `${pos + offsetLeft}px`;
    dom.style.top = `${start + offsetTop}px`;
    dom.style.height = `${end - start}px`;
}

function createHLines(key, { pos, start, end, display }, offsetTop, offsetLeft) {
    let id = 'view__h-line_' + key;
    let cls = 'view__h-line';
    let dom = document.getElementById(id);
    let root = createSpaceLineRoot();
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = cls;
        root.appendChild(div);
        dom = div;
    }
    dom.style.display = display ? 'block' : 'none';
    dom.style.left = `${start + offsetLeft}px`;
    dom.style.top = `${pos + offsetTop}px`;
    dom.style.width = `${end - start}px`;
}

/**
 * 显示对齐线
 * @param {*} line 
 * @param {*} offsetTop 
 * @param {*} offsetLeft 
 */
export function showAlignLine(line, offsetTop, offsetLeft) {

    let vResult = getNearLine('v', line);
    let hResult = getNearLine('h', line);

    if (vResult && vResult.length > 0) {
        // console.log(vResult)
        vResult.forEach((item, index) => {
            createVLines(index, item, offsetTop, offsetLeft);
        })
    }
    if (hResult && hResult.length > 0) {
        // console.log(hResult)
        hResult.forEach((item, index) => {
            createHLines(index, item, offsetTop, offsetLeft);
        })
    }

    if (!vResult && !hResult) {
        return null;
    }
    return {
        vLine: vResult ? vResult.find(p => p.display) : null,
        hLine: hResult ? hResult.find(p => p.display) : null,
    }
}

/**
 * 隐藏
 */
export const hideAlignLine = () => {
    let root = createSpaceLineRoot();
    if (root.parentNode) {
        root.parentNode.removeChild(root);
    }
}
