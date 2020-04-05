import React, { Suspense } from 'react';
import Preloader from './../components/common/Preloader/Preloader';

export const withSuspense = (Component) => {
    return (props) => (
        <div>
            <Suspense fallback={<div><Preloader /></div>}>
                <Component {...props} />
            </Suspense>
        </div>
    )
}