import React from "react";
class NewClass extends React.Component{

constructor(){
super()
this.state={
    count:0,
    name:''
}
}

incrCount=()=>{
this.setState({count:this.state.count+1})
}

componentDidMount(){
    document.title=`clicked ${this.state.count} times`
}

componentDidUpdate (prevProps,prevState){
    if(prevState.count!==this.state.count){
        console.log("Updating the Document")
    document.title=`clicked ${this.state.count} times`
    }
    
}

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e=>{
                    this.setState({name:e.target.value})
                }} />
                
                <button onClick={this.incrCount}>Count-{this.state.count}</button>
            </div>
        )
    }
}
export default NewClass