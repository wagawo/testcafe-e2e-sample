import { Selector, t } from 'testcafe';

// fixture `TestCafe Official`
//   .page `https://devexpress.github.io/testcafe/example/`

export default class ExamplePage {
  constructor() {
    this.url = 'https://devexpress.github.io/testcafe/example/';
    this.pageTitle = 'TestCafe Example Page';
    this.nameInput = Selector('#developer-name');
    this.ButtonPopulate = Selector('#populate');
    this.checkBoxRemote = Selector('#remote-testing');
    this.checkBoxReUsing = Selector('#reusing-js-code');
    this.checkBoxBackground = Selector('#background-parallel-testing');
    this.checkBoxCi = Selector('#reusing-js-code');
    this.checkBoxReUsing = Selector('#reusing-js-code');
    this.checkBoxAnalysis = Selector('#traffic-markup-analysis');
    this.buttonSubmit = Selector('#submit-button');
    this.checkBoxTry = Selector('#tried-test-cafe');
    this.radioWindows = Selector('#windows');
    this.radioMacOS = Selector('#macos');
    this.radioLinux = Selector('#linux');
    this.selectorInterface = Selector('#preferred-interface');
    this.textAreaComment = Selector('#comments');
    this.buttonSubmit = Selector('#submit-button');
  }

  /**
   * 名前入力
   */
  async inputName(text) {
    await t.typeText(this.nameInput, text);
  }

  /**
   * Populateボタンクリック
   */
  async clickPopulate() {
    await t.click(this.ButtonPopulate);
  }

  /**
   * チェックボックス選択（RemoteDevice）
   */
  async selectRemoteTesting() {
    await t.click(this.checkBoxRemote);
  }

  /**
   * チェックボックス選択（Background）
   */
  async selectBackground() {
    await t.click(this.checkBoxBackground);
  }

  /**
   * チェックボックス選択（Analysis）
   */
  async selectAnalysis() {
    await t.click(this.checkBoxAnalysis);
  }

  /**
   * チェックボックス選択（Tried Testcafe）
   */
  async selectTry() {
    await t.click(this.checkBoxTry);
  }

  /**
   * コメント入力
   * @param {*} text
   */
  async inputComment(text) {
    await t.typeText(this.textAreaComment, text);
  }

  /**
   * Submitボタンクリック
   */
  async clickSubmit() {
    await t.click(this.buttonSubmit);
  }
}
