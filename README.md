# batch-3-assignment-2-PrHr

## Method to deploy locally

1. Clone the repo to the destination folder using ``` git clone ```.
2. After cloning open the command prompt in the destination folder directory.
3. In the terminal run ``` npm install ``` to install the node packages.
4. After node files are installed, create a ``` .env ``` file in the root directory.
5. In the ``` .env ``` file add the variable ``` PORT ``` which will have the port number 5000 and ``` DATABASE_URL ``` which will have the URL to the mongoDB database.
6. Next in the terminal run ``` npm run build ``` which will create the ``` dist ``` folder for the project.
7. Finally run ``` npm run start:dev ``` or ``` npm run start:prod ``` to start the server on the localhost.
8. The ``` API ``` calls can be checked using ``` Postman ``` or other suitable methods.
