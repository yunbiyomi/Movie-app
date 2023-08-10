import { Component } from "../core/heropy";

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    })
  }
  render(){
    this.el.innerHTML = /* html */ `
      <div>
        <a href="https://github.com/yunbiyomi/Movie-app">
          GitHub Repository
        </a>
      </div>
      <div>
      <a href="https://github.com/yunbiyomi">
        ${new Date().getFullYear()}
        YUNBIYOMI
      </a>
      </div>
    `
  }
}