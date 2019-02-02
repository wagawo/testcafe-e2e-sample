import { Selector, t } from 'testcafe';

// fixture `TestCafe Official`
//   .page `https://devexpress.github.io/testcafe/example/`
export default class ThankyouPage {
  constructor() {
    this.url = 'https://devexpress.github.io/testcafe/example/thank-you.html';
    this.article = Selector('#article-header');
    this.linkOfficialPage = Selector('.result-content a');
  }

  /**
   * 公式サイトページへ遷移する
   */
  async goToOfficialPage() {
    await t.click(this.linkOfficialPage);
  }
}
