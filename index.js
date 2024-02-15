const fs = require("node:fs");
const bs = require("browser-sync").create();

bs.init({
  server: "./website",
  watch: ["*.html", "*.css", "*.js"],
  middleware: [
    {
      route: "/",
      handle: function (req, res, next) {
        const scriptContent = fs.readFileSync("./dev.js", "utf8");
        res.write(`<script>${scriptContent}</script>`);
        next();
      },
    },
  ],
});
