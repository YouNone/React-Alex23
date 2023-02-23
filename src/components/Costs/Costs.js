import CostItem from './CostItem';
import './Costs.css';
import Card from '../UI/Card';
import CostsFilter from './CostsFilter';
import { useState } from 'react';

const Costs = (props) => {
    const [selectedYear, setYear] = useState('2023');
    const filteredCosts = props.costs.filter(cost => {
        return cost.date.getFullYear().toString() === selectedYear
    });
    const onChangeYearHandler = (inputYearChangeData) => {
        setYear(inputYearChangeData);
    }

    //  forth solution, final
    let costContent = <p>No purchases this year</p>;

    if (filteredCosts.length > 0) {
        costContent = filteredCosts.map(cost =>
            <CostItem 
                key={cost.id} 
                date={cost.date} 
                description={cost.description}
                amount={cost.amount}
            />
        );
    }

    // Part third ternat solution before return
    // let costContent = filteredCosts.length === 0 ? <p>No purchases this year</p> : filteredCosts.map(cost =>
    //     <CostItem 
    //         key={cost.id} 
    //         date={cost.date} 
    //         description={cost.description}
    //         amount={cost.amount}
    //     />
    // );
    
    return (
       <div>
         <Card className='costs'>
            <CostsFilter year={selectedYear} onChangeYear={onChangeYearHandler}/>

            {/*!! frist hard to read code */}

            {/* {filteredCosts.length === 0 && <p>No purchases this year </p>} 
            {filteredCosts.length > 0 && filteredCosts.map(cost =>
                <CostItem 
                    key={cost.id} 
                    date={cost.date} 
                    description={cost.description}
                    amount={cost.amount}
                />
                )
            } */}

            {/*!! second variant of the same code */}

            {/* {
                filteredCosts.length === 0 ? costContent : filteredCosts.map(cost =>
                    <CostItem 
                        key={cost.id} 
                        date={cost.date} 
                        description={cost.description}
                        amount={cost.amount}
                    />
                )
            } */}

            {/* third/ forth solution */}
            {costContent}

        </Card>
       </div>
    )
}

export default Costs;