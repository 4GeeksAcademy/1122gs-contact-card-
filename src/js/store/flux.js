const url = "https://playground.4geeks.com/contact/"
const slug = "gs1122"
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            agendas: []
        },
        actions: {
            createAgenda: async () => {
                try {
                    const response = await fetch(url + "agendas/"+ slug, {method:"POST"});
                    if(!response.ok){
                        console.log("User already exist")
                        getActions().getContacts();
                        return;
                    }
                    
                    
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },
            getContacts: async()=>{
                try{
                    const response = await fetch(url + "agendas/"+ slug + "/contacts");
                    const data = response.json()
                    if(data){
                        console.log("Here are your contacts: ", data)
                        setStore({agendas: data.contacts})
                    }
                } catch(error){
                    console.error("Error fetching contacts:", error);
                }


            },


            addContact: async (contact) => {
                try {
                    const response = await fetch(url +slug + "/contacts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(contact)
                    });
                    if (response.ok) {
                        getActions().createContacts();
                    }
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },

            deleteContact: async (id) => {
                try {
                    const response = await fetch(url +slug + "/contats"+ '/contacts{id}' ,{
                        method: "DELETE"
                    });
                    if (response.ok) {
                        getActions().createContacts();
                    }
                } catch (error) {
                    console.error("Error deleting contact:", error);
                }
            },

            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(url +slug, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (response.ok) {
                        getActions().createContacts();
                    }
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }
        }
    };
};

export default getState;
