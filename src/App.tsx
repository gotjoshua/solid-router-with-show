import { A, Route, Routes, useSearchParams } from '@solidjs/router';
import { Component, Show } from 'solid-js';

const Page1 = () => (
  <div>
    <h1>Scroll to the bottom and click the link to page 2</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error
      rerum dolore magnam quidem a quos aliquid rem debitis assumenda nesciunt
      temporibus pariatur, quae dolorum voluptas molestiae, quibusdam numquam
      culpa?
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate error
      rerum dolore magnam quidem a quos aliquid rem debitis assumenda nesciunt
      temporibus pariatur, quae dolorum voluptas molestiae, quibusdam numquam
      culpa?
    </p>
    <A href="/page2">Go to page 2</A>
  </div>
);

const Page2 = () => {
  const [{ pub: pubFromUrl }, _setSearchParams] = useSearchParams();
  console.log({ pubFromUrl });
  return (
    <div>
      <A href="/">Go to page 1</A>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
        error rerum dolore magnam quidem a quos aliquid rem debitis assumenda
        nesciunt temporibus pariatur, quae dolorum voluptas molestiae, quibusdam
        numquam culpa?
      </p>
    </div>
  );
};

const App: Component = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/page2" component={Page2} />
        <Route path="/" component={Page1} />
      </Routes> */}
      <Show when={true}>
        <Page2 />
      </Show>
    </div>
  );
};

export default App;
