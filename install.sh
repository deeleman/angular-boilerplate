#!/bin/bash

clear
printf "The installation script will install the NPM modules required along with the BDD and E2E tools required for testing.\n"
printf "Once the installation is completed the build will be triggered. You can check then the site build at http://localhost:3000\n"
printf "Please note that this script might require at some point your SUDO password.\n\n"
printf "\033[30;42m Press [ENTER] key to continue...\033[0m"
read enterkey

# Install dependencies
clear
printf "\n\n*** INSTALLING NPM MODULES AND DEV DEPENDENCIES\n\n"
sudo npm i
printf "\033[36m \nDone!\033[0m"

# Install Testing Tools and Frameworks
printf "\n\n*** INSTALLING BDD AND E2E TESTING TOOLS\n\n"
sudo npm i -g karma-cli
./node_modules/.bin/webdriver-manager update
printf "\033[36m \nDone!\033[0m"

# Install Testing Tools and Frameworks
printf "\n\n*** INSTALLING BUILD TOOLS\n\n"
sudo npm i -g gulp
printf "\033[36m \nDone!\033[0m"
sleep 1

# Finishing and initializing build for the first time
clear
printf "GREAT! All dependencies have been successfully installed. \nNow the system will run the build unless pointed otherwise.\n\n"
#printf "Press [ENTER] key to proceed or Ctrl+C to exit without running the build...\n"
printf "Do you want to build the site now [y/n]?  "
read answer
if test "$answer" != "Y" -a "$answer" != "y";
then
    printf "\nExiting script... Remember you can run the dev build at anytime by executing"
    printf "\033[30;37m gulp dev\n\n"
    exit 0;
fi
