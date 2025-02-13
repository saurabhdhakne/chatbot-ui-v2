import React from 'react';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { FaRegEdit } from 'react-icons/fa';
import { FiCopy, FiEdit2, FiVolume2 } from 'react-icons/fi';
import { TiDocumentText } from 'react-icons/ti';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const QuillEditor = ({value, onChange, isEditing }) => {
  const modules = {
    toolbar: [
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // ['bold', 'italic', 'underline', 'strike'],        
      // ['blockquote', 'code-block'],
      // [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      // [{ 'script': 'sub'}, { 'script': 'super' }],     
      // [{ 'indent': '-1'}, { 'indent': '+1' }],          
      // [{ 'direction': 'rtl' }],                        
      // [{ 'color': [] }, { 'background': [] }],         
      // [{ 'align': [] }],
      // ['link', 'image', 'video'],
      // ['clean']                                         
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',
    'color', 'background', 'align'
  ];

  return (
    <>
      <div className="flex p-1 sticky top-0 bg-white z-50 px-4 py-2">
        <small className='font-semibold flex items-center gap-2'>
          <FaRegEdit /> Lorem Ipsum
        </small>
        <button
          className="hover:text-blue-500 ms-auto"
        >
          <BsArrowsAngleExpand />
        </button>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        // onChange={onChange}
        modules={modules}
        formats={formats}
        // readOnly={!isEditing}
      />
      {/* <div className="flex mt-3 gap-3 p-2">
            <button
                onClick={() => handleSpeak(chat.content)}
                className="hover:text-blue-500"
                title="Read Aloud"
            >
                <FiVolume2 />
            </button>
            <button
                onClick={() => alert("Edit feature coming soon!")}
                className="hover:text-blue-500"
                title="Edit"
            >
                <FiEdit2 />
            </button>
            <button
                onClick={() => handleCopy(chat.content)}
                className="hover:text-blue-500"
                title="Copy"
            >
                <FiCopy />
            </button>
        </div> */}
    </>
  );
};

export default QuillEditor;