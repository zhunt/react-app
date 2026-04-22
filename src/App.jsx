import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import { ClassicEditor, Bold, Essentials, Italic, Paragraph, Undo } from 'ckeditor5'

import 'ckeditor5/ckeditor5.css'
import './App.css'

function App() {
  const [content, setContent] = useState('<p>Hello from CKEditor 5!</p>')

  return (
    <div className="App">
      <h2>React CKEditor 5 Integration</h2>
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [Essentials, Bold, Italic, Paragraph, Undo],
          toolbar: ['undo', 'redo', '|', 'bold', 'italic']
        }}
        data={content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />

      <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h3>Editor Output:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default App
