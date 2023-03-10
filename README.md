## 🔗 Links

- [Documents](https://stclairconnect-my.sharepoint.com/:f:/g/personal/w0761950_myscc_ca/Euc59zcGoy1JnVHuGJOG6TcBC6E72AB1T4pk1OzWSAeL1Q?e=VBQgv5)
- [Weekly reports folder](https://stclairconnect-my.sharepoint.com/:f:/g/personal/w0761950_myscc_ca/Eig8dgrPL7lGpoGcyRNbIQ0B-RVcrp4s8bR37Pn1QQatZQ?e=a0lUxg)
- [Jira](https://stclairproject.atlassian.net/jira/software/c/projects/SCP/boards/1/backlog)
- [Figma Design](https://www.figma.com/file/dk73K73RQ1iVSOen9iqvAx/St-clair?node-id=0%3A1&t=1RRyy8Sv8DtEx0EX-1)

## 🚨 Work flow

Project has 3 main branches:

1. Main: for production
2. Staging: for staging
3. Develop: for developing

### When develop new features or bug fixes

When develop any new feature or bug fix, developers must follow those steps:

**_Step 1:_**
Pull all from Github

```bash
git pull -a
```

**_Step 2:_**
Check out to develop branch

```bash
git checkout develop
```

**_Step 3:_**
Create new branch from develop branch and name new branch with appropriate prefix. When develop new feature, prefix is **_feat/_** and prefix for bug fix is **_fix/_**.

E.g: working on Jira ticket SCP-49 Set up files on Github. Then must create new branch from develop and name \*\*\*feat/SCP-49-set-up-files-on-github

```bash
git checkout -b feat/SCP-49-set-up-files-on-github
```

**_Step 4:_**
After finish coding, push your branch and create Pull Request (PR) on Github. Invite everyone to review. After your PR is approved, merge your branch into develop and push your newly merged develop into Github.

```bash
git checkout develop
git merge your-branch-name
git push
```

### Deployment

Deployment must follow merging rules:

**_develop_** ➡️ **_staging_** ➡️ **_main_**
