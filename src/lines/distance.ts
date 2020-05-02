/**
 * 距离线
 */

function createSpaceLineRoot() {
    let id = `view__dist-line-root`;
    let dom = document.getElementById(id);
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        document.body.appendChild(div);
        dom = div;
    }
    return dom;
}


/**
 * 创建距离线
 * @param {*} param0 
 * @param {*} offsetTop 
 * @param {*} offsetLeft 
 */
function createHDistLine({ pos, start, end }, offsetTop, offsetLeft) {
    let id = 'view__h-dist-line';
    let dom = document.getElementById(id);
    let root = createSpaceLineRoot();
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = id;
        root.appendChild(div);
        dom = div;
    }
    let l = start, r = end;
    if (start > end) {
        l = end, r = start
    }
    dom.innerHTML = `<div class="label">${r - l}</div>`;
    dom.style.display = 'block';
    dom.style.left = `${l + offsetLeft}px`;
    dom.style.top = `${pos + offsetTop}px`;
    dom.style.width = `${Math.abs(r - l)}px`;
}

function createVDistLine({ pos, start, end }, offsetTop, offsetLeft) {
    let id = 'view__v-dist-line';
    let dom = document.getElementById(id);
    let root = createSpaceLineRoot();
    if (!dom) {
        let div = document.createElement('div');
        div.id = id;
        div.className = id;
        root.appendChild(div);
        dom = div;
    }
    let t = start, b = end;
    if (start > end) {
        t = end, b = start
    }
    dom.innerHTML = `<div class="label">${b - t}</div>`;
    dom.style.display = 'block';
    dom.style.left = `${pos + offsetLeft}px`;
    dom.style.top = `${t + offsetTop}px`;
    dom.style.height = `${Math.abs(b - t)}px`;
}


/**
 * 显示距离线
 */
export function showDistLine(direction, from, to, offsetTop, offsetLeft) {
    let {
        start, end,
    } = from;
    let fromPos = from.pos, toPos = to.pos;
    // if (Math.abs(from.pos - to.pos) < 5) {
    //     toPos = fromPos;
    // }
    if (direction === 'v') {
        let line = {
            start: fromPos,
            end: toPos,
            pos: (end + start) / 2,
        }
        // console.log(line)
        createHDistLine(line, offsetTop, offsetLeft);
    } else {
        let line = {
            start: fromPos,
            end: toPos,
            pos: (end + start) / 2
        }
        createVDistLine(line, offsetTop, offsetLeft);
    }


}

/**
 * 隐藏
 */
export const hideDistLine = () => {
    let root = createSpaceLineRoot();
    if (root.parentNode) {
        root.parentNode.removeChild(root);
    }
}
