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

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
