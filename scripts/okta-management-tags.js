// Automatically sets up tag descriptions and groups. TBD if this should even be done in this repo?

const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

const cwd = process.cwd();
const managementSpec = path.join(cwd, "openapi/okta-management/management.yaml")
const specYaml = yaml.load(fs.readFileSync(managementSpec, "utf8"))

for (let tag of specYaml.tags) {
    if (!tag.description && fs.existsSync(`openapi/okta-management/tags/${tag.name}.md`)) {
        tag.description = `./tags/${tag.name}.md`
    }
}

const data = yaml.dump(specYaml, {lineWidth: -1, noArrayIndent: false})
fs.writeFileSync(managementSpec, data)