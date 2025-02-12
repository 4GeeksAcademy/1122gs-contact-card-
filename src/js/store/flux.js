const url = "https://playground.4geeks.com/contact/";
const slug = "gs1122";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      createAgenda: async () => {
        try {
          const response = await fetch(url + "agendas/" + slug, {
            method: "POST",
          });
          if (!response.ok) {
            console.log("User already exist");
            getActions().getContacts();
            return;
          }
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },
      getContacts: () => {
        fetch("https://playground.4geeks.com/contact/agendas/gs1122/contacts")
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log("Here is your data",data);
            setStore({ contacts: data.contacts });
          })

          .catch((error) => {
            console.error("Error fetching contacts:", error);
          });
      },

      addContact: (contact) => {
        const url =
          "https://playground.4geeks.com/contact/agendas/gs1122/contacts";
        const contactPayLoad = {
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          address: contact.address,
        };
        const request = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactPayLoad),
        };
        fetch(url, request)
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            console.log("Contact added", data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.log("Error adding contact", error);
          });

        // const newContact = await response.json();
        // setStore((prevState) => ({
        //     ...prevState,
        //     contacts: [...prevState.contacts, newContact]
        // }));
      },

      deleteContact: async (id) => {
        try {
          const response = await fetch(
            url + slug + "/contats" + "/contacts{id}",
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            getActions().createContacts();
          }
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },

      updateContact: async (id, updatedContact) => {
        try {
          const response = await fetch(url + slug, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedContact),
          });
          if (response.ok) {
            getActions().createContacts();
          }
        } catch (error) {
          console.error("Error updating contact:", error);
        }
      },
    },
  };
};

export default getState;
