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
          <div className='margin-vert--lg'>
            <h1>灰皮书</h1>
            <h2 className='margin-vert--lg'>欢迎来到 vvvv gamma 中文文档</h2>
            <div className={styles.description}>
              <p>
                本站的是
                <a href="https://thegraybook.vvvv.org/" target="_blank">
                  the gray book
                </a>
                的中文站点。分享资讯，方便华语世界用户学习分享。同时如果你也有兴趣交流或者参与翻译工作，请随时联系我，同时请查看<a
                  href="https://github.com/lavalse/thegraybookcn"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  github
                </a>
                。
              </p>
            </div>

          </div>
          <hr></hr>
          <div>
            <div class="row margin-vert--xl">
              <div class="col col--4">
                <div class="card">
                  <div class="card__image">
                    <img
                      src="./img/docs.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>文档</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      vvvv-gamma的文档。涉及编辑器的使用，vl语言的特性以及第三方库的使用等等。
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/docs/getting-started" class="button button--outline button--primary">进入</Link>
                  </div>
                </div>
              </div>
              <div class="col col--4">
                <div class="card">
                  <div class="card__image">
                    <img
                      src="./img/studygroup.png"
                      alt="Image alt text"
                      title="Logo Title Text 1"
                    />
                  </div>
                  <div class="card__header">
                    <h3>快乐小组</h3>
                  </div>
                  <div class="card__body">
                    <p>
                      一个相互分享的学习小组，定期举行活动，分享学习心得。
                    </p>
                  </div>
                  <div class="card__footer">
                    <Link to="/studygroup/" class="button button--outline button--primary">进入</Link>
                  </div>
                </div>
              </div>
              <div class="col col--4"></div>
            </div>
          </div>
          <hr></hr>
          <div className='margin-vert--lg'>
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
            </ol>
          </div>
          <hr></hr>
        </div>
      </main>
    </Layout>
  );
}
