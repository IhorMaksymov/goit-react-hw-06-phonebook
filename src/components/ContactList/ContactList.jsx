import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List, Item, Text, Btn } from './ContactListStyled';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const visibleContact = () => {
        const normalizeContact = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeContact));
    }

    const filtredContact = visibleContact();

    return (
        <List>
            {filtredContact.map(({ id, name, number }) => 
                <Item key={id}>
                    <Text>{name}</Text>
                    <Text>{number}</Text>
                    <Btn type='button' onClick={() => dispatch(deleteContact(id))} >Delete</Btn>
                </Item>
            )}
        </List>
    )
}

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
};