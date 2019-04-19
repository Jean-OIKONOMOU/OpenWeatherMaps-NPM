# HOW DO I INSTALL THIS AMAZING NPM MODULE ?
```console
npm install -g jadm
```
OR (for Linux)
```console
sudo npm install -g jadm
```
OR (for Mac OS)
```console
sudo -i npm install -g jadm
```
If you're still getting the **"EACCESS ERROR 13 : NO WRITE PERMISSION"** error you can do the following:
- Resolve the permissions issue in your home directory by reclaiming ownership of the .npm directory by executing the following command: </br></br>`sudo chown -R $(whoami) ~/.npm`

- If you are on OSX or Linux, you can create a user dedicated directory for your global package and setup npm and node to know how to find globally installed packages. </br></br>Check out [this great article](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) for step by step instructions on installing npm modules globally without sudo.

# HOW DO I CALL THIS AMAZING MODULE ?
In the console type **jadm** followed by your city.
For example:
```console
jadm brussels
```

# KNOWN ISSUES ! ! !
I installed, and tried, with success my NPM package on a Linux OS (**Louise and JP**), and on a Windows OS (**Othman**) but, on a **MAC OS** (**Guy's laptop**) it failed to install because he "didn't have the permission to install it". I've yet to address this issue. It doesn't have anything to do with my NPM package though, it must've been something on **Guy**'s Apple laptop.

# WHY DIDN'T YOU USE THE 'PWNED API' LIKE THE INSTRUCTIONS SAID ?
We can't use that API from within the BeCode network. I used the OpenWeatherMaps API instead.

# WHAT PACKETS DID YOU USE ?
I used a couple of interesting NPM modules :
- `chalk` for all those ugly colors.
- `figlet` for transforming the name of your city into an ASCII abomination.
- `Commander` for enabling the **city** argument.
- `Axios` to make API calls like a boss.
- `co` and `co-prompt` for querying the user about a **username** and **password** part (poppy / poppy).

# WHO IS POPPY, AND WHY SHOULD I CARE ?
I was just fooling around with the code. I wanted to see how you could protect the access to the package with a username / password. Just write **poppy** for the username, and **poppy** for the password.

# CREDITS
Me, myself, and I. [And this tutorial](https://blog.developer.atlassian.com/scripting-with-node/)
