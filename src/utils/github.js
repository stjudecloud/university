const fetch = require("node-fetch")

// List of Github users we don't want to be shown
// in the "contributors" section of the docs.

const BLACKLISTED_LOGINS = [
  "web-flow", // # https://github.com/web-flow
]

const getContributors = (commits = []) => {
  let contributors = {}

  for (let i = 0; i < commits.length; i++) {
    const commit = commits[i]
    const author = {
      login: commit.author.login,
      avatar_url: commit.author.avatar_url,
      url: commit.author.html_url,
    }

    if (!(author.login in contributors)) {
      contributors[author.login] = author
      contributors[author.login].commits = 1
    } else {
      contributors[author.login].commits += 1
    }

    const committer = {
      login: commit.committer.login,
      avatar_url: commit.committer.avatar_url,
      url: commit.committer.html_url,
    }

    if (!(committer.login in contributors)) {
      contributors[committer.login] = committer
      contributors[committer.login].commits = 1
    } else if (author.login != committer.login) {
      contributors[committer.login].commits += 1
    }
  }

  let contributorsAsArray = []
  for (let key in contributors) {
    contributorsAsArray.push(contributors[key])
  }

  // returns a sorted list with the highest committer first.
  return contributorsAsArray
    .sort((a, b) => {
      return b.commits - a.commits
    })
    .filter(c => c !== undefined && BLACKLISTED_LOGINS.indexOf(c.login) === -1)
}

const getCommits = commits => {
  let results = []
  for (let i = 0; i < commits.length; i++) {
    const commit = commits[i]
    results.push({
      url: commit.html_url,
      message: commit.commit?.message,
      date: commit.commit?.author?.date,
      author: {
        login: commit.author?.login,
        avatar_url: commit.author?.avatar_url,
        url: commit.author?.html_url,
      },
      committer: {
        login: commit.committer?.login,
        avatar_url: commit.committer?.avatar_url,
        url: commit.committer?.html_url,
      },
    })
  }
  return results.filter(c => c !== undefined)
}

module.exports.registerGithubFields = async function (
  path,
  node,
  createNodeField,
  repo = "stjudecloud/university"
) {
  const githubRepoURL = `https://api.github.com/repos/${repo}/commits?path=${path}`
  const headers = { Authorization: "Token " + process.env.GITHUB_TOKEN }
  try {
    const response = await fetch(githubRepoURL, { headers })
    const commits = await response.json()
    createNodeField({
      node,
      name: `commits`,
      value: getCommits(commits),
    })
    createNodeField({
      node,
      name: `contributors`,
      value: getContributors(commits),
    })
  } catch (e) {
    console.error(e)
  }
}
