import * as lambda  from '@aws-cdk/aws-lambda';
import * as cdk from '@aws-cdk/core';

export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Configure for Lambda function.
    const myFunction = new lambda.Function(this, 'my-function', {
      functionName: 'my-function',
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.AssetCode.fromAsset('src/lambda'),
      handler: 'hello-cdk.handler',
      timeout: cdk.Duration.seconds(300)
      // role: executionLambdaRole,
    });
  }
}
