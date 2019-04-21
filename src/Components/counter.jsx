import React, { Component } from 'react';

class Counter extends Component {

    state={
        value:  this.props.counter.value,
        tags:['tag1',"tag2","tag3"]
        // imgUrl: 'https://picsum.photos/200'
    };
    styles={
        fontWeight:"bold",
        fontSize:30
    }

    renderTags(){
        if(this.state.tags.length===0) return <p>There is no Tags!!</p>;
        return <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>;

    }
    
    
    
    render() { 

        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={this.styles} onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Increment</button>
                <button style={this.styles} onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button style={this.styles} onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
                {/* <img src ={this.state.imgUrl}  alt=""/> */}
                {/* {this.state.tags.length===0 && <p>Please add a new Tag</p>} */}
                {/* {this.renderTags()} */}
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0?"zero":value;
    }
}
 
export default Counter;