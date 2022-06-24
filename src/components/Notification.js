import React from "react"
import {Alert} from "@mui/material"
import {useSelector, useDispatch} from "react-redux"

import {showNotification} from "../store/ui-slice"

const Notification = ({type, message}) => {
    const notification = useSelector(state => state.uiReducer.notification)

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(showNotification({
            open: false
        }))
    }

    return (
        <div>
            {notification.open && (
                <Alert
                    severity={type}
                    onClose={handleClose}
                >{message}</Alert>
            )}
        </div>
    )
}

export default Notification