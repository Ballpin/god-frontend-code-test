import styles from '@styles/carousel.module.css'

interface ItemProps {
    className?: string,
    children: any
}

function Item({className, children}: ItemProps) {
    return (
        <div className={styles.item}>
            {children}
        </div>
    )
}

export default Item