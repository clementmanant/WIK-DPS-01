# WIK_DPS_TP01

After cloning the project, you can go choose on which port you will host the server by modifying the 'PING_LISTEN_PORT' variable in the .env file.

Then, at the project's root, you can open a terminal and run ```npx ts-node index.ts``` to launch the project.

In the terminal, you'll see where your application is listening, it should match the 'PING_LISTEN_PORT' variable in the .env file.

Now, you can open a browser and search for ```http://localhost:{PING_LISTEN_PORT}/ping```.

You will see the headers of your request on your browser's page or in your terminal.

If the route is wrong you will get a simple response with 404 status code. For any other error, you will receive a response with 500 status code.