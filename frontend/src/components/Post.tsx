import { useState } from 'react'

export default function Post() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
 
    e.preventDefault();
    const dataToSend = new FormData()

    dataToSend.append('title', formData.title)
    dataToSend.append('content', formData.content)
    dataToSend.append('slug', formData.slug)

    if (formData.image) {
      dataToSend.append('image', formData.image)
    }

      try {
          
          const response = await fetch('https://127.0.0.1:3000/user/post', {
              method: 'POST',
              body: dataToSend,
              credentials: 'include'
          });
          
          const data = await response.json();
          
      
          if(response.ok) {
              console.log(data.message);
          } else {
              console.error(data.message);
          }
      } catch (err) {
          console.error('There was an error!', err)
      }
  }

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    slug:'',
    image:''
  });
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-2 border-4 border-black shadow-2xl rounded-lg m-auto p-5 bg-overcast" 
      >
        <h1
          className="text-white mx-auto text-6xl font-mono"
        >Post</h1>
        <img></img>
        <input
          onChange={(title) => setFormData({...formData, title: title.target.value})} 
          className="rounded"
          type="text"
          placeholder="title"
          value={formData.title}
          ></input>
        <textarea
          onChange={(content) => setFormData({...formData, content: content.target.value})}
          className="rounded"
          placeholder="content"
          value={formData.content}
        >
        </textarea>
        <input
          onChange={(slug) => setFormData({...formData, slug: slug.target.value})} 
          className="rounded"
          type="text"
          placeholder="slug"
          value={formData.slug}
          ></input>
        <input
          onChange={(image) => setFormData({...formData, image: image.target.value})}
          className="text-white"
          type="file"
          name="imageUpload"
          id="imageUpload"
          value={formData.image}
        ></input>
        <input 
          type="submit"
          className=""
          ></input>
      </form>
    </>
  )
}