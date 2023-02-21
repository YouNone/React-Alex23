import { useState } from 'react';
import Card from '../UI/Card';
import CostDate from './CostDate';
import './CostItem.css'
const CostItem = (props) => {
    
    const [description, setDescription] = useState(props.description);
    
    const ChangeDescriptionHandler = () => {
        setDescription("Test hook change");
    }

    return (
        <Card className='cost-item'>            
            <CostDate date={props.date} />
            <div className='cost-item__description'>
                <h2>{description}</h2>
                <div className='cost-item__price'>${props.amount}</div>
                <button onClick={ChangeDescriptionHandler}>change description</button>
            </div>
        </Card>
    )
}
export default CostItem;