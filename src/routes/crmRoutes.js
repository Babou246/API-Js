import RunInNewContext from 'vm'
import { 
    addNewContact, 
    deleteContact, 
    getContacts, 
    getContactWithID, 
    updateContact
} from '../controllers/crmController'



const routes = (app) => {
    app.route('/contact')
        .get((req, res,next) =>{
            // Midlleware
            console.log(`Request de ${req.originalUrl}`)
            console.log(`Request de ${req.method}`)
            next();
        },getContacts)

        .post(addNewContact)

    
    app.route('/contact/:contactId')
        // Contact avec ID
        .get(getContactWithID)

        // Mis à jour
        .put(updateContact)

        // Supprimer
        .delete(deleteContact)
}

export default routes