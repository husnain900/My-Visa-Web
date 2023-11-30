// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   background-color: #fcfcfc;
// `;

// const Card = styled.div`
//   border-radius: 10px;
//   box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
//   width: 600px;
//   height: 260px;
//   background-color: #ffffff;
//   padding: 10px 30px 40px;
// `;

// const H3 = styled.h3`
//   font-size: 22px;
//   font-weight: 600;
// `;

// const DropBox = styled.div`
//   margin: 10px 0;
//   padding: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
//   border: 3px dotted #a3a3a3;
//   border-radius: 5px;
// `;

// const H4 = styled.h4`
//   font-size: 16px;
//   font-weight: 400;
//   color: #2e2e2e;
// `;

// const P = styled.p`
//   margin-top: 10px;
//   margin-bottom: 20px;
//   font-size: 12px;
//   color: #a3a3a3;
// `;

// const Button = styled.button`
//   text-decoration: none;
//   background-color: ${props => (props.primary ? '#005af0' : '#ffffff')};
//   color: ${props => (props.primary ? '#ffffff' : '#005af0')};
//   padding: 10px 20px;
//   border: none;
//   outline: none;
//   transition: 0.3s;

//   &:hover {
//     text-decoration: none;
//     background-color: ${props => (props.primary ? '#ffffff' : '#005af0')};
//     color: ${props => (props.primary ? '#005af0' : '#ffffff')};
//     padding: 10px 20px;
//     border: none;
//     outline: 1px solid #010101;
//   }
// `;

// const Input = styled.input`
//   margin: 10px 0;
//   width: 100%;
//   background-color: #e2e2e2;
//   border: none;
//   outline: none;
//   padding: 12px 20px;
//   border-radius: 4px;
// `;

// function FileUpload() {
//     const [fileName, setFileName] = useState('');
//     const [showForm, setShowForm] = useState(false);

//     const handleFileInputChange = (e) => {
//         const selectedFile = e.target.files[0];
//         setFileName(selectedFile.name);
//         setShowForm(true);
//     };

//     return (
//         <Container>
//             <Card>
//                 <H3>Upload Files</H3>
//                 <DropBox>
//                     <header>
//                         <H4>Select File here</H4>
//                     </header>
//                     <P>Files Supported: PDF, TEXT, DOC, DOCX</P>
//                     {showForm ? (
//                         <form action="" method="post" className="form">
//                             <H4>{fileName}</H4>
//                             <Input type="email" placeholder="Enter email to upload file" />
//                             <Button primary className="btn">
//                                 Upload
//                             </Button>
//                         </form>
//                     ) : (
//                         <>
//                             <input
//                                 type="file"
//                                 accept=".doc,.docx,.pdf"
//                                 id="fileID"
//                                 style={{ display: 'none' }}
//                                 onChange={handleFileInputChange}
//                             />
//                             <label htmlFor="fileID">
//                                 <Button className="btn">Choose File</Button>
//                             </label>
//                             <div className='upload-input-content'>
//                                 <img
//                                     className="placeholder-image"
//                                     src="/img/clound.png"
//                                     alt="Placeholder"
//                                 />
//                                 <p className="upload-description"><span>Click to upload </span>or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)</p>
//                             </div>
//                         </>
//                     )}
//                 </DropBox>
//             </Card>
//         </Container>
//     );
// }

// export default FileUpload;


import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  width: 600px;
  height: 260px;
  background-color: #ffffff;
  padding: 10px 30px 40px;
`;

const H3 = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const DropBox = styled.div`
  margin: 10px 0;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 3px dotted #a3a3a3;
  border-radius: 5px;
`;

const H4 = styled.h4`
  font-size: 16px;
  font-weight: 400;
  color: #2e2e2e;
`;

const P = styled.p`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px;
  color: #a3a3a3;
`;

const Button = styled.button`
  text-decoration: none;
  background-color: ${props => (props.primary ? '#005af0' : '#ffffff')};
  color: ${props => (props.primary ? '#ffffff' : '#005af0')};
  padding: 10px 20px;
  border: none;
  outline: none;
  transition: 0.3s;

  &:hover {
    text-decoration: none;
    background-color: ${props => (props.primary ? '#ffffff' : '#005af0')};
    color: ${props => (props.primary ? '#005af0' : '#ffffff')};
    padding: 10px 20px;
    border: none;
    outline: 1px solid #010101;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  width: 100%;
  background-color: #e2e2e2;
  border: none;
  outline: none;
  padding: 12px 20px;
  border-radius: 4px;
`;

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileName: '',
      showForm: false,
    };
  }

  handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    this.setState({
      fileName: selectedFile.name,
      showForm: true,
    });
  };

  render() {
    const { fileName, showForm } = this.state;
    return (
      <Container>
        <Card>
          <H3>Upload Files</H3>
          <DropBox>
            <header>
              <H4>Select File here</H4>
            </header>
            <P>Files Supported: PDF, TEXT, DOC, DOCX</P>
            {showForm ? (
              <form action="" method="post" className="form">
                <H4>{fileName}</H4>
                <Input type="email" placeholder="Enter email to upload file" />
                <Button primary className="btn">
                  Upload
                </Button>
              </form>
            ) : (
              <>
                <input
                  type="file"
                  accept=".doc,.docx,.pdf"
                  id="fileID"
                  style={{ display: 'none' }}
                  onChange={this.handleFileInputChange}
                />
                <label htmlFor="fileID">
                  <Button className="btn">Choose File</Button>
                </label>
                <div className='upload-input-content'>
                  <img
                    className="placeholder-image"
                    src="/img/clound.png"
                    alt="Placeholder"
                  />
                  <p className="upload-description"><span>Click to upload </span>or drag and drop <br /> SVG, PNG, JPG or GIF (max. 800x400px)</p>
                </div>
              </>
            )}
          </DropBox>
        </Card>
      </Container>
    );
  }
}

export default FileUpload;

