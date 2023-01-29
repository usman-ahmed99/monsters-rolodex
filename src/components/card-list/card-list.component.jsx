import { Component } from "react";
import CardContainer from "../card-container/card-container.component";

import './card-list.styles.css';

class CardList extends Component{

    render(){
    const {monsters} = this.props;
    return <div className="card-list">
        {monsters.map((monster) => {
            const {name, email, id} = monster;
            return(
                <CardContainer name={name} id={id} email={email} key={id}/>
            )
        })}
    </div>
    }
}

export default CardList;