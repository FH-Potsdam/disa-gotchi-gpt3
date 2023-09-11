# disa-gotchi-gpt3

Playground for experimenting a virtual companion that provides assistance in anxiety situations – built on GPT-3.

The prototype is a simple web interface that allows the interaction with the companion through text.

## Functioning 
The virtual companion is called Boo and has the personality of a friendly ghost. Through the interface users can share with Boo some thoughts or describe a situation. Then Boo, acting like a ghostly councelor, will reframe that thoughts in positive ones with an empowering, friendly voice.

<img width="694" alt="Boo_Interface" src="https://github.com/FH-Potsdam/disa-gotchi-gpt3/assets/859148/837a63e8-2cd5-4cbc-a5c2-51beb6a7878e">

 ## Implementation

 The app builds on:

 - OpenAI API [quickstart tutorial](https://beta.openai.com/docs/quickstart)
 - [Next.js](https://nextjs.org/) framework with [React](https://reactjs.org/)

 ## Setup

 1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/)
 2. Clone this repository
 3. Navigate into the project directory

    ```bash
    $ cd disa-gotchi-gpt3
    ```

 4. Install the requirements

    ```bash
    $ npm install
    ```

 5. Make a copy of the example environment variables file

    ```bash
    $ cp .env.example .env
    ```

 6. Add your [OpenAI API key](https://beta.openai.com/account/api-keys) to the newly created `.env` file

 7. Run the app

    ```bash
    $ npm run dev
    ```

 You should now be able to access the app at [http://localhost:3000](http://localhost:3000)
