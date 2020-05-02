import { ILine } from '../types';
/**
 * 寻找和tarLine邻近的线
 * @param {*} tarLine 源线
 * @param {*} lines 线的数组
 */
export function findLine(tarLine: ILine, lines: ILine[]) {
    // 可以使用二分查找
    let l = 0, r = lines.length - 1;

    while (l <= r) {
        let i = Math.round(((r - (r - l) / 2)));
        if (tarLine.pos < lines[i].pos) {
            r = i - 1;
        } else if (tarLine.pos > lines[i].pos) {
            l = i + 1;
        } else {
            return lines[i];
        }
    }
    if (l == r) {
        return lines[l];
    }

    if (l > r) {
        if (l >= lines.length) {
            return lines[r];
        }
        if (r < 0) {
            return lines[0];
        }
        let x1 = Math.abs(lines[r].pos - tarLine.pos);
        let x2 = Math.abs(lines[l].pos - tarLine.pos);
        return x1 < x2 ? lines[r] : lines[l];
    }
}


export function calcLines(top: number, left: number, height: number, width: number) {
    return {
        v: [
            { type: 'vl', pos: left, start: top, end: top + height },
            { type: 'vm', pos: left + width / 2, start: top, end: top + height },
            { type: 'vr', pos: left + width, start: top, end: top + height }],
        h: [
            { type: 'ht', pos: top, start: left, end: left + width },
            { type: 'hm', pos: top + height / 2, start: left, end: left + width },
            { type: 'hb', pos: top + height, start: left, end: left + width },
        ]
    }
}



export function calcDirectionCreator() {
    let lastTop, lastLeft, lastDirection;
    return function (top, left) {
        if (!lastTop) {
            lastTop = top;
        }
        if (!lastLeft) {
            lastLeft = left;
        }

        let direction;
        // console.log(top, left, lastTop, lastLeft)
        let topOffset = Math.abs(top - lastTop),
            leftOffset = Math.abs(left - lastLeft);
        if (topOffset > leftOffset) {
            direction = 'v';
        } else if (topOffset < leftOffset) {
            direction = 'h';
        } else {
            direction = lastDirection;
        }
        lastTop = top;
        lastLeft = left;
        lastDirection = direction;
        return direction;
    }
}

export const calcDirection = calcDirectionCreator();



export function debounce(fn, delay) {
    let timer: any = null;
    return function () {
        let args = arguments,
            context = this;
        if (timer) {
            clearTimeout(timer);

            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        } else {
            timer = setTimeout(() => {
                fn.apply(context, args);
            }, delay);
        }
    };
}

export function throttle(fn, delay) {
    let timer: any = null,
        remaining = 0,
        previous = Date.now();

    return function () {
        let args = arguments,
            context = this;
        let now = Date.now();
        remaining = now - previous;

        if (remaining >= delay) {
            if (timer) {
                clearTimeout(timer);
            }

            fn.apply(context, args);
            previous = now;
        } else {
            if (!timer) {
                timer = setTimeout(() => {
                    fn.apply(context, args);
                    previous = Date.now()
                }, delay - remaining);
            }
        }
    };
}
