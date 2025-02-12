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
            console.log("Here is your data", data);
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
      },

      deleteContact: (id) => {
        const store = getStore();

        fetch(
          `https://playground.4geeks.com/contact/agendas/gs1122/contacts/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error deleting contact");
            }
            return response.json();
          })
          .then(() => {
            const newContacts = getStore().contacts.filter(
              (t, currentIndex) => t.id !== id
            );
            getStore().contacts = newContacts;
            console.log(`Contact deleted successfully`);
          })
          .catch((error) => console.error("Delete error:", error));
      },

      updateContact: (id, updatedContacts) => {
        fetch(
          `https://playground.4geeks.com/contact/agendas/gs1122/contacts/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: {
              name: "",
              phone: "",
              email: "",
              address: "",
            },
          }
        )
          .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
          })
          .then((data) => {
            if (data) {
              const newContact = store.contacts.map((contact) => {
                if (contact.id == id) {
                  contact = data;
                }
                return contact;
              });
              setStore({ contacts: newContact });
            }
            console.log("Contact updated", contact);
            // getActions().getContacts();
          })
          .catch((error) => {
            console.log("Error editing contact", error);
          });
      },
    },
  };
};

export default getState;
