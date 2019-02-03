import { ClientFunction, Selector } from 'testcafe';
import TopPage from '../../pages/google/topPage';
import SearchListPage from '../../pages/google/searchListPage';

const topPage = new TopPage();
const listPage = new SearchListPage();

fixture`googleSearch`.page(topPage.url);
/**
 * Google検索→検索結果表示->詳細クリック
 */
test('Google検索', async (t) => {
  const searchWord = 'UNITRUST';
  await topPage.search(searchWord);
  await listPage.showDetail(searchWord);
  const actualUrl = ClientFunction(() => window.location.href);
  const expectedUrl = 'https://www.unitrust.co.jp/';
  await t.takeScreenshot();
  await t.expect(actualUrl()).eql(expectedUrl);
});