## Countdown Timer App

### Instructions to Run Locally:
1. Clone the repository: `git clone [repository-link]` or
   Download folder/ all files
3. Navigate into the project folder: `cd Countdown`
4. Install dependencies: `npm install`
5. Start the app: `npm start`



If the above instructions don't work, follow the following steps:


For Windows:
#### installs fnm (Fast Node Manager)
1- winget install Schniz.fnm
#### configure fnm environment
2- fnm env --use-on-cd | Out-String | Invoke-Expression
#### download and install Node.js
3- fnm use --install-if-missing 20
#### verifies the right Node.js version is in the environment
4- node -v # should print `v20.18.0`
#### verifies the right npm version is in the environment
5- npm -v # should print `10.8.2`

For Mac:
#### installs fnm (Fast Node Manager)
1- curl -fsSL https://fnm.vercel.app/install | bash
#### activate fnm
2- source ~/.bashrc
#### download and install Node.js
3- fnm use --install-if-missing 20
#### verifies the right Node.js version is in the environment
4- node -v # should print `v20.18.0`
#### verifies the right npm version is in the environment
5- npm -v # should print `10.8.2`
