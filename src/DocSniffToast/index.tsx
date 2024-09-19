import React, { useImperativeHandle, forwardRef } from 'react';

const DocSniffToast = forwardRef((props, ref) => {
    // 使用 useImperativeHandle 钩子来定义暴露给父组件的方法
    useImperativeHandle(ref, () => ({
        show: () => {
            // Toast.show(
            //     {
            //         content: <div>自定义 Toast</div>,
            //         duration: 5000,
            //     }
            // )
        },
        close: () => {
        },
        // reset: () => {
        //     setCount(0);
        // }
    }));

    return (
        <h1>Toast</h1>
    );
});

export default DocSniffToast;