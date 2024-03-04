require("dotenv").config();
const fs = require("fs");

const configFile = "slicemachine.config.json";

// Get the repository name from the environment variable
const prismicRepoName = process.env.PRISMIC_REPO_NAME;

if (!prismicRepoName) {
  console.error(
    "Error: PRISMIC_REPO_NAME environment variable is not provided. Stopping the build process."
  );
  process.exit(1);
}

try {
  // Check if the file already exists
  if (!fs.existsSync(configFile)) {
    const content = `{
    "repositoryName": "${prismicRepoName}",
    "adapter": "@slicemachine/adapter-next",
    "libraries": [
      "./src/slices"
    ],
    "localSliceSimulatorURL": "http://localhost:3000/slice-simulator"
  }`;

    // Create the file
    fs.writeFileSync(configFile, content);
    console.log("File created successfully.");
  } else {
    console.log("File already exists. No action needed.");
  }

  // Read the existing configuration file
  const configData = fs.readFileSync(configFile, "utf8");
  const config = JSON.parse(configData);

  // Update the repositoryName in the config
  config.repositoryName = prismicRepoName;

  // Write the updated configuration back to the file
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));

  console.log(`Updated repositoryName in ${configFile} to ${prismicRepoName}`);
} catch (error) {
  console.error("Error updating configuration:", error.message);
  process.exit(1);
}
