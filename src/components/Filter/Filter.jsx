import { useDispatch } from 'react-redux';

import { Label } from './FilterStyled';
import { valueContactFilter } from 'redux/contactSlice';

const Filter = () => {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        const filter = event.target.value;
        dispatch(valueContactFilter(filter));
    }

    return (
        <Label>
            <input type='text' onChange={handleChange} />
        </Label>
    )
}

export default Filter;