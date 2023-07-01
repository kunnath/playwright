#!/usr/bin/env bash
# To run test in viewport Q5

# To run test in viewport Q3        

if [ -z "$2" ]

then

   npx playwright test --trace on -g $1 --config=./playwright.config.Q3andQ5.ts --reporter=html


elif [ $2 == '--debug' ]

then

npx playwright test --trace on -g $1  --debug

elif [ $2 == '--headed' ]

then
   npx playwright test --trace on -g $1 --config=./playwright.config.Q3andQ5.ts --headed
else

 "You are missig parameter"

fi
