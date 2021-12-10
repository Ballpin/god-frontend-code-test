import {Fragment} from 'react'


function DefaultLayout({ children }: {children: any}) {
    return (
        <Fragment>
            <main className='container center'>{children}</main>
        </Fragment>
    )
}

export default DefaultLayout;