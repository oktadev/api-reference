// Automatically sets up tag descriptions and groups, Idempotent. 

const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

const cwd = process.cwd();
const managementSpec = path.join(cwd, "openapi/okta-management/management.yaml")
const specYaml = yaml.load(fs.readFileSync(managementSpec, "utf8"))

// Associate all tags with matching markdown description
for (let tag of specYaml.tags) {
    if (!tag.description && fs.existsSync(`openapi/okta-management/tags/${tag.name}.md`)) {
        tag.description = { "$ref" : `./tags/${tag.name}.md` }
        console.log(`Added description for tag: ${tag.name}`)
    }
}

// set up redocly extension to group tags for left nav
if (!("x-tagGroups" in specYaml)) {
    // TODO make this more programatic
    const tagGroups = yaml.load(`
- name: User Directory
  tags:
    - User
    - Group
    - UserType
    - Schema
    - LinkedObject
    - ProfileMapping
- name: Authentication
  tags:
    - ApiToken
    - Application
    - Authenticator
    - AuthorizationServer
    - CAPTCHA
    - IdentityProvider
    - Policy
    - Session
    - ThreatInsight
    - TrustedOrigin
    - UserFactor
    - NetworkZone
- name: Customization
  tags:
    - Customization
    - Domain
    - Template
- name: Other
  tags:
    - EventHook
    - Feature
    - InlineHook
    - OrgSetting
    - SystemLog
    - Subscription`)

    specYaml["x-tagGroups"] = tagGroups
    console.log("Added x-tagGroups")
}


const data = yaml.dump(specYaml, {lineWidth: -1, noArrayIndent: false})
fs.writeFileSync(managementSpec, data)