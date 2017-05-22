# Widger: The Inventory Manager

# Front-End

The React front-end can be built and updated continuously with `npm start`.
This will serve it up on localhost:3000

# Back-End

The databases are built and maintained with sequelize.js, an ORM. Build the tables, columns, and relationships with `sequelize db:migrate`. This will reference any migration files. The app will also sync up with the models once the express server is started. Start serving the backend at localhost:8000 with `npm run dev`, which will retrieve a list of current widgets in inventory.
