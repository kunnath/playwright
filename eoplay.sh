docker run -it --rm -v $PWD:/tests/ -w /tests -v $PWD/playwright-report:/playwright-report \
  --env BROWSER_WS_ENDPOINT=ws://host.docker.internal:9222/devtools/browser/9ac50e58-56f6-4c6d-a7a7-16e29e8f1d22 \
  mcr.microsoft.com/playwright:v1.34.0-focal 

