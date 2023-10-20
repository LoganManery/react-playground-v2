import { useState, useEffect } from 'react';
import VerticalNav from './VerticalNav';
import Tooltip from './Basic Components/Tooltip';
import Accordion from './Data Display Components/Accordion';
import Badge from './Basic Components/Badge';
import Card from './Data Display Components/Card'
import Carousel from './Data Display Components/Carousel';
import DataGrid from './Data Display Components/DataGrid';
import ImageOne from '../assets/cubism-person-computer.png'
import ImageTwo from '../assets/geometric-cubism.png'
import ImageThree from '../assets/metal-geometric.png'
import Table from './Data Display Components/Table';
import Alert from './Feedback Components/Alert';
import Modal from './Feedback Components/Modal';
import Facebook from '../assets/svgs/facebook';
import ProgressBar from './Feedback Components/ProgressBar';
import Spinner from './Feedback Components/Spinner';
import { ToastProvider, useToast } from '../context/ToastContext' 

function SinglePage() {

  const [showAlert, setShowAlert] = useState(false)
  const [showModal, setModal] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 10 : 0))
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  useEffect(() => {
    console.log("showModal state:", showModal);
}, [showModal]);


  const accordionItems = [
    {
      header: 'Item 1',
      content: 'Content for item 1'
    }, {
      header: 'Item 2',
      content: 'Content for item 2'
    }, {
      header: 'Item 3',
      content: 'Content for item 3'
    }
  ]

  const images = [
    ImageOne,
    ImageTwo,
    ImageThree
  ]

  const columns = [
    { key: 'id', header: 'ID', width: '50px' },
    {key: 'name', header: 'Name'},
    {key: 'age' , header: 'Age', width: '50px'},
  ]

  const data = [
    { id: 1, name: 'John', age: '20' },
    { id: 2, name: 'Jane', age: '21' },
    { id: 3, name: 'Joe', age: '22'},
  ]

  const DemoComponent = () => {
    const { showToast } = useToast()

    return (
      <button onClick={() => showToast({ message: 'Hello, World!', type: 'error'})}>
        Show Toast
      </button>
    )
  }

  return (
    <div className="flex flex-row w-screen h-screen bg-slate-400">
      
      {showAlert &&  (
        <Alert
          type="error"
          message="This is an error"
          onClose={() => setShowAlert(false)}
        />
      )}
      
      <VerticalNav />
      <div className="w-11/12 h-screen bg-white self-end overflow-y-scroll">
        <div className="flex flex-col bg-red-500 w-full h-1/4 text-center">
          <p className="m-auto text-8xl font-extrabold">Hello</p>
          <div className="p-10 flex space-x-4">
            <Tooltip content="This is a tooltip!" position="top">
              <button className="p-2 bg-blue-500 text-white rounded">Hover me (Top)</button>
            </Tooltip>

            <Tooltip content="Another tooltip!" position="right">
              <button className="p-2 bg-blue-500 text-white rounded">Hover me (Right)</button>
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-col bg-blue-500 w-full h-1/4">
          <p className="m-auto text-6xl font-bold">Welcome</p>
          <Accordion items={accordionItems} />
          <Badge text="New" color="blue" />
        </div>
        <div className="flex flex-col bg-yellow-500 w-full h-1/4">
          <p className="m-auto text-6xl font-semibold">Heading 1</p>
          <Card title="Title" description="this is a description" footerContent="footer content" />
        </div>
        <div className="flex flex-col bg-green-500 w-full h-1/4">
          <Carousel images={images} />
        </div>
        <div className="flex flex-col bg-red-500 w-full h-1/4">
          <DataGrid columns={columns} data={data} />
        </div>
        <div className="flex flex-col bg-blue-500 w-full h-1/4">
          <Table columns={columns} data={data} />
        </div>
        <div className="flex flex-col bg-yellow-500 w-full h-1/4">
          <ProgressBar progress={progress}/>
          <Spinner />
          <Facebook />
        </div>
        <button onClick={() => setModal(true)}>Click!</button>
        <div className="flex flex-col bg-green-500 w-full h-1/4"><p className="m-auto text-4xl font-semibold">Heading 6</p></div>
      </div>
      <Modal isOpen={showModal} onClose={() => {setModal(false)}}>
        <p>This is a modal!</p>
      </Modal>
      <ToastProvider>
        <DemoComponent />
      </ToastProvider>
    </div>
  )
}
export default SinglePage;





