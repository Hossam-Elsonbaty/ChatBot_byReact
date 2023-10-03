import React, {useState,useRef} from 'react';
import { OrganizationChart } from 'primereact/organizationchart';
import { Button as PrimeButton}  from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button, Modal } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function OrgChat() {
  const appType =useParams();
  const botID =appType.appType;
  const [open, setOpen] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [Respond, setRespond] = useState()
  const [buttonLabel, setButtonLabel] = useState([])
  const [label, setLabel] = useState()
  const [parentID, setParentID] = useState()
  const [modalText, setModalText] = useState('Content of the modal');
  const toast = useRef(null);
  const menuLeft = useRef(null);
  const menuLeft2 = useRef(null);
  const [buttons, setButtons] = useState([])
  const [data,setData] = useState([
    {
      label: 'Start point',
      expanded: true,
      data:'ar',
      id:1,
      children: [
        {
          label: 'Turkey',
          expanded: true,
          id:2,
          children: [
            {
              label: 'Argentina',
              id:3,
            },
            {
              label: 'Croatia',
              id:4,
            }
          ]
        },
        {
          label: 'France',
          expanded: true,
          id:5,
          children: [
            {
              label: 'France',
              id:6,
            },
            {
              label: 'Morocco',
              id:7,
            }
          ]
        }
      ]
    }
  ]);
  const normalItems = [
    {
        label: 'Add response',
        icon: 'pi pi-pencil',
        command: () => {
          showModal()
          // toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Add Child',
        icon: 'pi pi-th-large',
        command: () => {
            toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    // {
    //     label: 'Upload',
    //     icon: 'pi pi-upload',
    //     command: () => {
    //         //router.push('/fileupload');
    //     }
    // }
  ];
  const startPoint = [
    {
        label: 'Add Default Response',
        icon: 'pi pi-pencil',
        command: () => {
          showModal()
          // toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Add Menu',
        icon: 'pi pi-th-large',
        command: () => {
          showMenuModal()
            // toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
        }
    },
    {
        label: 'Delete',
        icon: 'pi pi-trash',
        command: () => {
            toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
        }
    },
    // {
    //     label: 'Upload',
    //     icon: 'pi pi-upload',
    //     command: () => {
    //         router.push('/fileupload');
    //     }
    // }
  ];
  const showModal = () => {
    setOpen(true);
  };
  const showMenuModal = () => {
    setOpenMenuModal(true);
  };
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    // setConfirmLoading(true);
    if(Respond !== ''){
      axios.post(`http://127.0.0.1:8000/messenger/messenger-dialog-flow-api/1`,{
        botID,
        defaultResponse:{
          message:Respond,
          buttons:buttonLabel
        }
      })
      .then((response)=>{
        console.log(response);
        setData(response.data)
      })
      .catch((error)=>{
        console.log(error);
      })
      setTimeout(() => {
        setOpen(false);
        setOpenMenuModal(false);
        setConfirmLoading(false);
      }, 2000);
    }else{
      setConfirmLoading(false);
    }
    
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
    setOpenMenuModal(false)
  };
  const handleClick = (e,id,label) => {
    id == 1?
    menuLeft2.current.toggle(e)
    :
    menuLeft.current.toggle(e)
    console.log(id);
    setParentID(id)
    setLabel(label)
  };

  const handleAddButton = () => {
    const abc =[...buttons,[]]
    setButtons(abc)
  };
  const handleChange = (e,i) => {
    const inputData =[...buttons]
    inputData[i]=e.target.value
    setButtons(inputData)
    setButtonLabel(inputData)
  };
  const handleDelete = (i) => {
    const deleteButton =[...buttons]
    deleteButton.splice(i)
    setButtons(deleteButton)
  };

  const nodeTemplate = (node) => {
    return (
        <div className="flex flex-column align-items-center">
          <div className="mt-3 font-medium text-lg org-container" key={node.id}>
            <span className='nodeLabel'>{node.label} </span>
            <div className='dots'>
              <Toast ref={toast}></Toast>
              <Menu model={normalItems} popup ref={menuLeft} id="popup_menu_left" />
              <Menu model={startPoint} popup ref={menuLeft2} id="popup_menu_left" />
              <PrimeButton icon="pi pi-ellipsis-v" className="mr-2" onClick={(e)=>{handleClick(e,node.id,node.label)}} aria-controls="popup_menu_left" aria-haspopup />
            </div>
          </div>
        </div>
    );
  };
  return (
    <>
      <div className="card overflow-x-auto">
        <OrganizationChart value={data}  nodeTemplate={nodeTemplate}/>
      </div>
      <Modal
        title="BOT RESPONSE"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='modal-container'>
          <InputText id="username" value={label} onChange={(e) => setLabel(e.target.value)} />
          <input id="username" className='respond' placeholder='Response' value={Respond} onChange={(e) => setRespond(e.target.value)} />
          {buttons.map((data,i)=>{
            return(
              <div className='added-button'>
                <input id="username" className='respond' placeholder='New button'  onChange={(e) => handleChange(e,i)} />
                <button className='delete-button' onClick={()=>{handleDelete(i)}}><i className='pi pi-trash'></i></button>
              </div>
            )})
          }
          <button className='add-button' onClick={handleAddButton}>
            <i className='pi pi-plus' style={{'fontSize':'10px'}}></i>
            <span>Add Button</span>
          </button>
        </div>
      </Modal>
      <Modal
        title="BOT RESPONSE"
        open={openMenuModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <div className='modal-container'>
          <InputText id="username" value={label} onChange={(e) => setLabel(e.target.value)} />
          {/* <input id="username" className='respond' placeholder='Response' value={Respond} onChange={(e) => setRespond(e.target.value)} /> */}
          {buttons.map((data,i)=>{
            return(
              <div className='added-button'>
                <input id="username" className='respond' placeholder='New button'  onChange={(e) => handleChange(e,i)} />
                <button className='delete-button' onClick={()=>{handleDelete(i)}}><i className='pi pi-trash'></i></button>
              </div>
            )})
          }
          <button className='add-button' onClick={handleAddButton}>
            <i className='pi pi-plus' style={{'fontSize':'10px'}}></i>
            <span>Add Button</span>
          </button>
        </div>
      </Modal>
    </>
  )
}
