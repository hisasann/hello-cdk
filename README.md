# 🥒 Welcome to your CDK TypeScript project! 🍮

## AWS CDK プロジェクトを作成する

```bash
$ npm install -g aws-cdk
$ mkdir hello-cdk
$ cd hello-cdk
$ cdk init app --language=typescript
```

## S3 に CloudFormation テンプレート置場を作成する（一度でよい）

```bash
$ cdk bootstrap --profile hisasann
```

## lambda をデプロイする

```bash
$ npm run build
$ cdk deploy --profile hisasann
```

## CDK のスナップショットテスト

```bash
$ npm run test
```

## CDK のスナップショットファイルを更新する

```bash
$ npx jest --updateSnapshot
```

## 参考記事

[AWS CDKに求められるテストとその方法 | Developers.IO](https://dev.classmethod.jp/articles/awscdk-snapshot-test/)

[今更ながらAWS CDKを使ってみた - Qiita](https://qiita.com/kter/items/f198c73a2af9c37da050)

[AWS CDK が GA! さっそく TypeScript でサーバーレスアプリケーションを構築するぜ【 Cloud Development Kit 】 | Developers.IO](https://dev.classmethod.jp/articles/aws-cdk-ga-serverless-application/) 

[AWS CDKでLambdaデプロイしてみた【AWS CDK】 - Qiita](https://qiita.com/KsntsTt/items/4824bacf80d2f500f837)

[AWS CDK(Cloud Development Kit )を使用した各種のLambda設置 | Developers.IO](https://dev.classmethod.jp/articles/aws-cdk-lambda/)

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
