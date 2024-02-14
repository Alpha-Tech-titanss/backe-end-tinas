import {
  CallHandler, ExecutionContext,
  mixin, NestInterceptor
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { uploadContent } from './file.schema';

export function GraphqlFiles(inputFields: string[] , subfolder = '') {
  class MixinInterceptor implements NestInterceptor {
    async intercept(
      context: ExecutionContext,
      next: CallHandler,
    ): Promise<Observable<any>> {
      {
        const ctx = GqlExecutionContext.create(context);
        const input = ctx.getArgs();

        await Promise.all(
          inputFields.map(async field => {
            const media = eval('input' + '.' + field);
            if (media) {
              const file = await uploadContent(media , subfolder );
              eval('input' + '.' + field + ' =  file');
            } else console.log("file doesn't exist");
          }),
        );

        return next.handle();
      }
    }
  }
  const Interceptor = mixin(MixinInterceptor);
  return Interceptor;
}
