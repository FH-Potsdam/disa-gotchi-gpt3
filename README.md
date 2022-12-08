# disa-gotchi-gpt3

 Playground for a virtual companion built on GPT-3

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
