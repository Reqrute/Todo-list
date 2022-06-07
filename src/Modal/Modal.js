import React from 'react'
import {
    Modal as ModalBox,
    ModalBody
} from './component'

export default class Modal extends React.Component {
    state ={
        isOpen:false
    }
    
    render() {
        return(
            <React.Fragment>
                <button onClick={()=> this.setState({isOpen : true})}>Open Modal</button>

                {this.state.isOpen && (<ModalBox>
                    <ModalBody>
                        <h1>Modal title</h1>
                        <p>Yes,I am modal!</p>
                        <button onClick={()=> this.setState({isOpen : false})}>Close modal</button>
                    </ModalBody>
                </ModalBox>)}
            </React.Fragment>
        )
    }
}