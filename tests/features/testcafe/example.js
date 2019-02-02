import { ClientFunction, Selector } from 'testcafe';
import ExamplePage from '../../pages/testcafe/examplePage';
import ThankyouPage from '../../pages/testcafe/thankyouPage';

const examplePage = new ExamplePage();
const thankyouPage = new ThankyouPage();

fixture`example`.page(examplePage.url);

// 初期表示テスト
test('初期表示', async (t) => {
  // ページタイトル
  await t.expect(Selector('title').innerText).eql(examplePage.pageTitle);
  // コメント入力欄が非活性状態
  await t.expect(examplePage.textAreaComment.hasAttribute('disabled')).ok();
  // Submit ボタンが非活性状態
  await t.expect(examplePage.buttonSubmit.hasAttribute('disabled')).ok();
  const scrollHeight = ClientFunction(() => window.scrollBy(0, window.innerHeight));
  const getMaxHeight = ClientFunction(() => document.body.clientHeight);
  const getViewHeight = ClientFunction(() => window.innerHeight);
  let maxHeight = await getMaxHeight();
  const viewHeight = await getViewHeight();

  for (let index = 0; viewHeight < maxHeight + viewHeight; index++) {
    await t.takeScreenshot();
    maxHeight -= viewHeight;
    await scrollHeight();
  }
});

// 画面遷移テスト
test('画面遷移', async (t) => {
  // 名前入力
  const name = 'John Doe';
  examplePage.inputName(name);
  await t.takeScreenshot();
  examplePage.clickSubmit();

  // リダイレクト先URLの確認
  const docUrl = ClientFunction(() => window.location.href);
  await t.expect(docUrl()).eql(thankyouPage.url);

  // 表示メッセージの確認
  const msg = `Thank you, ${name}!`;
  await t.expect(thankyouPage.article.innerText).eql(msg);
  await t.takeScreenshot();

  // testCafe公式サイト遷移確認
  await thankyouPage.goToOfficialPage();
  const urlOfficialSite = ClientFunction(() => window.location.href);
  await t.expect(urlOfficialSite()).eql('https://devexpress.github.io/testcafe/');
  await t.takeScreenshot();
});
