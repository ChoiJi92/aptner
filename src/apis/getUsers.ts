import { Octokit, RequestError } from 'octokit'

const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
})

export const getUsers = async (query: string, page: number = 1) => {
  try {
    const { data } = await octokit.request('GET /search/users', {
      q: query,
      per_page: 20,
      page,
    })
    return data
  } catch (error) {
    if (error instanceof RequestError && error.status === 403) {
      throw new Error(
        'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
      )
    }
    throw new Error('GitHub API 오류가 발생했습니다.')
  }
}
