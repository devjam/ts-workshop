# TypeScript ワークショップ

https://paper.dropbox.com/doc/TypeScript--A0aoprgwpUHTj55zTtt4RpQqAg-wJQkskTvLUoOHnBhhDcvA

- 要点
  - バグが減る
  - コードが読みやすくなる
  - 補完が賢くてコーディングが楽になる
- TypeScript とは？
  - プログラミング言語、かつ、コンパイラ
  - Babel
    - ブラウザで動かない構文で書かれた JavaScript（src/hoge.js）
    - Babel で JavaScript を読み込んでブラウザで動くように変換して出力
    - ブラウザは Babel によって出力された JavaScript を読み込んで実行
  - Babel + Bundler（Browserify, webpack など）
    - ブラウザで動かない構文で書かれた JavaScript（src/hoge.js）
    - webpack で JavaScript を読み込んでブラウザで動くように変換して出力
      - Babel を Loader（webpack の場合、プラグインのようなもの）として設定し、JavaScript を変換
    - ブラウザは webpack によって出力された JavaScript を読み込んで実行
  - TypeScript
    - ブラウザで動かない構文で書かれた TypeScript（src/hoge.ts）
    - TypeScript（コンパイラ）で TypeScript（ファイル）を読み込んでブラウザで動くように変換（JS のバージョンを指定できる、ポリフィルなどは含まれない）
    - ブラウザは TypeScript によって出力された JavaScript を読み込んで実行
- 静的型付け言語
  - プログラムを実行する前からあらかじめ「型」が決まっている
  - 2 つの値を和を計算
    ```javascript
    function sum(x, y) {
      return x + y;
    }
    sum(1, 2); // 3
    ```
  - 想定していない型が渡されると思い通りの結果が得られない
    ```javascript
    function sum(x, y) {
      return x + y;
    }
    sum({ amount: 1 }, { amount: 2 }); // '[object Object][object Object]'
    ```
  - 呼び出し時に引数をチェックする
    ```javascript
    function sum(x, y) {
      if (typeof x !== "number") {
        throw new TypeError("x should be number");
      }
      if (typeof y !== "number") {
        throw new TypeError("x should be number");
      }
      return x + y;
    }
    sum({ amount: 1 }, { amount: 2 }); // ランタイムエラー
    ```
  - TypeScript で型注釈をつけるとプログラムを実行する前に間違いがわかる
    ```typescript
    function sum(x: number, y: number) {
      return x + y;
    }
    sum({ amount: 1 }, { amount: 2 }); // コンパイルエラー
    ```
  - しかし具体的な値の内容までは実行するまでわからない
    `typescript function sum(x: number, y: number) { return x + y; } sum(Infinity, NaN); // 正常`
  - 詳細にチェックするためにはランタイムコードを含める必要がある
    ```typescript
    function sum(x: number, y: number) {
      if (!Number.isInteger(x)) {
        throw new TypeError("x should be integer");
      }
      if (!Number.isInteger(y)) {
        throw new TypeError("y should be integer");
      }
      return x + y;
    }
    sum({ amount: 1 }, { amount: 2 }); // コンパイルエラー
    sum(Infinity, NaN); // ランタイムエラー
    ```
  - コスパの良いチェック
  - 型推論、型注釈
  - 基本的な型付け
    - プリミティブ
    - any
    - unknown
    - 名前をつける
    - or, and
    - アサーション、as
    - let
    ```typescript
    type AppProps = {
      posts: {
        id: string;
        title: string;
        body: string;
      }[];
    };
    let initialProps: AppProps;
    const value = document.querySelector("#app")!.getAttribute("data-props")!;
    try {
      initialProps = JSON.parse(value);
    } catch (e) {
      // TODO: display error
    }
    ```
  - 人間のためのドキュメンテーション、Lint
  - ベストよりもベター、現実的にやる
    - 極端に難しいことをしようとするために挫折して TypeScript をやめてしまうことにならないように
  - src/index.ts の改修
    - 型付け
    - document.querySelector
    - sum の共通化のためのリファクタリング
      - VSCode のリファクタリング機能
- 自動テスト
  - Node.js として実行する（Universal）
  - UI と切り離せるロジックはテストファーストの方が開発効率がいい
  - 型チェック
    - エディタが報告してくれるエラー
    - npm run typecheck
    - CI
  - ユニットテスト
    - 読み込んだだけで副作用を起こさないようにする
      - エントリーポイントで実行する
    - 副作用
      - 値を返す「以外」のこと
      - console.log、
    - immutable
    - 参照透過性
    - 副作用がある部分とそうでない部分を切り離す
    - 内部構造を変えてみる `return a + b`
    - あのころ動いていたものが今も動き続けているか
    - テストしやすいインターフェースと意識すると読みやすくなる
    - HTML 要素の生成
- 外部ライブラリの利用
  - 型定義があるとき、ないとき
  - @types
- YouTube IFrame Player API の利用
  - https://developers.google.com/youtube/player_parameters?hl=ja
  - as any
- 練習
  - https://youmightnotneed.com/lodash/
  - http://youmightnotneedjquery.com/
  - https://htmldom.dev/
  - https://jsprimer.net/use-case/todoapp/

## 学習用リソース

https://mizchi.hatenablog.com/entry/2018/10/03/195854
https://future-architect.github.io/typescript-guide/index.html
https://msakamaki.github.io/clean-code-typescript/
https://typescript-jp.gitbook.io/deep-dive/
https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
