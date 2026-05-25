import fs from 'fs';
import glob from 'fast-glob';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { getPlaiceholder } from 'plaiceholder';

const baseDir = path.join(process.cwd(), './posts/');

export interface Post {
  source: MDXRemoteSerializeResult;
  data: { [key: string]: any };
  content: string;
}

const getPosts = async (dir: string): Promise<Post[]> => {
  const contentGlob = path.join(path.join(baseDir, dir), '/*.mdx');
  const files = glob.sync(contentGlob);

  return Promise.all(
    files.map(async (file) => {
      const basename = path.basename(file);
      const slug = basename.replace('.mdx', '');
      const raw = fs.readFileSync(file, 'utf8');
      const { data: rawData, content } = matter(raw);

      let blurImage: string | undefined;
      if (rawData.image) {
        try {
          const { base64 } = await getPlaiceholder(rawData.image);
          blurImage = base64;
        } catch (err) {
          console.error(`[plaiceholder] Failed to process image: ${rawData.image}`, err);
        }
      }

      const data = {
        ...rawData,
        slug,
        ...(blurImage ? { blurImage } : {}),
      };

      const source = await serialize(content, {
        scope: data,
      });

      return { data, content: content.trim(), source };
    }),
  );
};

export { getPosts };
