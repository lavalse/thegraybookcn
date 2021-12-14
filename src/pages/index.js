import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
// import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome`}
      description="Monday Tutorial <head />">
      <main>
        <div className='container margin-vert--lg'>
          <div className='margin-vert--xl'>
            <h1>欢迎来到 vvvv gamma 中文文档</h1>
            <p>本站点的目标是翻译vvvv-gamma的文档，方便vvvv的中文学习者。当然翻译的过程往往就是信息丢失的过程，很难很精确地传递原本的意思。但是我相信本着深入浅出与抛砖引玉的信念，多少是个好的开始。</p>
            <p>同时如果你也有兴趣交流或者参与翻译工作，请随时联系我，同时请查看
              <a
                href="https://github.com/lavalse/thegraybookcn"
                rel="noopener noreferrer"
                target="_blank"
              >
                github
              </a>
              。
            </p>
          </div>
          <hr></hr>
          <div className='margin-vert--xl'>
            <p>官方资源</p>
            <ol className={styles.ol}>
              <li>
                <h3>
                  <a href="https://vvvv.org/" target="_blank">
                    vvvv.org
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://visualprogramming.net/" target="_blank">
                    visualprogramming.net
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://thegraybook.vvvv.org/" target="_blank">
                    the gray book
                  </a>
                </h3>
              </li>
            </ol>
            <p>其他资源</p>
            <ol className={styles.ol}>
              <li>
                <h3>
                  <a href="https://thenodeinstitute.org/" target="_blank">
                    The NODE Institute
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://www.thefuselab.io/" target="_blank">
                    FUSE library
                  </a>
                </h3>
              </li>
              <li>
                <h3>
                  <a href="https://thegraybook.vvvv.org/" target="_blank">
                    the gray book
                  </a>
                </h3>
              </li>
            </ol>
          </div>
        </div>
      </main>
    </Layout>
  );
}
