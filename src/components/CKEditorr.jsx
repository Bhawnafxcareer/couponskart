import React, { useState } from 'react';
import { CKEditor } from 'ckeditor4-react';

const Ck = () => {
  const [data, setData] = useState('<p>Hello from CKEditor 4.22.1!</p>');

  return (
    <div className="App">
      <h2>CKEditor 4 Free Version (v4.22.1)</h2>
      <CKEditor
        initData={data}
        config={{
          removePlugins: 'exportpdf,wsc,scayt', // Remove any license-bound features
          toolbar: [
            ['Bold', 'Italic', 'Underline'],
            ['NumberedList', 'BulletedList'],
            ['Link', 'Unlink'],
            ['Undo', 'Redo'],
            ['Source']
          ]
        }}
        onChange={(event) => {
          setData(event.editor.getData());
        }}
      />
    </div>
  );
};

export default Ck;
