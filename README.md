# playwright

Steps: 1

	nvm list
    nvm use 16.**
		

Step: 2

# To run test in viewport Q5

	 npx playwright test --trace on -g "search" --config=./playwright.config.Q3andQ5.ts 

# To run test in viewport Q3        

     npx playwright test --trace on  -g "search" --config=/tests/playwright.config.Q3.ts

# To show the execution report

Step: 3

	npx playwright show-report


 # Other option to run in docker

 eoplay.sh is the script to run scipt testin the docker.

 sh eoplay.sh

 Run the sysemtesting.sh shell with parameter 1 for test ex:"1" or "2" and --headed to run the browser in the headed manner. --debug for the execution in the browser with step by step execution.
 
 sh systemtestig.sh "1" "--headed"
  sh systemtestig.sh "1" "--debug"


 
# to build docker for jenkin

 docker build -t mycustomjenkins:lts-jdk11 -f Dockerfile.jenkins .

 Docker-compose up

# To run  the docker for the jenkin 

 docker run --rm -it -v /var/run/docker.sock:/var/run/docker.sock mycustomjenkins:lts-jdk11 bash# playwright
