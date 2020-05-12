import {SynthUtils} from "@aws-cdk/assert";
import * as cdk from '@aws-cdk/core';
import * as HelloCdk from '../lib/hello-cdk-stack';

test('Lambda Stack', () => {
  const app = new cdk.App();
  const stack = new HelloCdk.HelloCdkStack(app, 'MyTestStack');
  expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});
