import { useState } from 'react'

export default function ImageSubmit() {
  const [file, setFile] = useState<File | null>(null) 
  const [uploadImageURL, setUploadedImageURL] = useState<string | null>(null)

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files![0]);
  }

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = new FormData()

    dataToSend.append('image', file!)
    await fetch('https://localhost:3000/images/upload', {
      method: 'POST',
      body: dataToSend,
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
            console.log('Success:', data);
            setUploadedImageURL(`https://localhost:3000/images/${file!.name}`)
          })
      .catch((error) => {
        console.error('Error:', error);
    });
  }
  
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="file" onChange={onFileChange}/>
        <button type="submit">Upload</button>
      </form>
      {uploadImageURL && <img src={uploadImageURL} alt="Uploaded Image" />}
    </div>
  )
}

