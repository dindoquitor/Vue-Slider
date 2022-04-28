# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Workflow for features using github repo to avoid conflicts

Before you start working, pull from dev, merge that into a new branch, it can be a feature branch or a personal branch. Eg: branch: aleksandr-dev is a personal branch. feature/approve is a feature branch.

Code:
`git checkout dev git pull git branch mybranchname git switch mybranchname`

...do some work...
TEST YOUR CHANGES
If the DApp throws errors or will not run, you are not finished.
`git pull git add . git commit -m "My commit message" git push --set-upstream origin mybranchname (only needed the first time, git push works after that)`

Once you have pushed changes to github, create a PR into the dev branch for review.

Check your deploy preview in the deployment channel to make sure it works as expected.
