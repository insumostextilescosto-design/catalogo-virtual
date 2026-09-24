const ghpages = require("gh-pages");

const repository = "insumostextilescosto-design/catalogo-virtual";
const token = process.env.GITHUB_TOKEN;
const repo = token
  ? `https://git:${token}@github.com/${repository}.git`
  : `https://github.com/${repository}.git`;

ghpages.publish(
  ".",
  {
    repo,
    branch: "gh-pages",
    src: ["index.html", "assets/**/*"],
    nojekyll: true,
    silent: true,
    message: "Deploy ITAC catalog",
    user: {
      name: "ITAC catalog deployment",
      email: "41898282+github-actions[bot]@users.noreply.github.com"
    }
  },
  (error) => {
    if (error) {
      console.error("GitHub Pages deployment failed:", error.message);
      process.exitCode = 1;
      return;
    }
    console.log("ITAC catalog published to the gh-pages branch.");
  }
);

