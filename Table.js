import React from 'react';

export default class Table extends React.Component{
   constructor(props){
       super(props);
       this.state={
           Location: 'Dallas',
           data: [],
           keys:[]
       }
   }
    decorateData = (inputData) => {
        let keys = Object.keys(inputData);
        this.setState({keys: keys})
    }
   fetchData = () => {
       fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.Location}&appid=4e8fe55b900263c5f83603ed631e15ad`)
       .then(res => res.json())
       .then((d) => {
           this.setState({data:d});
           this.decorateData(d);
       })
       .catch(e => console.log(e));
   }

   componentDidMount(){
       this.fetchData();
   }

   render(){
       return (
           <div>
               <input type = "text" onChange={(e) => this.setState({Location: e.target.value})} value={this.state.Location}/>
               <button onClick={this.fetchData}>GET DATA</button>
               <table>
                   {
                       this.state.keys.length > 0 && this.state.keys.map(k => {
                           return(
                               <tr>
                                   <td>{k}</td>
                                   <td>{JSON.stringify(this.state.data[k])}</td>
                               </tr>
                           )
                       })
                   }
               </table>
           </div>
       )
   }
}