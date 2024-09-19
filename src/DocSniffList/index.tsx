// const Foo: FC<{ title: string }> = (props) => <h4>{props.title}</h4>;
import React, { useState, useEffect } from 'react'
// import { Popup } from 'antd-mobile'

interface Props {
    visible: boolean;
    visibleChange: (input: boolean) => void;
}

const DocSniffList = ({visible = false}: Props) => {
    const [sniffListVisible, setSniffListVisible] = useState(visible)
    
    useEffect(() => {
        setSniffListVisible(visible);
        console.log('doc-sniff-list render sniffListVisible=', sniffListVisible);
    }, [visible]);

    return (
        <>
            <div>
                <h1>我是一个 jsx</h1>
                <h2>我是一个 jsx</h2>
                <h3>我是一个 jsx</h3>
                <h4>我是一个 jsx</h4>
            </div>
            {/* <Popup
              visible={sniffListVisible}
              onMaskClick={() => {
                setSniffListVisible(() => {
                    visibleChange(false);
                    return false;
                })
              }}
              onClose={() => {
                setSniffListVisible((preVal) => {
                    visibleChange(false);
                    return false;
                })
              }}
              bodyStyle={{ height: '40vh' }}
            >
              {'mockContent'}
            </Popup> */}
        </>
    )
}

export default DocSniffList;
