import React from 'react';

export default class LifeCycle extends React.Component{
   constructor(props){
       super(props);
       this.state={
           userName: 'saijaswanthgattidi' ,
           data: []
       }
   }


   fetchData = () => {
       fetch(`https://api.github.com/users/${this.state.userName}`)
       .then(res => res.json())
       .then((d) => this.setState({data:d}))
       .catch(e => console.log(e));
   }

   componentDidMount(){
       this.fetchData();
   }

   render(){
       return (
           <div>
               <input type = "text" onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName}/>
               <button onClick={this.fetchData}>GET DATA</button>
               {JSON.stringify(this.state.data)}
           </div>
       )
   }

}