import { Selector, t } from 'testcafe';

/**
 * Google検索結果リスト
 */
export default class SearchListPage {
  constructor () {
    this.listSearchResult = Selector('#center_col'); // 検索結果リスト
    this.itemCard = Selector('.g'); // 個別検索結果
  }

  /**
   * 渡された文字列に一致する検索結果をクリックする。
   * @param {*} text
   */
  async showDetail(text) {
    await t.click(this.itemCard.withText(text).find('h3.LC20lb'));
  }

}