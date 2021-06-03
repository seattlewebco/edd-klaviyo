module.exports = {
  tagFormat: "${version}",
  branch: "master",
  plugins: [
    ["@semantic-release/npm", { npmPublish: false }],
    "@semantic-release/github",
    [
      "semantic-release-plugin-update-version-in-files",
      {
        "files": [
          "edd-klaviyo.php",
          "readme.txt"
        ],
        "placeholder": "0.0.0-development"
      }
    ]
  ]
};
