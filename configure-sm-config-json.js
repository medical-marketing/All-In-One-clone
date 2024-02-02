// update-config.js
require("dotenv").config();
const fs = require("fs");

const configFile = "slicemachine.config.json";

try {
  // Read the existing configuration file
  const configData = fs.readFileSync(configFile, "utf8");
  const config = JSON.parse(configData);

  // Get the repository name from the environment variable
  const prismicRepoName = process.env.PRISMIC_REPO_NAME;

  if (!prismicRepoName) {
    console.error(
      "Error: PRISMIC_REPO_NAME environment variable is not provided. Stopping the build process."
    );
    process.exit(1);
  }

  // Update the repositoryName in the config
  config.repositoryName = prismicRepoName;

  // Write the updated configuration back to the file
  fs.writeFileSync(configFile, JSON.stringify(config, null, 2));

  console.log(`Updated repositoryName in ${configFile} to ${prismicRepoName}`);
} catch (error) {
  console.error("Error updating configuration:", error.message);
  process.exit(1);
}
