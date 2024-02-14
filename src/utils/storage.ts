import { createWriteStream, existsSync, mkdir } from 'fs';
import { File } from './file.schema';

export const save = async (file, subfolder = '' , namefile = ''  ): Promise<any> => {
  const { createReadStream, filename } = await file;
  const dest = 'uploads' + subfolder ;
  const name = `${Date.now()}-${filename}`;
  if (!existsSync('./' + dest)) {
    mkdir('./' + dest,  { recursive: true }, (err) => {
      if (err) throw err;
    })
  }
  const newFile: File = {
    type: 'Internal',
    name: namefile,
    url: `/${name}`,
  };
  try {
    return new Promise(
      async (resolve, reject) =>
        await createReadStream()
          .pipe(
            createWriteStream(`./${dest}/${name}`).on('error', err => {
              console.log(err);
              reject(false);
            }),
          )
          .on('finish', () => resolve(newFile))
          .on('error', err => {
            console.log(err);
            reject(false);
          }),
    );
  } catch (e) {
    console.log(e);
  }
};
