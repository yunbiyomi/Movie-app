import { Store } from "../core/heropy";

interface State {
  photo: string,
  name: string,
  email: string,
  blog: string,
  github: string,
  repository: string
}

export default new Store<State> ({
  photo: 'https://cdn-icons-png.flaticon.com/512/1361/1361876.png',
  name: 'YUNBIYOMI / SongYunBi',
  email: 'yunbiyomi@naver.com',
  blog: 'https://velog.io/@yunbiyomi',
  github: 'https://github.com/yunbiyomi',
  repository: 'https://github.com/yunbiyomi/Movie-app'
})