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
        // step1 fetch the delete endpoint
        // if response is ok, then run getContacts()
        // if response not ok then log error
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
            getActions().getContacts();
            return response.json();
          })
          .catch((error) => console.error("Delete error:", error));
      },

      updateContact: (contact) => {
        const url = `https://playground.4geeks.com/contact/agendas/gs1122/contacts/${contact.id}`;
        const contactPayLoad = {
          name: contact.name,
          phone: contact.phone,
          email: contact.email,
          address: contact.address,
        };
        const request = {
          method: "PUT",
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
            console.log("Contact updated", data);
            getActions().getContacts();
          })
          .catch((error) => {
            console.log("Error adding contact", error);
          });
      },
    },
  };
};

export default getState;
