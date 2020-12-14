import React,{Component} from 'react';
import { Card, CardImg, CardTitle} from 'reactstrap';
import './Items.css';
import AlertComponent from './AlertComponent.js';
class Items extends Component{

Card=(item)=>{
  return(
    <div>
      <table style={{width:"50%"}}>
        <tr className="item">
          <td ><img src={item.img_url}/>
          {item.name}
          <button className="buttonClass" onClick={() => this.remove(item.id)}>X</button></td>
          <td> <button className="buttonClass" onClick={()=> this.IncrementItem(item.id)}>+</button>
          <button>{item.quantity}</button>
          <button className="buttonClass" onClick={()=> this.DecreaseItem(item.id)}>-</button></td>
          <td>${item.price}</td>
        </tr>
      </table> 
    </div>
  )
}
  remove= (id)=>{
  this.setState(prevState => ({
     items: prevState.items.filter(item => item.id !== id)            
  }));
  <AlertComponent id={id}/>
}
       

        IncrementItem= (id) =>{  
          let items= this.state.items;
          for(let i=0;i<items.length;i++){
            if(items[i].id==id){
              items[i].quantity+=1;
            }
          }
          this.setState({
            items: items
          })   
      }

      DecreaseItem= (id) =>{  
        let items= this.state.items;
        for(let i=0;i<items.length;i++){
          if(items[i].id==id){
            items[i].quantity-=1;
          }
        }
        items = items.filter(function( item ) {
          return item.quantity > 0;
      });
        this.setState({
          items: items
        })   
    }


    renderItems= () =>{
      return ( <div style={{textAlign: 'center'}}>
       
      <ul>
      <div>
       <table style={{width:"50%"}}>
         <tr className="item">
         <th>Items</th>
         <th>Qty</th>
         <th style={{marginRight:"0"}}>Price</th>
         </tr>
       </table>
       </div>
          {
              this.state.items.map((item) => {
                  return (
                   this.Card(item)
                 )
              }) 
          }                                       
      </ul>
  </div>);
    }

    constructor(props){
    super(props);
    this.state={items: [
        {
          "id": 9090,
          "name": "Item1",
          "price": 200,
          "discount": 10,
          "type": "fiction",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9091,
          "name": "Item2",
          "price": 250,
          "discount": 15,
          "type": "literature",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9092,
          "name": "Item3",
          "price": 320,
          "discount": 5,
          "type": "literature",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9093,
          "name": "Item4",
          "price": 290,
          "discount": 0,
          "type": "thriller",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9094,
          "name": "Item5",
          "price": 500,
          "discount": 25,
          "type": "thriller",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9095,
          "name": "Item6",
          "price": 150,
          "discount": 5,
          "type": "literature",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9096,
          "name": "Item7",
          "price": 700,
          "discount": 22,
          "type": "literature",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        },
        {
          "id": 9097,
          "name": "Item8",
          "price": 350,
          "discount": 18,
          "type": "fiction",
          "img_url": "https://place-hold.it/40.jpg",
          "quantity": 1
        }
      ] }
    }
   render(){
       return (
        <div className="leftCol">
        {this.renderItems()}
        </div>
       );
   }
}

export default Items;