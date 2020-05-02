import {
    calcLines,
    calcDirection,
    debounce,
} from './lines/lib';
import {
    showAlignLine,
    hideAlignLine
} from './lines/align';
import {
    showDistLine,
    hideDistLine
} from './lines/distance';
import {
    showSpaceLine,
    calcSpaceLineList,
    hideSpaceLine
} from './lines/space';

import {
    showLabel, hideLabel
} from './lines/label';

import { DIST } from './constants'

function calcTarPos(top, left, height, width, vLine, hLine) {
    let tarLeft = left, tarTop = top;
    if (!vLine) {
        tarLeft = left
    } else if (vLine.from.pos < vLine.pos + DIST && vLine.from.pos > vLine.pos - DIST) {
        if (vLine.from.type === 'vl') {
            tarLeft = vLine.pos;
        } else if (vLine.from.type === 'vm') {
            tarLeft = vLine.pos - width / 2;
        } else if (vLine.from.type === 'vr') {
            tarLeft = vLine.pos - width;
        }
    }
    if (!hLine) {
        tarTop = top
    } else if (hLine.from.pos < hLine.pos + DIST && hLine.from.pos > hLine.pos - DIST) {
        if (hLine.from.type === 'ht') {
            tarTop = hLine.pos;
        } else if (hLine.from.type === 'hm') {
            tarTop = hLine.pos - height / 2;
        } else if (hLine.from.type === 'hb') {
            tarTop = hLine.pos - height;
        }
    }
    return {
        top: tarTop,
        left: tarLeft,
    }
}


function showSapceLines(direction, tarLine, { top, left, width, height }, offsetTop, offsetLeft) {
    let tarLeft = left;
    let tarTop = top;

    if (direction == 'h') {

        let [spaceLeft, spaceRight] = calcSpaceLineList('v', tarLine);

        if (tarLeft > spaceLeft - DIST && tarLeft < spaceLeft + DIST) {
            tarLeft = spaceLeft;
            showSpaceLine('v', calcLines(tarTop, tarLeft, height, width), offsetTop, offsetLeft)
        }

        if (tarLeft > spaceRight - width - DIST && tarLeft < spaceRight - width + DIST) {
            tarLeft = spaceRight - width;
            showSpaceLine('v', calcLines(tarTop, tarLeft, height, width), offsetTop, offsetLeft)
        }
    } else {

        let [spaceTop, spaceBottom] = calcSpaceLineList('h', tarLine);

        if (tarTop > spaceTop - DIST && tarTop < spaceTop + DIST) {
            tarTop = spaceTop;
            showSpaceLine('h', calcLines(tarTop, tarLeft, height, width), offsetTop, offsetLeft)
        }

        if (tarTop > spaceBottom - height - DIST && tarTop < spaceBottom - height + DIST) {
            tarTop = spaceBottom - height;
            showSpaceLine('h', calcLines(tarTop, tarLeft, height, width), offsetTop, offsetLeft)
        }
    }
    return {
        top: tarTop,
        left: tarLeft,
    }
}

function showAlignLines(tarLine, { top, left, width, height }, offsetTop, offsetLeft) {
    let nearLine = showAlignLine(tarLine, offsetTop, offsetLeft);

    let tarLeft = left, tarTop = top;
    if (nearLine) {
        let {
            vLine,
            hLine
        } = nearLine;

        let tarPos = calcTarPos(top, left, height, width, vLine, hLine);

        tarLeft = tarPos.left;
        tarTop = tarPos.top;

        if (top != tarTop || left != tarLeft) {
            showAlignLine(calcLines(tarTop, tarLeft, height, width), offsetTop, offsetLeft);
        }

        let fromVLine = vLine.from;
        let fromHLine = hLine.from;
        let map = { 'vl': 0, 'vm': 1, 'vr': 2, 'ht': 0, 'hm': 1, 'hb': 2 };
        if (tarLeft != left || tarTop != top) {
            let newLine = calcLines(tarTop, tarLeft, height, width);
            fromVLine = newLine.v[map[fromVLine.type]]
            fromHLine = newLine.h[map[fromHLine.type]]
        }
        showDistLine('v', fromVLine, vLine, offsetTop, offsetLeft);
        showDistLine('h', fromHLine, hLine, offsetTop, offsetLeft);
    }
    return {
        top: tarTop,
        left: tarLeft
    }
}


function hideLines() {
    hideAlignLine();
    hideSpaceLine('h');
    hideSpaceLine('v');
    hideDistLine();
    hideLabel()
}

const moveDeb: any = debounce((cb) => {
    cb();
}, 1000);

export const moveByDom = (dom, top, left, onMoveEnd) => {

    if (!dom) {
        return;
    }
    let cotainer = dom.parentNode.getBoundingClientRect();
    let offsetTop = cotainer.top;
    let offsetLeft = cotainer.left;

    let rect = dom.getBoundingClientRect();
    let {
        height, width,
    } = rect;

    let direction = calcDirection(top, left);
    let tarLine = calcLines(top, left, height, width);
    let tarLeft = left, tarTop = top;


    let tarSpaceInfo = showSapceLines(direction, tarLine, { top: tarTop, left: tarLeft, width, height }, offsetTop, offsetLeft);

    tarTop = tarSpaceInfo.top;
    tarLeft = tarSpaceInfo.left;

    let alignLineInfo = showAlignLines(tarLine, { top: tarTop, left: tarLeft, width, height }, offsetTop, offsetLeft);

    tarTop = alignLineInfo.top;
    tarLeft = alignLineInfo.left;


    dom.style.left = `${tarLeft}px`;
    dom.style.top = `${tarTop}px`;

    showLabel(dom, `X:${tarLeft},Y:${tarTop}`);

    moveDeb(function () {
        hideLines();
        if (onMoveEnd) {
            onMoveEnd(tarTop, tarLeft);
        }
    })
}
