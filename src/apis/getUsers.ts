import axios from 'axios'

const GITHUB_API_URL = 'https://api.github.com'
const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

export const getUsers = async (query: string, page: number = 1) => {
  try {
    const { data } = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: {
        q: query,
        per_page: 20,
        page: page,
      },
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    })
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 403) {
        throw new Error(
          'API 요청 한도를 초과했습니다. 잠시 후 다시 시도해주세요.',
        )
      }
      throw new Error(`GitHub API 오류: ${error.response.status}`)
    }
    throw new Error('알 수 없는 오류가 발생했습니다.')
  }
}
