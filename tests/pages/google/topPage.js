import { Selector, t } from 'testcafe';

/**
 * Googleトップページ
 */
export default class TopPage {
  constructor () {
    this.url = 'https://www.google.co.jp/';
    this.inputSearchBox = Selector('.gLFyf.gsfi');
    this.buttonSearch = Selector('input[name="btnK"]');
    this.buttonFeelingLucky = Selector('input[name="btnI"]');
  }

  /**
   * 検索実行
   */
  async search(text) {
    await t.typeText(this.inputSearchBox, text)
      .click(this.buttonSearch);
  }

  /**
   * I'm Feeling Lucky
   */
  async feelingLucky(text) {
    await t.typeText(this.inputSearchBox, text)
      .click(this.buttonFeelingLucky);
  }
}
