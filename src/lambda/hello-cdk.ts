export async function handler(event: User): Promise<void> {
  console.log('lambda start...');
  try {
    const name = await HelloWorldUseCase.hello(event);
    console.log(name);
  } catch(error) {
    console.error(error);
  }
  console.log('lambda end...');
}

export class HelloWorldUseCase {
  public static async hello(userInfo: User): Promise<string> {
    return await HelloWorldUseCase.createMessage(userInfo);
  }

  private static createMessage(userInfo: User): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve(`hisasann, ${userInfo.name}`);
    });
  }
}

export interface User {
  name: string;
}