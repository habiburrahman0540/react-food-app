import React, { Fragment } from 'react'
import classes from "./Modal.module.css"
import ReactDOM from 'react-dom';
const Backdrop = ()=>{
    return <div className={classes.backdrop}/>
}
const ModelOverlay =(props)=>{
    return(<div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
        )
}
const portalElement = document.getElementById("overlays");
const Modal = (props) => {

    return <Fragment>
        {ReactDOM.createPortal(<Backdrop/>,portalElement)}
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,portalElement)}
    </Fragment>
}

export default Modal