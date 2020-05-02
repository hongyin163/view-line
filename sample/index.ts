import { moveByDom, resizeByDom, initLine } from '../src/index';

import $ from 'jquery';

$(function () {
    let isDraging = false, isResizing = false;
    let offset = { top: 0, left: 0 }
    $('.view').mousedown((e) => {
        let os = e.target.getBoundingClientRect();
        offset.top = e.clientY - os.top;
        offset.left = e.clientX - os.left;
        isDraging = true;
        let childs = (e.target as HTMLElement).parentNode.querySelectorAll('.view') as any;
        initLine(childs, e.target);
    })
    $('.view').mousemove((e) => {
        if (!isDraging) {
            return;
        }

        let parentRect = e.target.parentNode.getBoundingClientRect();
        let left = e.clientX - offset.left - parentRect.left;
        let top = e.clientY - offset.top - parentRect.top;
        // $(e.target).css('top', top).css('left', left);
        moveByDom(e.target, top, left, function (top, left) {
            console.log(top, left);
        });
    })
    $('.view').mouseup(() => {
        isDraging = false;

    })
    $('.hand').mousedown((e: Event) => {
        e.stopPropagation();
        isResizing = true;

        let view = e.currentTarget.parentNode;

        let childs = view.parentNode.querySelectorAll('.view') as any;
        initLine(childs, view);

        let parentRect = view.parentNode.getBoundingClientRect();
        let rect = view.getBoundingClientRect();

        let type = e.target.className;
        console.log(type)

        $(document).on('mousemove', function (e) {
            e.stopPropagation();
            if (!isResizing) {
                return;
            }

            let left, top, width, height;
            switch (type) {
                case 'br':
                    left = rect.left - parentRect.left;
                    top = rect.top - parentRect.top;
                    width = e.clientX - rect.left;
                    height = e.clientY - rect.top;
                    break;
                case 'tl':
                    left = e.clientX - parentRect.left;
                    top = e.clientY - parentRect.top;
                    width = rect.left + rect.width - e.clientX;
                    height = rect.top + rect.height - e.clientY;
                    break;
                case 'tr':
                    left = rect.left - parentRect.left;
                    top = e.clientY - parentRect.top;
                    width = e.clientX - rect.left;
                    height = rect.bottom - e.clientY;
                    break;
                case 'bl':
                    left = e.clientX - parentRect.left;
                    top = rect.top - parentRect.top;
                    width = rect.right - e.clientX;
                    height =  e.clientY- rect.top;
                    break;
            }

            resizeByDom(view, top, left, height, width, function (top, left, height, width) {
                console.log(top, left, height, width);
            });
        })
        $(document).mouseup(() => {
            isDraging = false;
            $(document).off();
        })
    })


})
