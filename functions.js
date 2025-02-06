// functions.js 😊

// Create list items using map() 🍕
const list = (clients) => {
  return clients
    .map(
      (client) =>
        `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
          ${client.name}
          <strong>$ ${client.balance.toFixed(2)}</strong>
        </li>`
    )
    .join('');
};

// Sort clients using sort() 🚀
const order = (clients, property) => {
  return clients.sort((a, b) => (a[property] > b[property] ? 1 : -1));
};

// Get total balance using reduce() 💰
const total = (clients) => {
  return clients.reduce((sum, client) => sum + client.balance, 0);
};

// Find a client info using find() 👀
const info = (index) => {
  return clients.find((client) => client.index === index);
};

// Search clients using filter() 🔍
const search = (query) => {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
};

