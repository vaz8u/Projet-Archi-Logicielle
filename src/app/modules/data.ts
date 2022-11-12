/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { Directory, Encoding, Filesystem, ReadFileResult } from '@capacitor/filesystem';

// Initialize the filesystem
export function init(nom: string) {
    let res: any;
    Filesystem.readFile({
      path: '/src/data/'+nom + '.json'
    }).then((data: ReadFileResult) => {
        // Si le fichier est en base64
        if (data.data[0] === 'W') {
          res = JSON.parse(atob(data.data));
        }
        // Si le fichier est en UTF-8
        else {
          res = JSON.parse(data.data);
        }
      });
      return res;
  }

  // Supprime le fichier
  export async function deleteFile(nom: string) {
    await Filesystem.deleteFile({
      path: nom + '.json',
      directory: Directory.Data,
    });
    return true;
  }

  // Crée le fichier avec data comme data
  export async function writeFile(newData: any, nom: string) {
    await Filesystem.writeFile({
      path: nom + '.json',
      data: JSON.stringify(newData),
      directory: Directory.Data,
      recursive: true,
      encoding: Encoding.UTF8,
    });
  }
