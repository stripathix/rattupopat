const contacts = [];

const clearContactsList = () => {
  document.querySelector('#app-contacts-list').innerHTML = "";
};

const resetContactForm = () => {
  const name = document.querySelector('#txtName');
  const email = document.querySelector('#txtEmail');
  const phone = document.querySelector('#txtPhone');
  name.value = '';
  email.value = '';
  phone.value = '';
};

const renderContactsList = () => {
  clearContactsList();
  let str = ''
  if (contacts.length) {
    contacts.forEach(function (contact, index) {
      str += `<li>
        <span>${contact.name} : </span>
        <span>${contact.name} : </span>
        <span>${contact.name}</span>
        <button onclick="deleteContact(${index})">Delete</button>
      </li>`;
    });
  } else {
    str += `<li>No Contacts available. Please add new contact</li>`;
  }
  document.getElementById("app-contacts-list").innerHTML = str;
};

const addContact = () => {
  const name = document.querySelector('#txtName');
  const email = document.querySelector('#txtEmail');
  const phone = document.querySelector('#txtPhone');
  if (name && email && phone) {
    contacts.push({
      name: name.value,
      email: email.value,
      phone: phone.value,
    });
    resetContactForm();
  }
  renderContactsList();
};

const deleteContact = (index) => {
  contacts.splice(index, 1);
  renderContactsList();
};
renderContactsList();