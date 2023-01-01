import classnames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import ResizePanel from 'react-resize-panel'
import style from './ResizePanel.css'
const cx = classnames.bind(style)

const TestContainer: React.FC<ComponentPropsWithoutRef<'div'>> = ({
    children,
    ...restProps
}) => {
    return (
        <div className={cx('testContainer')} {...restProps}>
            <div className={cx('body')}>
                {/* <ResizePanel direction="e" style={{ flexGrow: '1' }}>
                    <div className={cx('sidebar', 'withMargin', 'panel')}>
                        left panel
                        <br /> with margin <br />
                        default 50% of content area using flex-grow
                    </div>
                </ResizePanel> */}
                <div className={cx('content', 'panel')}>{children}</div>
                <ResizePanel direction="w" style={{ width: '50px' }}>
                    <div className={cx('sidebar', 'panel')}></div>
                </ResizePanel>
            </div>
        </div>
    )
}

export { TestContainer }
