const fetch = require("node-fetch")
module.exports.getFileContributors = async function (
  path,
  repo = "stjudecloud/university"
) {
  const githubRepoURL = `https://api.github.com/repos/${repo}/commits?path=${path}`
  const headers = { Authorization: "Token " + process.env.GITHUB_TOKEN }
  try {
    const response = await fetch(githubRepoURL, { headers })
    const commits = await response.json()
    let contributors = {}

    for (let i = 0; i < commits.length; i++) {
      const commit = commits[i]
      const author = {
        login: commit.author.login,
        avatar_url: commit.author.avatar_url,
        profile_url: commit.author.html_url,
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
        profile_url: commit.committer.html_url,
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
    return contributorsAsArray.sort((a, b) => {
      return b.commits - a.commits
    })
  } catch (e) {
    console.error(e)
  }

  return []
}
