import React from "react";

import "../container/Container.css"
class RenderToDo extends React.Component {

    state = {
        isComplited: true
    }
    changeComplete = () => {
        this.setState({ ...this.state, isComplited: !this.state.isComplited })
    }

    render() {
        const  ShowToDo = () =>  {
            if(this.state.isComplited) {
            return(
                <div className="ToDo__list">
                    <button onClick={this.props.deleteToDo}>Delete</button>
                    <button onClick={this.changeComplete}>Complite</button>
                    <p>{this.props.todo}</p>
                </div>  
            )
            }else {
                return(
                <div className="ToDo__list todo__undo">
                    <button onClick={this.props.deleteToDo}>Delete</button>
                    <button onClick={this.changeComplete}>Undo</button>
                    <p className="Undo">{this.props.todo}</p>
                </div>  
                )
            }

        }
        return(
            <div className="todo__main">
                {ShowToDo()}
            </div>
            
        );
    }
}

export default RenderToDo;