import React from "react";
         
import "./Container.css";
import RenderToDo from "./RenderToDo";   
         
class Container extends React.Component {
    state = {
        do: "",
        todo: []
    }

    makeToDo = (title) => {
        this.setState({ do: title })
        
    }

    deleteToDo = (index) => {
        let todos = this.state.todo;
        todos.splice(index,1);

        this.setState({...this.state, todo: todos})
    }

    render() {
        const btnPush = () => {
            console.log(this.state.do);
            let arr = this.state.todo;
            arr.push(this.state.do)
            this.setState({...this.state, todo: arr});
        }
    return(
        <div className="main">
            <div className="main__menu">
                <div className="container">
                
                    <div className="div__container">
                        <div className="div__cont">
                            <h1>To-Do-List</h1>
                            <h3>Add new to do</h3>
                        </div>

                        <div className="inp__zone">
                            <input type="text"
                            className="main__inp"
                            onInput={(event) => this.makeToDo(event.target.value)}
                            ></input>

                            <button className="inp__btn"
                            onClick={btnPush}
                            >Add</button>
                        </div>
                        
                    </div>
                </div>

            </div>

        
        <div className="to__do">
            <div className="container">
                <div className="title__main">
                    <h2 className="title__heading">Let's get some works done!</h2>
                </div>

                {this.state.todo.map((item, index) => 
                <RenderToDo
                key={index}
                todo={item}
                deleteToDo={() => this.deleteToDo(index)}
                />)}
   
            </div>
        </div>
        
        </div>
    );  
    }   
        
}       
        
export default Container;