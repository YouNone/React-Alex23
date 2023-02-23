import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import { useState } from 'react';

const Costs = (props) => {
    const [selectedYear, setYear] = useState('2023');
    const onChangeYearHandler = (inputYearChangeData) => {
        setYear(inputYearChangeData);
    }

    return (
       <div>
         <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/>
            {props.costs.map(cost =>  <CostItem key={cost.id} date={cost.date} description={cost.description} amount={cost.amount} />)}
        </Card>
       </div>
    )
}

export default Costs;