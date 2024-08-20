Certainly! Here's a README for the script you've shared, explaining its usage and parameters:

---

# Playwright Test Runner Script

This script provides a convenient way to run Playwright tests with different configurations and options. It allows you to specify the test to run, choose between different viewport configurations, and include debugging or headed modes.

## Script Overview

The script uses the Playwright test runner to execute tests based on the parameters provided. It supports the following options:

- Run tests with a specific configuration (Q3 or Q5)
- Debug tests
- Run tests in headed mode

## Usage

To use this script, you need to pass the required parameters:

### Basic Usage

To run a test with the default configuration (Q3 and Q5) and generate an HTML report, use the following command:

```bash
./systemtesting..sh <test-name>
```

### Debug Mode

To run a test in debug mode, add the `--debug` parameter:

```bash
./systemtesting..sh <test-name> --debug
```

### Headed Mode

To run a test in headed mode (with a visible browser window), use the `--headed` parameter:

```bash
./systemtesting..sh <test-name> --headed
```

## Parameters

- `<test-name>`: The name of the test or test suite to run. This is a required parameter.
- `--debug`: Optional flag to enable debugging mode. This will run the test with debugging tools enabled.
- `--headed`: Optional flag to run the test in headed mode (with a visible browser window).

## Example Commands

1. **Run a specific test with default settings:**

   ```bash
   ./systemtesting..sh myTest
   ```

2. **Run a specific test with debugging enabled:**

   ```bash
   ./systemtesting..sh myTest --debug
   ```

3. **Run a specific test in headed mode:**

   ```bash
   ./systemtesting..sh myTest --headed
   ```

## Error Handling

- If no test name is provided, or if an unrecognized option is used, the script will display the message:

  ```
  "You are missing parameter"
  ```

  Ensure that you provide the correct parameters as described above.

## Notes

- Make sure that Playwright is installed and configured properly in your project before running this script.
- The script assumes that Playwright configuration files are named `playwright.config.Q3andQ5.ts`. Adjust the script if you use different configuration files.

---

Feel free to customize the README based on any additional details specific to your project!


Certainly! Here’s a README section detailing the usage of the Docker command for running Playwright tests:

---

# Running Playwright Tests with Docker

This section explains how to use Docker to run Playwright tests in an isolated environment. The provided Docker command mounts your local directories, sets up the working directory, and specifies the browser WebSocket endpoint for running the tests.

## Docker Command Overview

The Docker command below runs Playwright tests within a Docker container using the Playwright Docker image.

```bash
docker run -it --rm \
  -v $PWD:/tests/ \
  -w /tests \
  -v $PWD/playwright-report:/playwright-report \
  --env BROWSER_WS_ENDPOINT=ws://host.docker.internal:9222/devtools/browser/9ac50e58-56f6-4c6d-a7a7-16e29e8f1d22 \
  mcr.microsoft.com/playwright:v1.46.1-focal
```

### Explanation of the Command

- `docker run -it --rm`: Runs the Docker container interactively (`-it`) and removes the container after it exits (`--rm`).

- `-v $PWD:/tests/`: Mounts the current working directory (`$PWD`) to `/tests/` inside the container. This allows the container to access your project files.

- `-w /tests`: Sets the working directory inside the container to `/tests`. This is where the Playwright tests will be executed.

- `-v $PWD/playwright-report:/playwright-report`: Mounts the `playwright-report` directory from your current working directory to `/playwright-report` inside the container. This is where Playwright will output its test reports.

- `--env BROWSER_WS_ENDPOINT=ws://host.docker.internal:9222/devtools/browser/9ac50e58-56f6-4c6d-a7a7-16e29e8f1d22`: Sets an environment variable `BROWSER_WS_ENDPOINT` to the WebSocket endpoint for the browser. This allows Playwright to connect to an existing browser instance.

- `mcr.microsoft.com/playwright:v1.46.1-focal`: Specifies the Docker image to use. This image includes Playwright and is based on Ubuntu 20.04 (Focal Fossa).

## Usage

To run Playwright tests with Docker, execute the above command in your terminal. Ensure that:

1. Docker is installed and running on your machine.
2. Your local directories and files are correctly mounted.
3. The `BROWSER_WS_ENDPOINT` is correctly pointing to an active browser instance.

## Example Command

```bash
docker run -it --rm \
  -v $PWD:/tests/ \
  -w /tests \
  -v $PWD/playwright-report:/playwright-report \
  --env BROWSER_WS_ENDPOINT=ws://host.docker.internal:9222/devtools/browser/9ac50e58-56f6-4c6d-a7a7-16e29e8f1d22 \
  mcr.microsoft.com/playwright:v1.46.1-focal
```

## Notes

- **Browser WebSocket Endpoint**: Ensure that the `BROWSER_WS_ENDPOINT` corresponds to a valid and running instance of the browser.
- **Directory Mounts**: Verify that the paths you are mounting (`$PWD` and `$PWD/playwright-report`) exist and contain the necessary files and directories.
- **Playwright Version**: The Docker image version (`v1.46.1-focal`) should be compatible with your test setup. Adjust the image tag if you are using a different version of Playwright.

## Troubleshooting

- If you encounter issues, check Docker logs for errors.
- Ensure your local machine has sufficient resources and permissions for Docker operations.

---

Feel free to adjust this README based on the specific details of your environment or any additional requirements!