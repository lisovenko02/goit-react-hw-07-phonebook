import { useDispatch, useSelector } from "react-redux"
import { Button, Contact, List, ListItems } from "./ContactList.styled"
import {selectVisibleContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations";

export const ContactList = () => {
    const dispatch = useDispatch();
    const visibleCardItems = useSelector(selectVisibleContacts)
    
    return (
        <List>
            {visibleCardItems.map(item => (
             <ListItems key={item.id}>
                <Contact>{item.name} : {item.phone}</Contact>
                <Button onClick={() => dispatch(deleteContact(item.id))}>Delete</Button>
             </ListItems>   
            )
                )}
        </List>
    )
    
};