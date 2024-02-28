# Init Lambda

Each lambda is a separate npm project.

In each lambda file:
* run "npm install".
* run "npm run compile"


For deploy
* paste credentials tooks from aws comand line
* move into lambda file that want to deploy
* first time "chmod +x deploy.sh"
  * npm run deploy