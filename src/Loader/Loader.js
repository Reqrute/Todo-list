import React from 'react'
import {
LoaderBox,
LdsEllipsis
} from './component'

export default function Loader () { return (
<LoaderBox>
    <LdsEllipsis>
        <div></div><div></div><div></div><div></div>
    </LdsEllipsis>
</LoaderBox>)
}