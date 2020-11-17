import React, {useState} from 'react'
import {useFire} from '../services/fire'

export default function Collection() {
    const [broilers, setBroilers] = useState()
    const [broilerIdList, setBroilerIdList] = useState()
    const {displayBroilers} = useFire()

    displayBroilers().onSnapshot(data => {
        setBroilers(
            data.docs.map(doc => doc.data())
            )
        setBroilerIdList(
            data.docs.map(doc => doc.id)
        )
        })

    return (
        <>
            {broilers.map((broiler, index) => {
                <div>
                    <h1>
                        {broiler.titlef}
                    </h1>
                    <p>
                        {broiler.user}
                    </p>
                </div>
            })}
        </>
    )
}
